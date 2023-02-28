'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
router.use(express.static('../../views'));
const spacexShellScript = `<script type="module" content="text/javascript" src="/src/components/spacexpage/spacex-page_shell.js"></script>`;
const timeObjectShellScript = `<script type="module" content="text/javascript" src="src/components/timeObject/time-object_shell.js"></script></script>`;

//%  /SpaceX-Page Route
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let user: any;
const spacex: Router = router
    .get('/spacex', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('spacex', {
            layout: 'main',
            title: 'SpaceX-Profile',
            link: '<script type="module" content="text/javascript" src="src/components/timeObject/time-object_shell.js"></script></script>',
            script: [`${spacexShellScript}`],
            script2: [`${timeObjectShellScript}`]
        });
    })
    .post('/spacex', async (req: Request, res: Response) => {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    });
export default spacex;
