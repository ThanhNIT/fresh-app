import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    // TouchableOpacity,
    ImageBackground,
    TextInput,
    StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useTheme } from 'react-native-paper';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
import Canvas from 'react-native-canvas';

const EditProfileScreen = () => {

    const [image, setImage] = useState(null);
    const [visible, setVisible] = useState(1)
    const [camStatus, setCamStatus] = useState(false)
    const [libStatus, setLibStatus] = useState(false)

    const takePhotoFromCamera = async () => {

        if (!camStatus) {
            (async () => {
                if (Platform.OS !== 'web') {
                    const { status } = await ImagePicker.requestCameraPermissionsAsync();
                    if (status !== 'granted') {
                        alert('Sorry, we need camera roll permissions to make this work!');
                    } else {
                        setCamStatus(true)
                    }
                }
            })();
        } else {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
            });

            if (!result.cancelled) {
                setImage(result);
            }
            closeSheet()
        }

    }
    useEffect(() => {
        this.bs.current.snapTo(visible)
    }, [visible])

    const closeSheet = () => {
        setVisible(visible === 1 ? 0 : 1)
    }

    const uploadFile = async () => {
        if (image) {
            let url = 'http://192.168.43.54:5000/api/fresh/detect'
            // ImagePicker saves the taken photo to disk and returns a local URI to it
            let localUri = image.uri;
            let filename = localUri.split('/').pop();

            // Infer the type of the image
            let match = /\.(\w+)$/.exec(filename);
            let type = match ? `image/${match[1]}` : `image`;

            // Upload the image using the fetch and FormData APIs
            let formData = new FormData();
            // Assume "photo" is the name of the form field the server expects
            formData.append('file', { uri: localUri, name: filename, type });

            fetch(url, {
                method: 'POST',
                body: formData,
                headers: {
                    'content-type': 'multipart/form-data',
                },
            }).then(response => response.json())
                .then(data => setImage({ uri: data }));

        }

    }

    const uploadImage = async () => {
        // Check if any file is selected or not
        if (singleFile != null) {
            // If file selected then create FormData
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);
            // Please change file upload URL
            let res = await fetch(
                'http://localhost/upload.php',
                {
                    method: 'post',
                    body: data,
                    headers: {
                        'Content-Type': 'multipart/form-data; ',
                    },
                }
            );
            let responseJson = await res.json();
            if (responseJson.status == 1) {
                alert('Upload Successful');
            }
        } else {
            // If no file selected the show alert
            alert('Please Select File first');
        }
    };

    const choosePhotoFromLibrary = async () => {

        if (!libStatus) {
            (async () => {
                if (Platform.OS !== 'web') {
                    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if (status !== 'granted') {
                        alert('Sorry, we need camera roll permissions to make this work!');
                    } else {
                        setLibStatus(true)
                    }
                }
            })();
        } else {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
            });

            if (!result.cancelled) {
                setImage(result);
                // setImage('https://i1-vnexpress.vnecdn.net/2015/07/11/fruit-image-7365-1436585539.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=nWT-FoCCm7t0S-RTkOnLDw');
            }
            closeSheet()
        }

    };

    renderInner = () => (
        <View style={styles.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => this.bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );

    renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle} />
            </View>
        </View>
    );

    renderCanvas = () => {
        return (
            <Canvas ref={this.handleCanvas} />
        )
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                } else {
                    setLibStatus(true)
                }
            }
        })();

        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                } else {
                    setCamStatus(true)
                }
            }
        })();
    }, []);

    bs = React.createRef();
    fall = new Animated.Value(1);

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={this.bs}
                snapPoints={[330, -40]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={false}
                enabledInnerScrolling={false}
                enabledContentTapInteraction={false}

            />
            <Animated.View style={{
                margin: 20,
                opacity: Animated.add(0.0, Animated.multiply(this.fall, 1.0)),

            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={closeSheet}>
                        <View
                            style={{
                                height: 500,
                                width: 300,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#f15454',
                                borderWidth: image ? 0 : 2,
                                borderRadius: 10
                            }}>

                            {!image ?

                                <View style={{ justifyContent: 'center', alignItems: 'center' }}><View style={{
                                    height: 100,
                                    width: 100,
                                    borderRadius: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',


                                }}
                                    opacity={0.5}
                                >
                                    <ImageBackground source={require('../../assets/picture.png')}
                                        style={{ flex: 1, height: 100, width: 100 }}
                                        resizeMode='contain'
                                    >

                                    </ImageBackground>

                                </View>
                                    <Text style={styles.imageSubtitle} numberOfLines={2}>
                                        Take a photo or select image from library
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

                                    {/* 
                                        
                                     */}
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
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        John Doe
                    </Text>
                </View>


                <TouchableOpacity style={styles.commandButton} onPress={uploadFile}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    // },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        zIndex: 100
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
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