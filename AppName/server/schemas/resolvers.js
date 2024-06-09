const { User, Database, Profile } = require('../models');
const { signToken, authenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      return await User.find({});
    },
    profiles: async (parent, args, context) => {
        // if(context.user) {
        //     throw new authenticationError('Not authenticated');
        // }
        return await Profile.find({});
    },
    user: async (parent, { id }, context) => {
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      return await User.findById(id);
    },
    userByUsername: async (parent, { username }, context) => {
        // if (!context.user) {
        //     throw new authenticationError('Not authenticated');
        // }
        return await User.findOne({ username });
    },
    profile: async (parent, { id }, context) => {
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      return await Profile.findById(id);
    },
    database: async (parent, args, context) => {
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      return await Database.find({})
    }
  },
  Mutation: {
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new authenticationError('Invalid username or password');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new authenticationError('Invalid username or password');
      }

      const token = signToken(user);
      return { token, user };
    },
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    createDatabase: async (parent, args, context) => {
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await Database.create( args );
    },
    createProfile: async (parent, args, context) => {
      // if (!context.user || !context.database) {
      //   throw new authenticationError('Not authenticated');
      // }
      const profile = await Profile.create(args);
      await Database.findByIdAndUpdate(
        args.databaseid,
        { $push: { profiles: profile._id } },
        { new: true }
      );
      return profile;
    },
    updateUser: async (parent, args, context) => {
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await User.findByIdAndUpdate(context.user.id, args, { new: true });
    },
    updateProfile: async (parent, args, context) => {
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await Profile.findByIdAndUpdate(args.id, args, { new: true });
    },
    updateDatabase: async (parent, args, context) => {
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await Database.findByIdAndUpdate(args.id, args, { new: true });
    },
    deleteUser: async (parent, { id }, context) => {
      if (!context.user) {
        throw new authenticationError('Not authenticated');
      }
      return await User.findByIdAndDelete(id);
    },
    deleteProfile: async (parent, { id }, context) => {
      if (!context.user) {
        throw new authenticationError('Not authenticated');
      }
      return await Profile.findByIdAndDelete(id);
    },
    deleteDatabase: async (parent, { id }, context) => {
      if (!context.user) {
        throw new authenticationError('Not authenticated');
      }
      return await Database.findByIdAndDelete(id);
    }
  }
};

module.exports = resolvers;
