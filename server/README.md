# Server

- [apollo-server-express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/) : GraphQL Server with express as a middleware.

- [apollo-link-http](https://www.apollographql.com/docs/link/#usage) : Apollo Link is a standard interface for modifying control flow of GraphQL requests and fetching GraphQL results.

- [node-fetch](https://github.com/node-fetch/node-fetch) : A light-weight module that brings the Fetch API to Node.js

- [graphql-tools](https://www.graphql-tools.com/docs/introduction) : Stitch multiple GraphQL Schemas

- [Dgraph](https://github.com/dgraph-io/dgraph) : Native GraphQL Database With A Graph Backend.

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

##### Send the schema to Dgraph

```shell

curl -X POST localhost:8080/admin/schema --data-binary '
type User {
  userName: String! @id
  firstName: String!
  lastName: String!
}
'
```

Use [GraphQL Playground](https://github.com/graphql/graphql-playground) to run queries and mutations at http://localhost:8080/graphql Dgraph level

##### Add some data:

```shell
mutation {
  addUser(
    input: [
      { userName: "mks", firstName: "MKS", lastName: "mks" }
      { userName: "dev", firstName: "Dev", lastName: "test" }
    ]
  ) {
    user {
      userName
    }
  }
}
```

##### Query

```shell
{
  queryUser {
    userName
    firstName
    lastName
  }
}

```

Use GraphQL Playground to run following queries and mutations at http://localhost:4000/graphql

```shell

#getUser
query($userName: String!) {
  getUser(userName: $userName) {
    userName
    firstName
    lastName
  }
}

#set variable
{
  "userName":"dev"
}

#fetch all users
{
  queryUser {
    userName
    firstName
    lastName
  }
}
```
