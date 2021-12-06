import React, { useState } from 'react'
import { View, Text, FlatList, Button, StatusBar, StyleSheet } from 'react-native'
import feed from '../../assets/data/feed'
import HistoryCard from '../../components/HistoryCard'
import color from '../../constant/color'
import DateTimePicker from '@react-native-community/datetimepicker';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/core'

const { bgc, statusBarColor } = color

const HistoryScreen = () => {
    const navigation = useNavigation()

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


    return (

        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
            <View style={{ flexDirection: 'row', backgroundColor: 'white', }}>
                <View style={{ flexDirection: 'row', paddingRight: 10 }}>
                    <Text style={[styles.text, { fontSize: 12 }]}>From</Text>
                    <Text style={[styles.text, styles.textDate]}>29/10/2021</Text>
                    <Feather onPress={showDatepicker} style={{ paddingLeft: 5 }} name='calendar' size={23} color={color.bgc}></Feather>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.text, { fontSize: 12 }]}>To</Text>
                    <Text style={[styles.text, styles.textDate]}>30/10/2021</Text>
                    <Feather onPress={showDatepicker} style={{ paddingLeft: 5 }} name='calendar' size={23} color={color.bgc}></Feather>
                </View>

            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <FlatList data={feed} renderItem={({ item }) => <HistoryCard onPress={() => console.warn('cliecked')} post={item} ></HistoryCard>}>
            </FlatList >
        </View >
    )
}

export default HistoryScreen

const styles = StyleSheet.create({
    text: {
        color: '#5b5b5b',
        fontSize: 15,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    textDate: { alignItems: 'center', borderColor: '#5b5b5b', borderRadius: 2, borderWidth: 0.5 }
});
