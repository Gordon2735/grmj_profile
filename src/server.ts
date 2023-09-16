/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import dotenv from 'dotenv';
import express, { Application, Request, Response, NextFunction } from 'express';
import { create, ExpressHandlebars } from 'express-handlebars';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import path from 'path';
import MongoStore from 'connect-mongo';
import passport from 'passport';
import passportConfig from '../config/passportGoogle.js';
import authenticateUser from '../config/passportGoogle.js';
import session from 'express-session';
import methodOverride from 'method-override';
import fs from 'fs';
import morgan from 'morgan';
import cors from 'cors';
import { EventEmitter } from 'events';
import { fileURLToPath } from 'url';
import open, { apps } from 'open';
import favicon from 'serve-favicon';
import logEvents, { date } from './logEvents.js';
import router from './controller/router.js';
import { error404, error500 } from './controller/routes/appRoutes.js';
import helper from '../views/helpers/hbsHelpers.js';
import blogDB from './models/databases/blogDB.js';

passportConfig(passport);
authenticateUser(passport);

dotenv.config({ path: './config/config.env' });

const app: Application = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT: string | 9080 = process.env.PORT || 9080;
const HOST: string = process.env.HOST || `http://127.0.0.1`;
const openApps = apps;
const environment: string | NodeJS.ProcessEnv =
    process.env.NODE_ENV || 'development';

// Method-override
app.use(
    methodOverride(function (req: any, res: any) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            //! look in urlencoded POST bodies and delete it
            const method = req.body._method;
            delete req.body._method;
            return method;
        }
        console.log(res.statusCode);
    })
);

// Logging Middleware
if (environment) {
    app.use(morgan('dev'));
}
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    cors({
        origin: '*', // allow to server to accept request from different origin
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: [
            'Origin',
            'X-Requested-With',
            'Content-Type',
            'Accept',
            'X-Access-Token'
        ]
    })
);

// Handlebars Mapping
const handlebars: ExpressHandlebars = create({
    extname: '.hbs',
    // ! CHECK THIS OUT || MAYBE CHANGE TO 'main'
    defaultLayout: 'dash',
    layoutsDir: path.join(__dirname, '..', '..', 'views', 'layouts'),
    partialsDir: path.join(__dirname, '..', '..', 'views', 'partials'),
    helpers: { ...helper },
    handlebars: allowInsecurePrototypeAccess(Handlebars)
});

// Crank Up the Handlebars Engine & Configurations
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '..', '..', 'views'));
app.enable('view cache');

// Session Middleware
app.use(
    session({
        secret: process.env.SECRET as string | string[],
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI as string
        })
    })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// static folders
app.use(express.static(path.join(__dirname, '../../dist')));
app.use(express.static('src'));

// Favicon
app.use(favicon(path.join(__dirname, '/images', '/favicon.ico')));

// set Global Variables
app.use(function (_req: Request, res: Response, next: NextFunction) {
    if (!res.locals.partials) res.locals.partials = {};
    next();
});
app.use(function (req: Request, res: Response, next: NextFunction) {
    res.locals.user = req.user || null;
    next();
});

// Integrated Routes
app.use('/', router);

// Launch Server & Create Event Logger
createServer(HOST, PORT, date);

// Create Server
async function createServer(
    host: string,
    port: string | 9080,
    backlog: Date
): Promise<void> {
    try {
        app.listen(PORT, () => {
            console.info(
                `Server running in ${environment} mode on port ${PORT}`
            );
            console.info(`Server INSTANCE occurred: ` + backlog);
            const openBrowser = async (): Promise<void> => {
                await open(`${host}:${port}/landing`, {
                    app: { name: openApps.chrome }
                }).catch((error: Error, code?: string): Error | any | null => {
                    console.error(
                        ` Error occurred when trying to open the browser: 
						${error} || Error Code: ${code}`
                    );
                    app.use(
                        (_req: Request, res: Response, next: NextFunction) => {
                            res.render('errors/500', { layout: '500' });
                            next();
                        }
                    );
                });
            };
            openBrowser();
        });
        openDatabases();
    } catch (error: unknown) {
        console.error(
            `Unable to start Browser due to a Server Problem: ${await error}`
        );
        app.use('/', error404);
        app.use('/', error500);
    }
}

// Logging Events
class TrackEmitter extends EventEmitter {}
const trackEmitter: EventEmitter = new TrackEmitter();

try {
    trackEmitter.on('log', (message: string): EventEmitter => {
        return logEvents(message);
    });
    setTimeout((): void => {
        trackEmitter.emit(
            'log',
            'Nodemon Server Logging initiated: "EVENT EMITTED"'
        ),
            console.log(date);
    }, 100);
} catch (error: unknown) {
    console.error(`It appears the Event Emitter errored on startup
                ERROR CODE: ${error}
            `);
    app.use('/', error404);
    app.use('/', error500);
}
// Create a write stream (in append mode)(morgan)
try {
    const accessLogStream: fs.WriteStream = fs.createWriteStream(
        path.join('./logs', 'access.log'),
        { flags: 'a' }
    );
    app.use<any>(morgan<Request>('combined', { stream: accessLogStream }));
    app.get<any>('/', (_req: Request, res: Response) => {
        res.send('HOOT Webelistics Logger Tracker');
    });
} catch (error: unknown) {
    console.error(`On Server Startup there appears to have been a WriteStream Error
                ERROR CODE: ${error}
            `);
    app.use('/', error404);
    app.use('/', error500);
}

// Database Connections for multiple models and Databases
async function openDatabases(): Promise<void> {
    try {
        await blogDB();
    } catch (error: unknown) {
        console.error(
            `There was a problem invoking databases, ERROR: ${await error}`
        );
    }
}
