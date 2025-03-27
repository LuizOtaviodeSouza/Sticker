import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import ImageView from "@/components/ImageView";
import { useState } from "react";
import IconButton from "@/components/iconButton";

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  return (
    <View style = {styles.container}>
      <View styles={styles.imageContainer}>
        <ImageView imgSource={PlaceholderImage} />
        </View>
        <View style={styles.footerContainer}>
          <Button 
          label="Escolher foto"
           theme="primary"
           onPress={pickImageAsync} 
           />
          
          <Button label="Usar foto" />
        </View>
    </View>
  );
}

const onReset = () => {
  setShowAppOptions(false);
}

const onAddStricker = () => {
  setIsModalVisible(true);
}

const onModalClose = () => {
  setModalVisible(false);
}

const onSaveImageAsnc = () => {

}

const styles = StylesSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25592e",
    alingItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
});
if ( !result.canceled) {
  setSelec
}
