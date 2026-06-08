import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { useState } from "react";

import { router } from "expo-router";

import { plantacaoService } from "../../services/plantacaoService";

export default function NovaPlantacao() {
  const [tipoCultura, setTipo] =
    useState("");

  const [dataPlantio, setData] =
    useState("");

  const [area, setArea] =
    useState("");

  async function salvar() {
    await plantacaoService.criar({
      tipoCultura,
      dataPlantio,
      areaCultivada:
        Number(area),
      fazendaId: 1,
    });

    router.back();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="SOJA"
        style={styles.input}
        value={tipoCultura}
        onChangeText={setTipo}
      />

      <TextInput
        placeholder="2026-06-08"
        style={styles.input}
        value={dataPlantio}
        onChangeText={setData}
      />

      <TextInput
        placeholder="Área"
        style={styles.input}
        keyboardType="numeric"
        value={area}
        onChangeText={setArea}
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
  container: { flex: 1, padding: 20 },

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