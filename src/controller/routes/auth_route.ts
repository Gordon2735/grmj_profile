'use strict';

import express, { Router, Request, Response } from 'express';
import passport from 'passport';

const router: Router = express.Router();
router.use(express.static('views'));

// @desc  Auth with Google
// @route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

// @desc  Google auth callback
// @route GET /auth/google/callback
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (_req: Request, res: Response) => {
        res.redirect('/dashboard');
    }
);

// @desc  Logout user
// @route /auth/logout
router.get('/logout', (req: Request, res: Response) => {
    req.logout(() => res.redirect('/'));
});

export { router };
