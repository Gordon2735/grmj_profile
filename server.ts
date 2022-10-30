//
//
//
// 'use strict';

import express from 'express';
import path from 'path';
import { create } from 'express-handlebars';
// import grmjDB from './dist/public/src/database/database.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { EventEmitter } from 'events';
import favicon from 'serve-favicon';
import open from 'open';
import fs from 'fs';
import { fileURLToPath } from 'url';
import logEvents from './logEvents.js';
// import router from './controller/routes/router.js';

// Config Loaders
dotenv.config({ path: './config/config.env' });
// grmjDB();

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = path.dirname(__filename);

const app: any = express();

// body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Handlebars Template Middleware
const handlebars: any = create({
	extname: 'hbs',
	defaultLayout: 'main',
	layoutsDir: path.join(__dirname, 'views/layouts'),
	partialsDir: path.join(__dirname, 'views/partials'),
	helpers: {}
});
app.engine('hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.enable('view cache');

// Global Variables
app.use(function (req: any, res: any, next: any): void {
	res.locals.user = req.user || null;
	next();
});

// static Folders
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './controller')));

// Favicon Icon
app.use(favicon(path.join(__dirname, './public/src/images', 'typeScript.png')));

// Routes...
// app.use('/', router);
// app.use('/login', router);

// app.get('/state', (req: any, res: any) => {
// 	res.sendFile('components.js', {
// 		root: '/state/library/'
// 	});
// 	res.set('Content-Type', 'text/javascript');
// });
// app.get('/state', (req: any, res: any) => {
// 	res.sendFile('pubsub.js', {
// 		root: '/state/library/'
// 	});
// 	res.set('Content-Type', 'text/javascript');
// });
// app.get('/state', (req: any, res: any) => {
// 	res.sendFile('store.js', {
// 		root: '/state/store/'
// 	});
// 	res.set('Content-Type', 'text/javascript');
// });

// app.get('/404', (req: any, res: any) => {
// 	res.sendFile('404.handlebars', {
// 		root: __dirname + '/views/'
// 	});
// 	res.set('Content-Type', 'text/html');
// });
// app.get('/500', (req: any, res: any) => {
// 	res.sendFile('500.handlebars', {
// 		root: __dirname + '/views/'
// 	});
// 	res.set('Content-Type', 'text/html');
// });

// Server Implementation...
const PORT: string | 9080 = process.env.PORT || 9080;
const HOST: string = process.env.HOST || '127.0.0.1' || 'localhost';

app.listen(PORT, (): void => {
	console.info(
		`The Local Nodemon Server is "listening" in ${process.env.NODE_ENV} mode on || HOST: ${HOST} || PORT: ${PORT} ||`
	);
});

// grab browser and open her up to the server home page
const openBrowser = async (): Promise<void> => {
	await open(`${HOST}:${PORT}`, {
		app: { name: open.apps.chrome }
	}).catch<void>((error?: any, code?: any) => {
		console.error(`While Processing the openBrowser Function an "ERROR"
		occurred ~ || ERROR: ${error} || CODE: ${code} || ~`);
	});
};
openBrowser();

// Logging Events...
class TrackEmitter extends EventEmitter {}
const trackEmitter: TrackEmitter = new TrackEmitter();
trackEmitter.on('log', message => {
	logEvents(message);
});
setTimeout((): void => {
	trackEmitter.emit(
		'log',
		`|| HooT™️ || Webelistics®️ || "EVENT EMITTED" || Application is in "${process.env.NODE_ENV}" mode || HOST: ${HOST} || PORT: ${PORT} ||`
	);
	console.info(new Date().toLocaleString(), `trackEmitter is TRACKING...`);
});

// Create a write stream (in append mode)(morgan)
const accessLogStream: any = fs.createWriteStream(
	path.join(__dirname, './logs', 'access.log'),
	{ flags: 'a' }
);
app.use(morgan('combined', { stream: accessLogStream }));
app.get('/', (req: any, res: any) => {
	res.send('HOOT Webelistics Logger Tracker');
	console.info(req);
});
