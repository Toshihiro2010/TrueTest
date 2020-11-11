import AsyncStorage from '@react-native-community/async-storage'

const TOKEN = "token"
const REFESH_TOKEN = "refresh_token"

const getAccessToken = async () => {
    try {
        const accessToken = await AsyncStorage.getItem(TOKEN)
        return accessToken
    } catch (error) {
        console.log("error => getAccessToken => ", error)
    }
}

const setAccessToken = async (token) => {
    try {
        await AsyncStorage.setItem(TOKEN, token)
        console.log(`setAccessToken => success\n${token}`)
    } catch (error) {
        console.log("error => setAccessToken => ", error)
    }
}

const clearAccessToken = async () => {
    try {
        AsyncStorage.removeItem(TOKEN)
    } catch (error) {
        console.log("clearAccessToken => err => ", error)
    }
    console.log("clearAccessToken => success ")

}

const getRefreshToken = async () => {
    try {
        const accessToken = await AsyncStorage.getItem(REFESH_TOKEN)
        return accessToken
    } catch (error) {
        console.log("error => getRefreshToken => ", error)
    }
}

const setRefreshToken = async (token) => {
    try {
        await AsyncStorage.setItem(REFESH_TOKEN, token)
    } catch (error) {
        console.log("error => setRefreshToken => ", error)
    }
}




export {
    getAccessToken,
    setAccessToken,
    getRefreshToken,
    setRefreshToken,
    clearAccessToken
}