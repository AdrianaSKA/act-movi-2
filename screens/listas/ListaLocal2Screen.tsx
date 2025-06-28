import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datos from "../../assets/data/futurama.json"
import Tarjeta from '../../components/Tarjeta'



export default function ListaLocal2Screen() {
    return (
        <View>
            <Text>ListaLocal2Screen</Text>
            <FlatList
                data={datos}
                renderItem={({ item }) =>
                    <View>
                        <Tarjeta informacion={item} />
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})