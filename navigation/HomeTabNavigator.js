import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import SignInScreen from '../screens/Login'
import SignUpScreen from '../screens/Signup'
import DetectScreen from '../screens/DetectScreen'
import HistoryScreen from '../screens/History'
import color from '../constant/color'
import { SignOutScreen } from '../screens/Signout'

const { bgc, statusBarColor } = color
const Tab = createBottomTabNavigator()

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            tabBarActiveTintColor: bgc,

        }}>
            <Tab.Screen name={"History"}
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <FontAwesome name='history' size={25} color={color}></FontAwesome>
                    ), headerStyle: {
                        backgroundColor: bgc
                    }
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Home"}
                component={Home}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <Fontisto name='home' size={25} color={color} />
                    ),
                    headerShown: false
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Detect"}
                component={DetectScreen}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <AntDesign name='scan1' size={25} color={color}></AntDesign>
                    ), headerShown: false
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Profile"}
                component={SignOutScreen}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <FontAwesome name='user' size={25} color={color}></FontAwesome>
                    ),
                    headerShown: false
                }}>

            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default HomeTabNavigator


