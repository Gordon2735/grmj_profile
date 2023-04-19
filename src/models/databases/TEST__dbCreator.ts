/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import mongoose from 'mongoose';

let MONGO_URI_USERDB: any;
let MONGO_URI_BLOGDB: any;
const mongoUser = `${MONGO_URI_USERDB}`;
const mongoBlog = `${MONGO_URI_BLOGDB}`;

export default function makeNewConnection(uri: string) {
    const db: mongoose.Connection = mongoose.createConnection(uri, {});

    db.on('error', function (this: any, error: unknown): void {
        console.log(
            `MongoDB :: connection ${this.name} ${JSON.stringify(error)}`
        );
        db.close().catch(() =>
            console.log(`MongoDB :: failed to close connection ${this.name}`)
        );
    });

    db.on('connected', function (this: any) {
        mongoose.set(
            'debug',
            (col: string, method: string, query: any[], doc: any[]) => {
                console.log(
                    `MongoDB :: ${
                        this.conn.name
                    } ${col}.${method}(${JSON.stringify(
                        query
                    )},${JSON.stringify(doc)})`
                );
            }
        );
        console.log(`MongoDB :: connected ${this.name}`);
    });

    db.on('disconnected', function (this: any) {
        console.log(`MongoDB :: disconnected ${this.name}`);
    });

    return db;
}

const dbUsersURI = makeNewConnection(mongoUser);
const dbBlogURI = makeNewConnection(mongoBlog);

export { dbUsersURI, dbBlogURI };
