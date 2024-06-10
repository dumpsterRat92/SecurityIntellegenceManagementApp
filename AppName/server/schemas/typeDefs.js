// get profiles by indentifer, firstname/lastname, and violations//



const typeDefs = `
type User {
    id: ID!
    email: String!
    password: String!
    username: String!
}

type Profile {
    id: ID!
    firstName: String!
    lastName: String
    age: Int
    race: String
    gender: String
    hairColor: String
    eyeColor: String
    height: String
    hostilityIndex: Int!
    identifiers: [String]!
    violations: [String]!
    databaseId: ID!
}
type Database {
    id:ID!
    name: String!
    description: String!
    userId: String!
    profiles: [Profile]
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    profiles: [Profile]
    user(email: String!): User
    userByUsername(username: String!): User
    profile(id: ID!): Profile
    databases: [Database]
    database(id: ID!): Database
    databaseByUser(userId: String!): Database
    }

type Mutation {
    login(
        email: String!,
        password: String!
    ): Auth

    createUser(
        email: String!,
        password: String!,
        username: String!
    ): Auth

    createProfile(
        firstName: String!,
        lastName: String,
        age: Int,
        race: String,
        gender: String,
        hairColor: String,
        eyeColor: String,
        height: String,
        hostilityIndex: Int!,
        identifiers: [String]!,
        violations: [String]!,
        databaseId: ID!
    ): Profile

    createDatabase(
        name: String!,
        description: String!, 
        userId: String!
    ): Database

    updateUser(
        id: ID!, 
        email: String, 
        password: String, 
        username: String
    ): User

    updateProfile(
        id: ID!,
        firstName: String,
        lastName: String,
        age: Int,
        race: String,
        gender: String,
        hairColor: String, 
        eyeColor: String, 
        height: String,
        hostilityIndex: Int,
        identifiers: [String], 
        violations: [String]
    ): Profile

    updateDatabase(
        id: ID!, 
        name: String, 
        description: String, 
        userId: ID, 
        profiles: ID
    ): Database

    deleteUser(id: ID!): User

    deleteProfile(id: ID!): Profile

    deleteDatabase(id: ID!): Database
}
`
module.exports = typeDefs;