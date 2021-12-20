import React, { useState } from 'react';
import { View, StyleSheet, AsyncStorage, Dimensions, Pressable, Text } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import { useNavigation } from '@react-navigation/native';
import { USER_LOGIN_SUCCESS } from '../../constant/UserConstant';
import color from '../../constant/color'
const { bgc, statusBarColor } = color

export function SignOutScreen() {
    const [user, setUser] = useState(null)
    const { userInfo } = useSelector((state) => state.userLogin)
    const navigation = useNavigation()

    const dispatch = useDispatch()
    const signout = () => {

        dispatch(logout())
        AsyncStorage.removeItem('userInfo').then(() => { setUser(null); navigation.navigate('Signin') })
    }

    return (
        <>
            {!user && !userInfo ? <View style={{ justifyContent: 'center', alignItems: 'center', top: Dimensions.get('window').height / 2 }}>
                <Text style={{ color: 'gray' }}>Please login with your account to see history</Text>
                <Pressable style={styles.buttonExplore} onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </View> : <View style={{ flex: 1 }}>
                <DrawerContentScrollView >
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                    }}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>{(user && user.email) || (userInfo && userInfo.email)}</Title>
                                    <Caption style={styles.caption}>User</Caption>
                                </View>
                            </View>
                        </View>
                        <Drawer.Section style={styles.drawerSection}>

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="account-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Change Password"
                                onPress={() => { navigation.navigate("Change") }}
                            />
                        </Drawer.Section>

                        <Drawer.Section style={styles.drawerSection}>

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="account-check-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Support"
                                onPress={() => { }}
                            />
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="exit-to-app"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Sign Out"
                        onPress={signout}
                    />
                </Drawer.Section>
            </View>}
        </>

    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    buttonExplore: {
        backgroundColor: bgc,
        width: 80,
        // marginLeft: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'

    },
});