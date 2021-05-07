import React, { useState, useCallback } from "react";
import { View, Platform, Text, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import * as Linking from "expo-linking";
import { gql, useMutation } from "@apollo/client";
import {
  BlogContainer,
  VideoContainer,
  VideoDescription,
  BlogText,
} from "../../../../styles/Occupation/Experience";
import IconButton from "../../../common/IconsButton";
import YouTubeGetID from "../../../../utils/YouTubeIdExtract";

const DELETE_EXP = gql`
  mutation deleteExperience($id: ID!, $parentID: ID!) {
    deleteExperience(id: $id, parentID: $parentID)
  }
`;

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

const BlogVideoComponent = ({ data, refetch }) => {
  const [deleteExperience] = useMutation(DELETE_EXP, {
    onCompleted() {
      refetch();
    },
  });

  const deleteBlog = async () => {
    await deleteExperience({
      variables: {
        id: data._id,
        parentID: data.occupationID,
      },
    });
  };

  if (data.type === "blog") {
    return (
      <BlogContainer>
        <TouchableOpacity
          onPress={() => {
            Platform.OS === "web"
              ? window.open(data.url, "_blank")
              : Linking.openURL(data.url);
          }}
        >
          <BlogText>{data.description ? data.description : "BLOG"}</BlogText>
        </TouchableOpacity>
        <View style={{ position: "absolute", right: 10, bottom: 10 }}>
          <DeleteIcon onPress={() => deleteBlog()} />
        </View>
      </BlogContainer>
    );
  }

  return (
    <VideoContainer>
      <YoutubePlayer
        height={Platform.OS === "web" ? 200 : 200}
        videoId={YouTubeGetID(data.url)}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <VideoDescription>
          {data.description ? data.description : "VIDEO"}
        </VideoDescription>
        <DeleteIcon onPress={() => deleteBlog()} />
      </View>
    </VideoContainer>
  );
};

export default BlogVideoComponent;
