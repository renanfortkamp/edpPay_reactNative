import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createStackNavigator
} from "@react-navigation/stack";

import Home from "./src/Pages/Home/Home";
import Login from "./src/Pages/Login/Login";

import SingUp from "./src/Pages/SingUp/SingUp";
import Endereco from "./src/Pages/SingUp/Endereco";
import DataCobranca from "./src/Pages/SingUp/DataCobranca";
import Terms from "./src/Pages/SingUp/Terms"

import Conta from "./src/Pages/Conta/Conta"
import Boletos from "./src/Pages/Conta/Boletos"
import Detalhes from "./src/Pages/Conta/Detalhes"
import Pagamento from "./src/Pages/Conta/Pagamento"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const StackSingUp = createStackNavigator();



export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    options={{ headerShown: false, presentation: "modal" }}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{ headerShown: false, presentation: "modal" }}
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    options={{ headerShown: false, presentation: "modal" }}
                    name="SingUp"
                    component={SingUpNavigator}
                />
                <Stack.Screen
                options={{ headerShown: false, presentation: "modal" }}
                name="contaNavigator"
                component={ContaNavigator}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function SingUpNavigator() {
    return (
        <StackSingUp.Navigator initialRouteName="SingUpHome">
            <StackSingUp.Screen
                options={{ headerShown: false, presentation: "modal" }}
                name="SingUpHome"
                component={SingUp}
            />
            <StackSingUp.Screen
                options={{ headerShown: false, presentation: "modal" }}
                name="Endereco"
                component={Endereco}
            />
            <StackSingUp.Screen
                options={{ headerShown: false, presentation: "modal" }}
                name="DataCobrança"
                component={DataCobranca}
            />
            <StackSingUp.Screen
                options={{ headerShown: false, presentation: "modal" }}
                name="Terms"
                component={Terms}
            />            
        </StackSingUp.Navigator>
    );
}

function ContaNavigator() {
    return (
      <Tab.Navigator initialRouteName="conta">
        <Tab.Screen name="Conta" component={Conta} />
        <Tab.Screen name="Pagamento" component={Pagamento} />
        <Tab.Screen name="Detalhes" component={Detalhes} />
        <Tab.Screen name="Boletos" component={Boletos} />
      </Tab.Navigator>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
