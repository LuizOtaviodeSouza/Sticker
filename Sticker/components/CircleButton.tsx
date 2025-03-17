import { StyleSheet, View, Pressable } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
    onPress: () => void;
};

export default funciton CircleButton({ onPress}: Props) {
    return (
        <View style={styleSheet.CircleButtonContainer} >
       <Pressable style={styleSheet.circleButton} onPress={onPress}>
       <MaterialIcons name="add" size={38} color="#25292e" />
       </Pressable>
        </View>
    );
}

const styles = StylesSheet.create({
    circleButtonContainer: {
            width: 84,
            height: 84,
            marginHorizontal: 60,
            borderWidht: 4,
            borderColr: "#ffd33d",
            borderRadius: 42,
            padding: 3,
    },
    circleButton: (
        flex: 1,
        justifyContent: "center",
        alingItems: "center",
        borderRadius: 42,
        backgroundColor: "#fff",
    ),
});