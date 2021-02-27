# Server

- [apollo-server-express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/) : GraphQL Server with express as a middleware.

- [apollo-link-http](https://www.apollographql.com/docs/link/#usage) : Apollo Link is a standard interface for modifying control flow of GraphQL requests and fetching GraphQL results.

- [node-fetch](https://github.com/node-fetch/node-fetch) : A light-weight module that brings the Fetch API to Node.js

- [graphql-tools](https://www.graphql-tools.com/docs/introduction) : Stitch multiple GraphQL Schemas

- [Dgraph](https://github.com/dgraph-io/dgraph) : Native GraphQL Database With A Graph Backend.

### Run Dgraph

```shell
$ docker pull dgraph/standalone

$ mkdir -p ~/dgraph #create a folder for storing Dgraph data outside of the container

$ docker run -it -p 5080:5080 -p 6080:6080 -p 8080:8080 \
  -p 9080:9080 -p 8000:8000 -v ~/dgraph:/dgraph --name dgraph \
  dgraph/standalone:v20.11.0
```

##### Send the schema to Dgraph

```shell

curl -X POST localhost:8080/admin/schema --data-binary '
type Book{
    title: String! @id,
    author:String!
}
'
```

Use [GraphQL Playground](https://github.com/graphql/graphql-playground) to run queries and mutations at http://localhost:8080/graphql

##### Add some book:

```shell
mutation {
  addBook(input: [
 {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
  {
    title:"Deep Work",
    author:"Cal Newport"
  },
  {
    title:"Before you startup",
    author:"Pankaj Goyal"
  }
  ]) {
    book {
      title
    }
  }
}

```

###### Query

```shell
{
  queryBook{
    title
    author
  }
}
```

## Run Server

```shell
$ npm i && npm start
```

Use GraphQL Playground to run following queries and mutations at http://localhost:4000/graphql

```shell

#getbook
query($title: String!) {
  getBook(title: $title) {
    title
    author
  }
}

#set variable
{
  "title": "Deep Work"
}


#fetch all book
{
  queryBook{
    title
    author
  }
}

```
