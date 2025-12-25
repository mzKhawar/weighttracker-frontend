import { View, Text, StyleSheet } from "react-native";
import WeightWithUnit from "@/app/components/WeightWithUnit";
import { Theme } from "@/constants/Theme";

type ProgressSummaryProps = {
  goalWeight: number;
  lostWeight: number;
  unit: string;
};

export default function ProgressSummaryCard(props: ProgressSummaryProps) {
  return (
    <View style={[styles.container]}>
      <View style={styles.goalSection}>
        <Text style={styles.label}>Goal Weight</Text>
        <WeightWithUnit
          weight={props.goalWeight}
          unit={props.unit}
          weightTextStyle={Theme.typography.h3}
          unitTextStyle={Theme.typography.body}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.progressSection}>
        <Text style={styles.label}>Total Lost</Text>
        <WeightWithUnit
          weight={props.lostWeight}
          unit={props.unit}
          weightTextStyle={Theme.typography.h3}
          unitTextStyle={Theme.typography.body}
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
    justifyContent: "space-between",
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.xl,
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  goalSection: {
    alignItems: "center",
  },
  divider: {
    width: 1,
    backgroundColor: Theme.colors.divider,
  },
  progressSection: {
    alignItems: "center",
  },
  label: Theme.typography.label,
});
