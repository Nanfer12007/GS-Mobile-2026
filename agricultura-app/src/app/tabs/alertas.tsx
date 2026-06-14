import {
  View,
  Text,
  FlatList,
} from "react-native";

const alertas = [
  {
    id: "1",
    tipo: "Temperatura Alta",
  },
  {
    id: "2",
    tipo: "Risco de Seca",
  },
];

export default function Alertas() {
  return (
    <FlatList
      data={alertas}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor:
              "#fff",
            padding: 16,
            margin: 10,
          }}
        >
          <Text>
            ⚠️ {item.tipo}
          </Text>
        </View>
      )}
    />
  );
}