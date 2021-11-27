import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const GuestsScreen = () => {
    const [adult, setAdult] = useState(0)
    const [children, setChildren] = useState(0)
    const [infants, setInfants] = useState(0)
    const navigation = useNavigation()
    return (
        <View style={{ paddingTop: 20, justifyContent: 'space-between', height: '100%' }}>
            <View>
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Adults</Text>
                        <Text style={{ color: '#BdBdBd' }}>Age 13 or above</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable style={styles.button} onPress={() => setAdult(Math.max(adult - 1, 0))}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adult}</Text>
                        <Pressable style={styles.button} onPress={() => setAdult(Math.max(adult + 1, 0))}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Children</Text>
                        <Text style={{ color: '#BdBdBd' }}>Age 2 - 12</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable style={styles.button} onPress={() => setChildren(Math.max(children - 1, 0))}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{children}</Text>
                        <Pressable style={styles.button} onPress={() => setChildren(Math.max(children + 1, 0))}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Infants</Text>
                        <Text style={{ color: '#BdBdBd' }}>Under 2</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable style={styles.button} onPress={() => setInfants(Math.max(infants - 1, 0))}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
                        </Pressable>
                        <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{infants}</Text>
                        <Pressable style={styles.button} onPress={() => setInfants(Math.max(infants + 1, 0))}>
                            <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <Pressable onPress={() => navigation.navigate('SearchResults')} style={{ marginBottom: 20, backgroundColor: '#f15454', alignItems: 'center', height: 50, justifyContent: 'center', marginHorizontal: 30, borderRadius: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Search</Text>
            </Pressable>
        </View>
    )
}

export default GuestsScreen
