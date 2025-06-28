import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { BlurView } from 'expo-blur';
import { StyleSheet } from "react-native";
import { Component } from "react";
import DireccionScreen from "../screens/DireccionScreen";
import RegistroUsuarioScreen from "../screens/RegistroUsuarioScreen";
import EncuestaSatisfaccionScreen from "../screens/EncuestaSatisfaccionScreen";


const Tab = createBottomTabNavigator()

function MyWork() {

    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarStyle: { position: 'absolute' },
                tabBarBackground: () => (
                    <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
                ),
            }}
        >
            <Tab.Screen
                name="RegistroUsuario"
                component={RegistroUsuarioScreen}
                options={{
                    tabBarIcon: () => (<AntDesign name="home" size={24} color="black" />)
                }}
            />

            <Tab.Screen
                name="Direccion"
                component={DireccionScreen}
                options={{
                    tabBarIcon: () => (<Entypo name="login" size={24} color="black" />)
                }}
            />



            <Tab.Screen
                name="EncuestaSatisfaccion"
                component={EncuestaSatisfaccionScreen}
                options={{
                    tabBarIcon: () => (<AntDesign name="calculator" size={24} color="black" />)
                }}
            />
        </Tab.Navigator>
    )
}

export default function WorkNavigator() {

    return (
        <NavigationContainer>
            <MyWork />
        </NavigationContainer>
    )
}