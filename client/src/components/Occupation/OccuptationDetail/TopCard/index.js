import React, { useState } from "react";
import { Platform } from "react-native";
import {
  RootView,
  TitleContainer,
  DescriptionContainer,
} from "../../../../styles/Occupation/TopCard";
import IconButton from "../../../common/IconsButton";
import Input from "../../../common/TextInput";

const CheckIcon = (props) => (
  <IconButton
    iconType={"Ionicons"}
    icon="checkmark-circle"
    width={32}
    height={32}
    size={32}
    color={"green"}
    onPress={props.onPress}
  />
);

const EditIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="pen"
    width={18}
    height={18}
    size={18}
    color={"gray"}
    onPress={props.onPress}
  />
);

const TopCard = () => {
  const [title, setTitle] = useState("Data scientist");
  const [editTitleIcon, setEditTitleIcon] = useState(false);
  const [description, setDescription] = useState(
    "Data scientists turn raw data into meaningful information that organisations can use to improve their businesses."
  );
  const [editDescriptionIcon, setEditDescriptionIcon] = useState(false);

  const onChangeTitle = (text) => {
    setTitle(text);
  };

  const onChangeDescription = (text) => {
    setDescription(text);
  };

  return (
    <RootView>
      <TitleContainer>
        <Input
          placeholder={"Title"}
          style={{
            marginRight: 10,
            fontSize: 22,
            lineHeight: 50,
            borderWidth: editTitleIcon ? 1 : 0,
            color: "black",
            fontWeight: "bold",
            padding: 4,
          }}
          onChangeText={onChangeTitle}
          editable={editTitleIcon}
          value={title}
        />
        {editTitleIcon ? (
          <CheckIcon onPress={() => setEditTitleIcon(false)} />
        ) : (
          <EditIcon onPress={() => setEditTitleIcon(true)} />
        )}
      </TitleContainer>

      <DescriptionContainer>
        <Input
          placeholder={"Description"}
          style={{
            width: "90%",
            textAlignVertical: "top",
            marginRight: 10,
            fontSize: 14,
            lineHeight: 20,
            borderWidth: editDescriptionIcon ? 1 : 0,
            color: "black",
            fontWeight: "600",
            textAlign: "left",
            padding: 4,
          }}
          onChangeText={onChangeDescription}
          editable={editDescriptionIcon}
          multiline={true}
          numberOfLines={4}
          value={description}
        />
        {editDescriptionIcon ? (
          <CheckIcon onPress={() => setEditDescriptionIcon(false)} />
        ) : (
          <EditIcon onPress={() => setEditDescriptionIcon(true)} />
        )}
      </DescriptionContainer>
    </RootView>
  );
};

export default TopCard;
