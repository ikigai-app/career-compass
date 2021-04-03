import React from "react";
import { View, Text, FlatList } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { Card, Title, Container, SubTitle } from "../styles/Card";

const FETCH_USER = gql`
  query getUser($userName: String!) {
    getUser(userName: $userName) {
      userName
    }
  }
`;

const UserCard = ({ data }) => (
  <Card>
    <Title>{data.userName}</Title>
  </Card>
);

const GraphqlTest = () => {
  // const renderUser = ({ item }) => <UserCard userDetails={item} />;

  const { loading, error, data } = useQuery(FETCH_USER, {
    variables: { userName: "test1" },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Container>
      <UserCard data={data.getUser} />
      {/* <FlatList
        data={data.getUser}
        renderItem={renderUser}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => {
          return <View style={{ margin: 5 }} />;
        }}
      /> */}
    </Container>
  );
};

export default GraphqlTest;
