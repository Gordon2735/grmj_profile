/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { format } from 'date-fns';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

import { v4 as uuidv4 } from 'uuid';
// import { fileURLToPath } from 'url';

// export const __filename: string = fileURLToPath(import.meta.url);
// export const __dirname: string = path.dirname(__filename);

// const paths: path.PlatformPath = path;

export const date: Date = new Date();
const uuidFour: string | undefined = uuidv4();

const logEvents: any = async (message: any) => {
    const dateTime = `${format(date, 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidFour}\t${message}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join('./logs'))) {
            await fsPromises.mkdir(path.join('./logs'));
        } else {
            await fsPromises.appendFile(
                path.join('./logs', 'eventLog.log'),
                logItem
            );
        }
    } catch (error: unknown) {
        console.error(`There was an error in the logEvents Process: ${error}`);
    }
};

export default logEvents;
