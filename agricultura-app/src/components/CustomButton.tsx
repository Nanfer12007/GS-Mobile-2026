import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export default function CustomButton({
  title,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 10,
  },

  text: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});