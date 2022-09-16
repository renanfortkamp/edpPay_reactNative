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
import { Picker } from "@react-native-picker/picker";

import { CmStyle } from "../../Styles/CmStyle";

export default function Endereco({ navigation, route }) {
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
   
    const { dadosPessoais } = route.params;
    
    console.log(dadosPessoais);

    function navigationToNovaConta() {
        navigation.goBack();
    }

    function navigateToData() {
        navigation.navigate("DataCobranca", {dadosPessoaisEndereco:{...dadosPessoais,
            endereco: {
                cep: cep,
                rua: rua,
                cidade: cidade,
                estado: estado,
                bairro: bairro,
                numero,
                numero,
                complemento: complemento,
            },}});
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
                            onChangeText={(text) => setCep(text)}
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
                            onChangeText={(text) => setRua(text)}
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
                            onChangeText={(text) => setCidade(text)}
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
                            Estado
                        </Text>
                        <View
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                height: 60,
                                justifyContent: "center",
                            }}
                        >
                            <Picker
                                selectedValue={estado}
                                onValueChange={(value) => setEstado(value)}
                            >
                                <Picker.Item
                                    label="Selecione um Estado"
                                    value=""
                                />
                                <Picker.Item label="AC" value="AC" />
                                <Picker.Item label="AL" value="AL" />
                                <Picker.Item label="AP" value="AP" />
                                <Picker.Item label="AM" value="AM" />
                                <Picker.Item label="BA" value="BA" />
                                <Picker.Item label="CE" value="CE" />
                                <Picker.Item label="DF" value="DF" />
                                <Picker.Item label="ES" value="ES" />
                                <Picker.Item label="GO" value="GO" />
                                <Picker.Item label="MA" value="MA" />
                                <Picker.Item label="MG" value="MG" />
                                <Picker.Item label="MS" value="MS" />
                                <Picker.Item label="MT" value="MT" />
                                <Picker.Item label="PA" value="PA" />
                                <Picker.Item label="PB" value="PB" />
                                <Picker.Item label="PE" value="PE" />
                                <Picker.Item label="PI" value="PI" />
                                <Picker.Item label="PR" value="PR" />
                                <Picker.Item label="RJ" value="RJ" />
                                <Picker.Item label="RO" value="RO" />
                                <Picker.Item label="RR" value="RR" />
                                <Picker.Item label="RS" value="RS" />
                                <Picker.Item label="SC" value="SC" />
                                <Picker.Item label="SE" value="SE" />
                                <Picker.Item label="SP" value="SP" />
                                <Picker.Item label="TO" value="TO" />
                            </Picker>
                        </View>

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
                            onChangeText={(text) => setBairro(text)}
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
                            onChangeText={(text) => setNumero(text)}
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
                            onChangeText={(text) => setComplemento(text)}
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
                                onPress={navigationToNovaConta}
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
                                onPress={navigateToData}
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
