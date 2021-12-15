import React, { } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';


import color from '../../constant/color'
import constant from '../../constant/constant'
import { useDispatch } from 'react-redux'
import axios from 'axios';

const api = constant.api

const ForgotScreen = () => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });


    const { colors } = useTheme();

    const textInputChange = (val) => {
        if (val.trim().length >= 4 && validateEmail(val.trim())) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4 && validateEmail(val.trim())) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const forgotHandle = async (userName) => {

        if (userName.length == 0) {
            Alert.alert('Wrong Input!', 'Email field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        axios.post(`${api}/user/reset-password`, { email: userName }, config)
        Alert.alert('Success', 'Please check your mail box', [
            { text: 'Okay' }
        ]);

    }

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Reset password</Text>
            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, {
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Email must be 4 characters long and follow email format</Text>
                    </Animatable.View>
                }

                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signIn, { backgroundColor: bgc }]}
                        onPress={() => { forgotHandle(data.username) }}
                    >
                        <Text style={[styles.textSign, {
                            color: '#fff'
                        }]}>Submit</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                        style={[styles.signIn, {
                            borderColor: bgc,
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: bgc
                        }]}>Sign Up</Text>
                    </TouchableOpacity> */}
                </View>
            </Animatable.View>
        </View>
    );
};

export default ForgotScreen;

const { bgc, statusBarColor } = color
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgc,
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});