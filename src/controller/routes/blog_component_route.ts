/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();
router.use(express.static('../../views'));
const scriptBlogShell = `<script type="module" content="text/javascript" src="/src/components/profileBlog/profile-blog_shell.js"></script>`;

//%  /Blog page Route
let user: any;
const blog: Router = router
    .get('/blog', (_req: Request, res: Response) => {
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('blog', {
            layout: 'main',
            title: 'Profile-Blog',
            script: [`${scriptBlogShell}`]
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

export default blog;
