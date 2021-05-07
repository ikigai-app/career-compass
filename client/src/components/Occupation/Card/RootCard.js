import React from "react";
import { View, Text } from "react-native";
import { RootContainer, Title } from "../../../styles/Occupation/RootCard";
import IconButton from "../../common/IconsButton";

export const DeleteIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="trash"
    width={16}
    height={16}
    size={16}
    color={"grey"}
    onPress={props.onDelete}
  />
);

const Card = (props) => {
  return (
    <RootContainer
      onPress={() => {
        props.onPress();
      }}
    >
      <Title>{props.title}</Title>

      <View style={{ position: "absolute", bottom: 10, right: 10 }}>
        <DeleteIcon onDelete={props.onDelete} />
      </View>
    </RootContainer>
  );
};

export default Card;
