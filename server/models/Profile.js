const mongoose = require('mongoose');
const Database = require('./Database');

const { Schema } = mongoose;

const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        default: 'unknown',
    },
    lastName: {
        type: String,
        trim: true,
        default: 'unknown',
    },
    age: {
        type: Number,
        trim: true,
        default: 0,
    },
    race: {
        type: String,
        trim: true,
        default: 'unknown',
    },
    gender: {
        type: String,
        trim: true,
        default: 'unknown',
    },
    hairColor: {
        type: String,
        trim: true,
        default: 'unknown',
    },
    eyeColor: {
        type: String,
        trim: true,
        default: 'unknown',
    },
    height: {
        type: String,
        trim: true,
        default: 'unknown',
    },
    hostilityIndex: {
        type: Number,
        required: true,
        trim: true,
    },
    identifiers: [{
        type: String,
        trim: true,
        required: true,
    }],
    violations: [{
        type: String,
        trim: true,
        allowNull: true,
        required: true,
    }],
    databaseId: {
        type: Schema.Types.ObjectId,
        ref: 'Database',
        required: true
    }


}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
    // NICE
        virtuals: true,
    }, 
}
);
profileSchema.virtual('violationCount').get(function(){
    return this.violations.length;
});
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

