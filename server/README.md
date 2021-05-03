# Server

- [apollo-server-express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/) : GraphQL Server with express as a middleware.

- [apollo-link-http](https://www.apollographql.com/docs/link/#usage) : Apollo Link is a standard interface for modifying control flow of GraphQL requests and fetching GraphQL results.

- [node-fetch](https://github.com/node-fetch/node-fetch) : A light-weight module that brings the Fetch API to Node.js

- [graphql-tools](https://www.graphql-tools.com/docs/introduction) : Stitch multiple GraphQL Schemas

### RUN

Download the docker if not installed from following [link](https://www.docker.com/products/docker-desktop)

```shell
$ docker-compose up -d --build
# -d run the container in detached mode (in the background)
```

In case of localhost port issue

```shell
$ docker network ls

$ docker network inspect <NETWORK_ID or NAME/>
# take dgraph alpha server IP and pass it to .env DGRAPH_HOST
```

##### Before connecting to the client. Run

```shell
$ ngrok http http://localhost:4000
```

And copy the new generated url to the `client/.env`

```
GRAPHQL_ENDPOINT=" "
```

Save it and follow client readme to run the app locally.

## Transfrom JSON to SCHEMA

https://transform.tools/json-to-graphql
