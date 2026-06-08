import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";

interface Props {
  title: string;
  value: string | number;
}

export default function DashboardCard({
  title,
  value,
}: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
  },

  title: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  value: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});