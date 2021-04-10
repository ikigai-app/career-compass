import React from "react";
import { View, Text } from "react-native";
import TopCard from "../../components/Occupation/OccuptationDetail/TopCard";
import { RootView } from "../../styles/Occupation/DetailsScreen";

const OccupationDetailsScreen = () => {
  return (
    <RootView>
      <TopCard />
    </RootView>
  );
};

export default OccupationDetailsScreen;
