import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function CalculadoraScreen() {
    const [numero1, setNumero1] = useState(0);
    const [numero2, setNumero2] = useState(0);

    useEffect(() => {
        if (numero1 <= -5) {
            setNumero1(-5);
        }

        if (numero1 >= 5) {
            setNumero1(5);
        }
    }, [numero1, numero2]);

    function sumar() {
        let suma = numero1 + numero2;
        Alert.alert("Respuesta", "La respuesta es " + suma);
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 60}}>Calculadora</Text>

            <View style={styles.fila}>
                <Button title=' - ' onPress={() => setNumero1(numero1 - 1)} />
                <Text style={{fontSize: 30}}>{numero1}</Text>
                <Button title=' + ' onPress={() => setNumero1(numero1 + 1)} />
            </View>

            <View style={styles.fila}>
                <Button title=' - ' onPress={() => setNumero2(numero2 - 1)} color={'green'} />
                <Text style={{fontSize: 30}}>{numero2}</Text>
                <Button title=' + ' onPress={() => setNumero2(numero2 + 1)} color={'green'} />
            </View>

            <View style={styles.linea} />

            <Button title='Suma' onPress={sumar} />
        </View>
    );
}

const styles = StyleSheet.create({
    linea:{
        backgroundColor: 'black',
        width: 180,
        borderWidth: 1,
        margin: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#95924b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fila: {
        flexDirection: 'row',

    }
});