import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import configStore from './src/redux/configStore'
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import myReducer from './src/redux/reducer';

const middleWare = [thunk, logger]

const store = createStore(
    myReducer,
    compose(applyMiddleware(...middleWare))
)


const MyApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
