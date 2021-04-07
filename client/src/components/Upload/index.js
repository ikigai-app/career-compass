import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { View, Text, ActivityIndicator, Platform } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { encodeB64 } from "../../utils/base64";
import Button from "../Button/";
import ResumeOne from "../../JSON/ResumeOne.json";
// import ResumeFour from "../../JSON/ResumeFour.json";
import validateJson from "../../utils/JSONValidator";
import * as FileSystem from "expo-file-system";
import resumeParser from "../../utils/SovrenAPI";

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

export default function UploadComponent({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [addUser] = useMutation(ADD_USER, {
    onCompleted({ addUser }) {
      if (addUser) {
        navigation.navigate("UserDetails", { userName: addUser.userName });
      }
    },
    onError({ addUser }) {
      alert("Unable to Save the Records!");
    },
  });

  //using pdf + sovren  api
  const uploadDocument = async () => {
    let file = await DocumentPicker.getDocumentAsync({});

    const encodeFile = await encoder(file.uri);

    const payload = {
      DocumentAsBase64String: encodeFile,
      DocumentLastModified: new Date().toISOString().substring(0, 10),
    };

    // // sovren api
    const res = await resumeParser(payload);
    // console.log("Sovren res", res);
    // console.log("Sovren res", JSON.stringify(res));
    setLoading(true);
    if (res) {
      uploadResumeData(res);
    }
  };

  //to upload to db
  const uploadResumeData = async (res) => {
    const SovrenResponse = validateJson(JSON.stringify(res));

    if (SovrenResponse.value) {
      let filteredResponse = SovrenResponse.value;

      if (filteredResponse.Value) {
        //deleting HTML sections
        delete filteredResponse.Value.Conversions;

        await addUser({
          variables: {
            userName: "ResumeFive",
            SovrenResponse: filteredResponse,
          },
        });
      }
    } else {
      alert("Unable to Save the Records!");
    }

    setLoading(false);
  };

  //JSON data to upload
  const uploadResumeDataJSON = async () => {
    setLoading(true);
    const SovrenResponse = validateJson(JSON.stringify(ResumeOne));

    if (SovrenResponse.value) {
      let filteredResponse = SovrenResponse.value;

      if (filteredResponse.Value) {
        //deleting HTML sections
        delete filteredResponse.Value.Conversions;

        await addUser({
          variables: {
            userName: "ResumeOne",
            SovrenResponse: filteredResponse,
          },
        });
      }
    } else {
      alert("Unable to Save the Records!");
    }

    setLoading(false);
  };

  return (
    <View>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="slategray" />
        </View>
      ) : (
        <>
          <Button
            text="UPLOAD"
            onPress={() =>
              //  uploadDocument()
              uploadResumeDataJSON()
            }
          />
        </>
      )}
    </View>
  );
}