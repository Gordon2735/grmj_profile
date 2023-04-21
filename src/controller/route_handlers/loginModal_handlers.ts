/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import LocalUser from '../../models/schemas/User_Schema.js';
// import { ensureAuth } from '../middleware/auth.js';

// const insurance: any = ensureAuth;

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
    // insurance: { insurance: any },
    req: Request,
    res: Response
): Promise<void> {
    try {
        const user: any = req.body;
        const userID: string = uuidv4();
        const userWithID: any = { ...user, id: userID };
        await LocalUser.create(userWithID);
        res.send(`User with the name ${user.firstName} added to the database!`);
        res.redirect('/landing');
        alert(`User ${userWithID.username} has been created!, ${res.location}`);
    } catch (error: unknown) {
        console.error(`LoginPostHandler Error: ${error}`);
    }
}
