import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ExploreNavigator from './ExploreNavigator'
import SignInScreen from '../screens/Login'
import SignUpScreen from '../screens/Signup'
import DetectScreen from '../screens/DetectScreen'

const Tab = createBottomTabNavigator()

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15454',
        }}>
            <Tab.Screen name={"Home"}
                component={Home}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <Fontisto name='search' size={25} color={color} />
                    ),
                    headerShown: false
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Signin"}
                component={SignInScreen}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <FontAwesome name='heart-o' size={25} color={color}></FontAwesome>
                    ),
                    headerShown: false
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Signup"}
                component={SignUpScreen}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <FontAwesome5 name='airbnb' size={25} color={color}></FontAwesome5>
                    ), headerShown: false
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Detect"}
                component={DetectScreen}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <Feather name='message-square' size={25} color={color}></Feather>
                    ), headerShown: false
                }}>

            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default HomeTabNavigator
