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

import { useQuery, gql } from "@apollo/client";

const GET_OCCUPATION = gql`
  query queryOccupation {
    queryOccupation {
      id
      name
      description
    }
  }
`;

export default function OccupationScreen({ route, navigation }) {
  const { loading, error, data } = useQuery(GET_OCCUPATION, {});

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  const renderCard = ({ item }) => (
    <Card
      title={item.name}
      onPress={() => {
        navigation.navigate("OccupationDetails", {
          id: item.id,
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
          data={data.queryOccupation}
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
