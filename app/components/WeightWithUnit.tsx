import { StyleSheet, Text, TextStyle, View } from "react-native";
import { Theme } from "@/constants/Theme";

type WeightUnitProps = {
  weight: number;
  unit: string;
  weightTextStyle: TextStyle;
  unitTextStyle: TextStyle;
};

export default function WeightWithUnit(props: WeightUnitProps) {
  return (
    <View style={styles.container}>
      <Text style={props.weightTextStyle}>{props.weight}</Text>
      <Text style={[props.unitTextStyle, styles.unitText]}>{props.unit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "baseline",
    flexWrap: "nowrap",
  },
  unitText: {
    marginLeft: Theme.spacing.xs,
  },
});
