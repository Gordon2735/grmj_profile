/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
router.use(express.static('../../views'));
const resumeShellScript = `<script type="module" content="text/javascript" src="/src/components/profileResume/profile-resume_shell.js"></script>`;

let user: any;

const resume: Router = router
    .get('/resume', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.render('resume', {
            layout: 'main',
            title: 'Resume-Profile',
            script: [`${resumeShellScript}`]
        });
    })
    .post('/resume', async (req: Request, res: Response) => {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    });

export default resume;
