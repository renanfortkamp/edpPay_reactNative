import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    BackHandler,
    Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BigHead } from "react-native-bigheads";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../Services/Service";
import { CmStyle } from "../../Styles/CmStyle";
import { useIsFocused } from "@react-navigation/native";

export default function Conta({ navigation }) {
    const { width, height } = Dimensions.get("screen");
    const [user, setUser] = useState([]);
    const focused = useIsFocused();

    function quitApp() {
        Alert.alert("Atenção", "Você realmente deseja sair do app?", [
            {
                text: "Não",
                onPress: () => null,
                style: "cancel",
            },
            { text: "Sim", onPress: () => BackHandler.exitApp() },
        ]);
    }

    const getId = async () => {
        const values = await AsyncStorage.getItem("@storage_Key");
        if (values != null) {
            const id = JSON.parse(values);
            getUser(id);
        }
    };

    function getUser(id) {
        fetch(api + "/users?id=" + id)
            .then(async (Response) => {
                const data = await Response.json();
                if (data.length === 1) {
                    setUser(data);
                }
            })
            .catch((error) => {
                alert(
                    "Nossos servidores estão indisponiveis, tente novamente mais tarde!"
                );
            });
    }

    useEffect(() => {
        getId();
    }, []);

    return (
        <View
            style={{
                ...CmStyle.conteiner,
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <View style={{ marginTop: 3, alignItems: "center" }}>
                <BigHead showBackground={true} size={width * 0.6} />

                {user.map((dado) => (
                    <View
                        style={{
                            marginTop: 10,
                            alignSelf: "center",
                            width:"95%"
                        }}
                        key={dado.id}
                    >
                        <Text
                            style={{
                                color: "#28ff52",
                                fontSize: 35,
                                textAlign: "center",
                                marginBottom: 5,
                                fontWeight:"bold"
                            }}
                        >
                            {dado.nome}
                        </Text>
                        
                        <View
                        style={{alignItems:"center"}}
                        >
                            <Text
                                style={{
                                    color: "#fff",
                                    fontSize: 20,
                                }}
                            >
                                Telefone: {dado.telefone}
                            </Text>
                            <Text
                                style={{
                                    color: "#fff",
                                    
                                    fontSize: 20,
                                }}
                            >
                                E-mail: {dado.email}
                            </Text>
                            <Text
                                style={{
                                    color: "#fff",
                                    
                                    fontSize: 20,
                                }}
                            >
                                Rg: {dado.rg}
                            </Text>
                            <Text
                                style={{
                                    color: "#fff",
                                    
                                    fontSize: 20,
                                }}
                            >
                                Cpf: {dado.cpf}
                            </Text>
                            <Text
                                style={{
                                    color: "#fff",
                                    
                                    fontSize: 20,
                                }}
                            >
                                Cep: {dado.endereco.cep}
                            </Text>
                            <Text
                                style={{
                                    color: "#fff",
                                    
                                    fontSize: 20,
                                }}
                            >
                                Rua: {dado.endereco.rua}- Nº{dado.endereco.numero}
                            </Text>
                            <Text
                                style={{
                                    color: "#fff",
                                    
                                    fontSize: 20,
                                }}
                            >
                                Bairro: {dado.endereco.bairro}
                            </Text>
                            <Text
                                style={{
                                    color: "#fff",
                                    
                                    fontSize: 20,
                                }}
                            >
                                Cidade: {dado.endereco.cidade}-{dado.endereco.estado}
                            </Text>
                            
                        </View>
                    </View>
                ))}
            </View>

            <TouchableOpacity
                onPress={quitApp}
                style={{
                    ...CmStyle.button,
                    alignSelf: "center",
                    width: "45%",
                    marginBottom: 20,
                }}
            >
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    Sair do App
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});
