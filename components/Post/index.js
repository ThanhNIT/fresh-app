import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) => {

    const post = props.post

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.imageView}>
                    <Image source={{ uri: post.image }} style={styles.image}></Image>
                </View>
                <View style={{ flex: 1, marginHorizontal: 10 }}>
                    <Text>Some text</Text>
                </View>
            </View>

        </View >
    )
}

export default Post
