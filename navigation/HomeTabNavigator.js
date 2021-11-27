import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ExploreNavigator from './ExploreNavigator'

const Tab = createBottomTabNavigator()

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15454',
        }}>
            <Tab.Screen name={"Explore"}
                component={ExploreNavigator}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <Fontisto name='search' size={25} color={color} />
                    ),
                    headerShown: false
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Saved"}
                component={Home}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <FontAwesome name='heart-o' size={25} color={color}></FontAwesome>
                    )
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Airbnb"}
                component={Home}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <FontAwesome5 name='airbnb' size={25} color={color}></FontAwesome5>
                    )
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Messages"}
                component={Home}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <Feather name='message-square' size={25} color={color}></Feather>
                    )
                }}>

            </Tab.Screen>
            <Tab.Screen name={"Profile"}
                component={Home}
                options={{
                    tabBarIcon: ({
                        color
                    }) => (
                        <EvilIcons name='user' size={25} color={color}></EvilIcons>
                    )
                }}>

            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default HomeTabNavigator
