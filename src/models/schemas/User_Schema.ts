'use strict';

import mongoose from 'mongoose';

const Model = mongoose.model;

const LocalUserSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export default Model('LocalUser', LocalUserSchema);
export { LocalUserSchema };
