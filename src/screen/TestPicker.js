import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import moment from 'moment';
import 'moment/locale/th';
import { Picker } from '@react-native-community/picker';
import { Button, DatePicker } from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';


moment.locale("th")
console.log("local => ", moment.locale())

const pickerData = [
    { label: 'Java', value: 'java' },
    { label: 'JavaScript', value: 'js1' },
    { label: 'Java', value: 'java1' },
    { label: 'JavaScript', value: 'js2' },
    { label: 'Java', value: 'java2' },
    { label: 'JavaScript', value: 'js3' },
    { label: 'Java', value: 'java3' },
    { label: 'JavaScript', value: 'js' }
]
const TestPicker = (props) => {

    const [myDate, setMyDate] = useState(null)

    const [language, setLanguage] = useState("js")
    const [testDate, setTestDate] = useState(null)

    const [isPicker2, setIsPicker2] = useState(false)
    useEffect(() => {


        // console.log("local => useEffect ", moment.locale())

        // let temp = moment('1995-02-16').add(543,'year').format("LLLL")
        // let birthDate = moment('1995-02-16')
        // let temp = birthDate.add(543, 'year').format("LL")
        // setMyDate(temp)

        const date = new Date('1995-02-16')
        const result = date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'narrow',
        })
        setMyDate(result)
    }, [])

    return (
        <View>
            <Text>date : {myDate ? myDate : ""} </Text>
            <View>
                <Picker
                    selectedValue={language}
                    // style={{ height: 200 }}
                    onValueChange={(itemValue) => setLanguage(itemValue)}>
                    {pickerData.map((item) => (<Picker.Item label={item.label} value={item.value} color={language !== item.value ? "#ff0000" : "#01a"} key={item.value} />))}
                </Picker>
            </View>

            <DateTimePicker

                isVisible={isPicker2}
                display={Platform.OS == 'android' ? 'default' : 'spinner'}
                date={new Date()}
                mode="date"
                onCancel={() => {
                    console.log('onCancel => cancel')
                    setIsPicker2(false)
                }}
                onConfirm={(date) => {
                    console.log('onConfirm => date : ' + date)
                    setIsPicker2(false)
                }}
            />

            {/* <DatePicker
                defaultDate={new Date()}
                locale={'th-TH'}
                formatChosenDate={(date) => {
                    console.log("formatChosenDate => ", date)
                    // return moment(date).add(543,'year').format('DD-MM-YYYY')
                    console.log("formatChosenDate =>locale => ", moment.locale())
                    let cusmoment = moment(date)
                    // return cusmoment(date).format('LL')
                    return cusmoment.format('LL')
                    // return date.toLocaleDateString('th-TH', {
                    //     year: 'numeric',
                    //     month: 'long',
                    //     day: 'numeric',
                    // })
                }}

                modalTransparent={false}
                animationType={"fade"}
                androidMode={'calendar'}
                placeHolderText="Select date"
                textStyle={{ color: "#ff0000" }}
                placeHolderTextStyle={{ color: "#3d3" }}
                onDateChange={(date) => {
                    console.log("date => ", date)
                    setTestDate(date)
                }}
                disabled={false}
            /> */}
            <Text>
                Date: {testDate?.toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
            })}
            </Text>

            <Button onPress={() => { setIsPicker2(true) }}>
                <Text>open2</Text>
            </Button>
        </View >
    )
}

export default TestPicker

const styles = StyleSheet.create({})
