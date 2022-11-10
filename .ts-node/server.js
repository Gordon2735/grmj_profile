'use strict';
import dotenv from 'dotenv';
import express from 'express';
import { create } from 'express-handlebars';
import path from 'path';
import fs from 'fs';
import morgan from 'morgan';
import cors from 'cors';
import { EventEmitter } from 'events';
import open from 'open';
import { fileURLToPath } from 'url';
import logEvents, { date } from './logEvents.js';
import router from './controller/router.js';
dotenv.config({ path: './config/config.env' });
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const app = express();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors());
const handlebars = create({
    extname: 'hbs',
    defaultLayout: 'default',
    layoutsDir: path.resolve(__dirname, '/views/layouts'),
    partialsDir: path.resolve(__dirname, '/views/partials'),
    helpers: {}
});
app.set('defaultView', 'default');
app.set('view engine', 'hbs');
app.engine('hbs', handlebars.engine);
app.set('views', path.resolve(__dirname, './views'));
app.enable('view cache');
app.use(function (_req, res, next) {
    if (!res.locals.partials)
        res.locals.partials = {};
    next();
});
app.use('/', router);
app.use(express.static('./src'));
app.use(express.static('../views'));
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
const PORT = process.env.PORT || 9080;
const HOST = process.env.HOST || `127.0.0.1`;
app.listen(PORT, () => {
    console.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
const openBrowser = async () => {
    await open(`${HOST}:${PORT}`, {
        app: { name: open.apps.chrome }
    }).catch((error, code) => {
        console.error(error, code);
    });
};
openBrowser();
class TrackEmitter extends EventEmitter {
}
const trackEmitter = new TrackEmitter();
trackEmitter.on('log', (message) => {
    return logEvents(message);
});
setTimeout(() => {
    trackEmitter.emit('log', 'Nodemon Server Logging initiated: "EVENT EMITTED"'),
        console.log(date);
}, 500);
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs', 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.get('/', (_req, res) => {
    res.send('HOOT Webelistics Logger Tracker');
});
