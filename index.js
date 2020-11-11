import React, { useEffect } from 'react'
import { AppRegistry, LogBox } from 'react-native';
// import App from './src/App';
import App from './App'
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import configStore from './src/redux/configStore';
import TestPicker from './src/screen/TestPicker';
import { PersistGate } from 'redux-persist/integration/react'
import { clearAccessToken } from './src/common/storage/tokenStorage';

const { persistor, store } = configStore()
export { store }
// LogBox.ignoreAllLogs()
// LogBox.ignoreLogs(['Remote debugger'])

const MyApp = () => {

    useEffect(() => {
        return () => {
            clearAccessToken()
        }
    }, [])


    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
            {/* <TestPicker /> */}
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
