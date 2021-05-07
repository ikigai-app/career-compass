import React, { useState } from "react";
import { FlatList, Platform, View } from "react-native";
import { gql, useMutation, useQuery } from "@apollo/client";
import Header from "../../../common/Header";
import {
  RootView,
  InputRootContainer,
  AddButton,
  AddText,
} from "../../../../styles/Occupation/Experience";
import BlogVideoComponent from "./BlogVideoComponent";
import Input from "../../../common/TextInput";
import RNPickerSelect from "react-native-picker-select";
import IconButton from "../../../common/IconsButton";
import Loader from "../../../common/Loader";

const GET_EXPERIENCE = gql`
  query getExperience($occupationID: ID!) {
    getExperience(occupationID: $occupationID) {
      _id
      type
      description
      url
      occupationID
    }
  }
`;

const PlusCircleIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="plus-circle"
    width={35}
    height={35}
    size={35}
    color={"gray"}
    onPress={props.onPress}
  />
);

const Experience = ({ id }) => {
  const { loading, error, data, refetch } = useQuery(GET_EXPERIENCE, {
    variables: { occupationID: id },
    fetchPolicy: "no-cache",
  });

  const [type, setType] = useState("Select Type");
  const [visibleInput, setVisibleInput] = useState(true);

  if (loading) return <Loader />;
  if (error) return <Text>Error :(</Text>;

  const InputContainer = () => (
    <InputRootContainer>
      <Input
        placeholder={"Description"}
        style={{
          fontSize: 16,
          borderWidth: 1,
          color: "dimgray",
          fontWeight: "500",
          padding: 7,
          paddingLeft: 10,
        }}
        // onChangeText={onChangeSocialName}
        // value={socialName}
      />
      <Input
        placeholder={"URL"}
        style={{
          fontSize: 16,
          borderWidth: 1,
          color: "dimgray",
          fontWeight: "500",
          padding: 7,
          paddingLeft: 10,
          marginTop: Platform.OS === "web" ? 0 : 10,
          marginLeft: Platform.OS === "web" ? 10 : 0,
        }}
        // onChangeText={onChangeSocialName}
        // value={socialName}
      />
      <View
        style={{
          marginTop: Platform.OS === "web" ? 0 : 10,
          marginLeft: Platform.OS === "web" ? 10 : 0,
          width: 180,
        }}
      >
        <RNPickerSelect
          useNativeAndroidPickerStyle={true}
          style={{
            inputWeb: {
              backgroundColor: "white",
              height: 50,
              fontSize: 14,
            },
            inputAndroid: {
              // width: 200,
              borderRadius: 8,
              height: 45,
              fontSize: 14,
              marginBottom: 10,
              color: "#8a8a8a",
            },
          }}
          placeholder={{ label: "Select Type", value: "Select Type" }}
          value={type}
          onValueChange={(type) => setType(type)}
          items={[
            { label: "Video", value: "video" },
            { label: "Blog", value: "blog" },
          ]}
        />
      </View>

      <AddButton onPress={() => setVisibleInput(true)}>
        <AddText>ADD</AddText>
      </AddButton>
    </InputRootContainer>
  );

  const renderVideoComponent = ({ item }) => (
    <BlogVideoComponent data={item} refetch={refetch} />
  );

  return (
    <RootView>
      <Header text={"EXPERIENCE"} />
      <View style={{ marginTop: 40 }}>
        {Platform.OS === "web" ? (
          <FlatList
            data={data.getExperience}
            renderItem={renderVideoComponent}
            keyExtractor={(item) => item._id}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
            columnWrapperStyle={{
              justifyContent: "space-around",
              width: "100%",
            }}
          />
        ) : (
          <FlatList
            data={data.getExperience}
            renderItem={renderVideoComponent}
            keyExtractor={(item) => item._id}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
          />
        )}
      </View>
      {visibleInput ? (
        <View
          style={{
            marginTop: 30,
          }}
        >
          <PlusCircleIcon onPress={() => setVisibleInput(false)} />
        </View>
      ) : (
        <InputContainer />
      )}
    </RootView>
  );
};

export default Experience;
