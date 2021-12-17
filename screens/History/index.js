import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Button, StatusBar, StyleSheet, Dimensions, Pressable, AsyncStorage, Alert } from 'react-native'
import feed from '../../assets/data/feed'
import HistoryCard from '../../components/HistoryCard'
import color from '../../constant/color'
import DateTimePicker from '@react-native-community/datetimepicker';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux'
import { listHistory, listHistoryWithDuration } from '../../actions/historyActions'
import { USER_LOGIN_SUCCESS } from '../../constant/UserConstant'
import { HISTORY_LIST_RESET } from '../../constant/HistoryConstant'

const { bgc, statusBarColor } = color


const HistoryScreen = () => {
    const navigation = useNavigation()
    const d = new Date()
    d.setDate(d.getDate() - 1)
    const [from, setFrom] = useState(d);
    const [to, setTo] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(null)
    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(10)
    const [direction, setDirection] = useState(false);
    const [duration, setDuration] = useState(false)
    const dispatch = useDispatch();

    const { loading, histories } = useSelector((state) => state.historiesList)
    const { userInfo } = useSelector((state) => state.userLogin)

    async function getUser() {
        try {
            const user = await AsyncStorage.getItem('userInfo')
            return user ? JSON.parse(user) : null;
        } catch (e) {
            console.log('Failed to fetch the data from storage');
        }
    }


    // if (!user) {
    //     getUser().then(data => {
    //         setUser(data);
    //         // dispatch({
    //         //     type: USER_LOGIN_SUCCESS,
    //         //     payload: user
    //         // })
    //     })

    // }

    const onChange = (event, selectedDate) => {

        setShow(Platform.OS === 'ios');
        if (direction) {
            const currentDate = selectedDate || to;
            const newDate = new Date(currentDate)
            if (newDate <= from) {
                Alert.alert('Invalid date!', 'Date To must after date from.', [
                    { text: 'Okay' }
                ]);
            }
            else if (newDate > new Date()) {
                Alert.alert('Invalid date!', 'Date To must before or equal now.', [
                    { text: 'Okay' }
                ]);
            }
            else {
                reload()
                setTo(newDate);
                setDuration(true)
            }
        } else {
            const currentDate = selectedDate || to;
            const newDate = new Date(currentDate)
            const previousDay = new Date()
            previousDay.setDate(previousDay.getDate() - 1)

            if (newDate >= previousDay) {
                Alert.alert('Invalid date!', 'Date From must before now one day.', [
                    { text: 'Okay' }
                ]);
            } else {
                setFrom(newDate)
            }
        }

    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showTo = () => {
        showMode('date');
        setDirection(true)
    };

    const showFrom = () => {
        showMode('date');
        setDirection(false)
    };

    const loadMore = () => {
        dispatch(listHistory(skip + 1, limit, histories))
        setSkip(skip + 1)
    }

    const reload = () => {
        dispatch({ type: HISTORY_LIST_RESET })
        setSkip(0)

    }

    const getAll = () => {
        setDuration(false)
        reload()
        setFrom(d)
        setTo(new Date())
    }


    useEffect(() => {

        if (userInfo && userInfo.token) {

            if (duration) {
                dispatch(listHistoryWithDuration(skip, limit, histories, from.toISOString().split('T')[0], to.toISOString().split('T')[0]))
            } else {
                dispatch(listHistory(skip, limit, histories))
            }
        }
    }, [dispatch, userInfo, skip, to])

    return (

        <>{!user && !userInfo ? <View style={{ justifyContent: 'center', alignItems: 'center', top: Dimensions.get('window').height / 2 }}>
            <Text style={{ color: 'gray' }}>Please login with your account to see history</Text>
            <Pressable style={styles.buttonExplore} onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
        </View> : <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
            <View style={{ flexDirection: 'row', backgroundColor: 'white', }}>
                <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                    <Text style={[styles.text, { fontSize: 12 }]}>From</Text>
                    <Text style={[styles.text, styles.textDate]}>{from.toLocaleDateString()}</Text>
                    <Feather onPress={showFrom} style={{ paddingLeft: 5 }} name='calendar' size={20} color={color.bgc}></Feather>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.text, { fontSize: 12 }]}>To</Text>
                    <Text style={[styles.text, styles.textDate]}>{to.toLocaleDateString()}</Text>
                    <Feather onPress={showTo} style={{ paddingLeft: 5 }} name='calendar' size={20} color={color.bgc}></Feather>
                </View>
                <Text onPress={getAll} style={{ marginLeft: 30, marginRight: 20, color: color.bgc, fontSize: 16 }}>All</Text>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={to}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

            <View>
                <FlatList data={histories} renderItem={({ item, i }) => <HistoryCard key={i} onPress={() => console.warn('cliecked')} post={item} ></HistoryCard>}>
                </FlatList >
            </View >
            {histories && histories.length >= (skip + 1) * limit && <View style={{ alignItems: 'center' }} >
                <Text style={{ color: color.bgc }} onPress={() => setSkip(skip + 1)}>Load more</Text>
            </View>}
        </View>
        }
        </>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({
    text: {
        color: '#5b5b5b',
        fontSize: 13,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    textDate: { alignItems: 'center', borderColor: '#5b5b5b', borderRadius: 2, borderWidth: 0.5 },
    buttonExplore: {
        backgroundColor: bgc,
        width: 80,
        // marginLeft: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'

    },
});
