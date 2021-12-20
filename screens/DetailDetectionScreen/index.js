import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    // TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import color from '../../constant/color';
import Rating from '../../components/Rating';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { rateResult } from '../../actions/historyActions';

const DetailDetectionScreen = ({ route }) => {

    const [result, setResult] = useState(route.params)
    const [rating, setRating] = useState(0)
    const [fruit, setFruit] = useState([{ name: 'apple', qty: 0 }, { name: 'banana', qty: 0 }, { name: 'orange', qty: 0 }, { name: 'kiwi', qty: 0 }])
    const { error, success } = useSelector(state => state.rating)
    const { userInfo } = useSelector(state => state.userLogin)
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

    const dispatch = useDispatch()
    const ratingHistory = () => {
        dispatch(rateResult(result._id, rating))
    }

    const navigation = useNavigation()

    useEffect(() => {
        getResult()
        if (success) {
            Alert.alert('Success', 'Thanks for your submit', [
                { text: 'Okay' }])
        }
        if (error) {
            Alert.alert('Error', error.message, [
                { text: 'Okay' }])
        }
    }, [success, error])

    useEffect(() => {
        console.log('rating' + rating)
    }, [rating])

    const handleValue = (star) => {
        if (userInfo) {
            setRating(star)
        } else {
            Alert.alert('Oops', 'You need to login before rating.', [
                { text: 'Okay', onPress: () => navigation.navigate('Signin', true) }
            ]);
        }
    }

    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
                <View
                    style={{
                        height: 350,
                        // width: 300,
                        // marginTop: 20,
                        marginHorizontal: 5,
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
                <Text style={styles.result}>Result:</Text>
                {fruit[0].qty > 0 && <Text style={styles.date}>Apple: {fruit[0].qty}</Text>}
                {fruit[1].qty > 0 && <Text style={styles.date}>Banana: {fruit[1].qty}</Text>}
                {fruit[2].qty > 0 && <Text style={styles.date}>Orange: {fruit[2].qty}</Text>}
                {fruit[3].qty > 0 && <Text style={styles.date}>KiWi: {fruit[3].qty}</Text>}
                {fruit[0].qty == 0 && fruit[1].qty == 0 && fruit[2].qty == 0 && fruit[3].qty == 0 && <Text style={styles.date}>No fruit found</Text>}

                {/* <FlatList data={fruit} renderItem={({ item }) => { item.qty && <Text style={styles.date}> {item.name}: {item.qty}</Text> }}>
                </FlatList > */}

                <View>
                    <Text style={{ alignSelf: 'flex-end' }}>Excution time: {(result && result.time && result.time.toFixed(2)) || 0}s</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={{ alignSelf: 'flex-end', fontSize: 15, color: 'gray' }}>{(result && !result.allowRate) ? 'Your rate:' : 'Help us improve:'}</Text>
                        <View style={{ marginTop: 20 }}>
                            <Rating sz={30} gain={result && result.rate ? result.rate : 0} onChangeValue={handleValue} rt={result && result.allowRate && result.allowRate}></Rating>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity disabled={rating === 0} onPress={ratingHistory}>
                <View style={{ ...styles.commandButton, opacity: rating === 0 ? 0.5 : 1 }}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </View>
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
    date: {
        color: 'gray'
    },
    result: {
        color: 'gray',
        fontWeight: 'bold'
    }
});