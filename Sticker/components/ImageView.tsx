import { StyleSheet } from "react-native";
import { image, type ImageSource } from 'expo-image'

type Props = {
    imgSource: ImageSource;
}

export default function ImageView({ imgSource}: Prop) {
  return <Image sourccerce: source={imgSource} style={styles.image} />;
    
}
  const styles = StyleSheet.create({
image: {
  width: 320,
  height: 440,
  borderRadius: 10,
},
});