/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDays = /* GraphQL */ `
  query GetDays($id: ID!) {
    getDays(id: $id) {
      id
      Game
      Practice
      Indo
      Lift
      WallBall
      PT
      Homewok
      Nap
      VideoGames
      JessCall
      Hangout
      Parents
      Stressed
      GoodEvent
      BadEvent
      Classes
      Meals
      Satisfied
      Sleep
      Healthy
      Happy
      Description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDays = /* GraphQL */ `
  query ListDays(
    $filter: ModelDaysFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Game
        Practice
        Indo
        Lift
        WallBall
        PT
        Homewok
        Nap
        VideoGames
        JessCall
        Hangout
        Parents
        Stressed
        GoodEvent
        BadEvent
        Classes
        Meals
        Satisfied
        Sleep
        Healthy
        Happy
        Description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
