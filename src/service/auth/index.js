import { doPost } from "../ApiClient"

const clientId = 123
const clientSecret = 'secret'

const login = (username, password) => {
    // const url = '/gateway/oauth/token'
    const url = "xxxx"
    let param = {
        
    }
    return doPost(url, param)
}

export {
    login
}