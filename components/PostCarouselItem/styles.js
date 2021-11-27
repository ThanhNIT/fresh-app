import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        height: 30,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: "cover",
    },
    bedroom: {
        marginVertical: 10,
        color: '#5b5b5b'
    },
    description: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        marginVertical: 10
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    newPrice: {
        fontWeight: 'bold'
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    }
})

export default styles