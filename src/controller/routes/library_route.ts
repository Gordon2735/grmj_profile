import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.use(express.static('../../views'));

//%  /Library page Route
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let user: any;
const library: Router = router
    .get('/library', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.render('library', {
            layout: 'main',
            title: 'Library-Profile'
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
export default library;
