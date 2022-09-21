import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const {height,width}= Dimensions.get("screen")

export const CmStyle = StyleSheet.create({
    conteiner: {
        backgroundColor: "#212529",
        flex: 1,
    },
    button: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        width: "90%",
        height: 60,
        backgroundColor: "#28ff52",
    },
    logoText: {
        marginTop: 45,
        paddingLeft: 20,
        color: "#28ff52",
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 75,
        position: "absolute",
    },
    logoEdpCom: {
        // width: 350,
        // height: 250,
        width: width * 0.9,
        height: height * 0.28,
    },
    greenColor:{
        color: "#28ff52",
    },
    blackGround:{
        backgroundColor: "#212529",
    },
    input:{
        alignSelf:'center',
        width: '100%',
        height: 60,
        backgroundColor:'#fff',
        marginVertical:5,
        paddingLeft:10,
        borderRadius:10,
    },
});