// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */

// 'use strict';

// import local_strategy from 'passport-local';
// import bcrypt from 'bcrypt';
// // import { V4 } from '../src/models/tools/modeling_tools.js';
// import { Strategy } from 'passport';
// import Users from '../src/models/schemas/UsersSchema.js';

// const LocalStrategy = local_strategy.Strategy;
// const customFields = {
//     usernameField: 'email',
//     passwordField: 'password'
// };
// const verifyCallback = (email: string, password: string, done: any): void => {
//     try {
//         Users.find({ email: email }).then((user: any) => {
//             if (!user) {
//                 return done(null, false, { message: 'Incorrect email.' });
//             } else {
//                 const isValid = bcrypt.compareSync(password, user.password);

//                 if (!isValid) {
//                     return done(null, false, {
//                         message: 'Incorrect password.'
//                     });
//                 } else {
//                     return done(null, user);
//                 }
//             }
//         });
//     } catch (error: unknown) {
//         console.error(`Failed to find or create User/ERROR CODE: ${error}`);
//     }
// };

// export default function authenticateUser(passport: {
//     deserializeUser(arg0: any): unknown;
//     serializeUser(
//         arg0: (user: { id: any }, done: (arg0: null, arg1: any) => any) => any
//     ): unknown;
//     use: (arg0: Strategy) => any;
// }): void {
//     passport.use(new LocalStrategy(customFields, verifyCallback));
//     passport.serializeUser(
//         (user: { id: any }, done: (arg0: null, arg1: any) => any) =>
//             done(null, user.id)
//     );
//     passport.deserializeUser(
//         (id: any, done: (arg0: unknown, arg1: any) => void) => {
//             Users.findById(id)
//                 .then((user: any) => {
//                     done(null, user);
//                 })
//                 .catch((error: unknown) => {
//                     console.error(`Failed to find User/ERROR CODE: ${error}`);
//                 });
//         }
//     );
// }
