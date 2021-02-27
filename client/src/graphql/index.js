import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://48p1r2roz4.sse.codesandbox.io",
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
