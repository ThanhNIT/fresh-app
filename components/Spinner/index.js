import React, { useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

function Spinner({ sz, cl }) {
    const [size, setSize] = useState(sz ? sz : 'large')
    const [color, setColor] = useState(cl ? cl : '#00ff00')
    return (
        <View style={{ alignSelf: 'center', top: Dimensions.get('window').height / 2 }}
        ><ActivityIndicator size={size} color={color} />
            <Text style={{ color: 'gray' }}>
                Please wait...
            </Text>
        </View>
    )
}

export default Spinner
