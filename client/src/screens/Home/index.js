import React, { useState } from "react";
import Button from "../../components/Button";
import { resume } from "../../JSON/resume";
// import GraphqlTest from "../../components/GraphqlTest";
// import Test from "../../components/Test";
import { RootSafeAreaView } from "../../styles/RootView";
import { from, gql, useMutation } from "@apollo/client";
import { ActivityIndicator, Text, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { encodeB64 } from "../../utils/base64";
import contactJSON from "../../JSON/ContactInformation.json";

const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $ContactInformation: ContactInformationInput
  ) {
    addUser(
      input: { userName: $userName, ContactInformation: $ContactInformation }
    ) {
      userName
    }
  }
`;

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [addUser] = useMutation(ADD_USER);

  const uploadDocument = async () => {
    let file = await DocumentPicker.getDocumentAsync({});
    const encodeFile = encodeB64(file.uri);

    // const data = {
    //   DocumentAsBase64String: encodeFile,
    //   DocumentLastModified: new Date().toISOString().substring(0, 10),
    // };

    // const res = await resumeParser(data);
    // setLoading(true);
    // if (res) {
    //   uploadResumeData(res);
    // }
  };

  const resumeParser = async (data) => {
    try {
      const END_POINT = "https://rest.resumeparsing.com/v10/parser/resume";
      const response = await fetch(END_POINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Sovren-AccountId": "",
          "Sovren-ServiceKey": "",
        },
        data: JSON.stringify(data),
      });
      const res = await response.json();
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  //to upload to db
  const uploadResumeData = async () => {
    const ContactInformation = contactJSON;

    await addUser({
      variables: {
        userName: "Test3",
        ContactInformation: ContactInformation,
      },
    });

    // console.log(resume.Value.ResumeData.ContactInformation.EmailAddresses[0]); //email

    setLoading(false);
  };

  return (
    <RootSafeAreaView>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="slategray" />
        </View>
      ) : (
        <>
          <Button
            text="UPLOAD"
            onPress={
              // () => uploadDocument()
              () => uploadResumeData() //for mock test
            }
          />
        </>
      )}

      {/* <Test /> */}
      {/* <GraphqlTest /> */}
    </RootSafeAreaView>
  );
}
