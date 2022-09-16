import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CmStyle } from "../../Styles/CmStyle";

export default function SingUp({ navigation }) {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");

    function navigationToEndereco() {
        navigation.navigate("Endereco", {
            dadosPessoais: {
                nome: nome,
                telefone: telefone,
                email: email,
                rg: rg,
                cpf: cpf,
                password: password,
            },
        });
    }

    function navigateToHome() {
        navigation.goBack();
    }

    return (
        <SafeAreaView
            style={{
                ...CmStyle.conteiner,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ScrollView style={{ width: "100%" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ width: "90%" }}>
                        <Text
                            style={{
                                ...CmStyle.greenColor,
                                fontSize: 40,
                                marginVertical: 20,
                                alignSelf: "center",
                                fontWeight: "bold",
                            }}
                        >
                            Nova Conta
                        </Text>

                        <Text
                            style={{
                                ...CmStyle.greenColor,
                                fontSize: 20,
                                marginBottom: 3,
                            }}
                        >
                            Nome Completo
                        </Text>
                        <TextInput
                            onChangeText={(text) => setNome(text)}
                            style={{ ...CmStyle.input, fontSize: 20 }}
                        />

                        <Text
                            style={{
                                ...CmStyle.greenColor,
                                fontSize: 20,
                                marginBottom: 3,
                            }}
                        >
                            Telefone
                        </Text>
                        <TextInput
                            onChangeText={(text) => setTelefone(text)}
                            keyboardType="phone-pad"
                            style={{ ...CmStyle.input, fontSize: 20 }}
                        />

                        <Text
                            style={{
                                ...CmStyle.greenColor,
                                fontSize: 20,
                                marginBottom: 3,
                            }}
                        >
                            Email
                        </Text>
                        <TextInput
                            onChangeText={(text) => setEmail(text)}
                            keyboardType="email-address"
                            style={{ ...CmStyle.input, fontSize: 20 }}
                        />

                        <Text
                            style={{
                                ...CmStyle.greenColor,
                                fontSize: 20,
                                marginBottom: 3,
                            }}
                        >
                            Nº do RG
                        </Text>
                        <TextInput
                            onChangeText={(text) => setRg(text)}
                            keyboardType="number-pad"
                            style={{ ...CmStyle.input, fontSize: 20 }}
                        />

                        <Text
                            style={{
                                ...CmStyle.greenColor,
                                fontSize: 20,
                                marginBottom: 3,
                            }}
                        >
                            CPF
                        </Text>
                        <TextInput
                            onChangeText={(text) => setCpf(text)}
                            keyboardType="number-pad"
                            style={{ ...CmStyle.input, fontSize: 20 }}
                        />

                        <Text
                            style={{
                                ...CmStyle.greenColor,
                                fontSize: 20,
                                marginBottom: 3,
                            }}
                        >
                            Password
                        </Text>
                        <TextInput
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            style={{ ...CmStyle.input, fontSize: 20 }}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 20,
                            }}
                        >
                            <TouchableOpacity
                                onPress={navigateToHome}
                                style={{
                                    ...CmStyle.button,
                                    alignSelf: "center",
                                    width: "45%",
                                }}
                            >
                                <Text
                                    style={{ fontSize: 25, fontWeight: "bold" }}
                                >
                                    Voltar
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={navigationToEndereco}
                                style={{
                                    ...CmStyle.button,
                                    alignSelf: "center",
                                    width: "45%",
                                }}
                            >
                                <Text
                                    style={{ fontSize: 25, fontWeight: "bold" }}
                                >
                                    Continuar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cadastrar: {
        fontSize: 20,
    },
});
