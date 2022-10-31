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
import favicon from 'serve-favicon';
import { fileURLToPath } from 'url';
import logEvents, { date } from './public/src/ts/logEvents';

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

app.use<any>(express.static(path.join(__dirname, 'public')));

// Handlebars Template Middleware
const handlebars: ExpressHandlebars = create({
	extname: '.hbs',
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials'),
	helpersDir: path.join(__dirname, 'views/helpers'),
	helpers: {}
});
app.engine('hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', './views');
// app.enable('view cache');

// set Global Variables
app.use(function (req: Request, res: Response, next: NextFunction) {
	res.locals.user = req.user || null;
	next();
});

// static folders
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'controller')));

// favicon
app.use(favicon(path.join(__dirname, 'public/src/img', 'favicon.ico')));

// Routes
app.use('/', routes);

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
