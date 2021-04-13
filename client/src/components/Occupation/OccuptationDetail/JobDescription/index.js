import React from "react";
import { View, Text } from "react-native";
import { RootView } from "../../../../styles/Occupation/JobDescription";
import Header from "../../../common/Header";
import JobRequirements from "./JobRequirements";
import JobRole from "./JobRole";
import JobSkills from "./JobSkills";

const JobDescription = () => {
  return (
    <RootView>
      <Header text={"JOB DESCRIPTION"} />
      <JobRole />
      <JobSkills />
      <JobRequirements />
    </RootView>
  );
};

export default JobDescription;
