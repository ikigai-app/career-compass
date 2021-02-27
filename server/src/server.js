import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import compression from "compression";
import cors from "cors";
import { buildSchema } from "./schema";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema(),

    context: ({ req, res }) => {
      return;
    },
  });

  app.use("*", cors());
  app.use(compression());
  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
