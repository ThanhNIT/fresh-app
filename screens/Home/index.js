import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useNavigation } from '@react-navigation/native';
const Home = ({ props }) => {
    const navigation = useNavigation()
    return (
        <View View >

            <ImageBackground source={require('../../assets/wallpaper.jpg')} style={styles.image}
            >
                <Pressable
                    style={styles.searchButton}
                    onPress={() => navigation.navigate('Destination Search')}>
                    <Fontisto name="search" size={25} color={'#f15454'} />
                    <Text style={styles.searchButtonText}>Where are you going?</Text>
                </Pressable>

                <Text style={styles.title}>Go Near</Text>
                <Pressable style={styles.button} onPress={() => console.warn('Hi Thạnh')}>
                    <Text style={styles.buttonText}>Explore nearby Stays</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )

}

export default Home;
