import React, { useState } from "react";
import { FlatList, Platform, TextInput, View } from "react-native";
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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    text: "First Item",
    type: "video",
  },

  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3",
    text: "Test Item",
    type: "blog",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2",
    text: "Test Item",
    type: "blog",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1",
    text: "Test Item",
    type: "video",
  },
];

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

const Experience = () => {
  const [type, setType] = useState("");
  const [visibleInput, setVisibleInput] = useState(true);

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
          placeholder={{ label: "Select Type", value: null }}
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

  const renderVideoComponent = ({ item }) => <BlogVideoComponent data={item} />;

  return (
    <RootView>
      <Header text={"EXPERIENCE"} />
      <View style={{ marginTop: 40 }}>
        {Platform.OS === "web" ? (
          <FlatList
            data={DATA}
            renderItem={renderVideoComponent}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
            columnWrapperStyle={{
              justifyContent: "space-around",
              width: "100%",
            }}
          />
        ) : (
          <FlatList
            data={DATA}
            renderItem={renderVideoComponent}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
          />
        )}
      </View>
      {visibleInput ? (
        <InputRootContainer>
          <PlusCircleIcon onPress={() => setVisibleInput(false)} />
        </InputRootContainer>
      ) : (
        <InputContainer />
      )}
    </RootView>
  );
};

export default Experience;
