import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../Services/Service";
import { CmStyle } from "../../Styles/CmStyle";
import { useIsFocused } from "@react-navigation/native";
import { isSearchBarAvailableForCurrentPlatform } from "react-native-screens";


export default function Boletos() {
    const { width, height } = Dimensions.get("screen");
    const [id, setId] = useState("");
    const [user, setUser] = useState([]);
    const [pagamentos, setPagamentos] = useState([]);
    const [render, setRender] = useState(false);
    const focused = useIsFocused();

    const getId = async () => {
        const values = await AsyncStorage.getItem("@storage_Key");
        if (values != null) {
            const idParse = JSON.parse(values);
            setId(idParse);
            getUser(idParse);
        }
    };

    function getUser(idParse) {
        fetch(api + "/users?id=" + idParse)
            .then(async (Response) => {
                const data = await Response.json();
                if (data.length === 1) {
                    setUser(data);
                }
            })
            .catch((error) => {
                console.log("Error ao recuperar usuario:", error);
            });
    }

    function getPagamentos() {
        try {
            fetch(api + "/invoices?userId=" + id)
                .then(async (Response) => {
                    const dataInvoices = await Response.json();
                    if (dataInvoices.length >= 1) {
                        setPagamentos(dataInvoices);
                        setRender(true);
                    }
                })
                .catch((error) => {
                    console.log("error ao recupar pagamento: ", error);
                });
        } catch (error) {
            console.log("erro no try:", error);
        }
    }

    useEffect(() => {
        getPagamentos();
    }, [user]);

    useEffect(() => {
        setRender(false);
        getId();
    }, [focused]);
    return (
        <SafeAreaView
            style={{ ...CmStyle.conteiner, backgroundColor: "#212529" }}
        >
            <Text style={{...CmStyle.greenColor, fontSize:30,fontWeight:"bold",alignSelf:'center', marginVertical:10}}>Boletos Pagos</Text>
            <ScrollView>
                

                {render == false && (
                    <Text
                        style={{
                            ...CmStyle.greenColor,
                            alignSelf: "center",
                            fontSize: 20,
                        }}
                    >
                        Nenhum pagamento realizado
                    </Text>
                )}

                {render == true &&
                    pagamentos.map((boleto) => (
                        <TouchableOpacity
                            style={{
                                borderColor: "#000",
                                borderWidth: 1,
                                padding: 5,
                                marginVertical: 5,
                                backgroundColor: "#FFF",
                            }}
                            key={boleto.id}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    marginBottom: 10,
                                }}
                            >
                                <Text style={{ fontSize: 17 }}>18-09-2022</Text>
                                <Text style={{ fontSize: 17 }}>
                                    R$ {boleto.amount}
                                </Text>
                            </View>

                            <Text style={{ fontSize: 25 }}>
                                {boleto.recipient}
                            </Text>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
