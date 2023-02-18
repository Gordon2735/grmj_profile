/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
router.use(express.static('../../views'));
const projectsShellScript = `<script type="module" content="text/javascript" src="/src/components/profileProjects/profile-projects_shell.js"></script>`;

let user: any;

const projects: Router = router
    .get('/projects', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.render('projects', {
            layout: 'main',
            title: 'Projects-Profile',
            script: [`${projectsShellScript}`]
        });
    })
    .post('/projects', async (req: Request, res: Response) => {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    });

export default projects;
