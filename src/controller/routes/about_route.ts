import express, { Router, Request, Response } from 'express';

const router = express.Router();

router.use(express.static('../../views'));

//%  /About page Route
let user: any;
const about: Router = router
  .get('/about', (_req: Request, res: Response) => {
    res.set('Content-Type', 'text/html');
    res.render('about', { layout: 'main' });
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
export default about;
