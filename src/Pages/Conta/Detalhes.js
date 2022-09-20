import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { CmStyle } from "../../Styles/CmStyle";
import barra from "../../imgs/barra.png";
import { api } from "../Services/Service";

export default function Detalhes({ navigation, route }) {
    const { data, id } = route.params;

    function cancelPagamento() {
        navigation.goBack();
    }
    function pagar() {
        const dateHora = format(new Date(), "dd/MM/yyyy hh:mma", {
            locale: ptBR,
        });

        fetch(api + "/invoices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                recipient: data[0].recipient,
                amount: data[0].amount,
                date: dateHora,
                code: data[0].id,
                userId: id[0],
                cashback: (data[0].amount * 0.1).toFixed(2)*1,
            }),
        })
            .then(() => {
                alert("Boleto pago com sucesso!");
                navigation.goBack();
            })
            .catch((error) => {
                console.log("Erro ao pagar boleto:", error);
            });
    }

    return (
        <SafeAreaView
            style={{
                ...CmStyle.conteiner,
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <Text>Detalhes</Text>
            <View
                style={{
                    width: "80%",
                    height: "70%",
                    backgroundColor: "#fff",
                    alignSelf: "center",
                }}
            >
                {data.map((item) => (
                    <View
                        style={{
                            height: "74%",
                            paddingHorizontal: 5,
                            paddingTop: 5,
                        }}
                        key={item.id}
                    >
                        <Text style={{ ...styles.headText }}>Para</Text>
                        <Text style={{ ...styles.bodyText }}>
                            {item.recipient}
                        </Text>
                        <Text style={{ ...styles.headText }}>Valor</Text>
                        <Text style={{ ...styles.bodyText }}>
                            R$ {item.amount}
                        </Text>
                        <Text style={{ ...styles.headText }}>
                            Código do boleto
                        </Text>

                        <Text style={{ ...styles.bodyText }}>{item.id}</Text>

                        <Text style={{ ...styles.headText }}>Cashback</Text>
                        <Text style={{ ...styles.bodyText }}>
                            R$ {(item.amount * 0.1).toFixed(2)}
                        </Text>
                    </View>
                ))}
                <Image
                    style={{ ...styles.tinyLogo, alignSelf: "center" }}
                    source={barra}
                />
            </View>

            <TouchableOpacity
                onPress={pagar}
                style={{
                    ...CmStyle.button,
                    alignSelf: "center",
                    width: "80%",
                }}
            >
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>Pagar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={cancelPagamento}
                style={{
                    ...CmStyle.button,
                    backgroundColor: "tomato",
                    alignSelf: "center",
                    width: "80%",
                    marginBottom: 20,
                }}
            >
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    Cancelar
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    bodyText: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#28ff52",
    },
    tinyLogo: {
        width: "100%",
        height: "25%",
    },
});
