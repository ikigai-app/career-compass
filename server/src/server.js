const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const compression = require("compression");
const cors = require("cors");
const { buildSchema } = require("./schema.js");
const { SERVER_PORT } = require("../config");

async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    schema: await buildSchema(),

    introspection: true,
    playground: true,
    debug: true,
  });
  await server.start();

  app.use("*", cors());
  app.use(compression());
  // server.applyMiddleware({
  //   app,
  //   path: "/graphql",
  // });

  server.applyMiddleware({ app });

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

// const startServer = async () => {
//   const app = express();

//   const server = new ApolloServer({
//     schema: await buildSchema(),
//     introspection: true,
//     playground: true,
//     debug: true,

//     context: ({ req, res }) => {
//       return;
//     },
//   });

//   app.use("*", cors());
//   app.use(compression());
//   server.applyMiddleware({
//     app,
//     path: "/graphql",
//   });

//   server.applyMiddleware({ app });

//   app.listen({ port: `${process.env.SERVER_PORT || SERVER_PORT}` }, () =>
//     console.log(
//       `🚀 Server ready at ${process.env.SERVER_PORT || SERVER_PORT}${
//         server.graphqlPath
//       }`
//     )
//   );
// };

// startServer();
