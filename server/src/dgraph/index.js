import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";
import {
  makeRemoteExecutableSchema,
  introspectSchema,
} from "apollo-server-express";

const link = new HttpLink({ uri: "http://localhost:8080/graphql", fetch });

export const getDgSchema = async () => {
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  return executableSchema;
};
