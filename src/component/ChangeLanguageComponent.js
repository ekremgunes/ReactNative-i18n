import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalization } from "../context/LanguageContext";

const ChangeLanguageComponent = () => {
  const { setLanguage, strings, locale } = useLocalization();

  return (
    <View style={styles.container}>
        
      <Button onPress={() => setLanguage("en")} title={"en"} />
      <Button onPress={() => setLanguage("es")} title={"es"} />
      <Button onPress={() => setLanguage("tr")} title={"tr"} />

      <Text style={{ fontSize: 25, paddingTop: 20 }}>hi : {strings.Hi}</Text>
      <Text style={{ fontSize: 25, paddingTop: 20 }}>locale: {locale}</Text>
    </View>
  );
};

export default ChangeLanguageComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
