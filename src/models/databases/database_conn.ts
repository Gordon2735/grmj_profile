/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import mongoose from 'mongoose';

import UsersSchema from '../schemas/UsersSchema.js';
import BlogSchema from '../schemas/Blog_Schema.js';
import UserGoogleSchema from '../schemas/UserGoogleSchema.js';

export default async function databaseCONN(): Promise<mongoose.Connection> {
    const conn = mongoose.createConnection(
        process.env.MONGO_URI
    ) as mongoose.Connection;

    const usersSchema = UsersSchema as unknown as mongoose.Schema;
    const blog_Schema = BlogSchema as unknown as mongoose.Schema;
    // prettier-ignore
    const userGoogleSchema = UserGoogleSchema as unknown as mongoose.Schema;

    conn.model('Users', usersSchema);
    conn.model('Blog', blog_Schema);
    conn.model('User', userGoogleSchema);

    return conn;
}

// MONGO_URI = mongodb+srv://team-webelistics:acts2389@cluster0.le1ltnq.mongodb.net/?retryWrites=true&w=majority
// MONGO_URI = mongodb+srv://grmj:mat2819@sandbox.glrio.mongodb.net/?retryWrites=true&w=majority
