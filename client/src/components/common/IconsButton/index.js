import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  const { width, height, icon, onPress, color, size, iconType } = props;

  const IconType = () => {
    switch (iconType) {
      case "Ionicons":
        return <Ionicons name={icon} size={size} color={color} />;
      case "FontAwesome5":
        return <FontAwesome5 name={icon} size={size} color={color} />;
    }
  };

  return (
    <TouchableOpacity
      style={{ width: width, height: height }}
      onPress={props.onPress}
    >
      {IconType()}
      {/* <Ionicons name={icon} size={size} color={color} /> */}
    </TouchableOpacity>
  );
};

export default IconButton;
