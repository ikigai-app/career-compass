import "dotenv/config";

export default {
  name: "Career-Compass",
  version: "1.0.0",
  extra: {
    api_url: process.env.GRAPHQL_ENDPOINT,
  },
};
