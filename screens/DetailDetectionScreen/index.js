import React, { useState } from 'react';
import {
    View,
    Text,
    // TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Animated from 'react-native-reanimated';
import Canvas from 'react-native-canvas';
import color from '../../constant/color';
import Rating from '../../components/Rating';

const DetailDetectionScreen = () => {

    const [image, setImage] = useState(null);

    renderCanvas = () => {
        return (
            <Canvas ref={this.handleCanvas} />
        )
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
                        borderWidth: image ? 0 : 2,
                        borderRadius: 10
                    }}>

                    {!image ?

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
                            source={{ uri: image.uri }}
                            style={{ flex: 1, height: undefined, width: undefined }}
                            resizeMode='contain'
                        >
                            <Canvas ref={this.handleCanvas} />

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

            <View style={{ flex: 1, marginTop: 10, }}>
                <Text style={styles.date}>apple: 3</Text>
                <Text style={styles.date}>banana: 3</Text>
                <Text style={styles.date}>orange: 0</Text>
                <Text style={styles.date}>kiwi: 0</Text>

                <View>
                    <Text style={{ alignSelf: 'flex-end' }}>Excution time: 3s</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <Text style={{ alignSelf: 'flex-end', fontSize: 15 }}>Help us improve:</Text>
                        <Rating sz={30}></Rating>
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