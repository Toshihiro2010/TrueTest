import Axios from 'axios';
import { refeshToken } from '../service/ApiClient';
import { getAccessToken, setAccessToken } from './storage/tokenStorage';


let axios = Axios.create()

axios.interceptors.request.use(async (config) => {
    // console.log("******************* enter interceptors >>> REQ <<<  *************")
    if (!config.baseURL) {
        config.baseURL = 'https://api.github.com/'
    }

    let _retry = await config?._retry
    if (!_retry) {
        const access_token = await getAccessToken()
        if (access_token) {

            config.headers = await {
                'Authorization': `Bearer ${access_token}`,
            }
        }
    }
    // await console.log("config => ", config)
    return config
}, (error) => {
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    // console.log("interceptors => response => ", response)
    return response
}, async (error) => {
    const originalRequest = error.config;
    // console.log("############################# enter interceptors >>> RES <<< ###########################################")
    // console.log("error request => ", originalRequest)
    if ((error.response.status === 403 || error.response.status === 401) && !originalRequest._retry) {
        originalRequest._retry = true;
        const newToken = await refeshToken();
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axios(originalRequest);
    }
    return Promise.reject(error)
})

export default axios