'use strict';

import mongoose from 'mongoose';

const Model = mongoose.model;
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const LocalUserSchema = new Schema({
    userId: {
        type: String,
        required: false
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    status: {
        type: String,
        default: 'public',
        enum: ['public', 'private']
    },
    user: {
        type: ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export default Model('LocalUser', LocalUserSchema);
export { LocalUserSchema };
