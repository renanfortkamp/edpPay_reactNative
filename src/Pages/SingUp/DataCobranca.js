import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import React, { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import { CmStyle } from "../../Styles/CmStyle";

const { height, width } = Dimensions.get("screen");

export default function DataCobranca({ navigation, route }) {
  const { dados } = route.params;
  

    

    const [dataCobranca, setDataCobranca] = useState(null);
    const dataFormatada = dataCobranca
    ? dataCobranca.format("YYYY-MM-DD").toString()
    : "";

    function navigationToEndereco() {
        navigation.goBack();
    }
    function navigationToTerms() {
        if(!dataCobranca){
            alert("Escolha data de sua cobrança")
        }else{
            navigation.navigate("Terms", {dados:{...dados,dataCobranca:dataFormatada}});

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
            <ScrollView style={{ width: "100%" }}>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <View style={{ width: "90%" }}>
                        <Text
                            style={{
                                ...CmStyle.greenColor,
                                fontSize: 30,
                                marginVertical: 20,
                                alignSelf: "center",
                            }}
                        >
                            Qual data da cobrança?
                        </Text>
                        <View style={{ backgroundColor: "#fff", padding: 20 }}>
                            <CalendarPicker
                                width={width * 0.84}
                                onDateChange={setDataCobranca}
                            />
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 20,
                            }}
                        >
                            <TouchableOpacity
                                onPress={navigationToEndereco}
                                style={{
                                    ...CmStyle.button,
                                    alignSelf: "center",
                                    width: "47%",
                                }}
                            >
                                <Text
                                    style={{ fontSize: 25, fontWeight: "bold" }}
                                >
                                    Voltar
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={navigationToTerms}
                                style={{
                                    ...CmStyle.button,
                                    alignSelf: "center",
                                    width: "47%",
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

const styles = StyleSheet.create({});
