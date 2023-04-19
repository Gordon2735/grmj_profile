'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Model = mongoose.model;
const ObjectId = Schema.Types.ObjectId;

const UsersSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    displayName: {
        type: String
    },
    userName: {
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
    user: {
        type: ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export default Model('Users', UsersSchema);
export { UsersSchema };
