/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Router, Request, Response } from 'express';
// import scriptShellGroup from '../../ts/header_scriptShell_group.js';

const router: Router = express.Router();
router.use(express.static('../../views'));
const coverShellScript = `<script type="module" content="text/javascript" src="/src/components/profileCover/profile-cover_shell.js"></script>`;

//%  /Cover Letter page Route
let user: any;
const cover: Router = router
    .get('/cover_letter', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('cover_letter', {
            layout: 'main',
            title: 'Cover-Letter-Profile',
            script: [`${coverShellScript}`]
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
