import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import {
  RootFlatListContainer,
  FlatListHeader,
  FlatListHeaderText,
  InputContainer,
} from "../../../../styles/Occupation/JobDescription";
import IconButton from "../../../common/IconsButton";
import Input from "../../../common/TextInput";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    text: "First Item",
  },
];

const CheckIcon = (props) => (
  <IconButton
    iconType={"Ionicons"}
    icon="checkmark-circle"
    width={22}
    height={22}
    size={22}
    color={"green"}
    onPress={props.onPress}
  />
);

const EditIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="pen"
    width={15}
    height={15}
    size={15}
    color={"gray"}
    onPress={props.onPress}
  />
);

const PlusCircleIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="plus-circle"
    width={20}
    height={20}
    size={20}
    color={"gray"}
    onPress={props.onPress}
  />
);

const Bullet = () => (
  <View
    style={{
      width: 10,
      height: 10,
      borderRadius: 10 / 2,
      backgroundColor: "darkslateblue",
      marginRight: 10,
    }}
  />
);

const JobRequirements = () => {
  const [text, setText] = useState("Sample .......");
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
        <PlusCircleIcon />
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
            //   textAlignVertical: "top",
            fontSize: 15,
            borderWidth: editText && selectedID === data.id ? 1 : 0,
            color: "dimgray",
            fontWeight: "600",
            padding: 10,
            marginTop: 2,
            //   maxHeight: 65,
            marginRight: 10,
          }}
          // multiline={true}
          // numberOfLines={2}
          onChangeText={onChangeText}
          editable={editText}
          value={data.text}
        />

        {editText && selectedID === data.id ? (
          <CheckIcon
            onPress={() => {
              setEditText(false);
              setSelectedID("");
            }}
          />
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
        <FlatListHeaderText>REQUIREMENTS</FlatListHeaderText>
      </FlatListHeader>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={editText}
      />
      <NewInputComponent />
    </RootFlatListContainer>
  );
};

export default JobRequirements;
