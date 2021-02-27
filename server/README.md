# Server

- [Apollo-Server-Express](https://www.apollographql.com/docs/apollo-server/integrations/middleware/): GraphQL Server

- [Dgraph](https://github.com/dgraph-io/dgraph): Native GraphQL Database With A Graph Backend.

```
docker pull dgraph/standalone
```

Let’s create a folder for storing Dgraph data outside of the container:

```
mkdir -p ~/dgraph


docker run -it -p 5080:5080 -p 6080:6080 -p 8080:8080 \
  -p 9080:9080 -p 8000:8000 -v ~/dgraph:/dgraph --name dgraph \
  dgraph/standalone:v20.11.0
```

```shell

curl -X POST localhost:8080/admin/schema --data-binary '

type Book{

    title: String! @id,
    author:String!
}

'
```

http://localhost:8080/graphql

Add some book:

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

basic query

```shell

{
  queryBook {
    title
    author
  }
}
```
