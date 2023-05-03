/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

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
    email: {
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
    username: {
        type: String,
        ref: 'username'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

LocalUserSchema.plugin(passportLocalMongoose);

const PostSchema = new Schema({
    title: String,
    postedBy: {
        type: ObjectId,
        ref: 'LocalUser'
    }
});
const Post = Model('Post', PostSchema);

const LocalUser: any = LocalUserSchema;

export default Model('LocalUser', LocalUserSchema);
export { LocalUser, LocalUserSchema, Post, PostSchema };
