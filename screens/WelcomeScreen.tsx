import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomScreen( {navigation} : any ) {
  return (
    <View>
      <Text>WelcomScreen</Text>
      <Button title='Ir a login' onPress={()=> navigation.navigate("Login")}/>
    </View>
  )
}

const styles = StyleSheet.create({})