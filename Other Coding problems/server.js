const { ApolloServer, gql } = require('apollo-server');

// Define the schema
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String
  }

  type Query {
    users: [User]
    user(id: ID!): User  
  }

  type Mutation {
    createuser(username: String!,email: String!): User
  }

`;

// Sample data
const users = [
  { id: "1", username: "ajay", email: "ajay@example.com" },
  { id: "2", username: "john", email: "john@example.com" }
];

// Define the resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => users.find(user => user.id === id), 
  },

  Mutation: {
    createuser: (parent,{ username,email }) => {
        const newuser = { id:`${users.length + 1}`, username, email};
        users.push(newuser);
        return newuser;
    }
  }
};

// Create an Apollo server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
