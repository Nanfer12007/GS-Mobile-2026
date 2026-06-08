import { View, Text, StyleSheet } from "react-native";

interface Props {
  temperatura: number;
  umidadeSolo: number;
  indiceVegetacao: number;
  riscoSeca: number;
}

export default function SateliteCard({
  temperatura,
  umidadeSolo,
  indiceVegetacao,
  riscoSeca,
}: Props) {
  return (
    <View style={styles.card}>
      <Text>🌡️ {temperatura} °C</Text>

      <Text>
        💧 {umidadeSolo} %
      </Text>

      <Text>
        🌿 NDVI: {indiceVegetacao}
      </Text>

      <Text>
        ☀️ Risco: {riscoSeca}
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
});