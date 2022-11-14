'use strict';

import { format } from 'date-fns';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';

export const __filename: string = fileURLToPath(import.meta.url);
export const __dirname: string = path.dirname(__filename);

export const date: Date = new Date();
const uuidFour: string | undefined = uuidv4();

const logEvents: any = async (message: any) => {
	const dateTime: string = `${format(date, 'yyyyMMdd\tHH:mm:ss')}`;
	const logItem: string = `${dateTime}\t${uuidFour}\t${message}\n`;
	console.log(logItem);
	try {
		if (!fs.existsSync(path.join('/grmj_profile/logs'))) {
			await fsPromises.mkdir(path.join('/grmj_profile/logs'));
		} else {
			await fsPromises.appendFile(
				path.join('/grmj_profile/logs', 'eventLog.log'),
				logItem
			);
		}
	} catch (error: any) {
		console.log(error);
	}
};

export default logEvents;
