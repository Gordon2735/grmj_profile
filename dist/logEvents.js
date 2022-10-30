'use strict';
import { format } from 'date-fns';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${message}\t${uuidv4()}\n`;
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        else {
            await fsPromises.appendFile(path.join(__dirname, './logs', 'eventLog.log'), logItem);
        }
    }
    catch (error) {
        console.log(error);
    }
};
export default logEvents;
//# sourceMappingURL=logEvents.js.map