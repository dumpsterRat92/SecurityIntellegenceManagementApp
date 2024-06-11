// Import necessary modules
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');
const cors = require('cors');

// Import GraphQL type definitions and resolvers
const { typeDefs, resolvers } = require('./schemas');
// Import database connection
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Initialize Apollo Server with type definitions and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();

  // Middleware to parse URL-encoded data and JSON data
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());

  // Apply authentication middleware and GraphQL endpoint
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware,
  }));

  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Start the server once the database connection is open
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Start Apollo Server
startApolloServer();
