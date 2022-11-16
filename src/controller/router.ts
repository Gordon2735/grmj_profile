'use strict';

import express, { Router, Request, Response, NextFunction } from 'express';
import home from './routes/home_route.js';
import history from './routes/history_route.js';

const router: Router = express.Router();
// router.use(express.static('grmj_profile/controller/routes'));
router.use(express.static('./routes'));

router.use('/', home);
router.use('/', history);

router.use((_req: Request, res: Response, next: NextFunction) => {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});

export default router;
