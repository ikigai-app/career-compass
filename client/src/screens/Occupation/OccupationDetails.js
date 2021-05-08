import React from "react";
import { Platform, ScrollView, Text } from "react-native";
import { useQuery, gql } from "@apollo/client";
import ConnectPersonCard from "../../components/Occupation/OccuptationDetail/ConnectPerson";
import Experience from "../../components/Occupation/OccuptationDetail/Experience";
import JobDescription from "../../components/Occupation/OccuptationDetail/JobDescription";
import SalaryCard from "../../components/Occupation/OccuptationDetail/SalaryCard";
import TopCard from "../../components/Occupation/OccuptationDetail/TopCard";
import {
  RootView,
  LeftSectionWeb,
} from "../../styles/Occupation/DetailsScreen";
import Loader from "../../components/common/Loader";

const GET_OCCUPATION = gql`
  query occupation($id: ID!) {
    occupation(id: $id) {
      _id
      name
      description
      jobDescription {
        _id
      }
    }
  }
`;

const OccupationDetailsScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const { loading, error, data, refetch } = useQuery(GET_OCCUPATION, {
    variables: { id: id.toString() },
    fetchPolicy: "no-cache",
  });

  if (loading) return <Loader />;
  if (error) return <Text>Error :(</Text>;

  if (Platform.OS === "android" || Platform.OS === "ios") {
    return (
      <ScrollView nestedScrollEnabled={true}>
        <RootView>
          <TopCard data={data} />
          <ConnectPersonCard id={data.occupation._id} />
          <SalaryCard />
          <JobDescription id={data.occupation.jobDescription} />
          <Experience id={data.occupation._id} />
        </RootView>
      </ScrollView>
    );
  }
  return (
    <RootView>
      <LeftSectionWeb>
        <TopCard data={data} />
        <SalaryCard />
        <JobDescription id={data.occupation.jobDescription} />
        <Experience id={data.occupation._id} />
      </LeftSectionWeb>
      <ConnectPersonCard id={data.occupation._id} />
    </RootView>
  );
};

export default OccupationDetailsScreen;
