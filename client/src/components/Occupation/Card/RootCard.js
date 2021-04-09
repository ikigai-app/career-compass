import React from "react";
import { View, Text } from "react-native";
import { RootContainer, Title } from "../../../styles/Occupation/RootCard";

const Card = (props) => {
  return (
    <RootContainer
      onPress={() => {
        props.onPress();
      }}
    >
      <Title>{props.title}</Title>
    </RootContainer>
  );
};

export default Card;
