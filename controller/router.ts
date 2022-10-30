'use strict';

import express from 'express';
import home from './routes/home_route.js';

import { Request, Response, NextFunction, Router } from 'express';

const router: Router = express.Router();

router.use(express.static('./routes'));

router.use('/', home);

router.use((_req: Request, res: Response, next: NextFunction) => {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});

export default router;
