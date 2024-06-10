import { gql } from '@apollo/client';


export const QUERY_USER = gql`
    query user($userId: ID!) {
        user(id: $userId) {
            email
            id
            password
            username
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