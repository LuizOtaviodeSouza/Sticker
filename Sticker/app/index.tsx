import { Text, View } from "react-native";
import ImageView, { image } from '@/components/ImageView'
import Button from "@/components/Button";

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
