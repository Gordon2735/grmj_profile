/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import mongoose from 'mongoose';
// import makeNewConnection from './dbCreator.js';

// import { dbBlogURI } from './dbCreator.js';

const blogDB = async (): Promise<any> => {
    try {
        // mongoose.set('strictQuery', true);
        const conn: Promise<typeof mongoose> = mongoose
            // .connect(process.env.MONGO_URI, { dbName: 'blogDB' })
            .connect(process.env.MONGO_URI)
            .then((mongoose) => {
                return mongoose;
            });
        console.log(
            `MongoDB 'blogDB' Connected: ${(await conn).connection.host}`
        );
        return;
    } catch (error: unknown) {
        console.error(`Error: ${error}`);
        process.exit(1);
    }
};
export default blogDB;

// mongodb+srv://grmj:mat2819@sandbox.glrio.mongodb.net/?retryWrites=true&w=majority
// team-webelistics:acts2389@cluster0.abfpuzr.mongodb.net/?retryWrites=true&w=majority
