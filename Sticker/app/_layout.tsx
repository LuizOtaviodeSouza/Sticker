import { Stack } from "expo-router";
import Ionincons from "@/vector-icons/"

export default function RootLayout() {
  return(
  <Stack>
      <Stack.Screen name="index" options={{title: "Home"}} />
      <Stack.Screen name="aboult" options={{title: "Sobre"}} />
  </Stack>
)
}