import React, { useState, useCallback } from "react";
import { View, Platform, Text, TouchableOpacity } from "react-native";
// import YoutubePlayer from "react-native-youtube-iframe";
import * as Linking from "expo-linking";
import {
  BlogContainer,
  VideoContainer,
  VideoDescription,
  BlogText,
} from "../../../../styles/Occupation/Experience";
import IconButton from "../../../common/IconsButton";

const DeleteIcon = (props) => (
  <IconButton
    iconType={"FontAwesome5"}
    icon="trash"
    width={22}
    height={22}
    size={22}
    color={"gray"}
    onPress={props.onPress}
  />
);
const BlogVideoComponent = ({ data }) => {
  if (data.type === "blog") {
    return (
      <BlogContainer>
        <TouchableOpacity
          onPress={() => {
            Platform.OS === "web"
              ? window.open(
                  "https://towardsdatascience.com/data-science-learning-roadmap-for-2021-84f2ba09a44f",
                  "_blank"
                )
              : Linking.openURL(
                  "https://towardsdatascience.com/data-science-learning-roadmap-for-2021-84f2ba09a44f"
                );
          }}
        >
          <BlogText>Data Science Learning Roadmap for 2021</BlogText>
        </TouchableOpacity>
        <View style={{ position: "absolute", right: 10, bottom: 10 }}>
          <DeleteIcon />
        </View>
      </BlogContainer>
    );
  }

  return (
    <VideoContainer>
      {/* <YoutubePlayer
        height={Platform.OS === "web" ? 200 : 200}
        videoId={"a2rcgzludDU"}
      /> */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <VideoDescription>Video Description</VideoDescription>
        <DeleteIcon />
      </View>
    </VideoContainer>
  );
};

export default BlogVideoComponent;
