import { StyleSheet, TExt, Pressable } from 'react-native'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
};

export default function IconButton({icon, label, onPress}: Props) {
    return (
        <Pressable style={StyleSheet.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={StyleSheet.iconButtonLabel}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'cewnter',
        alingItems: 'center'
    },
    iconButtonLabel: {
        color: "#fff",
        marginTop: 12,
    }
})