import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { router } from "expo-router";

import { authService } from "../services/authService";
import { storage } from "../utils/storage";
import { COLORS } from "../constants/colors";

export default function LoginScreen() {
  const [email, setEmail] =
    useState("");

  const [senha, setSenha] =
    useState("");

  async function handleLogin() {
    try {
      const response =
        await authService.login(
          email,
          senha
        );

      await storage.saveToken(
        response.token
      );

      router.replace(
        "/tabs/dashboard"
      );
    } catch (error: any) {
  console.log("STATUS:", error?.response?.status);
  console.log("DATA:", error?.response?.data);
  console.log("ERROR:", error);

  Alert.alert(
    "Erro",
    JSON.stringify(error?.response?.data || error.message)
  );
}
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Agricultura Inteligente
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor:
      COLORS.background,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: COLORS.primary,
  },

  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  button: {
    backgroundColor:
      COLORS.primary,
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});