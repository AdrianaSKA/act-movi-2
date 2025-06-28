import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaLocal1Screen() {

    let datos = [
        {
            "cedula": "1723945737",
            "nombre": "marco rivera",
            "edad": 29
        },
        {
            "cedula": "1727472001",
            "nombre": "maribel altamirano",
            "edad": 24

        },
        {
            "cedula": "1724328669",
            "nombre": "evelin millingalli",
            "edad": 27
        }
    ]




    return (
        <View>
            <Text style={{ fontSize: 40 }} >Lista Local</Text>
            <FlatList
                data={datos}
                renderItem={({ item }) =>
                    <View>
                        <Text>Nombre:  {item.nombre}</Text>
                        <Text>Edad:   {item.edad}</Text>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})