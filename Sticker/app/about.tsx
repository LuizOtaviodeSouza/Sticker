import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AboutScrean() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Sobre</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#a25292e",
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        color: "#fff"
    }
})