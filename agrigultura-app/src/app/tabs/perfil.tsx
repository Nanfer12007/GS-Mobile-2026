import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";

import { storage } from "../../utils/storage";

export default function Perfil() {
  async function sair() {
    await storage.removeToken();

    router.replace("/login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Perfil
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={sair}
      >
        <Text style={styles.text}>
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});