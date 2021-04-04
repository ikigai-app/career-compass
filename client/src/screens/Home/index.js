import React, { useState } from "react";
import Button from "../../components/Button";
import { RootSafeAreaView } from "../../styles/RootView";
import { gql, useMutation } from "@apollo/client";
import { ActivityIndicator, Text, View, Platform } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { encodeB64 } from "../../utils/base64";
// import SampleJSON3 from "../../JSON/Sample3.json";
import validateJson from "../../utils/JSONValidator";
import resumeParser from "../../utils/SovrenAPI";
// import GraphqlTest from "../../components/GraphqlTest";
import * as FileSystem from "expo-file-system";

const ADD_USER = gql`
  mutation addUser($userName: String!, $SovrenResponse: SovrenResponseInput) {
    addUser(input: { userName: $userName, SovrenResponse: $SovrenResponse }) {
      userName
    }
  }
`;

const base64 = async (url) => {
  return FileSystem.readAsStringAsync(url, {
    encoding: FileSystem.EncodingType.Base64,
  });
};

const encoder = async (file) => {
  if (Platform.OS === "web") {
    return encodeB64(file);
  } else {
    return await base64(file);
  }
};

export default function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [addUser] = useMutation(ADD_USER);

  const uploadDocument = async () => {
    let file = await DocumentPicker.getDocumentAsync({
      // copyToCacheDirectory: false,
      // type: "*/*",
    });

    const encodeFile = await encoder(file.uri);

    const data = {
      DocumentAsBase64String: encodeFile,
      DocumentLastModified: new Date().toISOString().substring(0, 10),
    };

    console.log("upload data", data);

    //sovren api
    const res = await resumeParser(data);
    console.log("Sovren res", res);
    setLoading(true);
    if (res) {
      uploadResumeData(res);
    }
  };

  //to upload to db
  const uploadResumeData = async (res) => {
    // const SovrenResponse = validateJson(JSON.stringify(SampleJSON3));

    if (res.value) {
      const SovrenResponse = validateJson(JSON.stringify(res));

      let filteredResponse = SovrenResponse.value;

      //deleting HTML sections
      delete filteredResponse.Value.Conversions;

      const userName =
        filteredResponse.Value.ResumeData.ContactInformation.EmailAddresses[0];

      await addUser({
        variables: {
          userName: "Test1",
          SovrenResponse: filteredResponse,
        },
      });
    }
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
          <Button text="UPLOAD" onPress={() => uploadDocument()} />
          {/* <GraphqlTest /> */}
        </>
      )}
    </RootSafeAreaView>
  );
}
