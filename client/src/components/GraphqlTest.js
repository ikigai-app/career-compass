import React from "react";
import { View, Text, FlatList } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { Card, Title, Container, SubTitle } from "../styles/Card";

const FETCH_BOOKS = gql`
  {
    queryBook {
      title
      author
    }
  }
`;

const BookCard = ({ bookDetails }) => (
  <Card>
    <Title>{bookDetails.title}</Title>
    <SubTitle>{bookDetails.author}</SubTitle>
  </Card>
);

const GraphqlTest = () => {
  const renderBook = ({ item }) => <BookCard bookDetails={item} />;

  const { loading, error, data } = useQuery(FETCH_BOOKS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Container>
      <FlatList
        data={data.queryBook}
        renderItem={renderBook}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => {
          return <View style={{ margin: 5 }} />;
        }}
      />
    </Container>
  );
};

export default GraphqlTest;
