import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginHorizontal: 10,

    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: "hidden",

    },
    imageView: {
        height: 100,
        width: 100
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: "cover",
        borderRadius: 10
    },
    date: {
        textAlign: 'right'
    }
})

export default styles