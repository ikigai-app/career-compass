import React from "react";
import { View, Text } from "react-native";
import { RootView } from "../../../../styles/Occupation/JobDescription";
import Header from "../../../common/Header";
import JobRequirements from "./JobRequirements";
import JobRole from "./JobRole";
import JobSkills from "./JobSkills";

const JobDescription = ({ data, refetch }) => {
  return (
    <RootView>
      <Header text={"JOB DESCRIPTION"} />
      <JobRole data={data} refetch={refetch} />
      <JobSkills data={data} refetch={refetch} />
      <JobRequirements data={data} refetch={refetch} />
    </RootView>
  );
};

export default JobDescription;
