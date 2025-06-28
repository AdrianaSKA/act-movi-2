import React, { useState } from 'react';
import {View,Text,TextInput,  StyleSheet,Button,  Alert,} from 'react-native';
import Slider from '@react-native-community/slider';
import { RadioButton, Checkbox, Switch } from 'react-native-paper';

type GustoKey = 'diseño' | 'usabilidad' | 'rendimiento';

export default function EncuestaSatisfaccionScreen() {
  const [contacto, setContacto] = useState('');
  const [recomienda, setRecomienda] = useState('');
  const [razon, setRazon] = useState('');
  const [permiteContacto, setPermiteContacto] = useState(false);
  const [valoracion, setValoracion] = useState(5);
  const [comentarios, setComentarios] = useState('');

  const [gustos, setGustos] = useState<Record<GustoKey, boolean>>({
    diseño: false,
    usabilidad: false,
    rendimiento: false,
  });

  function guardarEncuesta() {
    if (contacto.trim() === '' || recomienda === '' || razon.trim() === '') {
      Alert.alert('Error', 'Por favor completa los campos obligatorios');
      return;
    }

    const seleccionados = Object.entries(gustos)
      .filter(([_, val]) => val)
      .map(([key]) => key);

    const resumen = `
Contacto: ${contacto}
Recomienda: ${recomienda}
Razón: ${razon}
Permite contacto: ${permiteContacto ? 'Sí' : 'No'}
Gustos: ${seleccionados.join(', ') || 'Ninguno'}
Valoración: ${valoracion}
Comentarios: ${comentarios || 'Ninguno'}
    `;

    Alert.alert('Encuesta enviada', resumen);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Encuesta de Satisfacción</Text>

      <TextInput
        placeholder="Tu contacto (correo o teléfono)"
        style={styles.input}
        onChangeText={setContacto}
      />

      <Text style={styles.pregunta}>¿Recomendarías nuestra app?</Text>
      <RadioButton.Group onValueChange={setRecomienda} value={recomienda}>
        <View style={styles.radioContainer}>
          <RadioButton value="Sí" />
          <Text style={styles.txt}>Sí</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="No" />
          <Text style={styles.txt}>No</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton value="Quizás" />
          <Text style={styles.txt}>Quizás</Text>
        </View>
      </RadioButton.Group>

      <TextInput
        placeholder="¿Por qué esa valoración?"
        style={styles.input}
        onChangeText={setRazon}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.txt}>¿Podemos contactarte para seguimiento?</Text>
        <Switch value={permiteContacto} onValueChange={setPermiteContacto} />
      </View>

      <Text style={styles.pregunta}>¿Qué te gustó?</Text>
      {(['diseño', 'usabilidad', 'rendimiento'] as GustoKey[]).map((item) => (
        <View key={item} style={styles.checkboxContainer}>
          <Checkbox
            status={gustos[item] ? 'checked' : 'unchecked'}
            onPress={() =>
              setGustos((prev) => ({
                ...prev,
                [item]: !prev[item],
              }))
            }
          />
          <Text style={styles.txt}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
        </View>
      ))}

      <Text style={styles.pregunta}>¿Cómo valorarías la app? ({valoracion})</Text>
      <Slider
        style={{ width: '80%', height: 40 }}
        minimumValue={1}
        maximumValue={10}
        step={1}
        value={valoracion}
        onValueChange={setValoracion}
        minimumTrackTintColor="#fff"
        maximumTrackTintColor="#000"
      />

      <TextInput
        placeholder="Comentarios adicionales (opcional)"
        style={[styles.input, { height: 80 }]}
        multiline
        onChangeText={setComentarios}
      />

      <Button title="Enviar Encuesta" onPress={guardarEncuesta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c86a6',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    color: 'white',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#666',
    color: 'white',
    fontSize: 16,
    width: '80%',
    marginVertical: 6,
    padding: 10,
    borderRadius: 5,
  },
  txt: {
    color: 'white',
    fontSize: 16,
  },
  pregunta: {
    color: 'white',
    fontSize: 18,
    marginTop: 15,
    fontWeight: '500',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    marginVertical: 10,
  },
});