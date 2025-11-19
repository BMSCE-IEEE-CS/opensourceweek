import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String
    email: String
    image: String
    solutions: [Solution!]!
    createdAt: String!
  }

  type Solution {
    id: ID!
    probName: String!
    solLink: String!
    liveLink: String
    createdAt: String!
  }

  type Mutation {
    submitSolution(
      probName: String!
      solLink: String!
      liveLink: String
    ): Solution!
  }

  type Query {
    users: [User!]!
  }
`;
