/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

import mongoose from 'mongoose';
// import User from './UserGoogleSchema.js';

// const users = `${User}`;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const ObjectId = Schema.Types.ObjectId;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true
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
export default Model('Blog', BlogSchema);
