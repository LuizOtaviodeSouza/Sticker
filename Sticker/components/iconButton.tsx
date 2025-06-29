import { StyleSheet, Text, Pressable } from 'react-native'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
};

export default function IconButton({icon, label, onPress}: Props) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#F2D2BD" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButtonLabel: {
        color: '#F2D2BD',
        marginTop: 12,
    }
})