import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, Platform } from "react-native";
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

const InputComponent = (props) => {
  const { data } = props;
  const [selectedID, setSelectedID] = useState("");
  const [editText, setEditText] = useState(false);
  const [text, setText] = useState(data.role);

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
        onChangeText={(text) => {
          setText(text);
        }}
        editable={editText}
        value={text}
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
            setSelectedID(data.id);
          }}
        />
      )}
    </InputContainer>
  );
};

const NewInputComponent = (props) => {
  const [role, setRole] = useState("");

  return (
    <InputContainer>
      <TextInput
        placeholder={"Role"}
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
        onChangeText={(text) => setRole(text)}
        value={role}
      />
      <CheckIcon onPress={props.onPress} />
    </InputContainer>
  );
};

const JobRole = ({ data, refetch }) => {
  const { jobDescription } = data.getOccupation;
  const [visibleInput, setVisibleInput] = useState(true);
  const [rolesData, setRolesData] = useState(jobDescription[0].roles);

  const renderItem = ({ item }) => <InputComponent data={item} />;

  console.log("cchck", rolesData);

  return (
    <RootFlatListContainer>
      <FlatListHeader>
        <FlatListHeaderText>ROLES</FlatListHeaderText>
      </FlatListHeader>
      <FlatList
        data={rolesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        // extraData={editText}
      />
      {visibleInput ? (
        <View
          style={{ marginLeft: Platform.OS === "web" ? 0 : 1, marginTop: 7 }}
        >
          <PlusCircleIcon onPress={() => setVisibleInput(false)} />
        </View>
      ) : (
        <NewInputComponent onPress={() => setVisibleInput(true)} />
      )}
    </RootFlatListContainer>
  );
};

export default JobRole;
