import React, { useState } from "react";
import { View, Text, Dimensions, Platform } from "react-native";
import { RootView } from "../../../../styles/Occupation/SalaryCard";
import Header from "../../../common/Header";
import RNPickerSelect from "react-native-picker-select";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const SalaryCard = () => {
  const [type, setType] = useState("Select Country");
  return (
    <RootView>
      <Header text={"SALARY"} />

      <View style={{ marginTop: 20 }}>
        <RNPickerSelect
          useNativeAndroidPickerStyle={true}
          style={{
            inputWeb: {
              backgroundColor: "white",
              height: 30,
              fontSize: 14,
              width: 150,
            },
            inputAndroid: {
              // width: 200,
              borderRadius: 8,
              height: 45,
              fontSize: 14,

              marginBottom: 10,

              color: "#8a8a8a",
            },
          }}
          placeholder={{
            label: "Select Country",
            value: "Select Country",
          }}
          value={type}
          onValueChange={(type) => setType(type)}
          items={[
            { label: "USA", value: "usa" },
            { label: "INDIA", value: "india" },
          ]}
        />
      </View>
      <View
        style={{
          flex: 1,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <>
          <BarChart
            data={{
              // labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [20, 45, 28, 80, 99, 43],
                },
              ],
            }}
            width={
              Platform.OS === "web" ? 600 : Dimensions.get("window").width - 60
            }
            height={Platform.OS === "web" ? 300 : 240}
            // yAxisLabel={"Rs"}
            chartConfig={{
              backgroundColor: "#1cc910",
              backgroundGradientFrom: "#eff3ff",
              backgroundGradientTo: "#efefef",
              // decimalPlaces: 2,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              // marginVertical: 8,
              borderRadius: 4,
            }}
          />
        </>
      </View>
    </RootView>
  );
};

export default SalaryCard;
