import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Home({navigation}) {

    function navigateToSingUp(){
        navigation.navigate('Login')
    }

    function navigateToLogin(){
        navigation.navigate('Login')
    }


    return (
        <SafeAreaView style={styles.conteiner}>
            <View style={{ marginBottom: 50 }}>
                <ImageBackground
                    style={{ ...styles.logoEdpCom, alignSelf: "center" }}
                    resizeMode="contain"
                    source={require("../../imgs/logo.png")}
                >
                    <Text style={styles.logoText}>Pay</Text>
                </ImageBackground>
            </View>
            <TouchableOpacity onPress={navigateToSingUp} style={{ ...styles.button, alignSelf: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Abrir conta gratuita
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToLogin} style={{ ...styles.button, alignSelf: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Fazer Login
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
        width: "70%",
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
});
