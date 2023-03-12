/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../src/models/schemas/UserGoogleSchema.js';

export default function (passport: any): void {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: '/auth/google/callback'
            },
            async (
                accessToken: any,
                refreshToken: any,
                profile: any,
                done: any
            ): Promise<void> => {
                const newUser = {
                    googleId: profile.id,
                    displayName: profile.displayName,
                    firstName: profile.name.givenName,
                    lastName: profile.name.familyName,
                    image: profile.photos[0].value
                };
                console.log(accessToken, refreshToken);
                try {
                    let user: any = await User.findOne({
                        googleId: profile.id
                    });
                    if (user) {
                        done(null, user);
                    } else {
                        user = await User.create(newUser);
                        done(null, user);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        )
    );
    passport.serializeUser(
        (user: { id: any }, done: (arg0: any, arg1: any) => void) => {
            done(null, user.id);
        }
    );

    passport.deserializeUser(
        (id: any, done: (arg0: unknown, arg1: any) => void) => {
            User.findById(id).then((user: any) => {
                return done(null, user);
            });
            // const err = new Error('User not found');
        }
    );
}
