// get profiles by indentifer, firstname/lastname, and vioations//



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
    vioations: [String]!
}
type Database {
    id:ID!
    name: String!
    description: String!
    userId: String
    profiles: [Profile]
}

type Auth {
    token: ID
    user: User
}

type Query {
    users: [User]
    profiles: [Profile]
    user(id: ID!): User
    userByUsername(username: String!): User
    profile(id: ID!): Profile
    database: [Database]
}

type Mutation {
    login
    (
    username: String!,
     password: String!): Auth

    createUser(email: String!,
     password: String!,
      username: String!): User

    createProfile(firstName: String!,
     lastName: String,
      age: Int,
       race: String,
        gender: String,
         hairColor: String,
          eyeColor: String,
           height: String,
            hostilityIndex: Int!,
             identifiers: [String]!,
              vioations: [String]!): Profile

    createDatabase(name: String!,
     description: String!, 
     userId: String!): Database

    updateUser(id: ID!, email: String, password: String, username: String): User

    updateProfile(id: ID!,
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
            vioations: [String]): Profile

    updateDatabase(id: ID!, name: String, description: String, userId: ID): Database

    deleteUser(id: ID!): User

    deleteProfile(id: ID!): Profile

    deleteDatabase(id: ID!): Database
}
`
module.exports = typeDefs;