import React from "react";
import { Text } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { Card, Title, Container } from "../styles/Card";
import { SOVREN_RESPONSE } from "../graphql/fragment";

const FETCH_USER = gql`
  ${SOVREN_RESPONSE}
  query getUser($userName: String!) {
    getUser(userName: $userName) {
      userName
      SovrenResponse {
        ...SovrenRes
      }
    }
  }
`;

const UserCard = ({ data }) => (
  <Card>
    <Title>{data.userName}</Title>
  </Card>
);

const GraphqlTest = () => {
  const { loading, error, data } = useQuery(FETCH_USER, {
    variables: { userName: "test1" },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  // {
  //   console.log("data", data);
  // }

  return (
    <Container>
      <UserCard data={data.getUser} />
    </Container>
  );
};

export default GraphqlTest;
