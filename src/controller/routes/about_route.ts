import express, { Router, Request, Response } from 'express';

const router = express.Router();

router.use(express.static('../../views'));

//%  /About page Route
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let user: any;
const about: Router = router
    .get('/about', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.render('about', {
            layout: 'main',
            title: 'About-Profile'
        });
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
