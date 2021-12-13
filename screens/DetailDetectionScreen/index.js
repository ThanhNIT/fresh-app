import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    // TouchableOpacity,
    ImageBackground,
    StyleSheet,
    AsyncStorage,
    FlatList,
    Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import color from '../../constant/color';
import Rating from '../../components/Rating';
import { useNavigation } from '@react-navigation/native';

const DetailDetectionScreen = ({ route }) => {

    const [result, setResult] = useState(route.params)
    const [rating, setRating] = useState(0)
    const [user, setUser] = useState(null)
    const [fruit, setFruit] = useState([{ name: 'apple', qty: 0 }, { name: 'banana', qty: 0 }, { name: 'orange', qty: 0 }, { name: 'kiwi', qty: 0 }])
    const getResult = () => {
        const qty = [{ name: 'apple', qty: 0 }, { name: 'banana', qty: 0 }, { name: 'orange', qty: 0 }, { name: 'kiwi', qty: 0 }]

        if (result && result.result) {
            result.result.map((e) => {
                if (e.cls === '0') qty[0].qty += 1;
                if (e.cls === '1') qty[1].qty += 1;
                if (e.cls === '2') qty[2].qty += 1;
                if (e.cls === '3') qty[3].qty += 1;
            })
        }
        setFruit(qty)

    }

    const navigation = useNavigation()

    async function getUser() {
        try {
            const user = await AsyncStorage.getItem('userInfo')
            return user ? JSON.parse(user) : null;
        } catch (e) {
            console.log('Failed to fetch the data from storage');
        }
    }


    if (!user) {
        getUser().then(data => {
            setUser(data);
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: user
            })
        })

    }

    useEffect(() => {
        getResult()

    }, [])

    const handleValue = (star) => {
        if (user) {
            setRating(star)
        } else {
            Alert.alert('Oops', 'You need to login before rating.', [
                { text: 'Okay', onPress: () => navigation.navigate('Signin') }
            ]);
        }

    }

    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
                <View
                    style={{
                        height: 350,
                        width: 300,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderColor: bgc,
                        borderWidth: result ? 0 : 2,
                        borderRadius: 10
                    }}>

                    {!result ?

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}><View style={{
                            height: 30,
                            width: 10,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',


                        }}
                            opacity={0.5}
                        >
                            <Text
                                style={{ flex: 1, height: 100, width: 100, fontSize: 20, textAlign: 'center' }}
                            >
                                Oops!!
                            </Text>

                        </View>
                            <Text style={styles.imageSubtitle} numberOfLines={2}>
                                Error occured when loading image!!
                            </Text>
                        </View>
                        :


                        <ImageBackground
                            // source={{ uri: image }}
                            source={{ uri: result.url }}
                            style={{ flex: 1, height: undefined, width: undefined }}
                            resizeMode='contain'
                        >

                            <View style={{
                                height: 500,
                                width: 300,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}
                            >
                            </View>
                        </ImageBackground>
                    }

                </View>

            </View>

            <View style={{ flex: 1, marginTop: 5, }}>
                {fruit[0].qty > 0 && <Text style={styles.date}>Apple: {fruit[0].qty}</Text>}
                {fruit[1].qty > 0 && <Text style={styles.date}>Banana: {fruit[1].qty}</Text>}
                {fruit[2].qty > 0 && <Text style={styles.date}>Orange: {fruit[2].qty}</Text>}
                {fruit[3].qty > 0 && <Text style={styles.date}>KiWi: {fruit[3].qty}</Text>}

                {/* <FlatList data={fruit} renderItem={({ item }) => { item.qty && <Text style={styles.date}> {item.name}: {item.qty}</Text> }}>
                </FlatList > */}

                <View>
                    <Text style={{ alignSelf: 'flex-end' }}>Excution time: {(result && result.time && result.time.toFixed(2)) || 0}s</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={{ alignSelf: 'flex-end', fontSize: 15 }}>Help us improve:</Text>
                        <Rating sz={30} gain={result ? result.rate : 0} onChangeValue={handleValue} rt={result.allowRate}></Rating>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.commandButton}>
                <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailDetectionScreen;
const { bgc } = color
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: bgc,
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        zIndex: 100
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    imageSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginTop: 20,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});