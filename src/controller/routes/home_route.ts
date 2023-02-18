/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
router.use(express.static('../../views'));
const homeShellScript = `<script type="module" content="text/javascript" src="/src/components/profileHome/profile-home_shell.js"></script>`;

//%  /Home page Route
let user: any;
const home: Router = router
    .get('/', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.render('home', {
            layout: 'main',
            title: 'Home-Profile',
            script: [`${homeShellScript}`]
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
export default home;
