/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { LocalUser as User } from '../../models/schemas/User_Schema.js';
import { fileURLToPath } from 'url';
import path from 'path';
import notifier from 'node-notifier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function passportCapture(req: Request): Promise<void> {
    const user_name: string = req.body.username;
    const pass_word: string = req.body.password;
    try {
        passport.use(
            new LocalStrategy(
                (username: string, password: string, done: any) => {
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
                              message:
                                  'Contact Gordon via email: webelistics@gmail.com'
                          });
                }
            )
        );
    } catch (error: unknown) {
        console.error(`passportCapture Error: ${await error}`);
    }
    passport.serializeUser(
        (user: typeof User, done: (err: any, id?: unknown) => void): void => {
            done(null, user.username);
        }
    );
    passport.deserializeUser(
        (
            username: typeof User,
            done: (err: any, user?: typeof User) => void
        ): void => {
            return done(null, { username: username });
        }
    );
}

export function isLoggedIn(
    req: Request,
    res: Response,
    next: NextFunction
): any {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.redirect('/login_modal');
    }
}
