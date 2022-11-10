'use strict';
import express from 'express';
import home from './routes/home_route.js';
const router = express.Router();
router.use(express.static('./src/routes'));
router.use('/', home);
router.use((_req, res, next) => {
    if (!res.locals.partials)
        res.locals.partials = {};
    next();
});
export default router;
