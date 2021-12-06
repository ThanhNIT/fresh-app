import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View } from "react-native"

const Rating = ({ gain, total, sz, rt }) => {
    const [gainStars, setGainStars] = useState(gain || 3);
    const [totalStars, setTotalStars] = useState(total || 5);
    const [size, setSize] = useState(sz || 30);
    const [rating, setRating] = useState(rt);

    return (
        <View style={styles.container}>

            {
                Array.from({ length: gainStars }, (x, i) => {
                    return (
                        <MaterialIcons onPress={() => { rating && setGainStars(i + 1); this.props.onChangeValue }} key={i} name="star" size={size} color="#FFA000" />
                    )
                })

            }

            {

                Array.from({ length: totalStars - gainStars }, (x, i) => {
                    return (
                        <MaterialIcons onPress={() => { rating && setGainStars(gainStars + i + 1); this.props.onChangeValue }} key={i} name="star-border" size={size} color="#FFA000" />
                    )
                })

            }
        </View>
    );
}

export default Rating

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        padding: 8,
        alignSelf: 'flex-end',
        bottom: -20
    },

});