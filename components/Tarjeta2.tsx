import { Button, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta2(props: any) {
    //console.log(props.informacion.name)
    const [mostrar, setmostrar] = useState(false)

    return (
        <View>
            <TouchableOpacity style={styles.fila} onPress={() => setmostrar(true)} >
                <Image source={{ uri: props.informacion.image }} style={styles.img} />
                <Text>{props.informacion.name}</Text>
            </TouchableOpacity>
            <Modal visible={mostrar}
            transparent={true} 
            >
                <View style={styles.modalContainer} >
                    <View style={styles.modal} >
                        <Image source={{ uri: props.informacion.image }} style={styles.modalIMG} />
                        <Text>{props.informacion.name}</Text>
                        <Button title='cerrar' onPress={() => setmostrar(false)} />
                    </View>
                </View>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    modalContainer:{
        width: "90%",
        height:"80%",
        backgroundColor:'white',
        borderRadius: 20,
        padding:20,
    },
    modal: {
        backgroundColor: '#2bf7361c',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalIMG: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
    },

    img: {
        height: 70,
        width: 30,
        resizeMode: 'contain',

    },
    fila: {
        flexDirection: 'row',
        backgroundColor: '#6666',
        margin: 6,
        borderRadius: 20,
    }
})