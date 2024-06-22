import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GATEWAY_GRPC_SERVER_URL || "http://localhost:4000/graphql", // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});

export default client;
