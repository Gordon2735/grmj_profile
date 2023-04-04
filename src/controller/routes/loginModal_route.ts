'use strict';

/* eslint-disable @typescript-eslint/no-explicit-any */

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
router.use(express.static('../../views'));
const loginModalScript = `<script type="module" content="text/javascript" src="/src/controller/login/login_modal.js"></script>`;

//%  /loginModal page Route
let user: any;
const loginModal: Router = router
    .get('/login_modal', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('login_modal', {
            layout: 'loginLO',
            title: 'Login',
            script: [`${loginModalScript}`]
        });
    })
    .post('/loginModal', async (req: Request, res: Response) => {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    });
export default loginModal;
