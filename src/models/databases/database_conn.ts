/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

// import mongoose from 'mongoose';
// import { LocalUserSchema } from '../schemas/User_Schema.js';
// import { UserGoogleSchema } from '../schemas/UserGoogleSchema.js';
// import { UsersSchema } from '../schemas/UsersSchema.js';

// export default async function databaseCONN(): Promise<any> {
//     try {
//         const URI: string = process.env.MONGO_URI;
//         // mongoose.set('strictQuery', true);
//         // const conn: mongoose.Connection = mongoose.createConnection(URI, {
//         //     maxPoolSize: 10
//         // });
//         const conn: mongoose.Connection = mongoose.createConnection(URI);
//         conn.model('LocalUser', LocalUserSchema);
//         // conn.model('User', UserGoogleSchema);
//         // conn.model('Users', UsersSchema);

//         console.log(
//             `MongoDB 'databaseCONN' created a new mongoose connection: ${conn.host}`
//         );
//         return conn;
//     } catch (error: unknown) {
//         console.error(`Error: ${await error}`);
//         process.exit(1);
//     }
// }

// team-webelistics_DATABASE.portfolio_user
