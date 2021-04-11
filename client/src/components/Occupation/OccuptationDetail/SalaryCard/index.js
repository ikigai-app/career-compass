import React from "react";
import { View, Text } from "react-native";
import { RootView } from "../../../../styles/Occupation/SalaryCard";
import Header from "../../../common/Header";

const SalaryCard = () => {
  return (
    <RootView>
      <Header text={"SALARY"} />
    </RootView>
  );
};

export default SalaryCard;
