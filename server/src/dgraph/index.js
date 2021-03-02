const { HttpLink } = require("apollo-link-http");
const fetch = require("node-fetch");
const {
  makeRemoteExecutableSchema,
  introspectSchema,
} = require("apollo-server-express");

const link = new HttpLink({ uri: "http://localhost:8080/graphql", fetch });

const getDgSchema = async () => {
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  return executableSchema;
};

exports.getDgSchema = getDgSchema;
