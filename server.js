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
import express from 'express';
import path from 'path';
import { create } from 'express-handlebars';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { EventEmitter } from 'events';
import favicon from 'serve-favicon';
import open from 'open';
import fs from 'fs';
import { fileURLToPath } from 'url';
import logEvents from './logEvents.js';
import router from './controller/router.js';
dotenv.config({ path: './config/config.env' });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
const handlebars = create({
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
app.use(function (_req, res, next) {
    if (!res.locals.partials)
        res.locals.partials = {};
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'controller')));
app.use(favicon(path.join(__dirname, './public/src/images', 'typeScript.png')));
app.use('/', router);
app.get('/state', (_req, res) => {
    res.sendFile('components.js', {
        root: '/state/library/'
    });
    res.set('Content-Type', 'text/javascript');
});
const PORT = process.env.PORT || 9080;
const HOST = process.env.HOST || '127.0.0.1' || 'localhost';
app.listen(PORT, () => {
    console.info(`The Local Nodemon Server is "listening" in ${process.env.NODE_ENV} mode on || HOST: ${HOST} || PORT: ${PORT} ||`);
});
const openBrowser = () => __awaiter(void 0, void 0, void 0, function* () {
    yield open(`${HOST}:${PORT}`, {
        app: { name: open.apps.chrome }
    }).catch((error, code) => {
        console.error(`While Processing the openBrowser Function an "ERROR"
		occurred ~ || ERROR: ${error} || CODE: ${code} || ~`);
    });
});
openBrowser();
class TrackEmitter extends EventEmitter {
}
const trackEmitter = new TrackEmitter();
trackEmitter.on('log', message => {
    logEvents(message);
});
setTimeout(() => {
    trackEmitter.emit('log', `|| HooT™️ || Webelistics®️ || "EVENT EMITTED" || Application is in "${process.env.NODE_ENV}" mode || HOST: ${HOST} || PORT: ${PORT} ||`);
    console.info(new Date().toLocaleString(), `trackEmitter is TRACKING...`);
});
const accessLogStream = fs.createWriteStream(path.join(__dirname, './logs', 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));
app.get('/', (req, res) => {
    res.send('HOOT Webelistics Logger Tracker');
    console.info(req);
});
//# sourceMappingURL=server.js.map