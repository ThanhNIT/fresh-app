import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) => {

    const post = props.post

    return (
        <View style={styles.container}>
            <Image source={{ uri: post.image }} style={styles.image}></Image>
            <Text style={styles.bedroom}>{post.bed} bed {post.bedroom} bedroom</Text>
            <Text style={styles.description} numberOfLines={2}>{post.type} . {post.title}
            </Text>
            <Text style={styles.price}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.newPrice}>  ${post.newPrice}</Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
        </View>
    )
}

export default Post
