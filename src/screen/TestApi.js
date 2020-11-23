import React, { useEffect, useState } from 'react'
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { call } from 'redux-saga/effects';
import { setAccessToken } from '../common/storage/tokenStorage';
import I18n from '../common/i18nClient'
import { actionChangeLanguage } from '../redux/action/settingAction'
import { doGet, doGet2, doPost, getFormData } from '../service/ApiClient';
import { useNavigation } from '@react-navigation/native';
import { login } from '../service/auth';
import Geolocation from 'react-native-geolocation-service';





const TestApi = (props) => {
    const [isLogined, setIsLogined] = useState(false)

    const { actionChangeLanguage } = props

    const navigation = useNavigation()


    return (
        <SafeAreaView accessibilityLabel="app-root">
            <Text>Test</Text>

            <Pressable
                onPress={() => {
                    alert("jaja")
                }}
                style={{ backgroundColor: "#f1000044", padding: 4, borderWidth: 1 }}
            >
                <Text>{I18n.translate('greeting')}</Text>

            </Pressable>

            <Button onPress={() => {
                actionChangeLanguage("en")

            }} title="en" />
            <Button onPress={() => {
                actionChangeLanguage("th")
            }} title="th" />

            <Button
                onPress={async () => {
                    // I18n.locale = "th"
                    // setLocale("th")
                    // const path = 'https://jsonplaceholder.typicode.com/albums/1/photos'
                    // doGet('/users/toshihiro2010')
                    // const path = '/users/toshihiro2010'
                    const path = 'http://10.186.17.131:3000/auth/authen'
                    doGet(path, {}, {
                        // handleError: (err) => {
                        //     alert(`err :${err.message}`)
                        // }
                    }).then((res) => {
                        console.log("response data = > ", res)
                    })


                    // doGet2(path)

                }}
                title="doGet"
            />

            <Button
                onPress={() => {
                    let test = { user: "bent2010", password: "Toshihiro" }
                    // getFormData(test)
                    // doPost("http://10.186.17.168:3000/parking", test)

                }}
                title="dpPost"
            />

            <Button
                accessibilityLabel="setToken"
                onPress={() => {
                    setAccessToken("a1s2d3f34")
                    setIsLogined(!isLogined)

                }}
                title="setToken"
            />

            <Button
                accessibilityLabel="login"
                onPress={async () => {

                    let res = await login("", "")
                    console.log("ress= > ", res)
                    // props.authtest()

                }}
                title="login"
            />

            <Text accessibilityLabel="loginstatus">{isLogined ? "success" : "fail"}</Text>

            <Button
                accessibilityLabel="home"
                onPress={() => {

                    // Geolocation.requestAuthorization().then((per) => {
                    //     console.log("per=> ", per)
                    // })
                    
                    Geolocation.getCurrentPosition(info => {
                        console.log("info=> ", info)
                    }, (err) => {
                        console.log("error => ", err)
                    });

                    // Geolocation.requestAuthorization('whenInUse').then((res) => {
                    //     console.log("whenInUse => ", res);
                    // });

                    // navigation.navigate("HomeScreen")
                }}
                title="HomeScreen"
            />






        </SafeAreaView>
    )
}



const mapStateToProps = (state) => {
    const settingReducer = state.settingReducer
    return {
        settingReducer: settingReducer
    }
}

const mapDispatchToProps = {
    actionChangeLanguage,
    authtest: () => ({ type: "HHHHA", payload: "payload" })
    // authtest: () => {
    //     return async (dispatch) => {
    //         await console.log("hello world")
    //         await dispatch({ type: "HHHHA" })
    //     }
    // }
}


export default connect(mapStateToProps, mapDispatchToProps)(TestApi)

const styles = StyleSheet.create({

})
