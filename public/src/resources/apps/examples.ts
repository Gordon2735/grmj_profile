// .then((): httpServer | null => {

//     const app: Express.Application = Express();
//     app.engine("handlebars", exphbs({defaultLayout: "main"}));
//     app.set("view engine", "handlebars");

//     const router: Express.Router = Express.Router();
//     addRoutes(router);
//     app.use("/", router);

//     return app.listen(port);
//   })

//   export async function create() {
//     var app: express.Express = express();

//     // TODO: move to new express typings.  blocked by res.send(obj); file issue
//     //var app: express.Application = express();

//     // app.set('views', path.join(__dirname, 'views'));
//     // app.set('view engine', 'hjs');

//     app.engine('handlebars', exphbs({defaultLayout: 'main'}));
//     app.set('view engine', 'handlebars');

//     // TODO: hook up logger

//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({ extended: false }));
//     app.use(cookieParser());
//     app.use(express.static(path.join(__dirname, 'public')));

//     // -------------------------------------------------------
//     // routes
//     // -------------------------------------------------------
//     await routes.setup(app);

//     // -------------------------------------------------------
//     // error handling
//     // -------------------------------------------------------

//     // forward routes not found to the error handler
//     app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//         let err = new Error('Not Found');
//         err['status'] = 404;
//         next(err);
//     });

//     // development error handler
//     // will print stacktrace
//     if (app.get('env') === 'development') {
//         app.use((err, req: express.Request, res: express.Response, next: express.NextFunction) => {
//             res.status(err.status || 500);
//             res.render('error', {
//                 message: err.message,
//                 error: err
//             });
//         });
//     }

//     // production error handler
//     // no stacktraces leaked to user
//     app.use((err, req: express.Request, res: express.Response, next: express.NextFunction) => {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: {}
//         });
//     });

//     return app;
