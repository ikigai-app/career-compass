import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import {
  RootView,
  TitleContainer,
  DescriptionContainer,
} from "../../../../styles/Occupation/TopCard";
import IconButton from "../../../common/IconsButton";
import Input from "../../../common/TextInput";
import { gql, useMutation } from "@apollo/client";

const UPDATE_INFORMATION = gql`
  mutation updateOccupation($id: ID!, $input: AddOccupationInput!) {
    updateOccupation(id: $id, input: $input) {
      id
      name
      description
    }
  }
`;

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
    icon="edit"
    width={22}
    height={22}
    size={18}
    color={"gray"}
    onPress={props.onPress}
  />
);

const TopCard = ({ data }) => {
  const [title, setTitle] = useState(data.getOccupation.name);
  const [editTitleIcon, setEditTitleIcon] = useState(false);
  const [descriptionText, setDescription] = useState(
    data.getOccupation.description
  );
  const [editDescriptionIcon, setEditDescriptionIcon] = useState(false);

  const [updateOccupation] = useMutation(UPDATE_INFORMATION);

  useEffect(() => {
    if (data) {
      const { name, description } = data.getOccupation;
      setTitle(name);
      setDescription(description);
    }
  }, [data]);

  const onChangeTitle = (text) => {
    setTitle(text);
  };

  const onChangeDescription = (text) => {
    setDescription(text);
  };

  const updateTitle = async () => {
    await updateOccupation({
      variables: {
        id: data.getOccupation.id.toString(),
        input: {
          name: title,
        },
      },
    });
    setEditTitleIcon(false);
  };

  const updateDescription = async () => {
    await updateOccupation({
      variables: {
        id: data.getOccupation.id.toString(),
        input: {
          description: descriptionText,
        },
      },
    });
    setEditDescriptionIcon(false);
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
          <CheckIcon onPress={() => updateTitle()} />
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
          value={descriptionText}
        />
        {editDescriptionIcon ? (
          <CheckIcon onPress={() => updateDescription()} />
        ) : (
          <EditIcon onPress={() => setEditDescriptionIcon(true)} />
        )}
      </DescriptionContainer>
    </RootView>
  );
};

export default TopCard;
