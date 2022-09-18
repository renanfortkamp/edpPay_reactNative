import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
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
        fetch(api + "/invoices?pagador=" + user[0].cpf)
            .then(async (Response) => {
                const data = await Response.json();
                if (data.length === 1) {
                    setPagamentos(data);
                }
            })
            .catch((error) => {
                console.log("error ao recupar pagamento: ", error);
            });
    }

    useEffect(() => {
        getPagamentos();
    }, [user]);

    useEffect(() => {
        getId();
    }, [focused]);
    return (
        <View>
            <Text>meu id é : {id}</Text>
            {pagamentos == [] ? (
                <Text>Nenhum pagamento realizado</Text>
            ) : (
                pagamentos.map((boleto) => (
                    <View
                        style={{ borderColor: "#000", borderWidth: 1,padding:5 }}
                        key={boleto.id}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom:10,
                            }}
                        >
                            <Text style={{fontSize:17}}>18-09-2022</Text>
                            <Text style={{fontSize:17}}>R$ {boleto.amount}</Text>
                        </View>

                        <Text style={{ fontSize: 25 }}>{boleto.recipient}</Text>
                    </View>
                ))
            )}
        </View>
    );
}

const styles = StyleSheet.create({});
