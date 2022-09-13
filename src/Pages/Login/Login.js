import { StyleSheet, Text, View ,SafeAreaView,ImageBackground,TouchableOpacity,TextInput } from "react-native";
import React, { useState } from "react";
import { CmStyle } from "../../Styles/CmStyle";

export default function Login() {
    const[cpf,setCpf] = useState('')
    const[password,setPassword] = useState('')

    return (
        <SafeAreaView style={CmStyle.conteiner}>
            
            <View style={{ marginBottom: 50 }}>
                <ImageBackground
                    style={{ ...CmStyle.logoEdpCom, alignSelf: "center" }}
                    resizeMode="contain"
                    source={require("../../imgs/logo.png")}
                >
                    <Text style={CmStyle.logoText}>Pay</Text>
                </ImageBackground>
            </View>
            <TextInput
                onChangeText={(text) => setCpf(text)}
                placeholder="CPF"
                secureTextEntry={true}
                style={{ ...CmStyle.input, fontSize: 20 }}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="SENHA"
                secureTextEntry={true}
                style={{ ...CmStyle.input, fontSize: 20 }}
            />
             <TouchableOpacity
                style={{ ...CmStyle.button, alignSelf: "center" }}
            >
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    Entrar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignSelf: "center", marginTop: 5 }}>
                <Text style={{ color: "#fff",fontSize:15 }}>Esqueci minha senha</Text>
            </TouchableOpacity>
            
            
            <TouchableOpacity>
                <Text style={{...CmStyle.greenColor,fontSize:25 }}>Abrir conta gratuita</Text>
            </TouchableOpacity>

           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
});
