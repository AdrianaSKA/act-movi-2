import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { Switch } from 'react-native-gesture-handler';
import { Divider } from 'react-native-paper';

export default function RegistroUsuarioScreen() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [suscribirse, setSuscribirse] = useState(false);

  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [datosGuardados, setDatosGuardados] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    aceptaTerminos: false,
    suscribirse: false,
  });

  function guardarRegistro() {
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      telefono.trim() === '' ||
      contrasena.trim() === '' ||
      confirmarContrasena.trim() === ''
    ) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (!/^\d+$/.test(telefono)) {
      Alert.alert('Error', 'El teléfono debe contener solo números');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debe aceptar los términos y condiciones');
      return;
    }

    setDatosGuardados({
      nombre: nombre.trim(),
      apellido: apellido.trim(),
      telefono: telefono.trim(),
      aceptaTerminos: aceptaTerminos,
      suscribirse: suscribirse,
    });

    setMostrarDatos(true);
    Alert.alert('Mensaje', 'El registro fue exitoso');
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
      <TextInput
        placeholder="Confirmar Contraseña"
        style={styles.input}
        secureTextEntry
        onChangeText={setConfirmarContrasena}
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

      {mostrarDatos && (
        <View style={{ marginTop: 30, alignItems: 'flex-start' }}>
          <Text style={styles.datosTitulo}>Datos registrados:</Text>
          <Text style={styles.txt}>Nombre: {datosGuardados.nombre}</Text>
          <Text style={styles.txt}>Apellido: {datosGuardados.apellido}</Text>
          <Text style={styles.txt}>Teléfono: {datosGuardados.telefono}</Text>
          <Text style={styles.txt}>¿Aceptó términos?: {datosGuardados.aceptaTerminos ? 'Sí' : 'No'}</Text>
          <Text style={styles.txt}>¿Suscrito al newsletter?: {datosGuardados.suscribirse ? 'Sí' : 'No'}</Text>
        </View>
      )}
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
  datosTitulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
