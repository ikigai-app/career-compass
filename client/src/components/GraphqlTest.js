import React from "react";
import { View, Text, FlatList } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { Card, Title, Container, SubTitle } from "../styles/Card";

const FETCH_USERS = gql`
  {
    queryUser {
      userName
      firstName
      lastName
    }
  }
`;

const UserCard = ({ userDetails }) => (
  <Card>
    {console.log("user", userDetails)}
    <Title>{userDetails.userName}</Title>
    <SubTitle>
      {userDetails.firstName}
      {userDetails.lastName}
    </SubTitle>
  </Card>
);

const GraphqlTest = () => {
  const renderUser = ({ item }) => <UserCard userDetails={item} />;

  const { loading, error, data } = useQuery(FETCH_USERS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Container>
      <FlatList
        data={data.queryUser}
        renderItem={renderUser}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={() => {
          return <View style={{ margin: 5 }} />;
        }}
      />
    </Container>
  );
};

export default GraphqlTest;
