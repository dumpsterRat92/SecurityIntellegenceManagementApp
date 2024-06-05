// get profiles by indentifer, firstname/lastname, and vioations//

const typeDefs = `
type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    username: String!
}

type Profile {
    id: ID!
    firstName: String!
    lastName: String!
    age: Number!
    race: String!
    gender: String!
    hairColor: String!
    eyeColor: String!
    height: String!
    hostilityIndex: Number!
    indentifiers: [String]!
    vioations: [String]!
}
type Database {
    name: String!
    description: String!
    profiles: [Profile]
}

type Query {
    user(id: ID!): User
    profile(id: ID!): Profile
    database(id: ID!): Database
}

type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!, username: String!): User
    createProfile(firstName: String!, lastName: String!, age: Number!, race: String!, gender: String!, hairColor: String!, eyeColor: String!, height: String!, hostilityIndex: Number!, indentifiers: [String]!, vioations: [String]!): Profile
    createDatabase(name: String!, description: String!): Database
    updateUser(id: ID!, firstName: String!, lastName: String!, email: String!, password: String!, username: String!): User
    updateProfile(id: ID!, firstName: String!, lastName: String!, age: Number!, race: String!, gender: String!, hairColor: String!, eyeColor: String!, height: String!, hostilityIndex: Number!, indentifiers: [String]!, vioations: [String]!): Profile
}
`