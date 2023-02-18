/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
router.use(express.static('../../views'));
const goalsShellScript = `<script type="module" content="text/javascript" src="/src/components/profileGoals/profile-goals_shell.js"></script>`;

let user: any;

const goals: Router = router
    .get('/goals', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.render('goals', {
            layout: 'main',
            title: 'Goals-Profile',
            script: [`${goalsShellScript}`]
        });
    })
    .post('/goals', async (req: Request, res: Response) => {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    });

export default goals;
