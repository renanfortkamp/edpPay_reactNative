import { StyleSheet, Text, View,TouchableOpacity,Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../Services/Service";
import { CmStyle } from "../../Styles/CmStyle";
import { useIsFocused } from "@react-navigation/native";

export default function Pagamento() {
  const {width,height} = Dimensions.get("screen")
    const [id, setId] = useState("");
    const [user, setUser] = useState([]);
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

    useEffect(() => {
        getId();
    }, [focused]);
  return (
    <View>
      <Text>meu id é : {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})