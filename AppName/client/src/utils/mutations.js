import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            id
            username
            email
        }
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($email: String!, $password: String!, $username: String!) {
        createUser(email: $email, password: $password, username: $username) {
        token
        user {
                id
                username
                email
            }
        }
    }
`;

export const CREATE_DATABASE = gql`
    mutation createDatabase($name: String!, $description: String!, $userId: String!) {
        createDatabase(name: $name, description: $description, userId: $userId) {
        description
        id
        name
        userId
        profiles {
        id
        }
        }
    }
`;


export const CREATE_PROFILE = gql`
    mutation createProfile($firstName: String!, $hostilityIndex: Int!, $identifiers: [String]!, $violations: [String]!, $databaseId: ID!, $height: String, $eyeColor: String, $hairColor: String, $gender: String, $race: String, $age: Int, $lastName: String) {
        createProfile(firstName: $firstName, hostilityIndex: $hostilityIndex, identifiers: $identifiers, violations: $violations, databaseId: $databaseId, height: $height, eyeColor: $eyeColor, hairColor: $hairColor, gender: $gender, race: $race, age: $age, lastName: $lastName) {
        age
        databaseId
        eyeColor
        firstName
        gender
        hairColor
        height
        hostilityIndex
        id
        identifiers
        lastName
        race
        violations
        }
    }
`;

export const DELETE_USER = gql`
mutation Mutation($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      id
    }
}
`

export const DELETE_DATABASE = gql`
mutation Mutation($deleteDatabaseId: ID!) {
    deleteDatabase(id: $deleteDatabaseId) {
      id
    }
}
`

export const DELETE_PROFILE = gql`
mutation Mutation($deleteProfileId: ID!) {
    deleteProfile(id: $deleteProfileId) {
      id
    }
}
`
