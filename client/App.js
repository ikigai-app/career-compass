import "react-native-gesture-handler";
import React from "react";
import RootNavigation from "./src/navigations";
import { ApolloProvider } from "@apollo/client";
import client from "./src/graphql/";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RootNavigation />
    </ApolloProvider>
  );
}
