import React from "react";
import { View, TextInput, Text } from "react-native";
import { RootView } from "../../../../styles/Occupation/TopCard";
import IconButton from "../../../IconsButton";

const TopCard = () => {
  return (
    <RootView>
      {/* <Text>Title</Text> */}
      <IconButton
        icon="checkmark-circle"
        width={40}
        height={40}
        size={40}
        color={"green"}
      />

      <TextInput
      // style={styles.input}
      // onChangeText={onChangeText}
      // value={"text"}
      />
      <Text>Description</Text>
    </RootView>
  );
};

export default TopCard;
