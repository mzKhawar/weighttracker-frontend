import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "@/constants/Theme";
import WeightHero from "@/app/components/WeightHero";
import ProgressSummaryCard from "@/app/components/ProgressSummaryCard";
import ProgressChart from "@/app/components/ProgressChart";
import RecentEntriesList from "@/app/components/RecentEntriesList";
import AddWeightButton from "@/app/components/AddWeightButton";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <WeightHero currentWeight={172.7} unit={"lbs"} />
        <ProgressSummaryCard goalWeight={160} lostWeight={15.2} unit={"lbs"} />
        <ProgressChart />
        <RecentEntriesList />
        <AddWeightButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    backgroundColor: Theme.colors.background,
    paddingHorizontal: Theme.spacing.m,
    paddingVertical: Theme.spacing.m,
    gap: Theme.spacing.m,
  },
});
