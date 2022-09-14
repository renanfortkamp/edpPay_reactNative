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

export default function Endereco({navigation}) {
    const [cpf, setCpf] = useState("");

    function navigationToNovaConta(){
        navigation.navigate("SingUp")
    }

    function navigationToTerms(){
        navigation.navigate("Terms")
    }

    return (
        <SafeAreaView
            style={{
                ...CmStyle.conteiner,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ScrollView style={{ width: "90%" }}>
                <Text
                    style={{
                        ...CmStyle.greenColor,
                        fontSize: 40,
                        marginVertical: 20,
                        alignSelf: "center",
                    }}
                >
                    Endereço
                </Text>

                <Text
                    style={{
                        ...CmStyle.greenColor,
                        fontSize: 20,
                        marginBottom: 3,
                    }}
                >
                    CEP
                </Text>
                <TextInput
                    onChangeText={(text) => setNome(text)}
                    secureTextEntry={true}
                    style={{ ...CmStyle.input, fontSize: 20 }}
                />

                <Text
                    style={{
                        ...CmStyle.greenColor,
                        fontSize: 20,
                        marginBottom: 3,
                    }}
                >
                    Rua
                </Text>
                <TextInput
                    onChangeText={(text) => setTelefone(text)}
                    secureTextEntry={true}
                    style={{ ...CmStyle.input, fontSize: 20 }}
                />

                <Text
                    style={{
                        ...CmStyle.greenColor,
                        fontSize: 20,
                        marginBottom: 3,
                    }}
                >
                    Cidade
                </Text>
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    secureTextEntry={true}
                    style={{ ...CmStyle.input, fontSize: 20 }}
                />

                <Text
                    style={{
                        ...CmStyle.greenColor,
                        fontSize: 20,
                        marginBottom: 3,
                    }}
                >
                    Bairro
                </Text>
                <TextInput
                    onChangeText={(text) => setRg(text)}
                    secureTextEntry={true}
                    style={{ ...CmStyle.input, fontSize: 20 }}
                />

                <Text
                    style={{
                        ...CmStyle.greenColor,
                        fontSize: 20,
                        marginBottom: 3,
                    }}
                >
                    Nº
                </Text>
                <TextInput
                    onChangeText={(text) => setCpf(text)}
                    secureTextEntry={true}
                    style={{ ...CmStyle.input, fontSize: 20 }}
                />

                <Text
                    style={{
                        ...CmStyle.greenColor,
                        fontSize: 20,
                        marginBottom: 3,
                    }}
                >
                    Complemento
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
                        marginBottom:20,
                    }}
                >
                    <TouchableOpacity
                        onPress={navigationToNovaConta}
                        style={{
                            ...CmStyle.button,
                            alignSelf: "center",
                            width: "45%",
                        }}
                    >
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            ...CmStyle.button,
                            alignSelf: "center",
                            width: "45%",
                        }}
                    >
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                            Continuar
                        </Text>
                    </TouchableOpacity>
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
