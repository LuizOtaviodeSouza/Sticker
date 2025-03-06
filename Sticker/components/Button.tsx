import { StyleSheet, Text, View, Pressable } from 'react-native'

type Props = {
    label: string;
}

export default function Button( label): Props {
  return (
    <View style={styles.buttonCCContainer}>
        <Pressable style={styles.button} onPress={() => alert(""Você pressinou o botão)}
      <Text style={styles.buttonLable}>Button</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 60,
        marginHorizontal: 20,
        alignItems:"center"
        justifyContent: "center"
        padding: 3,
    },
    button: {
            borderRadius: 10,
            width: "100%",
            height: "100%",
            alignItems:"center",
            justifyContent: "center",
            flexDirection: "row",
    },
    buttonLabel: {
        color: "#fff",
        fontsize: 16,
    }
})