import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  useEffect,
  useState,
} from "react";

import { router } from "expo-router";

import { Plantacao } from "../../types/Plantacao";

import { plantacaoService } from "../../services/plantacaoService";

export default function Plantacoes() {
  const [dados, setDados] =
    useState<Plantacao[]>([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const response =
      await plantacaoService.listar();

    setDados(response);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push(
            "/plantacao/nova"
          )
        }
      >
        <Text style={styles.buttonText}>
          Nova Plantação
        </Text>
      </TouchableOpacity>

      <FlatList
        data={dados}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>
              Cultura:
              {item.tipoCultura}
            </Text>

            <Text>
              Área:
              {item.areaCultivada}
            </Text>

            <Text>
              Plantio:
              {item.dataPlantio}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },

  button: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
});