import Constants from "expo-constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: Constants.manifest.extra.api_url,
  cache: new InMemoryCache(),
});

export default client;
