import React from "react";
import { View, Text } from "react-native";
import { RootView } from "../../../../styles/Occupation/JobDescription";
import Header from "../../../common/Header";
import JobRole from "./JobRole";

const JobDescription = () => {
  return (
    <RootView>
      <Header text={"JOB DESCRIPTION"} />
      <JobRole />
    </RootView>
  );
};

export default JobDescription;

// []

// JOB Roles
//JOB SKills
// JOB Requirement
