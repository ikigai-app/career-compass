import React from "react";
import Button from "../../components/Button";
import { resume } from "../../JSON/resume";
// import GraphqlTest from "../../components/GraphqlTest";
// import Test from "../../components/Test";
import { RootSafeAreaView } from "../../styles/RootView";
import { gql, useMutation } from "@apollo/client";

const ADD_USER = gql`
  mutation addUser($userName: String!, $resumeData: String) {
    addUser(input: { userName: $userName, resumeData: $resumeData }) {
      userName
      resumeData
    }
  }
`;

export default function HomeScreen() {
  const [addUser] = useMutation(ADD_USER);

  const upload = async () => {
    // console.log(resume.Value.ResumeData.ContactInformation.EmailAddresses[0]); //email
    await addUser({
      variables: {
        userName: "test@mail.com",
        resumeData: JSON.stringify(resume.Value),
      },
    });
  };

  return (
    <RootSafeAreaView>
      <Button text="UPLOAD" onPress={() => upload()} />
      {/* <Test /> */}
      {/* <GraphqlTest /> */}
    </RootSafeAreaView>
  );
}
