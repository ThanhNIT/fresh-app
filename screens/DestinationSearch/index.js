import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import styles from './styles'
import search from '../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import PostCarouselItem from '../../components/PostCarouselItem'
import feed from '../../assets/data/feed'

const DestinationSearch = () => {
    const navigation = useNavigation()
    const [inputText, setInputText] = useState('')
    return (
        <View>
            <View style={styles.container}>
                {/* <View style={{ height: 500 }}>
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyDYnkl8rGqpQ9-6XjrH3ssqNSDiJHpULGw',
                        language: 'en',
                    }}
                />
            </View> */}
                <TextInput style={styles.textInput}
                    placeholder='Where Are You Going?'
                    value={inputText}
                    onChangeText={setInputText}
                ></TextInput>
                <FlatList data={search} renderItem={({ item }) =>
                (<Pressable onPress={() => navigation.navigate('Guests')}>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name='location-pin' size={25}></Entypo>
                        </View>
                        <Text style={styles.locationText}>{item.description}</Text>
                    </View>
                </Pressable>
                )
                }>

                </FlatList>

            </View>
            <View style={{ position: 'absolute', bottom: -30 }}>
                {/* <PostCarouselItem post={feed[0]}></PostCarouselItem> */}
                <FlatList data={feed} renderItem={({ item }) => <PostCarouselItem post={item} />} horizontal showsVerticalScrollIndicator={false} />
            </View>
        </View>

    )
}

export default DestinationSearch
