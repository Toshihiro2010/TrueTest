import { combineReducers } from 'redux'
import productReducer from './productReducer'

const myReducer = combineReducers({
    productReducer: productReducer
})

export default myReducer