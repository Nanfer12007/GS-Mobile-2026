import { useLocalSearchParams, router } from "expo-router";
import { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";

import { sateliteService } from "../../services/sateliteService";

export default function EditarSatelite() {
  const { id } = useLocalSearchParams();

  const [temperatura, setTemperatura] =
    useState("");

  const [umidadeSolo, setUmidadeSolo] =
    useState("");

  const [indiceVegetacao, setIndiceVegetacao] =
    useState("");

  const [riscoSeca, setRiscoSeca] =
    useState("");

  async function atualizar() {
    try {
      await sateliteService.atualizar(
        Number(id),
        {
          temperatura:
            Number(temperatura),

          umidadeSolo:
            Number(umidadeSolo),

          indiceVegetacao:
            Number(indiceVegetacao),

          riscoSeca:
            Number(riscoSeca),

          plantacaoId: 1,
        }
      );

      Alert.alert(
        "Sucesso",
        "Registro atualizado"
      );

      router.back();
    } catch {
      Alert.alert(
        "Erro",
        "Não foi possível atualizar"
      );
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Temperatura"
        style={styles.input}
        value={temperatura}
        onChangeText={setTemperatura}
      />

      <TextInput
        placeholder="Umidade"
        style={styles.input}
        value={umidadeSolo}
        onChangeText={setUmidadeSolo}
      />

      <TextInput
        placeholder="NDVI"
        style={styles.input}
        value={indiceVegetacao}
        onChangeText={setIndiceVegetacao}
      />

      <TextInput
        placeholder="Risco de Seca"
        style={styles.input}
        value={riscoSeca}
        onChangeText={setRiscoSeca}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={atualizar}
      >
        <Text style={styles.text}>
          Atualizar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
    borderRadius: 8,
  },

  button: {
    backgroundColor: "#1565C0",
    padding: 15,
    borderRadius: 10,
  },

  text: {
    color: "#fff",
    textAlign: "center",
  },
});