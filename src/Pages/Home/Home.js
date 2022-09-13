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
import { CmStyle } from "../../Styles/CmStyle";

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
                    style={{ ...CmStyle.logoEdpCom, alignSelf: "center" }}
                    resizeMode="contain"
                    source={require("../../imgs/logo.png")}
                >
                    <Text style={CmStyle.logoText}>Pay</Text>
                </ImageBackground>
            </View>
            <TouchableOpacity onPress={navigateToSingUp} style={{ ...CmStyle.button, alignSelf: "center" }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Abrir conta gratuita
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={navigateToLogin} style={{ ...CmStyle.button, alignSelf: "center" }}>
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
})
