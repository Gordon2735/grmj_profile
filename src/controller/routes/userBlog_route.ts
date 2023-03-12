'use strict';

import express, { Router, Request, Response } from 'express';
import ensureAuth from '../middleware/auth.js';
import UserBlog from '../../models/schemas/UserBlogSchema.js';

const router: Router = express.Router();
router.use(express.static('../../views'));

// @desc    Show add page
// @route   GET /blogs/add
router.get('/add', ensureAuth, async (_req: Request, res: Response) => {
    res.render('UserBlog/add');
});

// @desc    Process add form
// @route   POST /blogs
router.post('/', ensureAuth, async (req: Request, res: Response) => {
    try {
        req.body.user = req.body.user?.id;
        await UserBlog.create(req.body);
        res.redirect('/dashboard');
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('error/500');
    }
});
export default router;
