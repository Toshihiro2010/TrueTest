import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import saga from 'redux-saga'
import reducer from './reducer'
import rootSaga from './saga/sagas'
import { composeWithDevTools } from "redux-devtools-extension";
import storage from '@react-native-community/async-storage'




const persistConfig = {
    key: 'root',
    storage,

}

let _store

const persistedReducer = persistReducer({
    ...persistConfig,
    whitelist: ['settingReducer']
}, reducer)

const configStore = () => {
    const sagaMiddleware = saga()
    const middleWare = [thunk, logger, sagaMiddleware]

    const store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(...middleWare))
    )
    let persistor = persistStore(store)

    sagaMiddleware.run(rootSaga)

    _store = store

    return { store, persistor }
}
export { _store as store }

export default configStore