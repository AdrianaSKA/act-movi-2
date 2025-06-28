import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { Switch } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

export default function DireccionFormularioScreen() {
  const [calle, setCalle] = useState('');
  const [numeroExterior, setNumeroExterior] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [referencias, setReferencias] = useState('');
  const [esFiscal, setEsFiscal] = useState(false);

  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [datosGuardados, setDatosGuardados] = useState({
    calle: '',
    numeroExterior: '',
    ciudad: '',
    referencias: '',
    esFiscal: false,
  });

  function guardarDireccion() {
    if (
      calle.trim() === '' ||
      numeroExterior.trim() === '' ||
      ciudad.trim() === ''
    ) {
      Alert.alert('Error', 'Los campos Calle, Número Exterior y Ciudad son obligatorios');
      return;
    }

    if (!/^\d+$/.test(numeroExterior)) {
      Alert.alert('Error', 'El número exterior debe ser numérico');
      return;
    }

    setDatosGuardados({
      calle: calle.trim(),
      numeroExterior: numeroExterior.trim(),
      ciudad: ciudad.trim(),
      referencias: referencias.trim(),
      esFiscal: esFiscal,
    });

    setMostrarDatos(true);
    Alert.alert('Éxito', '¡Dirección guardada con éxito!');
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
        placeholder="Número Exterior"
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
        placeholder="Referencias (opcional)"
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

      {
        mostrarDatos &&
        <View style={{ marginTop: 30, alignItems: 'flex-start' }}>
          <Text style={styles.datosTitulo}>Datos guardados:</Text>
          <Text style={styles.txt}>Calle: {datosGuardados.calle}</Text>
          <Text style={styles.txt}>Número Exterior: {datosGuardados.numeroExterior}</Text>
          <Text style={styles.txt}>Ciudad: {datosGuardados.ciudad}</Text>
          <Text style={styles.txt}>Referencias: {datosGuardados.referencias || 'Ninguna'}</Text>
          <Text style={styles.txt}>¿Dirección fiscal?: {datosGuardados.esFiscal ? 'Sí' : 'No'}</Text>
        </View>
      }

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
    marginVertical: 2,
  },
  datosTitulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline',
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
