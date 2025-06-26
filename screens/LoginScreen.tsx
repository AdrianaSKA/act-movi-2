import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

export default function LoginScreen({navigation} : any) {
  return (
    <View style={styles.container}>
      <Text style={[styles.txt, { fontSize: 60 }]}>Login</Text>

      <TextInput
        placeholder='Ingresar usuario'
        style={[styles.input, styles.txt]}
      />

      <TextInput
        placeholder='Ingresar contraseña'
        style={styles.input}
      />

      <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Tab")}>
        <View style= {styles.fila}>
            <Text style={styles.txt}>Ir a calculadora</Text>
            <Text>  </Text>
            <Entypo name="login" size={40} color="#f7d4db" />
            <Image source={{ uri: 'https://ejemplo.com/ruta/de/imagen.jpg' }} style={styles.img}/>
        </View>
        </TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({
fila: { 
    flexDirection: 'row' 
  },
  btn: {
    backgroundColor: "#21274a",
    width: "80%",
    height: 120,
    alignContent: 'center',
    borderRadius: 20,
    padding: 10,
  },
  img: {
    width: 60,
    height: 60
  },
  container: {
    alignItems: 'center',
    backgroundColor: "#3647ab",
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    backgroundColor: "#666",
    width: "85%",
    height: 60,
    margin: 10,
    borderRadius: 60,
    paddingHorizontal: 30,
    fontSize: 25,
  },
  txt: {
    color: 'white',
    fontSize: 30,
  },
});
