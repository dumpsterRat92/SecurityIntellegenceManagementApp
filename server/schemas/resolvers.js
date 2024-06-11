// Import required models and utilities
const { User, Database, Profile } = require('../models');
const { signToken, authenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    // Fetch all users
    users: async (parent, args, context) => {
      return await User.find({});
    },
    // Fetch all profiles
    profiles: async (parent, args, context) => {
        // Uncomment the following lines to enable authentication
        // if(context.user) {
        //     throw new authenticationError('Not authenticated');
        // }
        return await Profile.find({});
    },
    // Fetch a single user by email
    user: async (parent, { email }, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      const user = await User.findOne({ email });
      if (!user) {
        return {message: "User not found"};
      }
      return user;
    },
    // Fetch a single user by username
    userByUsername: async (parent, { username }, context) => {
        // Uncomment the following lines to enable authentication
        // if (!context.user) {
        //     throw new authenticationError('Not authenticated');
        // }
        return await User.findOne({ username });
    },
    // Fetch a single profile by ID
    profile: async (parent, { id }, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      return await Profile.findById(id);
    },
    // Fetch all databases
    databases: async (parent, args, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      return await Database.find({}).populate('profiles');
    },
    // Fetch a single database by ID
    database: async (parent, args, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      return await Database.findById(args.id).populate('profiles');
    },
    // Fetch a database by user ID
    databaseByUser: async (parent, { userId }, context) => {
      const database = await Database.findOne({ userId }).populate('profiles');
      if(!database) {
        return {message: "Database not found"};
      }
      return database;
    }
  },
  Mutation: {
    // User login
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        return 'Invalid username or password';
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        return 'Invalid username or password';
      }

      const token = signToken(user);
      return { token, user };
    },
    // Create a new user
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // Create a new database
    createDatabase: async (parent, args, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await Database.create(args);
    },
    // Create a new profile
    createProfile: async (parent, args, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user || !context.database) {
      //   throw new authenticationError('Not authenticated');
      // }
      const database = await Database.findById(args.databaseId);
      if (!database){
        throw new Error('Database not found');
      }
      const newProfile = {
        firstName: args.firstName,
        lastName: args.lastName,
        age: args.age,
        race: args.race,
        gender: args.gender,
        hairColor: args.hairColor,
        eyeColor: args.eyeColor,
        height: args.height,
        hostilityIndex: args.hostilityIndex,
        identifiers: args.identifiers,
        violations: args.violations,
        databaseId: database.id
      };
      const profile = await Profile.create(newProfile);
      await Database.findByIdAndUpdate(
        database.id,
        { $push: { profiles: profile._id } },
        { new: true }
      );
      return profile;
    },
    // Update an existing user
    updateUser: async (parent, args, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await User.findByIdAndUpdate(args.id, args, { new: true });
    },
    // Update an existing profile
    updateProfile: async (parent, args, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await Profile.findByIdAndUpdate(args.id, args, { new: true });
    },
    // Update an existing database
    updateDatabase: async (parent, args, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await Database.findByIdAndUpdate(args.id, args, { new: true });
    },
    // Delete a user
    deleteUser: async (parent, { id }, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await User.findByIdAndDelete(id);
    },
    // Delete a profile
    deleteProfile: async (parent, args, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      const profile = await Profile.findById(args.id);
      if(!profile) {
        throw new Error('Profile not found');
      }
      const database = await Database.findById(profile.databaseId);
      if (!database) {
        throw new Error('Database not found');
      }
      await Database.findByIdAndUpdate(
        database.id,
        { $pull: { profiles: {_id: args.id} } },
        { new: true }
      );
      return await Profile.findByIdAndDelete(args.id);
    },
    // Delete a database
    deleteDatabase: async (parent, { id }, context) => {
      // Uncomment the following lines to enable authentication
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await Database.findByIdAndDelete(id);
    }
  }
};

module.exports = resolvers;
