import { View, Text, StyleSheet } from "react-native";
import { Theme } from "@/constants/Theme";
import { Image } from "expo-image";

export default function ProgressChart() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/chart-example.png")}
        style={{
          width: "100%",
          height: 200,
          resizeMode: "contain",
          borderRadius: 12,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Theme.colors.card,
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.m,
    borderRadius: 12,
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
