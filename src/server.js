/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var dotenv = require("dotenv");
var express_1 = require("express");
var express_handlebars_1 = require("express-handlebars");
var path_1 = require("path");
var fs_1 = require("fs");
var morgan_1 = require("morgan");
var cors_1 = require("cors");
var events_1 = require("events");
var url_1 = require("url");
var open_1 = require("open");
var serve_favicon_1 = require("serve-favicon");
var logEvents_js_1 = require("./logEvents.js");
var router_js_1 = require("./controller/router.js");
/**
 *
 * Using the dotenv package to load environment variables from a .env file into process.env
 *
 * @see https://www.npmjs.com/package/dotenv
 *
 * @description The dotenv package will look for a config.env file in the config folder in the root
 *  of the project and load any environment variables into process.env
 * The config.env file is not tracked by git and is used to store sensitive information such as
 * database credentials, API keys, etc.
 *
 * @example process.env.MY_ENV_VAR
 */
// Load Environment Variables
dotenv.config({ path: './config/config.env' });
/**
 * @description The express package is Node.js Framework for building web applications and APIs.
 *
 * @see https://www.npmjs.com/package/express
 *
 * @var {Application} app - The express application
 *
 * @type {Application}
 * @const app
 * @description The express application*
 *
 */
// Create Instance of Express App
var app = (0, express_1["default"])();
var environment = process.env.NODE_ENV || 'development';
/**
 * @description The morgan package is a HTTP request logger middleware for node.js
 *
 * @see https://www.npmjs.com/package/morgan
 *
 * @description The morgan package will log HTTP requests to the console when the server is running in development mode
 */
// Logging Middleware
if (environment) {
    app.use((0, morgan_1["default"])('dev'));
}
// body-parser...
app.use(express_1["default"].json());
app.use((0, cors_1["default"])());
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = path_1["default"].dirname(__filename);
// Handlebars Mapping
var handlebars = (0, express_handlebars_1.create)({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path_1["default"].join(__dirname, '..', '..', 'views', 'layouts'),
    partialsDir: path_1["default"].join(__dirname, '..', '..', 'views', 'partials'),
    helpers: {}
});
// Crank Up the Handlebars Engine & Configurations
app.set('view engine', '.hbs');
app.set('views', path_1["default"].join(__dirname, '..', '..', 'views'));
app.engine('.hbs', handlebars.engine);
app.enable('view cache');
// static folders
app.use(express_1["default"].static(path_1["default"].join(__dirname, '../../dist')));
// Favicon
app.use((0, serve_favicon_1["default"])(path_1["default"].join(__dirname, '/images', '/favicon.ico')));
// set Global Variables
app.use(function (_req, res, next) {
    if (!res.locals.partials)
        res.locals.partials = {};
    next();
});
// Integrate Routes
app.use('/', router_js_1["default"]);
// ! Research Error and 404 Handling || when server is cranking and not
// Render Errors when they occur
app.use(function (_req, res, next) {
    res.render('404', { layout: 'errors' });
    next();
});
// ! Research Error and 500 Handling || 500 Handling || maybe pure HTML?
app.use(function (_req, res, next) {
    res.render('500', { layout: 'errors500' });
    next();
});
// Configure Port and Host
var PORT = process.env.PORT || 9080;
var HOST = process.env.HOST || "127.0.0.1";
// Launch Server & Create Event Logger
createServer();
eventLogger();
// Create Server
function createServer() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            app.listen(PORT, function () {
                console.info("Server running in ".concat(environment, " mode on port ").concat(PORT));
                try {
                    var openBrowser = function (host, port) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, open_1["default"])("".concat(host, ":").concat(port), {
                                        app: { name: open_1["default"].apps.chrome }
                                    })["catch"](function (error, code) {
                                        console.error(" Error occurred when trying to open the browser: \n\t\t\t\t\t\t".concat(error, " || Error Code: ").concat(code));
                                        app.use(function (_req, res, next) {
                                            res.render('500', { layout: 'errors500' });
                                            next();
                                        });
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    openBrowser(HOST, PORT);
                }
                catch (error) {
                    console.log("Unable to start Browser due to a Server Problem: ".concat(error));
                    app.use(function (_req, res, next) {
                        res.render('500', { layout: 'errors500' });
                        next();
                    });
                }
            });
            return [2 /*return*/];
        });
    });
}
// Open Browser
// Logging Events
function eventLogger() {
    return __awaiter(this, void 0, void 0, function () {
        var TrackEmitter, trackEmitter, accessLogStream;
        return __generator(this, function (_a) {
            TrackEmitter = /** @class */ (function (_super) {
                __extends(TrackEmitter, _super);
                function TrackEmitter() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return TrackEmitter;
            }(events_1.EventEmitter));
            trackEmitter = new TrackEmitter();
            try {
                trackEmitter.on('./log', function (message) {
                    return (0, logEvents_js_1["default"])(message);
                });
                setTimeout(function () {
                    trackEmitter.emit('log', 'Nodemon Server Logging initiated: "EVENT EMITTED"'),
                        console.log(logEvents_js_1.date);
                }, 500);
            }
            catch (error) {
                console.log("It appears the Event Emitter errored on startup\n\t\t\tERROR CODE: ".concat(error, "\n\t\t"));
                app.use(function (_req, res, next) {
                    res.render('500', { layout: 'errors500' });
                    next();
                });
            }
            // Create a write stream (in append mode)(morgan)
            try {
                accessLogStream = fs_1["default"].createWriteStream(path_1["default"].join('./logs', 'access.log'), { flags: 'a' });
                app.use((0, morgan_1["default"])('combined', { stream: accessLogStream }));
                app.get('/', function (_req, res) {
                    res.send('HOOT Webelistics Logger Tracker');
                });
            }
            catch (error) {
                console.log("On Server Startup there appears to have been a WriteStream Error\n\t\t\tERROR CODE: ".concat(error, "\n\t\t"));
                app.use(function (_req, res, next) {
                    res.render('500', { layout: 'errors500' });
                    next();
                });
            }
            return [2 /*return*/];
        });
    });
}
