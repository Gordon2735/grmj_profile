'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Model = mongoose.model;

const UserGoogleSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export default Model('User', UserGoogleSchema);
