import React from "react";
import { Platform, ScrollView } from "react-native";
import ConnectPersonCard from "../../components/Occupation/OccuptationDetail/ConnectPerson";
import JobDescription from "../../components/Occupation/OccuptationDetail/JobDescription";
import SalaryCard from "../../components/Occupation/OccuptationDetail/SalaryCard";
import TopCard from "../../components/Occupation/OccuptationDetail/TopCard";
import {
  RootView,
  LeftSectionWeb,
} from "../../styles/Occupation/DetailsScreen";

const OccupationDetailsScreen = () => {
  if (Platform.OS === "android" || Platform.OS === "ios") {
    return (
      <ScrollView nestedScrollEnabled={true}>
        <RootView>
          <TopCard />
          <ConnectPersonCard />
          {/* <SalaryCard /> */}
          <JobDescription />
        </RootView>
      </ScrollView>
    );
  }
  return (
    <RootView>
      <LeftSectionWeb>
        <TopCard />
        {/* <SalaryCard /> */}
        <JobDescription />
      </LeftSectionWeb>
      <ConnectPersonCard />
    </RootView>
  );
};

export default OccupationDetailsScreen;
