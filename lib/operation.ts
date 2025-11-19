import { gql } from "@apollo/client";

export const GET_USERS_PROJECTS = gql`
  query GetUsersAndProjects {
    users {
      id
      name
      image
      solutions {
        probName
        solLink
        liveLink
        createdAt
      }
    }
  }
`;

export const GET_USER_ONE = gql`
  query GetUserOne($id: ID!) {
    user(id: $id) {
      id
      name
      image
      solutions {
        probName
        solLink
        liveLink
        createdAt
      }
    }
  }
`;

export const WINNER_QUERY = gql`
  query SprintWinners {
    sprintWinners {
      id
      name
      image
    }
  }
`;

export const SUBMIT_SOLUTION = gql`
  mutation SubmitSolution(
    $probName: String!
    $solLink: String!
    $liveLink: String
  ) {
    submitSolution(
      probName: $probName
      solLink: $solLink
      liveLink: $liveLink
    ) {
      id
      probName
    }
  }
`;
