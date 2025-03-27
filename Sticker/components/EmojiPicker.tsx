import { PropsWithChildren } from 'react'
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import MaterialIcons
from '@expo/vector-icons/MaterialIcons'

type Props = PropsWithChildren<{
    isVasible: boolean;
    onClose: () => void;
}>;

export default funciton EmojiPicker ((  isVisible, children, onClose): Props){
    return (
        <View>
    <Modal animationType='slide' transparent={true} visible={isVisible}>
    <View style={styles.modalContent}>
        <View style={styles.tittleContainer}>
            <Text style={styles.titlle}>Escolha uma figurinha</Text>
            <Pressable onPress={onClose}>
                <MaterialIcons name='close' color='#fff' size={22} />
            </Pressable>
        </View>
        {children}
    </View>
    </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        height: '25%',
        width: "100%",
        backgroundColor: "#25292e",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titçeContainer:{
        height: '16%',
        backgroundColor: '#464c55',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems:   'center',
        justifyContent: 'space-between',
    },
    title:{
        color: '#fff',
        fontSize: 16,
    }
}) 