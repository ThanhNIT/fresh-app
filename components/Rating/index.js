import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, View } from "react-native"

const Rating = ({ gain, total, sz, rt, onChangeValue }) => {
    const [gainStars, setGainStars] = useState(gain || 0);
    const [totalStars, setTotalStars] = useState(total || 5);
    const [size, setSize] = useState(sz || 30);
    const [rating, setRating] = useState(rt || false);

    return (
        <View style={styles.container}>

            {
                Array.from({ length: gainStars }, (x, i) => {
                    return (
                        <MaterialIcons onPress={() => { if (rating) { setGainStars(i + 1); onChangeValue(i + 1) } }} key={i} name="star" size={size} color="#FFA000" />
                    )
                })

            }

            {

                Array.from({ length: totalStars - gainStars }, (x, i) => {
                    return (
                        <MaterialIcons onPress={() => { if (rating) { setGainStars(gainStars + i + 1); onChangeValue(gainStars + i + 1) } }} key={i} name="star-border" size={size} color="#FFA000" />
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
    },

});