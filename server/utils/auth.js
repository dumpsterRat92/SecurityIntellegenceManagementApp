// Import necessary modules
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

// Define the secret key and token expiration time
const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  // Define a custom authentication error
  authenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),

  // Middleware to handle authentication
  authMiddleware: function ({ req }) {
    // Allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // If token is sent via the Authorization header, split it to get the token value
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // If no token is found, return the request object as is
    if (!token) {
      return req;
    }

    // Verify the token
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data; // Attach user data to the request object
    } catch {
      console.log('Invalid token');
    }

    // Return the request object
    return req;
  },

  // Function to sign a token with user data
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id }; // Create payload with user data

    // Sign the token with the payload, secret, and expiration time
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
