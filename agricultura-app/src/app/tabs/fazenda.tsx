import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { useEffect, useState } from "react";

import { router } from "expo-router";

import { Fazenda } from "../../types/Fazenda";
import { fazendaService } from "../../services/fazendaService";

export default function FazendasScreen() {
  const [fazendas, setFazendas] = useState<Fazenda[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    const data = await fazendaService.listar();
    setFazendas(data);
    setLoading(false);
  }

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/fazenda/nova")}
      >
        <Text style={styles.buttonText}>
          Nova Fazenda
        </Text>
      </TouchableOpacity>

      <FlatList
        data={fazendas}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text>
              Área: {item.areaTotal}
            </Text>

            <Text>
              Lat: {item.latitude}
            </Text>

            <Text>
              Long: {item.longitude}
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
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },

  nome: {
    fontWeight: "bold",
    fontSize: 18,
  },
});