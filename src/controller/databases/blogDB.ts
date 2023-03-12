/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import mongoose from 'mongoose';

const blogDB = async (): Promise<any> => {
    try {
        mongoose.set('strictQuery', true);
        const conn: Promise<typeof mongoose> = mongoose
            .connect(process.env.MONGO_URI, {})
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
