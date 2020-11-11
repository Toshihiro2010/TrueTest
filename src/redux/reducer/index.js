import { combineReducers } from 'redux'
import productReducer from './productReducer'
import settingReducer from './settingReducer'
import authReducer from './authReducer'

const myReducer = combineReducers({
    productReducer: productReducer,
    settingReducer: settingReducer,
    authReducer,
    
})

export default myReducer