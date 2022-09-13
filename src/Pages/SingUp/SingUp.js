import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { CmStyle } from "../../Styles/CmStyle";

export default function SingUp() {
    return (
        <SafeAreaView style={CmStyle.conteiner}>
            <Text style={{...CmStyle.greenColor, fontSize:40,marginBottom:20}}>Cadastrar Usuario</Text>

            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="SENHA"
                secureTextEntry={true}
                style={{ ...CmStyle.input, fontSize: 20 }}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="SENHA"
                secureTextEntry={true}
                style={{ ...CmStyle.input, fontSize: 20 }}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="SENHA"
                secureTextEntry={true}
                style={{ ...CmStyle.input, fontSize: 20 }}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="SENHA"
                secureTextEntry={true}
                style={{ ...CmStyle.input, fontSize: 20 }}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="SENHA"
                secureTextEntry={true}
                style={{ ...CmStyle.input, fontSize: 20 }}
            />
            <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="SENHA"
                secureTextEntry={true}
                style={{ ...CmStyle.input, fontSize: 20 }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  cadastrar:{
    fontSize:20
  }
});
