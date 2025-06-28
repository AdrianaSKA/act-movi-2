import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props: any) {
    console.error(props.informacion.name.first);

    function mostrarDatos(dato: any) {
        Alert.alert(dato.name.last, "El usuario proviene de" + dato.homePlanet)
        //alert("El usuario proviene de" + dato.homePlanet)
    }

    return (
        <TouchableOpacity style={styles.btn} onPress={() => mostrarDatos(props.informacion)} >
            <Text style={styles.txt}>{props.informacion.name.first}  {props.informacion.name.last}</Text>
            <View style={styles.contenidobtn}>
                <Image
                    source={{ uri: props.informacion.images.main }}
                    style={styles.img}
                />

                <View style={styles.infoContainer}>
                    <Text>
                        <Text style={styles.label}>Edad: </Text>
                        {props.informacion.age}
                    </Text>
                    <Text>
                        <Text style={styles.label}>Ocupación: </Text>
                        {props.informacion.occupation}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },

    contenidobtn: {
        flexDirection: 'row',
    },

    btn: {
        backgroundColor: "skyblue",
        margin: 5,
        padding: 10,
        borderRadius: 20,

    },

    img: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
    infoContainer: {
        marginTop: 10,
        alignItems: 'center',
    },

    label: {
        fontWeight: 'bold',
        fontSize: 14,
    },
})