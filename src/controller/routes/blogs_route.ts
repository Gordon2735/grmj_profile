/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Router, Request, Response } from 'express';
import { ensureAuth } from '../middleware/auth.js';
import Blog from '../../models/schemas/Blog_Schema.js';

const router: Router = express.Router();

// router.use(express.static('../../views'));

// @desc    Show add page
// @route   GET /blogs/add
router.get('/add', ensureAuth, async (_req: Request, res: Response) => {
    res.render('blogs/add', {
        layout: 'dash'
    });
});

// @desc    Process add form
// @route   POST /blogs
router.post('/', ensureAuth, async (req: Request, res: Response) => {
    try {
        req.body.user = req.user?.id;
        await Blog.create(req.body);
        res.redirect('/dashboard');
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('errors/500');
    }
});

// @desc    Show all blogs
// @route   GET /blogs
router.get('/', ensureAuth, async (_req: Request, res: Response) => {
    try {
        const blogs = await Blog.find({ status: 'public' })
            .populate('user')
            .sort({ createdAt: 'desc' })
            .lean();
        res.render('blogs/index', {
            layout: 'dash',
            blogs
        });
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('errors/500');
    }
});

// @desc    Show single blog
// @route   GET /blogs/:id
router.get('/:id', ensureAuth, async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('user').lean();

        if (!blog) {
            return res.render('errors/404');
        }

        res.render('blogs/show', {
            layout: 'dash',
            blog
        });
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('errors/404');
    }
});

// @desc    Show edit page
// @route   GET /blogs/edit/:id
router.get('/edit/:id', ensureAuth, async (req: Request, res: Response) => {
    const blog = await Blog.findOne({
        _id: req.params.id
    }).lean();

    if (!blog) {
        return res.render('errors/404');
    }

    if (blog.user !== req.user?.id) {
        res.redirect('/blogs');
    } else {
        res.render('blogs/edit', {
            blog
        });
    }
});

// @desc    Update blog
// @route   PUT /blogs/:id
router.put(
    '/:id',
    ensureAuth,
    async (
        req: Request<
            {
                id: string;
            },
            any,
            any,
            Record<string, any>
        >,
        res: Response
    ) => {
        try {
            let blog: any = await Blog.findById(req.params.id).lean();

            if (!blog) {
                return res.render('errors/404');
            }

            if (blog.user !== req.user?.id) {
                res.redirect('/blogs');
            } else {
                blog = await Blog.findOneAndUpdate(
                    { _id: req.params.id },
                    req.body,
                    {
                        new: true,
                        runValidators: true
                    }
                );

                res.redirect('/dashboard');
            }
        } catch (error) {
            console.error(`ERROR: ${error}`);
            return res.render('errors/500');
        }
    }
);

// @desc    Delete blog
// @route   DELETE /blogs/:id
router.delete('/:id', ensureAuth, async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findById(req.params.id).lean();

        if (!blog) {
            return res.render('/errors/404');
        }

        if (blog.user !== req.user?.id) {
            res.redirect('/blogs');
        } else {
            await Blog.deleteOne({ _id: req.params.id });
            res.redirect('/dashboard');
        }
    } catch (error) {
        console.error(`ERROR: ${error}`);
        return res.render('errors/500');
    }
});

// @desc    User blogs
// @route   GET /blogs/user/:userId
router.get('/user/:userId', ensureAuth, async (req: Request, res: Response) => {
    try {
        const blogs = await Blog.find({
            user: req.params.userId,
            status: 'public'
        })
            .populate('user')
            .lean();

        res.render('blogs/index', {
            layout: 'dash',
            blogs
        });
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('/errors/500');
    }
});

export { router };
