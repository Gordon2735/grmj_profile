/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
// import init from '../../ts/index.js';

const app = express();
const router: Router = express.Router();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.use(express.static('../../views'));

//%  /Home page Route
let user: any;
// : { create: (arg0: any) => Promise<any> };
const home: Router = router
  .get('/', (_req: Request, res: Response) => {
    res.set('Content-Type', 'text/html');
    res.render('home', { layout: 'main' });
    // console.log(`From the home_router || res.location: ${res.location}`);
  })
  .post('/', async (req: Request, res: Response) => {
    res.json(
      await user.create(req.body).catch((error: unknown) => {
        res.status(404),
          console.info(
            `Whoops, seems there was a "Page Not Found Error" ${error}`
          );
      })
    );
  });

// try {
//   app.get('../../dist/src/ts/', (_req: Request, res: Response) => {
//     res.set('Content-Type', 'text/js');
// res.send(req.body.index);
//     res.render('index.js', { layout: 'main' }, () => {
//       `${init()}`;
//     });
//   });
// } catch (error: unknown) {
//   app.get('/', (_req: Request, res: Response) => {
//     res.status(404);
//   });
//   console.info(
//     `Whoops, seems there was a "Redirect for index.js error:" ${await error}`
//   );
// }

export default home;
