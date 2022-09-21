import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Dimensions
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CmStyle } from "../../Styles/CmStyle";
import { api } from "../Services/Service";

export default function Login({ navigation }) {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const {height,width} = Dimensions.get("screen")

    function navigateToSingUp() {
        navigation.navigate("SingUp");
    }

    function login() {
        if (!cpf) {
            alert("Para entrar digite seu CPF");
        } else if (!password) {
            alert("Para entrar digite seu Password");
        } else {
            fetch(api + "/users?cpf=" + cpf + "&password=" + password)
                .then(async (Response) => {
                    const data = await Response.json();
                    if (data.length === 1) {
                        const userId = data[0].id;
                        saveId(userId);
                    } else alert("Cpf ou Senha incorreto, ou talvez você não tenha uma conta.");
                })
                .catch((error) => {
                    alert("Nossos servidores estão indisponiveis, tente novamente mais tarde!");
                });
        }
    }

    async function saveId(userId) {
        try {
            await AsyncStorage.setItem(
                "@storage_Key",
                JSON.stringify([userId])
            );
            navigation.navigate("conta");
        } catch (error) {
            alert("Houve erro ao salvar alguns dados no seu armazenamento, tente novamente após apagar algum dado de seu telefone");
        }
    }

    return (
        <SafeAreaView
            style={{
                ...CmStyle.conteiner,
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <View
                style={{
                    width: "90%",
                    height: "90%",
                    justifyContent: "center",
                }}
            >
                <View>
                    <ImageBackground
                        style={{ ...CmStyle.logoEdpCom, alignSelf: "center" }}
                        resizeMode="contain"
                        source={require("../../imgs/logo.png")}
                    ></ImageBackground>
                </View>
                <TextInput
                    onChangeText={(text) => setCpf(text)}
                    placeholder="CPF"
                    keyboardType="number-pad"
                    style={{ ...CmStyle.input, fontSize: 20 }}
                />
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    placeholder="Password"
                    secureTextEntry={true}
                    style={{ ...CmStyle.input, fontSize: 20 }}
                />
                <TouchableOpacity
                    onPress={login}
                    style={{
                        ...CmStyle.button,
                        alignSelf: "center",
                        width: "100%",
                    }}
                >
                    <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={navigateToSingUp}
                style={{ marginBottom: 10 }}
            >
                <Text style={{ ...CmStyle.greenColor, fontSize: 25, marginTop:30 }}>
                    Abrir conta gratuita
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
