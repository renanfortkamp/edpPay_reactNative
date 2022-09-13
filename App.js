import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Pages/Home/Home";
import SingUp from "./src/Pages/SingUp/SingUp";
import Login from "./src/Pages/Login/Login";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
                <Stack.Screen options={{headerShown:false}} name="SingUp" component={SingUp} />
                <Stack.Screen options={{headerShown:false}} name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
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
