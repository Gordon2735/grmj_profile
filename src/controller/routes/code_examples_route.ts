/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

let user: any;

const code_examples: Router = router
    .get('/code_examples', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.render('code_examples', {
            layout: 'main',
            title: 'Code Examples-Profile'
        });
    })
    .post('/code_examples', async (req: Request, res: Response) => {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    });

export default code_examples;
