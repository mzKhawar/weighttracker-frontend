import { View, StyleSheet, Dimensions } from "react-native";
import { Theme } from "@/constants/Theme";
import { Area, CartesianChart, Line, useChartPressState } from "victory-native";
import type { SharedValue } from "react-native-reanimated";
import { Circle, RoundedRect, Text, useFont } from "@shopify/react-native-skia";
// @ts-ignore
import SF from "../../assets/fonts/SF-Pro-Text-Thin.otf";

const DATA = [
  { id: 1, date: "Jan 4", weight: 174.2, delta: "+0.4" },
  { id: 2, date: "Jan 18", weight: 173.9, delta: "-0.3" },
  { id: 3, date: "Feb 2", weight: 173.8, delta: "-0.1" },
  { id: 4, date: "Feb 23", weight: 173.8, delta: "0.0" },
  { id: 5, date: "Mar 5", weight: 174.1, delta: "+0.3" },
  { id: 6, date: "Mar 22", weight: 174.0, delta: "-0.1" },
  { id: 7, date: "Apr 3", weight: 173.6, delta: "-0.4" },
  { id: 8, date: "Apr 19", weight: 173.9, delta: "+0.3" },
  { id: 9, date: "May 1", weight: 174.3, delta: "+0.4" },
  { id: 10, date: "May 16", weight: 174.0, delta: "-0.3" },
  { id: 11, date: "Jun 1", weight: 173.7, delta: "-0.3" },
  { id: 12, date: "Jun 20", weight: 174.0, delta: "+0.3" },
  { id: 13, date: "Jul 2", weight: 174.4, delta: "+0.4" },
  { id: 14, date: "Jul 18", weight: 174.1, delta: "-0.3" },
  { id: 15, date: "Aug 4", weight: 173.9, delta: "-0.2" },
  { id: 16, date: "Aug 22", weight: 174.2, delta: "+0.3" },
  { id: 17, date: "Sep 9", weight: 174.0, delta: "-0.2" },
  { id: 18, date: "Oct 3", weight: 173.7, delta: "-0.3" },
  { id: 19, date: "Nov 14", weight: 173.9, delta: "+0.2" },
  { id: 20, date: "Dec 21", weight: 173.5, delta: "-0.4" },
];

const weights = DATA.map((d) => d.weight);
const minY = Math.min(...weights) - 0.8;
const maxY = Math.max(...weights) + 0.8;

function ToolTip({ x, y }: { x: SharedValue<number>; y: SharedValue<number> }) {
  return (
    <>
      <Circle cx={x} cy={y} r={10} color="rgba(0,0,0,0.15)" />
      <Circle cx={x} cy={y} r={5} color="white" />
    </>
  );
}

export default function ProgressChart() {
  const font = useFont(SF, 12);
  const { state, isActive } = useChartPressState({
    x: "Jan 4", // dont think this is right
    y: { weight: 0 },
  });

  return (
    <View style={styles.container}>
      <CartesianChart
        data={DATA}
        xKey="date"
        yKeys={["weight"]}
        chartPressState={state}
        axisOptions={{
          font,
          labelColor: Theme.colors.textMain,
          tickCount: { x: 4, y: 5 },
          lineColor: "transparent",
        }}
        domain={{ y: [minY, maxY] }}
      >
        {/* 👇 render function exposes various data, such as points. */}
        {({ points, chartBounds }) => (
          <>
            <Line
              points={points.weight}
              curveType="natural"
              strokeWidth={2}
              color={Theme.colors.primary}
            />
            <Area
              curveType="natural"
              connectMissingData={true}
              points={points.weight}
              blendMode="darken"
              y0={chartBounds.bottom}
              color={`${Theme.colors.accent}33`}
            />
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.weight.position} />
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
    height: Dimensions.get("window").height * 0.27,
    backgroundColor: Theme.colors.card,
    paddingVertical: Theme.spacing.s,
    paddingHorizontal: Theme.spacing.s,
    borderRadius: 12,
  },
});
