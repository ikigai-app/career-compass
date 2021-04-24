import React from "react";
import IconButton from "../../../../common/IconsButton";

export const CheckIcon = (props) => (
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

export const EditIcon = (props) => (
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

export const PlusCircleIcon = (props) => (
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

export const DeleteIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="trash"
    width={22}
    height={22}
    size={18}
    color={"gray"}
    onPress={props.onPress}
  />
);
