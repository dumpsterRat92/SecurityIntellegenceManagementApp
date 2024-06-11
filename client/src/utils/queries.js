import { gql } from '@apollo/client';


export const QUERY_USER = gql`
    query user($email: String!) {
        user(email: $email) {
            email
            id
            password
            username
        }
    }
`;
export const QUERY_USERS = gql`
    query users {
        users {
            email
            id
            password
            username
        }
    }
`;

export const QUERY_PROFILE = gql`
  query profile($id: ID!) {
    profile(id: $id) {
      id
      firstName
      lastName
      age
      race
      gender
      hairColor
      eyeColor
      height
      hostilityIndex
      identifiers
      violations
      databaseId
    }
  }
`
export const QUERY_DATABASEBYUSER = gql`
query databaseByUser($userId: String!){
  databaseByUser(userId: $userId) {
    description
    id
    name
    profiles {
      id
      firstName
      lastName
      age
      race
      gender
      hairColor
      eyeColor
      height
      hostilityIndex
      identifiers
      violations
      databaseId
    }
  }
}
`;
export const QUERY_DATABASE = gql`
query database($databaseId: ID!) {
  database(id: $databaseId) {
    description
    id
    name
    profiles {
      id
      firstName
      lastName
      age
      race
      gender
      hairColor
      eyeColor
      height
      hostilityIndex
      identifiers
      violations
      databaseId
    }
    userId
  }
}
`