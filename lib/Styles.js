import {StyleSheet, Platform, Dimensions} from 'react-native';

export const Styles = StyleSheet.create({
    containerSearchInput: {
        height: 60,
        marginTop: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInputSearchInput: {
        flex: 1,
        fontSize: 20,
        color: '#222',
    },
    container: {
        flex: 1,
        backgroundColor: '#34495E',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 20,
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        color: 'white',
    },
    iconText: {
        fontSize: 72,
    },
    largeText: {
        fontSize: 44,
    },
    smallText: {
        fontSize: 18,
    },
    weatherText: {
        fontSize: 22,
    }
})