import { View, Text, StyleSheet } from "react-native";
import WeightWithUnit from "@/app/components/WeightWithUnit";
import { Theme } from "@/constants/Theme";

type ProgressSummaryProps = {
  goalWeight: number;
  progress: number;
  unit: string;
};

export default function ProgressSummaryCard(props: ProgressSummaryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.label}>Goal Weight</Text>
        <WeightWithUnit
          weight={props.goalWeight}
          unit={props.unit}
          weightTextStyle={styles.weightText}
          unitTextStyle={styles.unitText}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.label}>Progress</Text>
        <WeightWithUnit
          weight={props.progress}
          unit={props.unit}
          weightTextStyle={styles.weightText}
          unitTextStyle={styles.unitText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.card,
    flexDirection: "row",
    width: "100%",
    borderRadius: 12,
    paddingVertical: Theme.spacing.xs,
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    width: 1,
    backgroundColor: Theme.colors.divider,
  },
  progressSection: {
    alignItems: "center",
  },
  label: { ...Theme.typography.label },
  weightText: { ...Theme.typography.h3 },
  unitText: { ...Theme.typography.body },
});
