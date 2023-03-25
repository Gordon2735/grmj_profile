/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
const landingScript = /*html*/ `
    <script type="module" content="text/javascript" 
        src="/src/components/landingPage/landing-page_shell.js">
    </script>`;

router.use(express.static('../../views'));

let user: any;
const landing: Router = router
    .get('/landing', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('landing', {
            layout: 'landing_page',
            title: 'Gordon Landing Page',
            script: [`${landingScript}`]
        });
    })
    .post('/landing', async (req: Request, res: Response) => {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    });

export default landing;
