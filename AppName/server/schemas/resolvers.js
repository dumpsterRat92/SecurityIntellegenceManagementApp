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
    user: async (parent, { email }, context) => {
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      const user = await User.findOne({ email })
      if (!user) {
        return {message: "user not found"}
      }
      return user;
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
    databases: async (parent, args, context) => {
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      return await Database.find({}).populate('profiles')
    },
    database: async (parent, args, context) => {
      // if (!context.user) {
      //       throw new authenticationError('Not authenticated');
      // }
      return await Database.findById(args.id).populate('profiles')
    },
    databaseByUser: async (parent, {userId}, context) => {
      const databussy = await Database.findOne({ userId }).populate('profiles')
      if(!databussy) {
        return {message: "databussy not found"}
      }
      return databussy
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        return 'Invalid username or password';
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        return 'Invalid username or password';;
      }

      const token = signToken(user);
      return {token, user};
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
      const database = await Database.findById(args.databaseId);
      if (!database){
        throw new Error('Database not found')
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
      }
      const profile = await Profile.create(newProfile);
      await Database.findByIdAndUpdate(
        database.id,
        { $push: { profiles: profile._id } },
        { new: true }
      );
      return profile;
    },
    updateUser: async (parent, args, context) => {
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await User.findByIdAndUpdate(args.id, args, { new: true });
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
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await User.findByIdAndDelete(id);
    },
    deleteProfile: async (parent, args, context) => {
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      const profile = await Profile.findById(args.id)
      if(!profile) {
        throw new Error('Profile not found')
      }
      const database = await Database.findById(profile.databaseId)
      if (!database) {
        throw new Error('Database not found')
      }
      await Database.findByIdAndUpdate(
        database.id,
        { $pull: { profiles: {_id: args.id} } },
        { new: true }
      )
      return await Profile.findByIdAndDelete(args.id);
    },
    deleteDatabase: async (parent, { id }, context) => {
      // if (!context.user) {
      //   throw new authenticationError('Not authenticated');
      // }
      return await Database.findByIdAndDelete(id);
    }
  }
};

module.exports = resolvers;
