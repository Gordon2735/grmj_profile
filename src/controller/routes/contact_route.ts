import express, { Router, Request, Response } from 'express';

const router = express.Router();

router.use(express.static('../../views'));

//%  /Contact page Route
let user: any;
const contact: Router = router
  .get('/contact', (_req: Request, res: Response) => {
    res.set('Content-Type', 'text/html');
    res.render('contact', { layout: 'main' });
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
export default contact;
