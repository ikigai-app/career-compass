import React from "react";
import { Platform, ScrollView, Text } from "react-native";
import ConnectPersonCard from "../../components/Occupation/OccuptationDetail/ConnectPerson";
import Experience from "../../components/Occupation/OccuptationDetail/Experience";
import JobDescription from "../../components/Occupation/OccuptationDetail/JobDescription";
import SalaryCard from "../../components/Occupation/OccuptationDetail/SalaryCard";
import TopCard from "../../components/Occupation/OccuptationDetail/TopCard";
import {
  RootView,
  LeftSectionWeb,
} from "../../styles/Occupation/DetailsScreen";
import { useQuery, gql } from "@apollo/client";

const GET_OCCUPATION = gql`
  query getOccupation($id: ID!) {
    getOccupation(id: $id) {
      id
      name
      description
    }
  }
`;

const OccupationDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const { loading, error, data } = useQuery(GET_OCCUPATION, {
    variables: { id: id.toString() },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  const { getOccupation } = data;

  if (Platform.OS === "android" || Platform.OS === "ios") {
    return (
      <ScrollView nestedScrollEnabled={true}>
        <RootView>
          <TopCard data={getOccupation} />
          <ConnectPersonCard />
          <SalaryCard />

          <JobDescription />
          <Experience />
        </RootView>
      </ScrollView>
    );
  }
  return (
    <RootView>
      <LeftSectionWeb>
        <TopCard data={getOccupation} />
        <SalaryCard />
        <JobDescription />
        <Experience />
      </LeftSectionWeb>
      <ConnectPersonCard />
    </RootView>
  );
};

export default OccupationDetailsScreen;
