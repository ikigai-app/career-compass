import React from "react";
import { Text } from "react-native";
import { gql, useMutation, useQuery } from "@apollo/client";
import { RootView } from "../../../../styles/Occupation/JobDescription";
import Header from "../../../common/Header";
import JobRequirements from "./JobRequirements";
import JobRole from "./JobRole";
import JobSkills from "./JobSkills";
import Loader from "../../../common/Loader";

const GET_JOBDESCRIPTION = gql`
  query jobDescription($id: ID!) {
    jobDescription(id: $id) {
      _id
      roles {
        _id
        role
      }
      skills1 {
        _id
        skill1
      }
      requirements {
        _id
        requirement
      }
    }
  }
`;

const JobDescription = ({ id }) => {
  const { loading, error, data, refetch } = useQuery(GET_JOBDESCRIPTION, {
    variables: { id: id[0]._id },
    fetchPolicy: "no-cache",
  });

  if (loading) return <Loader />;
  if (error) return <Text>Error :(</Text>;

  return (
    <RootView>
      <Header text={"JOB DESCRIPTION"} />
      <JobRole data={data.jobDescription[0]} refetch={refetch} />
      {/* <JobSkills data={data.jobDescription[0]} refetch={refetch} /> */}
      <JobRequirements data={data.jobDescription[0]} refetch={refetch} />
    </RootView>
  );
};

export default JobDescription;
