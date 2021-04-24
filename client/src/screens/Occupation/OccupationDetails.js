import React, { useEffect, useState } from "react";
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
      connectPeople {
        id
        name
        description
        socialMedia {
          id
          url
          type
        }
      }
      jobDescription {
        id
        roles {
          id
          role
        }
        requirements {
          id
          requirement
        }
        skills1 {
          id
          skill1
        }
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

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  // console.log("refetch.....", data);

  if (Platform.OS === "android" || Platform.OS === "ios") {
    return (
      <ScrollView nestedScrollEnabled={true}>
        <RootView>
          <TopCard data={data} />
          <ConnectPersonCard data={data} refetch={() => refetch()} />
          <SalaryCard />

          <JobDescription data={data} refetch={() => refetch()} />
          <Experience />
        </RootView>
      </ScrollView>
    );
  }
  return (
    <RootView>
      <LeftSectionWeb>
        <TopCard data={data} />
        <SalaryCard />
        <JobDescription data={data} refetch={() => refetch()} />
        <Experience />
      </LeftSectionWeb>
      <ConnectPersonCard data={data} refetch={() => refetch()} />
    </RootView>
  );
};

export default OccupationDetailsScreen;
