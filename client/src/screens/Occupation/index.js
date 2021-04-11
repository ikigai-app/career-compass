import React from "react";
import { View, Text, FlatList, Platform } from "react-native";
import Button from "../../components/common/Button";
import CircularButton from "../../components/common/Button/CircularButton";
import Card from "../../components/Occupation/Card/RootCard";
import SearchBar from "../../components/SearchBar";
import {
  RootView,
  FlatListContainer,
  SearchBarContainer,
  SearchButtonContainer,
  CircularButtonContainer,
} from "../../styles/Occupation/RootScreen";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Data Scientist",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Machine learning",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Test",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
    title: "Data Scientist",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f62",
    title: "Machine learning",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Test",
  },
];

export default function OccupationScreen({ route, navigation }) {
  const renderCard = ({ item }) => (
    <Card
      title={item.title}
      onPress={() => {
        navigation.navigate("OccupationDetails", {
          id: item.title,
        });
      }}
    />
  );
  return (
    <RootView>
      <SearchBarContainer>
        <SearchBar />
        {Platform.OS == "web" ? (
          <SearchButtonContainer>
            <Button text="CREATE" onPress={() => console.log("test")} />
          </SearchButtonContainer>
        ) : (
          <View />
        )}
      </SearchBarContainer>
      <FlatListContainer>
        <FlatList
          data={DATA}
          renderItem={renderCard}
          numColumns={Platform.OS === "web" ? 3 : 0}
          //   horizontal={Platform.OS === "web" ? false : false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={{ marginBottom: Platform.OS === "web" ? 40 : 10 }} />
          )}
        />
      </FlatListContainer>
      {Platform.OS == "web" ? (
        <View />
      ) : (
        <CircularButtonContainer>
          <CircularButton />
        </CircularButtonContainer>
      )}
    </RootView>
  );
}
