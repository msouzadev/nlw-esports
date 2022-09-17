import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import Background from "./src/components/background/Background";
import { theme } from "./src/theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import Home from "./src/screens/home/Home";
import Loading from "./src/components/loading/Loading";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Background>{fontsLoaded ? <Home /> : <Loading />}</Background>
    </ThemeProvider>
  );
}
