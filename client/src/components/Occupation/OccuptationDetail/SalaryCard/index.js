import React from "react";
import { View, Text, Dimensions } from "react-native";
import { RootView } from "../../../../styles/Occupation/SalaryCard";
import Header from "../../../common/Header";
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from "react-native-chart-kit";

// const data = {
//   labels: ["January", "February", "March", "April", "May", "June"],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//     },
//   ],
// };

const SalaryCard = () => {
  return (
    <RootView>
      <Header text={"SALARY"} />
      <View>
        {/* <Text>Bezier Line Chart</Text> */}
        {/* <BarChart
          style={graphStyle}
          data={data}
          width={screenWidth}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        /> */}
      </View>
    </RootView>
  );
};

export default SalaryCard;
