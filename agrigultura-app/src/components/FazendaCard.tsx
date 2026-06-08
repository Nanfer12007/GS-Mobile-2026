import { View, Text, StyleSheet } from "react-native";
import { Fazenda } from "../types/Fazenda";

interface Props {
  fazenda: Fazenda;
}

export default function FazendaCard({ fazenda }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        🚜 {fazenda.nome}
      </Text>

      <Text>
        Área: {fazenda.areaTotal} ha
      </Text>

      <Text>
        Latitude: {fazenda.latitude}
      </Text>

      <Text>
        Longitude: {fazenda.longitude}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});