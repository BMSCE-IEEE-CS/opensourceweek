import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Mutation {
    submitSolution(
      probName: String!
      solLink: String!
      liveLink: String
    ): Solution!
  }

  type Solution {
    id: ID!
    probName: String!
    solLink: String!
    liveLink: String
    createdAt: String!
  }

  type Query {
    _empty: String
  }
`;
