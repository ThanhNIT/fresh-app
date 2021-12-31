import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, Image, Button } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Rating from '../Rating'
import styles from './styles'

const HistoryCard = (props) => {

    const post = props.post
    const navigation = useNavigation()
    post.allowRate = post.rate === 0
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('HistoryDetail', post)}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.imageView}>
                        <Image source={{ uri: post.url }} style={styles.image}></Image>
                    </View>
                    <View style={{ flex: 1, margin: 10 }}>
                        <Text style={styles.date}>Accepted: {post.accepted ? post.accepted : 0}</Text>
                        <Text style={styles.date}>Rejected: {post.rejected ? post.rejected : 0}</Text>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 10 }}>
                        <Text style={styles.date}>{post && post.date && new Date(post.date.split(' ')[0].replace(/-/g, '/')).toLocaleDateString()}</Text>
                        <Rating sz={10} gain={post.rate}></Rating>
                    </View>
                </View>
            </View >
        </TouchableWithoutFeedback>
    )
}

export default HistoryCard
