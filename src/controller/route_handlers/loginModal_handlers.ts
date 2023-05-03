/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Application, Request, Response } from 'express';
// import { v4 as uuidv4 } from 'uuid';
// import passport from 'passport';
import LocalUser from '../../models/schemas/User_Schema.js';
import notifier from 'node-notifier';
import { ensureAuth } from '../middleware/auth.js';

const app: Application = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// loginModal Route Handlers
export async function loginModalHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const loginModalScript = /*html*/ `<script type="module" content="text/javascript" src="/src/controller/login/login_modal.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('login_modal', {
            layout: 'loginModal',
            title: 'Login',
            script: [`${loginModalScript}`]
        });
        console.info('Login Modal Rendered');
    } catch (error: unknown) {
        console.error(`LoginModalHandler Error: ${error}`);
    }
}

//  Login Modal Create User Handler
export async function loginUserCreateHandler(
    req: Request,
    res: Response
): Promise<void> {
    try {
        ensureAuth;
        const user: any = req.body;
        // const userID: string = uuidv4();
        // const userWithID: any = { ...user, id: userID };
        const userInfo: any = { ...user };
        // await LocalUser.create(userWithID);
        await LocalUser.create(userInfo);
        notifier.notify({
            title: 'User Created',
            message: `User ${user.firstName} has been created and added to the database!`
            // icon: './src/images/team_webelistics_brackets.png'
        });
        console.log(
            `User with the name ${user.firstName} added to the database!`
        );
        res.redirect('/landing');
    } catch (error: unknown) {
        console.error(`LoginUserCreateHandler Error: ${await error}`);
    }
}
