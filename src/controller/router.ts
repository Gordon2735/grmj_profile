'use strict';

import express, { Router, Request, Response, NextFunction } from 'express';
import home from './routes/home_route';
import cover from './routes/cover_route';
import history from './routes/history_route';
import resume from './routes/resume_route';
import projects from './routes/projects_route';
import goals from './routes/goals_route';
import code_examples from './routes/code_examples_route';
import error404 from './routes/404_route';
import error500 from './routes/500_route';

const router: Router = express.Router();
router.use(express.static('./routes'));

router.use('/', home);
router.use('/', cover);
router.use('/', history);
router.use('/', resume);
router.use('/', projects);
router.use('/', goals);
router.use('/', code_examples);
router.use('/', error404);
router.use('/', error500);

router.use((_req: Request, res: Response, next: NextFunction) => {
  if (!res.locals.partials) res.locals.partials = {};
  next();
});

export default router;
