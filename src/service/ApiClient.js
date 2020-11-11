import { store } from '../../index'
import Axios from '../common/axiosInstacne'
import { getAccessToken, setAccessToken } from '../common/storage/tokenStorage'

const defaultHeader = {

}

const doGet = async (url, param = {}, option = {}) => {
    // store.dispatch({ type: "BENT2010" })
    const request = {
        method: 'GET',
        param,
        url,
        ...option
    }
    return doRequest(request)
}

const doPost = (url, data = {}, option = {}) => {

    const request = {
        method: 'POST',
        url,
        data: data,
        ...option
    }

    return doRequest(request)
}

const doPut = (url, data = {}, option = {}) => {

    const request = {
        method: 'PUT',
        url,
        data: data,
        ...option
    }

    return doRequest(request)
}


const doDelete = (url, data = {}, option = {}) => {

    const request = {
        method: 'DELETE',
        url,
        data: data,
        ...option
    }

    return doRequest(request)
}


const doRequest = async (request) => {
    const { handleError, ..._request } = request
    let axios = Axios

    return axios({
        ..._request,
        headers: { ...defaultHeader }
    }).then((res) => {
        return res.data
    }).catch(err => {
        console.log("err => ", err)
        // console.log("error config=> ", err.config)
        // console.log("error code=> ", err.code)
        // console.log("error request => ", err.request)
        // console.log("error response=> ", err.response)
        // console.log("error isAxiosError=> ", err.isAxiosError)
        // console.log("error toJSON=> ", err.toJSON())

        if (handleError) {
            handleError(err.response.data)
        }
    })
}


const refeshToken = () => {
    return new Promise((resolve) => {
        let token = "newToken12345"
        setTimeout(() => {
            setAccessToken(token)
            resolve(token)
        }, 2000);
    })
}


const getFormData = (param = {}) => {
    let formData = new FormData()
    Object.keys(param).forEach(key => {
        formData.append(key, param[key])
    })
    return formData
}


export {
    doGet,
    doPost,
    doPut,
    doDelete,
    getFormData,
    doRequest,
    refeshToken
}