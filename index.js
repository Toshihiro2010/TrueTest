import React, { useEffect } from 'react'
import { AppRegistry, LogBox } from 'react-native';
// import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import configStore from './src/redux/configStore';
import { PersistGate } from 'redux-persist/integration/react'
import { clearAccessToken } from './src/common/storage/tokenStorage';
import AppNavigator from './src/AppNavigator';

const { persistor, store } = configStore()
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
                <AppNavigator />
            </PersistGate>
            {/* <TestPicker /> */}
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
