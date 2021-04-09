import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  SearchContainer,
  Image,
  SearchTextInput,
} from "../../styles/SearchBar";

const SearchBar = (props) => (
  <SearchContainer>
    <TouchableOpacity
      style={{ justifyContent: "center" }}
      // onPress={onSubmit}
    >
      <Image
        source={require("../../../assets/search.png")}
        resizeMode="contain"
        tintColor={"#fff"}
      />
    </TouchableOpacity>
    <SearchTextInput
      placeholderTextColor={"#fcfdff"}
      clearButtonMode="always"
      keyboardAppearance="dark"
      autoCorrect={false}
      autoCapitalize="none"
      placeholder={"Search"}
      {...props}
    />
  </SearchContainer>
);

export default SearchBar;
