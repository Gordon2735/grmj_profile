/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import mongoose from 'mongoose';
import { LocalUserSchema } from '../schemas/User_Schema.js';
import blogDB from './blogDB.js';

export default async function databaseCONN(): Promise<mongoose.Connection> {
    try {
        const conn: mongoose.Connection = mongoose.createConnection(
            process.env.MONGO_URI
        );

        // const LocalSchema: mongoose.Schema<any> = LocalUserSchema;

        conn.model('LocalUser', LocalUserSchema);
        blogDB();

        console.log(
            `MongoDB 'databaseCONN' created a new mongoose connection: ${conn.collection(
                'LocalUser'
            )}`
        );
        return conn;
    } catch (error: unknown) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
}

// MONGO_URI = mongodb+srv://team-webelistics:acts2389@cluster0.le1ltnq.mongodb.net/?retryWrites=true&w=majority
// MONGO_URI = mongodb+srv://grmj:mat2819@sandbox.glrio.mongodb.net/?retryWrites=true&w=majority
