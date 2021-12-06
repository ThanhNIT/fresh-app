import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HistoryScreen from '../screens/History'
const Tab = createMaterialTopTabNavigator()
const SearchResultsTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={
            {
                tabBarActiveTintColor: '#f15454',
                tabBarIndicatorStyle: {
                    backgroundColor: '#f15454',
                }
            }
        }>
            <Tab.Screen name={'list'} component={SearchResultScreen}></Tab.Screen>
            <Tab.Screen name={'map'} component={SearchResultScreen}></Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
