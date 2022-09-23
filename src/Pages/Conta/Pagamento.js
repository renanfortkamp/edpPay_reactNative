import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    SafeAreaView,
    Button,
    Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BarCodeScanner } from "expo-barcode-scanner";
import { api } from "../Services/Service";
import { CmStyle } from "../../Styles/CmStyle";
import { useIsFocused } from "@react-navigation/native";

export default function Pagamento({ navigation }) {
    const { width, height } = Dimensions.get("screen");
    const [id, setId] = useState("");
    const [user, setUser] = useState([]);
    const [boleto, setBoleto] = useState("");
    const focused = useIsFocused();
    const [scanOnOff, setScanOnOff] = useState("Desligar Scanner");

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
                if (data.length > 0) {
                    setUser(data);
                }
            })
            .catch((error) => {
                alert(
                    "Nossos servidores estão indisponiveis, tente novamente mais tarde!"
                );;
            });
    }

    function detalhesBoleto() {
        fetch(api + "/debts?id=" + boleto)
            .then(async (Response) => {
                const data = await Response.json();
                if (data.length > 0) {
                    setScanned(true);
                    setScanOnOff("Ligar Scanner");
                    navigation.navigate("Detalhes", { data: data, id });
                } else {
                    Alert("Boleto não existe");
                }
            })
            .catch((error)=>{console.log("erro ao recuperar boleto",error)});
    }

    useEffect(() => {
        detalhesBoleto();
    }, [boleto]);

    useEffect(() => {
        if(user.length < 1){
           getId();
        }
    }, [focused]);

    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);

    const getPermission = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();

        setHasPermission(status === "granted" ? true : false);
    };

    useEffect(() => {
        getPermission();
    }, []);

    function getResult({ data }) {
        setBoleto(data);
    }

    function openCamera() {
        if (scanned == true) {
            setScanned(false);
            getPermission();
            setScanOnOff("Desligar Scanner");
        } else {
            setScanned(true);
            setScanOnOff("Ligar Scanner");
        }
    }
    return (
        <SafeAreaView
            style={{
                ...CmStyle.conteiner,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {hasPermission === false && (
                <Text style={{...CmStyle.greenColor, fontSize:16}}>Permissão para câmera negada</Text>
            )}

            {hasPermission === true && scanned === false && (
                <View style={{ alignSelf: "center" }}>
                    <BarCodeScanner
                        barCodeTypes={[
                            BarCodeScanner.Constants.BarCodeType.code39,
                        ]}
                        onBarCodeScanned={getResult}
                        style={{
                            width: Dimensions.get("screen").width * 0.8,
                            height: Dimensions.get("screen").height * 0.7,
                        }}
                    />
                </View>
            )}

            <TouchableOpacity
                onPress={openCamera}
                style={{
                    ...CmStyle.button,
                    alignSelf: "center",
                    width:'80%',
                    marginBottom: 4,
                }}
            >
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    {scanOnOff}
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
