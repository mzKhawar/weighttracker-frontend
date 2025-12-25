import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Theme } from "@/constants/Theme";

export default function AddWeightButton() {
  return (
    <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Add Weight</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%", // full width, or use a fixed width if needed
    backgroundColor: Theme.colors.accent,
    borderRadius: 20,
    paddingVertical: Theme.spacing.s, // vertical padding
    paddingHorizontal: Theme.spacing.m, // horizontal padding
    alignItems: "center", // centers the text horizontally
    justifyContent: "center", // centers the text vertically
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Android shadow
  },
  buttonText: {
    color: "#202C39",
    fontWeight: "700",
    fontSize: 16,
  },
});
