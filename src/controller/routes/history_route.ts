/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Router, Request, Response } from 'express';

// const app = express();
const router: Router = express.Router();
router.use(express.static('../../views'));
const historyShellScript = `<script type="module" content="text/javascript" src="/src/components/profileHistory/profile-history_shell.js"></script>`;

//%  /Home page Route
let user: any;
// : { create: (arg0: any) => Promise<any> };
const history: Router = router
    .get('/history', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.render('history', {
            layout: 'main',
            title: 'History-Profile',
            script: [`${historyShellScript}`]
        });
    })
    .post('/history', async (req: Request, res: Response) => {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    });
export default history;
