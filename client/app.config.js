import "dotenv/config";

export default {
  name: "Career-Compass",
  version: "1.0.0",
  extra: {
    api_url: process.env.GRAPHQL_ENDPOINT,
    sovren_endPoint: process.env.SOVREN_ENDPOINT,
    sovren_accountID: process.env.SOVREN_ACCOUNT_ID,
    sovren_serviceKEY: process.env.SOVREN_SERVICE_KEY,
  },
};
