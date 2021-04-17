import React, { useState, useCallback } from "react";
import { View, Platform, Text, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import * as Linking from "expo-linking";
import {
  BlogContainer,
  VideoContainer,
  VideoDescription,
  BlogText,
} from "../../../../styles/Occupation/Experience";

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
      </BlogContainer>
    );
  }

  return (
    <VideoContainer>
      <YoutubePlayer
        height={Platform.OS === "web" ? 200 : 200}
        videoId={"a2rcgzludDU"}
      />
      <VideoDescription>Video Description</VideoDescription>
    </VideoContainer>
  );
};

export default BlogVideoComponent;
