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


export default function Terms({navigation,route}) {

  const {dadosCadastro} = route.params
  console.log(dadosCadastro)
  
    function navigateToDataCobranca() {
      navigation.goBack();
  }
  function navigateToLogin() {
      navigation.navigate("Login");
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
                            Termos de Uso
                        </Text>
                        <Text style={{
                                ...CmStyle.greenColor,
                                fontSize: 20,
                                marginBottom: 3,
                                textAlign:"center"
                            }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </Text>    
                       
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 20,
                            }}
                        >
                            <TouchableOpacity
                            onPress={navigateToDataCobranca}
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
                            onPress={navigateToLogin}
                              
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
  )
}

const styles = StyleSheet.create({})