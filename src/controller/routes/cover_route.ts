/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.use(express.static('../../views'));

//%  /Cover Letter page Route
let user: any;
const cover: Router = router
    .get('/cover_letter', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.render('cover_letter', {
            layout: 'main',
            title: 'Cover Letter-Profile'
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
export default cover;
