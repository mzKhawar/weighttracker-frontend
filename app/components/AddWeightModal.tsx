import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Theme } from "@/constants/Theme";

type AddWeightModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: () => void;
};

export default function AddWeightModal({
  visible,
  onClose,
  onSave,
}: AddWeightModalProps) {
  const [weight, setWeight] = useState("");
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose} />

      <View style={styles.modalContent}>
        <Text style={styles.title}>Add Weight</Text>

        <TextInput
          placeholder="Weight"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
          style={styles.input}
          placeholderTextColor={Theme.colors.textSecondary}
        />

        <Button
          title="Save"
          onPress={onSave}
          color={Theme.colors.primary}
        ></Button>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  modalContent: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    backgroundColor: Theme.colors.card,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    shadowOpacity: 0.18,
    elevation: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: Theme.colors.textMain,
    marginBottom: 12,
  },
  input: {
    height: 44,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: Theme.colors.background,
    color: Theme.colors.textMain,
    marginBottom: 16,
  },
  saveButton: {
    height: 44,
    width: 80,
    borderRadius: 10,
    backgroundColor: Theme.colors.accent,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
  },
});
