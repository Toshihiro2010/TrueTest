import React, { useEffect, useState } from 'react'
import { Button, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { call } from 'redux-saga/effects';
import { setAccessToken } from '../common/storage/tokenStorage';
import I18n from '../common/i18nClient'
import { actionChangeLanguage } from '../redux/action/settingAction'
import { doGet, doGet2, doPost, getFormData } from '../service/ApiClient';
import { useNavigation } from '@react-navigation/native';


const TestApi = (props) => {
    // const [locale, setLocale] = useState(I18n.currentLocale())

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
                // I18n.locale = "en"
                // setLocale("en")
                actionChangeLanguage("en")

            }} title="en" />
            <Button onPress={() => {
                // I18n.locale = "th"
                // setLocale("th")
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
                accessibilityLabel="login"
                onPress={() => {
                    setAccessToken("a1s2d3f34")
                    setIsLogined(!isLogined)

                }}
                title="setTolen"
            />

            <Text accessibilityLabel="loginstatus">{isLogined ? "success" : "fail"}</Text>

            <Button
                accessibilityLabel="home"
                onPress={() => {
                    navigation.navigate("HomeScreen")
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
    actionChangeLanguage
}


export default connect(mapStateToProps, mapDispatchToProps)(TestApi)

const styles = StyleSheet.create({

})
