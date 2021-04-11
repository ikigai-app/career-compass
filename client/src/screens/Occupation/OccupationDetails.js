import React from "react";
import { Platform, ScrollView } from "react-native";
import ConnectPersonCard from "../../components/Occupation/OccuptationDetail/ConnectPerson";
import SalaryCard from "../../components/Occupation/OccuptationDetail/SalaryCard";
import TopCard from "../../components/Occupation/OccuptationDetail/TopCard";
import {
  RootView,
  LeftSectionWeb,
} from "../../styles/Occupation/DetailsScreen";

const OccupationDetailsScreen = () => {
  if (Platform.OS === "android") {
    return (
      <ScrollView>
        <RootView>
          <TopCard />
          <ConnectPersonCard />
          <SalaryCard />
        </RootView>
      </ScrollView>
    );
  }
  return (
    <RootView>
      <LeftSectionWeb>
        <TopCard />
        <SalaryCard />
      </LeftSectionWeb>
      <ConnectPersonCard />
    </RootView>
  );
};

export default OccupationDetailsScreen;
