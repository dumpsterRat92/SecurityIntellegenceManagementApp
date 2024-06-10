const db = require('../config/connection');
const { Profile, Database, User } = require('../models');
const userSeeds = require('../seeds/userSeeds.json');
const profileSeeds = require('../seeds/profileSeeds.json');
const databaseSeeds = require('../seeds/databaseSeeds.json'); 
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('User','users');
        await cleanDB('Database','databases');
        await cleanDB('Profile','profiles');

        const user = await User.create(userSeeds[0]);

        databaseSeeds[0].userId = user.id;

        const database = await Database.create(databaseSeeds[0]);

        for (var i = 0; i < profileSeeds.length; i++) {
            profileSeeds[i].databaseId = database.id;
            const profile = await Profile.create(profileSeeds[i]);
            const database2 = await Database.findByIdAndUpdate(
                database.id,
                {
                    $push: {profiles: profile.id}
                },
                { 
                    new: true 
                }
            )
        }

    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log("Nigga i'm Seeded, Seeded, Seeded");
    process.exit(0);
})