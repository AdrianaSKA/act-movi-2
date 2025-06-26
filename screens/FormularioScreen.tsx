import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { act, useState } from 'react'
import { Switch } from 'react-native-gesture-handler';
import { Divider, Snackbar } from 'react-native-paper';

export default function FormularioScreen() {

  const [nombre, setnombre] = useState("")
  const [edad, setedad] = useState(0)
  const [datos, setdatos] = useState({"nombre": "", "edad":0})
  const [activado, setactivado] = useState(false)


  function guardar(){
    if(nombre.trim() != "" && edad.toString().trim()){
      setdatos(
      {
        "nombre": nombre.trim(),
        "edad": edad,
      }
    )
    Alert.alert("Mensaje", "Los datos se han guardado con exito")
    } else {
      Alert.alert("Error", "No se permiten campos en blanco")
    }



    
  }

  return (
    <View style= {styles.container}>
      <Text style={{fontSize: 50}}>Formulario</Text>

      <TextInput
        placeholder='Ingresar nombre'
        style = {styles.input}
        onChangeText={(texto)=> setnombre(texto)}
      />

      <TextInput
        placeholder='Ingresar edad'
        style = {styles.input}
        onChangeText={(texto)=> setedad(+texto)}
        keyboardType='numeric'
      />

      <Button title='Guardar' onPress={()=> guardar()}/>


      <View style={styles.linea} />
              <Text style= {styles.txt}>Ver datos</Text>
              <Switch
                value= {activado}
                onValueChange={()=> setactivado(!activado)}
              />


        <View style={styles.linea} />

        {
          activado == true
          ?   <View>
                <Text style= {styles.txt}>Nombre: {datos.nombre}</Text>
                <Text style = {styles.txt}>Edad: {datos.edad}</Text>
              </View>
          :  <Text style = {styles.txt}>Alerta de Spoiler</Text>
        }


        <Snackbar
          visible={activado}
          onDismiss={()=> setactivado(!activado)}
          action={{
            label: 'Undo',
            onPress: () => {
              // Do something
            },
          }}>
          Hey there! I'm a Snackbar.
        </Snackbar>
      

    </View>
  )
}

const styles = StyleSheet.create({
  linea:{
        backgroundColor: 'black',
        width: 180,
        borderWidth: 1,
        margin: 10,
    },
    txt: {
    color: 'white',
    fontSize: 20,
  },
  input:{
    fontSize: 20,
    backgroundColor: '#666',
    width: "80%",
    margin: 2
  },
  container: {
    flex: 1,
    backgroundColor: '#1c86a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})