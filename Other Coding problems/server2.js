const { ApolloServer, gql } = require('apollo-server');
const { Sequelize, DataTypes } = require('sequelize');

// Create a new instance of Sequelize connected to your MySQL database
const sequelize = new Sequelize('gqlinfo', 'root', 'saranajay', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Define a sample model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
});

// Sync the models with the database
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error creating database & tables:', err);
  });

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
    createuser(username: String!, email: String!): User
  }
`;

// Define the resolvers
const resolvers = {
  Query: {
    users: async () => {
      return await User.findAll(); // Fetch all users from the database
    },
    user: async (parent, { id }) => {
      return await User.findByPk(id); // Fetch a user by primary key (id)
    },
  },

  Mutation: {
    createuser: async (parent, { username, email }) => {
      const newUser = await User.create({ username, email }); // Create a new user in the database
      return newUser;
    }
  }
};

// Create an Apollo server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
