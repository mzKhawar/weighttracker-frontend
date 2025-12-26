import { View, StyleSheet, Dimensions } from "react-native";
import { Theme } from "@/constants/Theme";
import { CartesianChart, Line } from "victory-native";

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

const { height } = Dimensions.get("window");

export default function ProgressChart() {
  return (
    <View style={styles.container}>
      <CartesianChart data={DATA} xKey="day" yKeys={["highTmp"]}>
        {/* 👇 render function exposes various data, such as points. */}
        {({ points }) => (
          // 👇 and we'll use the Line component to render a line path.
          <Line
            points={points.highTmp}
            color={Theme.colors.accent}
            strokeWidth={3}
          />
        )}
      </CartesianChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.27,
    backgroundColor: Theme.colors.card,
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.m,
    borderRadius: 12,
  },
});
