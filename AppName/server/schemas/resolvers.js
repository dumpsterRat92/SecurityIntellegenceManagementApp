const {User, Database, Profile } = require('../models');

const { signToken, authenticationError } = require('../utils/auth');



const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        databases: async () => {
            return await Database.find({});
        },
        profiles: async () => {
            return await Profile.find({});
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email, password });
        },    
        addUser: async (parent, { email, password, username }) => {
            return await User.create({ email, password, username });
        },
        addDatabase: async (parent, { name, description, userId, profiles }) => {
            return await Database.create({ name, description, userId, profiles });
        },
        addProfile: async (parent, { fistName, lastName, age, race, gender, hairColor, eyeColor, height, hostilityIndex, identifiers, violations}, context) => {
            if (context.database) {
                const profile = await Profile.create({ fistName, lastName, age, race, gender, hairColor, eyeColor, height, hostilityIndex, identifiers, violations })
                
                await Database.findByIdAndUpdate(context.database, { $push: { profiles: profile._id } });

                return profile;
            } 
            throw authenticationError;

        },
        updateUser: async (parent, { userId, email, password, username }) => {
            return await User.findByIdAndUpdate( {new: true});
        },
        updateProfile: async (parent, args) => {
            return await Profile.findByIdAndUpdate(args.id, args, {new: true});
        },
        updateDatabase: async (parent, args) => {
            return await Database.findByIdAndUpdate(args.id, args, {new: true});
        },
        deleteUser: async (parent, { userId }) => {
            return await User.findByIdAndDelete({_id: userId});
        },
        deleteProfile: async (parent, { profileId }) => {
            return await Profile.findByIdAndDelete({_id: profileId});
        },
        deleteDatabase: async (parent, { databaseId }) => {
            return await Database.findByIdAndDelete({_id: databaseId});
        }
    
    }
}



module.exports = resolvers;