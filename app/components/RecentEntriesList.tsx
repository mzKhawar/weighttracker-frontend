import { View, Text, StyleSheet } from "react-native";
import { Theme } from "@/constants/Theme";
import WeightWithUnit from "@/app/components/WeightWithUnit";

type WeightEntry = {
  id: number;
  date: string;
  weight: number;
  delta: string;
};

const entries = [
  { id: 1, date: "Jan 4", weight: 174.2, delta: "+0.4" },
  { id: 2, date: "Feb 23", weight: 173.8, delta: "-0.4" },
  { id: 3, date: "Mar 22", weight: 174.0, delta: "+0.2" },
  { id: 4, date: "Dec 21", weight: 173.5, delta: "-0.5" },
  { id: 5, date: "Jun 20", weight: 174.0, delta: "+0.5" },
];

const EntryView = (entry: WeightEntry) => {
  return (
    <View style={styles.entryRow}>
      <View style={styles.rowLeft}>
        <Text style={styles.date}>{entry.date}</Text>
        <WeightWithUnit
          weight={entry.weight}
          unit={"lbs"}
          weightTextStyle={styles.weightText}
          unitTextStyle={styles.unitText}
        />
      </View>
      <View style={styles.rowRight}>
        <Text style={styles.delta}>{entry.delta}</Text>
      </View>
    </View>
  );
};

export default function RecentEntriesList() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Entries</Text>
      <View style={styles.card}>
        {entries.map((entry) => (
          <EntryView
            key={entry.id}
            id={entry.id}
            date={entry.date}
            weight={entry.weight}
            delta={entry.delta}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: "100%" },
  heading: {
    ...Theme.typography.h2,
    alignSelf: "flex-start",
    marginLeft: Theme.spacing.m,
  },
  card: {
    backgroundColor: Theme.colors.card,
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.m,
    borderRadius: 12,
  },
  entryRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Theme.spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.divider,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: Theme.spacing.m,
  },
  date: { ...Theme.typography.body, width: 60, textAlign: "left" },
  weightText: { ...Theme.typography.body, textAlign: "left" },
  unitText: { ...Theme.typography.body },
  rowRight: {},
  delta: { ...Theme.typography.body },
});
