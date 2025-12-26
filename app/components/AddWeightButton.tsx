import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Theme } from "@/constants/Theme";
import React from "react";

type AddWeightModalProps = {
  onPress: () => void;
};

export default function AddWeightButton({ onPress }: AddWeightModalProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Add Weight</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: Theme.colors.accent,
    borderRadius: 20,
    paddingVertical: Theme.spacing.s,
    paddingHorizontal: Theme.spacing.m,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...Theme.typography.label,
  },
});
