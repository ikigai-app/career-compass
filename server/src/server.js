const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const compression = require("compression");
const cors = require("cors");
const { buildSchema } = require("./schema.js");
const { SERVER_PORT, CONNECTIONSTRING } = require("../config");
const { models } = require("./models");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema(),
    introspection: true,
    playground: true,
    debug: true,
    context: ({ req, res }) => {
      models;
    },
  });
  await server.start();

  app.use("*", cors());
  app.use(compression());

  server.applyMiddleware({ app });

  await mongoose.connect(
    // "mongodb://localhost:27017/careerCompassDB"
    process.env.CONNECTIONSTRING || CONNECTIONSTRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );

  await new Promise((resolve) =>
    app.listen({ port: `${process.env.SERVER_PORT || SERVER_PORT}` }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${
      process.env.SERVER_PORT || SERVER_PORT
    }${server.graphqlPath}`
  );
  return { server, app };
}

startApolloServer();
