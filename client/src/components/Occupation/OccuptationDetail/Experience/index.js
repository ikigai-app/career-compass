import React from "react";
import { FlatList, Platform, View } from "react-native";
import Header from "../../../common/Header";
import { RootView } from "../../../../styles/Occupation/Experience";
import BlogVideoComponent from "./BlogVideoComponent";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    text: "First Item",
    type: "video",
  },

  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3",
    text: "Test Item",
    type: "blog",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3",
    text: "Test Item",
    type: "video",
  },
];

const Experience = () => {
  const renderVideoComponent = ({ item }) => <BlogVideoComponent data={item} />;

  return (
    <RootView>
      <Header text={"EXPERIENCE"} />

      <View style={{ marginTop: 40 }}>
        {Platform.OS === "web" ? (
          <FlatList
            data={DATA}
            renderItem={renderVideoComponent}
            keyExtractor={(item) => item.id}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
            columnWrapperStyle={{
              justifyContent: "space-around",
              width: "100%",
            }}
          />
        ) : (
          <FlatList
            data={DATA}
            renderItem={renderVideoComponent}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
          />
        )}
      </View>

      {/* <BlogComponent /> */}
    </RootView>
  );
};

export default Experience;
