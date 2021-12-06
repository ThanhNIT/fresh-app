// import React from 'react';
// import { ImageBackground, Pressable, Text, View } from 'react-native';
// import styles from './styles'
// import Fontisto from 'react-native-vector-icons/Fontisto'
// import { useNavigation } from '@react-navigation/native';
// const Home = ({ props }) => {
//     const navigation = useNavigation()
//     return (
//         <View View >

//             <ImageBackground source={require('../../assets/wallpaper.jpg')} style={styles.image}
//             >
//                 <Pressable
//                     style={styles.searchButton}
//                     onPress={() => navigation.navigate('Destination Search')}>
//                     <Fontisto name="search" size={25} color={'#f15454'} />
//                     <Text style={styles.searchButtonText}>Where are you going?</Text>
//                 </Pressable>

//                 <Text style={styles.title}>Go Near</Text>
//                 <Pressable style={styles.button} onPress={() => console.warn('Hi Thạnh')}>
//                     <Text style={styles.buttonText}>Explore nearby Stays</Text>
//                 </Pressable>
//             </ImageBackground>
//         </View>
//     )

// }

// export default Home;

import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    StatusBar,
    Pressable
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';
import color from '../../constant/color';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const { colors } = useTheme();
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require('../../assets/logo2.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
                animation="fadeInUpBig"
            >
                <Text style={[styles.title, {
                    color: colors.text
                }]}>It's easy to check the quality of fruit</Text>
                <Text onPress={() => navigation.navigate('Signin')} style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                    {/* <TouchableOpacity onPress={() => { }}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#000"
                                size={20}
                            />
                        </LinearGradient>
                    </TouchableOpacity> */}
                    <Pressable style={styles.buttonExplore} onPress={() => navigation.navigate('Detect')}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </Pressable>
                </View>
            </Animatable.View>
        </View>
    );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.20;
const { bgc, statusBarColor } = color

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgc
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        paddingVertical: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold'
    },
    buttonExplore: {
        backgroundColor: bgc,
        width: 120,
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

export default Home;

