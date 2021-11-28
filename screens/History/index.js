import React from 'react'
import { View, Text, FlatList } from 'react-native'
import feed from '../../assets/data/feed'
import Post from '../../components/Post'


const HistoryScreen = () => {
    return (
        <View>
            <FlatList data={feed} renderItem={({ item }) => <Post post={item} ></Post>}>
            </FlatList >
        </View >
    )
}

export default HistoryScreen
