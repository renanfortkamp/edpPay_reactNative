import { StyleSheet } from 'react-native'

export const CmStyle = StyleSheet.create({
    conteiner: {
        backgroundColor: "#212529",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
        width: 300,
        height: 100,
        marginBottom:10
    },
    greenColor:{
        color: "#28ff52",
    },
    blackGround:{
        backgroundColor: "#212529",
    },
    input:{
        alignSelf:'center',
        width: '90%',
        height: 60,
        backgroundColor:'#fff',
        marginVertical:5,
        paddingLeft:5,
        borderRadius:10,
    },
});