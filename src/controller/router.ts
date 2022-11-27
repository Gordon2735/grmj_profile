'use strict';

import express, { Router, Request, Response, NextFunction } from 'express';
import home from './routes/home_route.js';
import history from './routes/history_route.js';
import resume from './routes/resume_route.js';
import projects from './routes/projects_route.js';
import goals from './routes/goals_route.js';
import code_examples from './routes/code_examples_route.js';

const router: Router = express.Router();
router.use(express.static('./routes'));

router.use('/', home);
router.use('/', history);
router.use('/', resume);
router.use('/', projects);
router.use('/', goals);
router.use('/', code_examples);

router.use((_req: Request, res: Response, next: NextFunction) => {
	if (!res.locals.partials) res.locals.partials = {};
	next();
});

export default router;
