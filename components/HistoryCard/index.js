import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, Image, Button } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Rating from '../Rating'
import styles from './styles'

const HistoryCard = (props) => {


    const post = props.post
    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('HistoryDetail')}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.imageView}>
                        <Image source={{ uri: post.image }} style={styles.image}></Image>
                    </View>
                    <View style={{ flex: 1, margin: 10 }}>
                        <Text style={styles.date}>9/8/2021</Text>
                        <Text style={styles.date}>9/8/2021</Text>
                        <Text style={styles.date}>9/8/2021</Text>
                        <Text style={styles.date}>9/8/2021</Text>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                        <Text style={styles.date}>9/8/2021</Text>
                        <Rating sz={10}></Rating>
                    </View>
                </View>
            </View >
        </TouchableWithoutFeedback>
    )
}

export default HistoryCard
