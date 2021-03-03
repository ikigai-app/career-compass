const { HttpLink } = require("apollo-link-http");
const fetch = require("node-fetch");
const {
  makeRemoteExecutableSchema,
  introspectSchema,
} = require("apollo-server-express");
const { DGRAPH_HOST, DGRAPH_PORT } = require("../../config");

const link = new HttpLink({
  uri: `http://${process.env.DGRAPH_HOST || DGRAPH_HOST}:${
    process.env.DGRAPH_PORT || DGRAPH_PORT
  }/graphql`,
  // uri: `http://0.0.0.0:${process.env.DGRAPH_PORT || DGRAPH_PORT}/graphql`,
  fetch,
});

const getDgSchema = async () => {
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  return executableSchema;
};

exports.getDgSchema = getDgSchema;
