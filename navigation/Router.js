import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearch from '../screens/DestinationSearch';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabNavigator from './HomeTabNavigator';
import GuestsScreen from '../screens/Guests';
const Stack = createStackNavigator();
const Router = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeTabNavigator} options={{ headerShown: false, }}></Stack.Screen>
                <Stack.Screen name={'Destination Search'} component={DestinationSearch} options={{ title: 'Search Your Destination' }}></Stack.Screen>
                <Stack.Screen name={'Guests'} component={GuestsScreen} options={{ title: 'How Many People' }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
