import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

import { sateliteService } from "../../services/sateliteService";

export default function NovoDadoSatelital() {
  const [temperatura, setTemperatura] =
    useState("");

  const [umidadeSolo, setUmidadeSolo] =
    useState("");

  const [indiceVegetacao, setIndiceVegetacao] =
    useState("");

  const [riscoSeca, setRiscoSeca] =
    useState("");

  const [plantacaoId, setPlantacaoId] =
    useState("");

  async function salvar() {
    try {
      await sateliteService.criar({
        temperatura: Number(temperatura),
        umidadeSolo: Number(umidadeSolo),
        indiceVegetacao: Number(indiceVegetacao),
        riscoSeca: Number(riscoSeca),
        plantacaoId: Number(plantacaoId),
      });

      Alert.alert(
        "Sucesso",
        "Dados satelitais cadastrados!"
      );

      router.back();
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível cadastrar os dados."
      );

      console.error(error);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>
        🛰️ Novo Dado Satelital
      </Text>

      <TextInput
        placeholder="Temperatura (°C)"
        keyboardType="numeric"
        style={styles.input}
        value={temperatura}
        onChangeText={setTemperatura}
      />

      <TextInput
        placeholder="Umidade do Solo (%)"
        keyboardType="numeric"
        style={styles.input}
        value={umidadeSolo}
        onChangeText={setUmidadeSolo}
      />

      <TextInput
        placeholder="Índice de Vegetação (NDVI)"
        keyboardType="numeric"
        style={styles.input}
        value={indiceVegetacao}
        onChangeText={setIndiceVegetacao}
      />

      <TextInput
        placeholder="Risco de Seca"
        keyboardType="numeric"
        style={styles.input}
        value={riscoSeca}
        onChangeText={setRiscoSeca}
      />

      <TextInput
        placeholder="ID da Plantação"
        keyboardType="numeric"
        style={styles.input}
        value={plantacaoId}
        onChangeText={setPlantacaoId}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >
        <Text style={styles.buttonText}>
          Salvar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
  },

  button: {
    backgroundColor: "#1565C0",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});