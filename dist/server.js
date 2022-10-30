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
app.use(function (req, res, next) {
    res.locals.user = req.user || null;
    next();
});
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './controller')));
app.use(favicon(path.join(__dirname, './public/src/images', 'typeScript.png')));
const PORT = process.env.PORT || 9080;
const HOST = process.env.HOST || '127.0.0.1' || 'localhost';
app.listen(PORT, () => {
    console.info(`The Local Nodemon Server is "listening" in ${process.env.NODE_ENV} mode on || HOST: ${HOST} || PORT: ${PORT} ||`);
});
const openBrowser = async () => {
    await open(`${HOST}:${PORT}`, {
        app: { name: open.apps.chrome }
    }).catch((error, code) => {
        console.error(`While Processing the openBrowser Function an "ERROR"
		occurred ~ || ERROR: ${error} || CODE: ${code} || ~`);
    });
};
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