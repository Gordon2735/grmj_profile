/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

const { ensureAuth, ensureGuest }: any = {
    ensureAuth: function (
        req: { isAuthenticated: () => any },
        res: { redirect: (arg0: string) => void },
        next: () => any
    ) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/');
        }
    },
    ensureGuest: function (
        req: { isAuthenticated: () => any },
        res: { redirect: (arg0: string) => void },
        next: () => any
    ) {
        if (!req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/dashboard');
        }
    }
};

// export default function osGosh() {
//     console.log('osGosh');
// }

export { ensureGuest as default, ensureAuth };
// export  ensureAuth ;
