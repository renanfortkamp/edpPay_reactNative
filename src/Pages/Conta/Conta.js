import { StyleSheet, Text, View,TouchableOpacity,Dimensions,BackHandler,Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { BigHead } from "react-native-bigheads";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../Services/Service";
import { CmStyle } from "../../Styles/CmStyle";
import { useIsFocused } from "@react-navigation/native";


export default function Conta({navigation}) {
    const {width,height} = Dimensions.get("screen")
    const [id, setId] = useState("");
    const [user, setUser] = useState([]);
    const focused = useIsFocused();

    function quitApp(){
    //   navigation.navigate("Home")
      Alert.alert("Atenção", "Você realmente deseja sair do app?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Sim", onPress: () => BackHandler.exitApp() }
      ]);
    }
    
    
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

    useEffect(() => {
        getId();
    }, [focused]);

    return (
        <View style={{ ...CmStyle.conteiner, alignItems: "center",justifyContent:'space-between' }}>
            
            <View style={{marginTop:30, alignItems:"center"}}>
            <BigHead showBackground={true} size={width * 0.70} />
            {console.log(BigHead)}

            {user.map((dado) => (
                <View style={{ alignItems: "center" }} key={dado.id}>
                    <Text style={{ ...CmStyle.greenColor, fontSize: 30,textAlign:'center' }}>
                        {dado.nome}
                    </Text>
                    <Text style={CmStyle.greenColor}>
                        Telefone:{dado.telefone}
                    </Text>
                    <Text style={CmStyle.greenColor}>E-mail:{dado.email}</Text>
                    <Text style={CmStyle.greenColor}>Rg:{dado.rg}</Text>
                    <Text style={CmStyle.greenColor}>Cpf:{dado.cpf}</Text>
                </View>
            ))}
            </View>

            <TouchableOpacity
                onPress={quitApp}
                style={{
                    ...CmStyle.button,
                    alignSelf: "center",
                    width: "45%",
                    marginBottom:20
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
