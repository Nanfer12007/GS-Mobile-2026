import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";

import { useState } from "react";

import { router } from "expo-router";

import { fazendaService } from "../../services/fazendaService";

export default function NovaFazenda() {
  const [nome, setNome] = useState("");
  const [areaTotal, setAreaTotal] =
    useState("");

  const [latitude, setLatitude] =
    useState("");

  const [longitude, setLongitude] =
    useState("");

  async function salvar() {
    try {
      await fazendaService.criar({
        nome,
        areaTotal:
          Number(areaTotal),
        latitude:
          Number(latitude),
        longitude:
          Number(longitude),
        proprietarioId: 1,
      });

      Alert.alert(
        "Sucesso",
        "Fazenda cadastrada"
      );

      router.back();
    } catch {
      Alert.alert(
        "Erro",
        "Não foi possível salvar"
      );
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Área Total"
        style={styles.input}
        keyboardType="numeric"
        value={areaTotal}
        onChangeText={setAreaTotal}
      />

      <TextInput
        placeholder="Latitude"
        style={styles.input}
        value={latitude}
        onChangeText={setLatitude}
      />

      <TextInput
        placeholder="Longitude"
        style={styles.input}
        value={longitude}
        onChangeText={setLongitude}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={salvar}
      >
        <Text style={styles.text}>
          Salvar
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
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },

  button: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 10,
  },

  text: {
    color: "#fff",
    textAlign: "center",
  },
});