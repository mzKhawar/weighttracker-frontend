import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme } from "@/constants/Theme";
import WeightHero from "@/app/components/WeightHero";
import ProgressSummaryCard from "@/app/components/ProgressSummaryCard";
import ProgressChart from "@/app/components/ProgressChart";
import RecentEntriesList from "@/app/components/RecentEntriesList";
import AddWeightButton from "@/app/components/AddWeightButton";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import AddWeightModal from "@/app/components/AddWeightModal";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddWeightPress = () => {
    setModalVisible(true);
  };

  const handleSaveWeight = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <WeightHero currentWeight={172.7} unit={"lbs"} />
        <ProgressSummaryCard goalWeight={160} progress={-15.2} unit={"lbs"} />
        <ProgressChart />
        <RecentEntriesList />
        <AddWeightButton onPress={handleAddWeightPress} />
        <AddWeightModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleSaveWeight}
        />
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
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: Theme.colors.background,
    paddingHorizontal: Theme.spacing.m,
    paddingVertical: Theme.spacing.m,
    gap: Theme.spacing.m,
  },
});
