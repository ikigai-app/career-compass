# GraphQL Server

- Apollo Server Express
- Express
- GraphQL
- mongoose

### How to Run?

```shell
$ npm i && npm start
```

### GraphQL basic to test the server

Query

```shell
{
  msgs {
    id
    message
  }
}
```

Mutation

```shell
mutation{
  createMsg(message:"test"){
    id
    message
  }
}
```
