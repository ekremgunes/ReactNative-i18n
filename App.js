import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LocalizationProvider } from "./src/context/LanguageContext";
import ChangeLanguageComponent from './src/component/ChangeLanguageComponent';

export default function App() {
  return (
    <LocalizationProvider>
      <ChangeLanguageComponent/>
    </LocalizationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//loves from ekrem güneş