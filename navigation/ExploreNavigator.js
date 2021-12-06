import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import SearchResult from '../screens/History'
import SearchResultsTabNavigator from './SearchResultsTabNavigator';
const Stack = createStackNavigator();
const ExploreNavigator = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen name={'Welcome'} component={Home} options={{ headerShown: false, }}></Stack.Screen>
            <Stack.Screen name={'SearchResults'} component={SearchResultsTabNavigator} options={{ title: 'Search Your Destination' }}></Stack.Screen>
        </Stack.Navigator>

    )
}

export default ExploreNavigator
