import {StyleSheet} from 'react-native';


export default StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 10,
        width: 20,
        alignSelf: "center"
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#3253a8',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonFacebook: {
        backgroundColor: '#3253a8',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        height: 48,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonGoogle: {
    backgroundColor: '#326da8',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 60,
    height: 48,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: 'center'
},
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'black'
    },
    footerLink: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 16
    }

})