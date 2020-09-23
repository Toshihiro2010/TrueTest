import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './reducer'


// const middleWare = [thunk, logger]

const configStore = () => {
    const store = createStore(
        reducer,
        compose(applyMiddleware(thunk))
    )

    return store
}

export default configStore