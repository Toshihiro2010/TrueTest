import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestApi from './screen/TestApi';
import Main from './container/Main'


const Stack = createStackNavigator();

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            // screenOptions={({ route, navigation }) => {
            //     console.log("screenOptions => route => ", route)
            //     console.log("screenOptions => navigation => ", navigation)

            //     return {

            //     }
            // }}

            >
                <Stack.Screen name='TestApi' component={TestApi} />
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='Main' component={Main} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;