import React, { useState } from "react";
import Button from "../../components/Button";
// import GraphqlTest from "../../components/GraphqlTest";
// import Test from "../../components/Test";
import { RootSafeAreaView } from "../../styles/RootView";
import { from, gql, useMutation } from "@apollo/client";
import { ActivityIndicator, Text, View } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { encodeB64 } from "../../utils/base64";
import SampleJSON from "../../JSON/Sample.json";
import SampleJSON2 from "../../JSON/Sample2.json";
import SampleJSON3 from "../../JSON/Sample3.json";
import validateJson from "../../utils/JSONValidator";

const ADD_USER = gql`
  mutation addUser($userName: String!, $SovrenResponse: SovrenResponseInput) {
    addUser(input: { userName: $userName, SovrenResponse: $SovrenResponse }) {
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
    // const SovrenResponse = SampleJSON;
    const SovrenResponse = validateJson(JSON.stringify(SampleJSON2));

    console.log("check", SovrenResponse.value);
    await addUser({
      variables: {
        userName: "t2xestt5",
        SovrenResponse: SovrenResponse.value,
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
