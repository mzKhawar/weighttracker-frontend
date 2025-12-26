import { View, StyleSheet, Dimensions } from "react-native";
import { Theme } from "@/constants/Theme";
import { CartesianChart, Line, useChartPressState } from "victory-native";
import type { SharedValue } from "react-native-reanimated";
import { Circle, useFont } from "@shopify/react-native-skia";
import SF from "../../assets/fonts/SF-Pro-Text-Thin.otf";

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  highTmp: 40 + 30 * Math.random(),
}));

const { height } = Dimensions.get("window");

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return <Circle cx={x} cy={y} r={8} color="black" />;
}

export default function ProgressChart() {
  const font = useFont(SF, 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { highTmp: 0 } });
  return (
    <View style={styles.container}>
      <CartesianChart
        data={DATA}
        xKey="day"
        yKeys={["highTmp"]}
        chartPressState={state}
        axisOptions={{ font, labelColor: Theme.colors.textMain }}
      >
        {/* 👇 render function exposes various data, such as points. */}
        {({ points }) => (
          <>
            <Line
              points={points.highTmp}
              color={Theme.colors.accent}
              strokeWidth={3}
            />
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.highTmp.position} />
            )}
          </>
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
