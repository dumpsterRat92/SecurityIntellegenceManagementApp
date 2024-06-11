// Import database connection and models
const db = require('../config/connection');
const { Profile, Database, User } = require('../models');

// Import seed data
const userSeeds = require('./userSeeds.json');
const profileSeeds = require('./profileSeeds.json');
const databaseSeeds = require('./databaseSeeds.json'); 

// Import function to clean the database
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        // Clean the collections before seeding
        await cleanDB('User', 'users');
        await cleanDB('Database', 'databases');
        await cleanDB('Profile', 'profiles');

        // Seed the User collection
        const user = await User.create(userSeeds[0]);

        // Assign the user ID to the database seed
        databaseSeeds[0].userId = user.id;

        // Seed the Database collection
        const database = await Database.create(databaseSeeds[0]);

        // Loop through the profile seeds, assign database ID, and create profiles
        for (var i = 0; i < profileSeeds.length; i++) {
            profileSeeds[i].databaseId = database.id;
            const profile = await Profile.create(profileSeeds[i]);
            // Update the database with the new profile
            const updatedDatabase = await Database.findByIdAndUpdate(
                database.id,
                {
                    $push: { profiles: profile.id }
                },
                { 
                    new: true 
                }
            );
        }

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log("Database seeded successfully");
    process.exit(0);
});
