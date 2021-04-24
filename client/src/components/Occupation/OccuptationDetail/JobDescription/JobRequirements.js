import React, { useState } from "react";
import { View, Text, FlatList, Platform } from "react-native";
import {
  RootFlatListContainer,
  FlatListHeader,
  FlatListHeaderText,
  InputContainer,
} from "../../../../styles/Occupation/JobDescription";

import Input from "../../../common/TextInput";
import {
  CheckIcon,
  EditIcon,
  PlusCircleIcon,
  DeleteIcon,
} from "./common/IconButton";
import { Bullet } from "./common/Bullet";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    text: "First Item",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb",
    text: "Second Item",
  },
];

const JobRequirement = () => {
  const [visibleInput, setVisibleInput] = useState(true);
  const [text, setText] = useState("Sample Role One");
  const [editText, setEditText] = useState(false);
  const [selectedID, setSelectedID] = useState("");

  const onChangeText = (text) => {
    setText(text);
  };

  const NewInputComponent = () => {
    return (
      <InputContainer>
        <Input
          placeholder={"Name"}
          style={{
            flex: 1,
            fontSize: 15,
            borderWidth: 1,
            color: "dimgray",
            fontWeight: "600",
            padding: 10,
            marginTop: 2,
            marginRight: 10,
          }}
          onChangeText={onChangeText}
          editable={editText}
          value={text}
        />
        <CheckIcon onPress={() => setVisibleInput(true)} />
      </InputContainer>
    );
  };

  const InputComponent = (props) => {
    const { data } = props;

    return (
      <InputContainer>
        <Bullet />
        <Input
          placeholder={"Name"}
          style={{
            flex: 1,
            fontSize: 15,
            borderWidth: editText && selectedID === data.id ? 1 : 0,
            color: "dimgray",
            padding: 10,
            maxHeight: 65,
            marginRight: 5,
          }}
          onChangeText={onChangeText}
          editable={editText}
          value={data.text}
        />
        {editText && selectedID === data.id ? (
          <View style={{ flexDirection: "row" }}>
            <CheckIcon
              onPress={() => {
                setEditText(false);
                setSelectedID("");
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <DeleteIcon />
            </View>
          </View>
        ) : (
          <EditIcon
            onPress={() => {
              setEditText(true);
              setSelectedID(props.data.id);
            }}
          />
        )}
      </InputContainer>
    );
  };

  const renderItem = ({ item }) => <InputComponent data={item} />;

  return (
    <RootFlatListContainer>
      <FlatListHeader>
        <FlatListHeaderText>ROLES</FlatListHeaderText>
      </FlatListHeader>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={editText}
      />
      {visibleInput ? (
        <View
          style={{ marginLeft: Platform.OS === "web" ? 0 : 1, marginTop: 7 }}
        >
          <PlusCircleIcon onPress={() => setVisibleInput(false)} />
        </View>
      ) : (
        <NewInputComponent />
      )}
    </RootFlatListContainer>
  );
};

export default JobRequirement;
