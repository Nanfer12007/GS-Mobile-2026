import { View, Text, StyleSheet } from "react-native";
import { Plantacao } from "../types/Plantacao";

interface Props {
  plantacao: Plantacao;
}

export default function PlantacaoCard({
  plantacao,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        🌱 {plantacao.tipoCultura}
      </Text>

      <Text>
        Área: {plantacao.areaCultivada} ha
      </Text>

      <Text>
        Plantio: {plantacao.dataPlantio}
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
  },
});