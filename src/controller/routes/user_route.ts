/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Router, Request, Response } from 'express';
import { ensureAuth } from '../middleware/auth.js';
import Users from '../../models/schemas/UsersSchema.js';

const router: Router = express.Router();

// router.use(express.static('views'));

// @desc    Show add page
// @route   GET /blogs/add
router.get('/add', ensureAuth, async (_req: Request, res: Response) => {
    res.render('users/add', {
        layout: 'dash'
    });
});

// @desc    Process add form
// @route   POST /blogs
router.post('/', ensureAuth, async (req: Request, res: Response) => {
    try {
        req.body.user = req.user?.id;
        await Users.create(req.body);
        res.redirect('/landing');
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('errors/500');
    }
});

// @desc    Show all blogs
// @route   GET /blogs
router.get('/', ensureAuth, async (_req: Request, res: Response) => {
    try {
        const users = await Users.find({ status: 'src' })
            .populate('user')
            .sort({ createdAt: 'desc' })
            .lean();
        res.render('users/index', {
            layout: 'dash',
            users
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
        const users = await Users.findById(req.params.id)
            .populate('user')
            .lean();

        if (!users) {
            return res.render('errors/404');
        }

        res.render('users/show', {
            layout: 'dash',
            users
        });
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('errors/404');
    }
});

// @desc    Show edit page
// @route   GET /blogs/edit/:id
router.get('/edit/:id', ensureAuth, async (req: Request, res: Response) => {
    const users = await Users.findOne({
        _id: req.params.id
    }).lean();

    if (!users) {
        return res.render('errors/404');
    }

    if (users.user !== req.user?.id) {
        res.redirect('/users');
    } else {
        res.render('users/edit', {
            users
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
            let users: any = await Users.findById(req.params.id).lean();

            if (!users) {
                return res.render('errors/404');
            }

            if (users.user !== req.user?.id) {
                res.redirect('/users');
            } else {
                users = await Users.findOneAndUpdate(
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
        const users = await Users.findById(req.params.id).lean();

        if (!users) {
            return res.render('/errors/404');
        }

        if (users.user !== req.user?.id) {
            res.redirect('/users');
        } else {
            await Users.deleteOne({ _id: req.params.id });
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
        const users = await Users.find({
            user: req.params.userId,
            status: 'public'
        })
            .populate('user')
            .lean();

        res.render('users/index', {
            layout: 'dash',
            users
        });
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('/errors/500');
    }
});

export { router };
