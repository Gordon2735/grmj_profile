/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { format } from 'date-fns';
import fs from 'fs';
import fsPromises from 'fs/promises';
// import path from 'path';
import path, { PlatformPath } from 'path';

import { v4 as uuidv4 } from 'uuid';
// import { fileURLToPath } from 'url';

// export const __filename: string = fileURLToPath(import.meta.url);
// export const __dirname: string = path.dirname(__filename);

const paths: PlatformPath = path;

export const date: Date = new Date();
const uuidFour: string | undefined = uuidv4();

const logEvents: any = async (message: any) => {
  const dateTime = `${format(date, 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${uuidFour}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(paths.join('./logs'))) {
      await fsPromises.mkdir(paths.join('./logs'));
    } else {
      await fsPromises.appendFile(
        paths.join('./logs', 'eventLog.log'),
        logItem
      );
    }
  } catch (error: unknown) {
    console.log(error);
  }
};

export default logEvents;
