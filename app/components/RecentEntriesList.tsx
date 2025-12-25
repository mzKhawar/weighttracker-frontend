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
  { id: 1, date: "Apr 24", weight: 174.2, delta: "+0.4" },
  { id: 2, date: "Apr 23", weight: 173.8, delta: "-0.4" },
  { id: 3, date: "Apr 22", weight: 174.0, delta: "+0.2" },
  { id: 4, date: "Apr 21", weight: 173.5, delta: "-0.5" },
  { id: 5, date: "Apr 20", weight: 174.0, delta: "+0.5" },
  { id: 6, date: "Apr 19", weight: 173.5, delta: "-0.5" },
];

const EntryView = (entry: WeightEntry) => {
  return (
    <View style={styles.entryRow}>
      <View style={styles.rowLeft}>
        <Text style={Theme.typography.body}>{entry.date}</Text>
        <WeightWithUnit
          weight={entry.weight}
          unit={"lbs"}
          weightTextStyle={Theme.typography.body}
          unitTextStyle={Theme.typography.body}
        />
      </View>
      <View style={styles.rowRight}>
        <Text style={Theme.typography.body}>{entry.delta}</Text>
      </View>
    </View>
  );
};

export default function RecentEntriesList() {
  return (
    <View style={styles.container}>
      <Text
        style={[
          Theme.typography.h2,
          { alignSelf: "flex-start", marginLeft: Theme.spacing.m },
        ]}
      >
        Recent Entries
      </Text>
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
  container: { width: "100%" },
  card: {
    backgroundColor: Theme.colors.card,
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.m,
    borderRadius: 12,
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  entryRow: {
    flexDirection: "row", // y not taking 100%
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Theme.spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.divider,
  },
  rowLeft: {
    flexDirection: "row",
    gap: Theme.spacing.m,
  },
  rowRight: {},
});
