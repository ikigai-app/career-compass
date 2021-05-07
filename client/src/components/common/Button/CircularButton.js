import React from "react";
import {
  TouchableContainer,
  TouchableText,
} from "../../../styles/CircularButton";

const CircularButton = (props) => {
  return (
    <TouchableContainer onPress={props.onPress}>
      <TouchableText>+</TouchableText>
    </TouchableContainer>
  );
};

export default CircularButton;
