import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        margin: 5,

    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: "hidden",

    },
    imageView: {
        height: 60,
        width: 60
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: "cover",
        borderRadius: 10
    },
    date: {
        textAlign: 'right',
        color: 'gray'
    }
})

export default styles