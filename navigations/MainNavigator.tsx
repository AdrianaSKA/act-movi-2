import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import FormularioScreen from "../screens/FormularioScreen";
import ListaLocal1Screen from "../screens/listas/ListaLocal1Screen";
import ListaLocal2Screen from "../screens/listas/ListaLocal2Screen";
import ListaExternaScreen from '../screens/listas/ListaExternaScreen';

const Stack = createStackNavigator()

function MyStack() {

    return (
        <Stack.Navigator initialRouteName="Tab">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Tab" component={MyTabs} />
        </Stack.Navigator>

    )
}

const Tab = createBottomTabNavigator()

function MyTabs() {

    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Top">
            <Tab.Screen name="Calculadora" component={CalculadoraScreen} />
            <Tab.Screen name="Formulario" component={FormularioScreen} />
            <Tab.Screen name="Top" component={MyTops} />
        </Tab.Navigator>

    )
}

const Top = createMaterialTopTabNavigator()
    function MyTops(){
        return (
            <Top.Navigator initialRouteName="ListaLocal2">
                <Top.Screen name="ListaLocal1" component={ListaLocal1Screen} />
                <Top.Screen name="ListaLocal2" component={ListaLocal2Screen} />
                <Top.Screen name="Externa" component={ListaExternaScreen} />
            </Top.Navigator>
        )
    }
    
export default function NavegadorPrincipal() {

    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}