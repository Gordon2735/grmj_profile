/* eslint-disable @typescript-eslint/no-explicit-any */

'use strict';

import express, { Router, Request, Response } from 'express';
import { ensureAuth, ensureGuest } from '../middleware/auth.js';
import Blog from '../../models/schemas/Blog_Schema.js';

const router: Router = express.Router();

//@desc Login/Landing page
//@route GET /
router.get('/', ensureGuest, (_req: Request, res: Response) => {
    res.render('login', {
        layout: 'loginLO'
    });
});

//@desc Dashboard
//@route GET /dashboard
router.get('/dashboard', ensureAuth, async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.find({ user: req.user?.id }).lean();
        res.render('dashboard', {
            name: req.user?.firstName,
            layout: 'dash',
            blogs
        });
    } catch (error: unknown) {
        console.error(error);
        res.render('errors/500');
    }
});
export { router };
