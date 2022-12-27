/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import dotenv from 'dotenv';
import express from 'express';
import { Application, Request, Response, NextFunction } from 'express';
import { create, ExpressHandlebars } from 'express-handlebars';
import path, { PlatformPath } from 'path';
import fs from 'fs';
import morgan from 'morgan';
import cors from 'cors';
import { EventEmitter } from 'events';
import open from 'open';
import favicon from 'serve-favicon';
import logEvents, { date } from './logEvents';
import router from './controller/router';

// Load Environment Variables
dotenv.config({ path: './config/config.env' });

// Create Instance of Express App
const app: Application = express();
const paths: PlatformPath = path;

// Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// body-parser...
app.use(express.json());
app.use(cors());

// Handlebars Mapping
const handlebars: ExpressHandlebars = create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: paths.join(__dirname, '..', 'views', 'layouts'),
  partialsDir: paths.join(__dirname, '..', 'views', 'partials'),
  helpers: {},
});

// Crank Up the Handlebars Engine
app.set('view engine', '.hbs');
// app.set('/', paths.join(__dirname, '/views'));
app.set('views', './views');
app.engine('.hbs', handlebars.engine);
// app.enable('view cache');

// Favicon
app.use(favicon(paths.join(__dirname, '..', '/src/images', '/favicon.ico')));

// static folders
app.use(express.static('dist/'));
app.use(express.static('controller'));
app.use('/', express.static(paths.join(__dirname, '..', '/')));
// ! Have these three temporarily in long-hand to zero in on index.ts rendering issues
app.use(express.static('/src/ts'));
app.use(express.static('/src/css'));
app.use(express.static('/images'));

// set Global Variables
app.use(function (_req: Request, res: Response, next: NextFunction) {
  if (!res.locals.partials) res.locals.partials = {};
  next();
});

// Integrate Routes
app.use('/', router);

// Render Errors when they occur
// ! Research Error and 404 Handling
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.render('404', { layout: 'errors' });
  next();
});
// ! Research Error and 500 Handling
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.render('500', { layout: 'errors500' });
  next();
});

// Configure Port and Host
const PORT: string | 9080 = process.env.PORT || 9080;
const HOST: string = process.env.HOST || `127.0.0.1`;

// Launch Server & Event Logger
createServer();
eventLogger();

// Create Server
async function createServer(): Promise<void> {
  app.listen(PORT, async () => {
    console.info(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    );
    try {
      const openBrowser = async (
        host: string,
        port: string | 9080
      ): Promise<void> => {
        await open(`${host}:${port}`, {
          app: { name: open.apps.chrome },
        }).catch((error: Error, code?: any): Error | any | null => {
          console.error(
            ` Error occurred when trying to open the browser: 
						${error} || Error Code: ${code}`
          );
          app.use((_req: Request, res: Response, next: NextFunction) => {
            res.render('500', { layout: 'errors500' });
            next();
          });
        });
      };
      await openBrowser(HOST, PORT);
    } catch (error: unknown) {
      console.log(`Unable to start Browser due to a Server Problem: ${error}`);
      app.use((_req: Request, res: Response, next: NextFunction) => {
        res.render('500', { layout: 'errors500' });
        next();
      });
    }
  });
}
// Open Browser

// Logging Events
async function eventLogger(): Promise<void> {
  class TrackEmitter extends EventEmitter {}
  const trackEmitter: EventEmitter = new TrackEmitter();

  try {
    trackEmitter.on('./log', (message: any): EventEmitter => {
      return logEvents(message);
    });
    setTimeout((): void => {
      trackEmitter.emit(
        'log',
        'Nodemon Server Logging initiated: "EVENT EMITTED"'
      ),
        console.log(date);
    }, 500);
  } catch (error: unknown) {
    console.log(`It appears the Event Emitter errored on startup
			ERROR CODE: ${error}
		`);
    app.use((_req: Request, res: Response, next: NextFunction) => {
      res.render('500', { layout: 'errors500' });
      next();
    });
  }

  try {
    // Create a write stream (in append mode)(morgan)
    const accessLogStream: fs.WriteStream = fs.createWriteStream(
      path.join('./logs', 'access.log'),
      { flags: 'a' }
    );
    app.use<any>(morgan<Request>('combined', { stream: accessLogStream }));
    app.get<any>('/', (_req: Request, res: Response) => {
      res.send('HOOT Webelistics Logger Tracker');
    });
  } catch (error: unknown) {
    console.log(`On Server Startup there appears to have been a WriteStream Error
			ERROR CODE: ${error}
		`);
    app.use((_req: Request, res: Response, next: NextFunction) => {
      res.render('500', { layout: 'errors500' });
      next();
    });
  }
}
