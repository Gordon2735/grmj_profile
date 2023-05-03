/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Application, NextFunction, Request, Response } from 'express';
import notifier from 'node-notifier';
import { ensureAuth } from '../middleware/auth.js';
import { fileURLToPath } from 'url';
import path from 'path';
// import passport from 'passport';
// import passportCapture from '../middleware/authenticate.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app: Application = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Signin Modal Route Handler
export async function signinModalHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const signinModalScript = /*html*/ `<script type="module" content="text/javascript" src="/src/controller/login/signin/signin_modal.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('signin_modal', {
            layout: 'signinModal',
            title: 'Signin',
            script: [`${signinModalScript}`]
        });
        console.info('Signin Modal Rendered');
    } catch (error: unknown) {
        console.error(`signinModalHandler Error: ${await error}`);
    }
}

// Signin Modal Sign In POST User Handler
export async function signinUserPostHandler(
    req: Request
    // res: Response,
    // next: NextFunction
): Promise<void> {
    try {
        ensureAuth;
        const user: any = req.body;
        const user_name: string = user.username;
        const pass_word: string = user.password;
        let username: any, password: any, done: any;

        username !== user_name || password !== pass_word
            ? done(null, false, {
                  title: 'Login Failed',
                  message: 'Incorrect username or password',
                  Object: notifier.notify({
                      title: 'Login Failed',
                      message: `Incorrect username or password, please try again!`,
                      icon: path.join(
                          __dirname,
                          './src/images/team_webelistics_brackets.png'
                      )
                  })
              })
            : done(null, {
                  username: user_name,
                  password: pass_word,
                  title: `Welcome ${user_name}!`,
                  Object: notifier.notify({
                      title: 'Login Successful',
                      message: `
                                Welcome ${user_name}! Great to have you browsing-in!
                                Gordon invites you to explore and learn about his 
                                life's journey: professionally || personally.
                                Have a Question? contact Gordon via email: webelistics@gmail.com
                                `,
                      icon: path.join(
                          __dirname,
                          './src/images/team_webelistics_brackets.png'
                      )
                  }),
                  message: 'Contact Gordon via email: webelistics@gmail.com'
              });
        // await passport.authenticate('local', {
        //     successRedirect: '/landing',
        //     failureRedirect: '/signin_modal'
        // });
        // await passportCapture(req);
    } catch (error: unknown) {
        console.error(`signinUserHandler Error: ${await error}`);
    }
}

// User Logout Handler
export async function userLogoutHandler(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> {
    try {
        const user: any = req.body;
        const error: Error | any = new Error('You are not logged in!');

        req.session
            ? notifier.notify({
                  title: 'User Signed Out',
                  message: `Thankyou ${user.firstName} for your visit; come back soon!`,
                  icon: './src/images/team_webelistics_brackets.png'
              }) &&
              req.session.destroy(() => {
                  res.clearCookie('session-id');
                  res.redirect('/landing');
                  console.info('User Logged Out');
              })
            : (error.status = 403) && next(error);
    } catch (error: unknown) {
        console.error(`userLogoutHandler Error: ${await error}`);
    }
}
