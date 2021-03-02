const { buildQuery } = require("./query");
const { getDgSchema } = require("../dgraph/index.js");

async function buildResolvers() {
  const dg = await getDgSchema();

  return {
    Query: buildQuery(dg),
    // Mutation: buildMutation(dg),
  };
}

exports.buildResolvers = buildResolvers;
