'use strict';

import dotenv from 'dotenv';
import express from 'express';
import { Application, Request, Response, NextFunction } from 'express';
import { create, ExpressHandlebars } from 'express-handlebars';
import path from 'path';
import fs from 'fs';
import morgan from 'morgan';
import cors from 'cors';
import { EventEmitter } from 'events';
import open from 'open';
// import favicon from 'serve-favicon';
import { fileURLToPath } from 'url';
import logEvents, { date } from './logEvents.js';
import router from './controller/router.js';

dotenv.config({ path: './config/config.env' });

const __fileName: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__fileName);

const app: Application = express();

// Logging Middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// body-parser...
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.set('src', path.resolve(__dirname, '/grmj_profile/src'));

const handlebars: ExpressHandlebars = create({
	extname: 'hbs',
	defaultLayout: 'main',
	layoutsDir: path.resolve(__dirname, '/grmj_profile/views/layouts'),
	partialsDir: path.resolve(__dirname, '/grmj_profile/views/partials'),
	helpers: {}
});

app.set('src', path.resolve(__dirname, '/grmj_profile/src', 'src'));
app.set('defaultView', 'main');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine);
app.set('layouts', 'main');
app.enable('view cache');

// static folders
app.use(express.static('controller'));
app.use(express.static('src'));
app.use(express.static('views'));

// set Global Variables
app.use(function (_req: Request, res: Response, next: NextFunction) {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});

// Routes
app.use('/', router);

app.get('/', (_req: Request, res: Response) => {
	res.send('Hello World!');
});

// favicon
// app.use(favicon(path.join(__dirname, 'public/src/img', 'favicon.ico')));

const PORT = process.env.PORT || 9080;
const HOST = process.env.HOST || `127.0.0.1`;

app.listen(PORT, () => {
	console.info(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
	);
});

const openBrowser = async (): Promise<void> => {
	await open(`${HOST}:${PORT}`, {
		app: { name: open.apps.chrome }
	}).catch((error?: any, code?: any): any | null => {
		console.error(error, code);
	});
};
openBrowser();

// Logging Events
class TrackEmitter extends EventEmitter {}
const trackEmitter: EventEmitter = new TrackEmitter();
trackEmitter.on('log', (message: any): EventEmitter => {
	return logEvents(message);
});
setTimeout((): void => {
	trackEmitter.emit(
		'log',
		'Nodemon Server Logging initiated: "EVENT EMITTED"'
	),
		console.log(date);
}, 500);

// Create a write stream (in append mode)(morgan)
const accessLogStream: fs.WriteStream = fs.createWriteStream(
	path.join(__dirname, 'logs', 'access.log'),
	{ flags: 'a' }
);
app.use<any>(morgan<Request>('combined', { stream: accessLogStream }));
app.get<any>('/', (_req: Request, res: Response) => {
	res.send('HOOT Webelistics Logger Tracker');
});
