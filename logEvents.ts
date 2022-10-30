'use strict';

import { format } from 'date-fns';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid'; //. npm i -D @types/uuid
import { fileURLToPath } from 'url';

export const __filename: string = fileURLToPath(import.meta.url);
export const __dirname: string = path.dirname(__filename);

const logEvents: any = async (message: any): Promise<void> => {
	const dateTime: string = `${format(new Date(), 'yyyMMdd\tHH:mm:ss')}`;
	const logItem: string = `${dateTime}\t${message}\t${uuidv4()}\n`;

	try {
		if (!fs.existsSync(path.join(__dirname, 'logs'))) {
			await fsPromises.mkdir(path.join(__dirname, 'logs'));
		} else {
			await fsPromises.appendFile(
				path.join(__dirname, './logs', 'eventLog.log'),
				logItem
			);
		}
	} catch (error: unknown) {
		console.log(error);
	}
};

export default logEvents;
