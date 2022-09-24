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
import LottieView from "lottie-react-native";
import scanner from "../../imgs/scanner.json";

export default function Pagamento({ navigation }) {
    const { width, height } = Dimensions.get("screen");
    const [id, setId] = useState("");
    const [user, setUser] = useState([]);
    const [boleto, setBoleto] = useState("");
    const focused = useIsFocused();
    const [scanOnOff, setScanOnOff] = useState("Ligar Scanner");
    const [openClosed, setOpenClosed] = useState(false);

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
                );
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
            .catch((error) => {
                console.log("erro ao recuperar boleto", error);
            });
    }

    useEffect(() => {
        detalhesBoleto();
    }, [boleto]);

    useEffect(() => {
        if (user.length < 1) {
            getId();
        }
        setScanned(true);
        setScanOnOff("Ligar Scanner");
        setOpenClosed(false);
    }, [focused]);

    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);

    const getPermission = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();

        setHasPermission(status === "granted" ? true : false);
    };

    function getResult({ data }) {
        setBoleto(data);
    }

    function openCamera() {
        if (scanned == true && openClosed == false) {
            setScanned(false);
            getPermission();
            setScanOnOff("Desligar Scanner");
            setOpenClosed(true);
        } else {
            setScanned(true);
            setScanOnOff("Ligar Scanner");
            setOpenClosed(false);
        }
    }
    return (
        <SafeAreaView
            style={{
                ...CmStyle.conteiner,
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            {user.length > 0 && (
                <Text
                    style={{
                        color: "#28ff52",
                        fontSize: 30,
                        fontWeight: "bold",
                        alignSelf: "center",
                        marginTop: 10,
                    }}
                >
                    Olá!, {user[0].nome}
                </Text>
            )}
            {/* {hasPermission === false && (
                <Text style={{...CmStyle.greenColor, fontSize:16}}>Permissão para câmera negada</Text>
            )} */}
            {/* <LottieView
                autoPlay
                style={{
                    position: "absolute",
                    width: 700,
                    height: Dimensions.get("screen").height * 0.1,
                }}
                source={scanner}
            ></LottieView> */}
            {hasPermission === true && scanned === false && openClosed == true && (
                <View
                    style={{
                        alignSelf: "center",
                        borderColor: "#fff",
                        borderWidth: 0.2,
                        shadowColor: "#fff",
                        shadowOffset: {
                            width: 5,
                            height: 5,
                        },
                        // shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 15,
                    }}
                >
                    <BarCodeScanner
                        barCodeTypes={[
                            BarCodeScanner.Constants.BarCodeType.code39,
                        ]}
                        onBarCodeScanned={getResult}
                        style={{
                            width: Dimensions.get("screen").width * 0.78,
                            height: Dimensions.get("screen").height * 0.5,
                        }}
                    />
                </View>
            )}

            <TouchableOpacity
                onPress={openCamera}
                style={{
                    ...CmStyle.button,
                    alignSelf: "center",
                    width: "80%",
                    marginBottom: 20,
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
