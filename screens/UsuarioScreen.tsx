import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { Switch } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

export default function UsuarioScreen() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [aceptaTerminos, setAceptaTerminos] = useState(false);
    const [suscribirse, setSuscribirse] = useState(false);

    function guardarRegistro() {
        if (
            nombre.trim() === '' ||
            apellido.trim() === '' ||
            telefono.trim() === '' ||
            contrasena.trim() === ''
        ) {
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return;
        }

    if (!aceptaTerminos) {
        Alert.alert('Error', 'Debe aceptar los términos y condiciones');
        return;
    }

    Alert.alert('Mensaje', 'Registro completado con éxito');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro de Usuario</Text>

      <TextInput
        placeholder="Nombre"
        style={styles.input}
        onChangeText={setNombre}
      />
      <TextInput
        placeholder="Apellido"
        style={styles.input}
        onChangeText={setApellido}
      />
      <TextInput
        placeholder="Teléfono"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={setTelefono}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
        onChangeText={setContrasena}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.txt}>Aceptar términos</Text>
        <Switch
          value={aceptaTerminos}
          onValueChange={() => setAceptaTerminos(!aceptaTerminos)}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.txt}>Suscribirse al newsletter</Text>
        <Switch
          value={suscribirse}
          onValueChange={() => setSuscribirse(!suscribirse)}
        />
      </View>

      <Divider style={styles.linea} />

      <Button title="Registrar" onPress={guardarRegistro} />
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
