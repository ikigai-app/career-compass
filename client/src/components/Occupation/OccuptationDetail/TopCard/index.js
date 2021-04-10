import React from "react";
import { TextInput, Text } from "react-native";
import { RootView } from "../../../../styles/Occupation/TopCard";
import IconButton from "../../../common/IconsButton";

const TopCard = () => {
  return (
    <RootView>
      {/* <IconButton
        icon="checkmark-circle"
        width={40}
        height={40}
        size={40}
        color={"green"}
        onPress={() => {
          console.log("test");
        }}
      /> */}

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
