const mongoose = require('mongoose');

const { Schema } = mongoose;
const profiles = require('./Profile');

const databaseSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    profiles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile'
        }
    ]
})
profiles: [Profile.schema]

const Database = mongoose.model('Database', databaseSchema);

module.exports = Database;