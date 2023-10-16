/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import mongoose, { ConnectOptions } from 'mongoose';

const blogDB = async (goose: typeof mongoose) => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined');
        }
        await goose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'ProfileBlog'
        } as ConnectOptions);
        console.info(
            `Connected to MongoDB Atlas Database Server @ database ProfileBlog`
        );
    } catch (error: unknown) {
        console.error(
            `An error occurred while connecting to MongoDB Atlas Database Server: ${error}`
        );
        process.exit(1);
    }
};
export default blogDB;
