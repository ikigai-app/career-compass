import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  const { width, height, icon, onPress, color, size } = props;

  return (
    <TouchableOpacity
      style={{ width: width, height: height }}
      onPress={props.onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
