import { StyleSheet, Text, TextStyle, View } from "react-native";
import WeightWithUnit from "@/app/components/WeightWithUnit";
import { Theme } from "@/constants/Theme";
type WeightHeroProps = {
  currentWeight: number;
  unit: string;
};

export default function WeightHero(props: WeightHeroProps) {
  return (
    <View style={styles.container}>
      <WeightWithUnit
        weight={props.currentWeight}
        unit={props.unit}
        weightTextStyle={styles.weightText}
        unitTextStyle={styles.unitText}
      />
      <Text style={styles.label}>Current Weight</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  weightText: {
    fontSize: 60,
    fontWeight: "800" as TextStyle["fontWeight"],
    color: Theme.colors.primary,
  },
  unitText: {
    fontSize: 18,
    fontWeight: "500" as TextStyle["fontWeight"],
    color: Theme.colors.textSecondary,
    lineHeight: 22,
  },
  label: {
    fontSize: 18,
    color: Theme.colors.textSecondary,
    fontWeight: "500" as TextStyle["fontWeight"],
  },
});
