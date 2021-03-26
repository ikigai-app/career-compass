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

#### Dgraph Schema

Go to `src/dgraph` and run the following command to export the schema

```shell
$ curl -X POST localhost:8080/admin/schema --data-binary '@dgraph.graphql'
```

Use [GraphQL Playground](https://github.com/graphql/graphql-playground) to run queries and mutations at http://localhost:8080/graphql Dgraph level

Query

```
query {
  queryUser {
    userName
    ContactInformation {
      CandidateName {
        FamilyName
        GivenName
      }
      Telephones {
        Raw
        Normalized
      }
      EmailAddresses
      WebAddresses {
        Type
      }
    }
  }
}
```

Mutation

```shell
mutation($userName: String!, $ContactInformation: ContactInformationRef) {
  addUser(
    input: [{ userName: $userName, ContactInformation: $ContactInformation }]
  ) {
    user {
      userName
    }
  }
}


#Under Query Variables GraphQL-Playground

{
  "userName": "Test1",
  "ContactInformation": {
    "CandidateName": {
      "FormattedName": "Test",
      "GivenName": "Test",
      "FamilyName": "TEst"
    },
    "Telephones": [
      {
        "Raw": "456-78",
        "Normalized": "45678",
        "InternationalCountryCode": "1",
        "AreaCityCode": "567",
        "SubscriberNumber": "56789"
        }
    ],
    "EmailAddresses": ["test@mail.com", "test2@mail.com"]
  }

}
```

For Apollo Server `http://localhost:4000/graphql`

```shell
mutation($userName: String!, $ContactInformation: ContactInformationInput) {
  addUser(
    input: { userName: $userName, ContactInformation: $ContactInformation }
  ) {
    userName
  }
}
#Under Query Variables GraphQL-Playground

{
  "userName": "Test1",
  "ContactInformation": {
    "CandidateName": {
      "FormattedName": "Test",
      "GivenName": "Test",
      "FamilyName": "TEst"
    },
    "Telephones": [
      {
        "Raw": "456-78",
        "Normalized": "45678",
        "InternationalCountryCode": "1",
        "AreaCityCode": "567",
        "SubscriberNumber": "56789"
        }
    ],
    "EmailAddresses": ["test@mail.com", "test2@mail.com"]
  }

}
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
