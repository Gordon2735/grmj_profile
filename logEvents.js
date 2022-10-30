'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { format } from 'date-fns';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
const logEvents = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const dateTime = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${message}\t${uuidv4()}\n`;
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            yield fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        else {
            yield fsPromises.appendFile(path.join(__dirname, './logs', 'eventLog.log'), logItem);
        }
    }
    catch (error) {
        console.log(error);
    }
});
export default logEvents;
//# sourceMappingURL=logEvents.js.map