import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeTabNavigator from './HomeTabNavigator';
import GuestsScreen from '../screens/Guests';
import SignInScreen from '../screens/Login';
import SignUpScreen from '../screens/Signup';
import Home from '../screens/Home';
import DetectScreen from '../screens/DetectScreen';
import SearchResultScreen from '../screens/SearchResult';
const Stack = createStackNavigator();
const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeTabNavigator} options={{ headerShown: false, }}></Stack.Screen>
                <Stack.Screen name={'Detect'} component={DetectScreen} options={{ title: 'Detect' }}></Stack.Screen>
                <Stack.Screen name={'Signin'} component={SignInScreen} options={{ title: 'Sign In', headerTransparent: true }}></Stack.Screen>
                <Stack.Screen name={'Signup'} component={SignUpScreen} options={{ title: 'Sign Up', headerTransparent: true }}></Stack.Screen>
                <Stack.Screen name={'History'} component={SearchResultScreen} options={{ title: 'History', headerTransparent: true }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
