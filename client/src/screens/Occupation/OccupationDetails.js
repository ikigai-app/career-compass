import React from "react";
import { Platform, ScrollView } from "react-native";
import ConnectPersonCard from "../../components/Occupation/OccuptationDetail/ConnectPerson";
import TopCard from "../../components/Occupation/OccuptationDetail/TopCard";
import { RootView } from "../../styles/Occupation/DetailsScreen";

const OccupationDetailsScreen = () => {
  if (Platform.OS === "android") {
    return (
      <ScrollView>
        <RootView>
          <TopCard />
          <ConnectPersonCard />
        </RootView>
      </ScrollView>
    );
  }
  return (
    <RootView>
      <TopCard />
      <ConnectPersonCard />
    </RootView>
  );
};

export default OccupationDetailsScreen;
