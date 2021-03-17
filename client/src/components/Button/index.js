import React from "react";
import { Pressable, Text } from "react-native";
import { TouchableContainer, TouchableText } from "../../styles/Button";

export default function Button(props) {
  return (
    <TouchableContainer
      onPress={() => {
        props.onPress();
      }}
    >
      <TouchableText>{props.text}</TouchableText>
    </TouchableContainer>
  );
}
