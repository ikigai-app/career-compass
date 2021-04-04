import React from "react";
import { Text, View } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { Card, Title, Container, SubTitle } from "../../styles/Card";
import { CONTACT_INFORMATION } from "../../graphql/fragment";

const FETCH_USER = gql`
  ${CONTACT_INFORMATION}
  query getUser($userName: String!) {
    getUser(userName: $userName) {
      userName
      SovrenResponse {
        Value {
          ResumeData {
            ContactInformation {
              ...ContactInfo
            }
          }
        }
      }
    }
  }
`;

const UserCard = ({ data }) => {
  const { ContactInformation } = data.SovrenResponse.Value.ResumeData;
  const { CandidateName, EmailAddresses } = ContactInformation;
  return (
    <Card>
      <Title>UserName: {data.userName}</Title>
      <SubTitle>CandidateName: {CandidateName.FormattedName}</SubTitle>
      <SubTitle>Email: {EmailAddresses[0]}</SubTitle>
    </Card>
  );
};

const UserDetails = ({ userName }) => {
  const { loading, error, data } = useQuery(FETCH_USER, {
    variables: { userName: userName },
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return (
    <Container>
      <UserCard data={data.getUser} />
    </Container>
  );
};

export default UserDetails;
