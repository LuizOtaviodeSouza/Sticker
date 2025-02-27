import { Text, View } from "react-native";
import { image } from 'empo-image'

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style = {styles.container}>
      <View styles={styles.imageContainer}>
        <Image sourcce={PlaceholderImage} style={StyleSheet.image} />
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
  image: {
    width: 320,
    height: 400,
    borderRadius: 18
  },
});
