import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(process.env.FENCELIVE_API_URI as string, {}) 