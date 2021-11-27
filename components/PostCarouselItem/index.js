import React from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'
import styles from './styles'

const PostCarouselItem = (props) => {

    const post = props.post
    const width = useWindowDimensions().width

    return (
        <View style={[styles.container, { width: width - 40 }]}>
            <View style={styles.innerContainer}>
                <Image source={{ uri: post.image }} style={styles.image}></Image>
                <View style={{ flex: 1, marginHorizontal: 10 }}>
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
            </View>

        </View>
    )
}

export default PostCarouselItem
