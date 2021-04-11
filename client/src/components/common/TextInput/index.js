import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { BORDER_COLOR } from "../../../styles/colors";

const Input = (props) => {
  const { onChangeText, text, placeholder, style } = props;
  return <TextInput {...props} style={[props.style, styles.input]} />;
};

const styles = StyleSheet.create({
  input: {
    borderColor: BORDER_COLOR,
    borderRadius: 2,
    // padding: 10,
  },
});

export default Input;
