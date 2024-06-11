const mongoose = require('mongoose');

const { Schema } = mongoose;

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
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    profiles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile',
            allowNull: true
        }
    ]
})

const Database = mongoose.model('Database', databaseSchema);

module.exports = Database;