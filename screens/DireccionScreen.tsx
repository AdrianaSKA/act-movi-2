import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { Switch } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

export default function DireccionScreen() {
    const [calle, setCalle] = useState('');
    const [numeroExterior, setNumeroExterior] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [referencias, setReferencias] = useState('');
    const [esFiscal, setEsFiscal] = useState(false);

    function guardarDireccion() {
        if (
            calle.trim() === '' ||
            numeroExterior.trim() === '' ||
            ciudad.trim() === ''
        ) {
            Alert.alert('Error', 'Los campos Calle, Numero Exterior y Ciudad son obligatorios');
            return;
        }

    Alert.alert('Mensaje', 'Dirección guardada con éxito');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formulario de Dirección</Text>

      <TextInput
        placeholder="Calle"
        style={styles.input}
        onChangeText={setCalle}
      />
      <TextInput
        placeholder="Numero Exterior"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setNumeroExterior}
      />
      <TextInput
        placeholder="Ciudad"
        style={styles.input}
        onChangeText={setCiudad}
      />
      <TextInput
        placeholder="Referencias"
        style={styles.input}
        onChangeText={setReferencias}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.txt}>¿Es dirección fiscal?</Text>
        <Switch
          value={esFiscal}
          onValueChange={() => setEsFiscal(!esFiscal)}
        />
      </View>

      <Divider style={styles.linea} />

      <Button title="Guardar" onPress={guardarDireccion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c86a6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 32,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    backgroundColor: '#666',
    width: '80%',
    margin: 5,
    paddingHorizontal: 10,
    color: 'white',
    borderRadius: 5,
  },
  txt: {
    color: 'white',
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 5,
  },
  linea: {
    backgroundColor: 'black',
    width: 180,
    height: 1,
    marginVertical: 15,
  },
});
