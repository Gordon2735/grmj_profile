import express, { Router, Request, Response, NextFunction } from 'express';
import home from './routes/home_route.js';
import cover from './routes/cover_route.js';
import about from './routes/about_route.js';
import blog_component from './routes/blog_component_route.js';
import history from './routes/history_route.js';
import resume from './routes/resume_route.js';
import projects from './routes/projects_route.js';
import code_examples from './routes/code_examples_route.js';
import goals from './routes/goals_route.js';
import contact from './routes/contact_route.js';
import library from './routes/library_route.js';
import spacex from './routes/spacex_route.js';
import error404 from './routes/404_route.js';
import error500 from './routes/500_route.js';
import { router as index } from './routes/index.js';
import { router as auth } from './routes/auth_route.js';
import { router as blogs } from './routes/blogs_route.js';

const router: Router = express.Router();

// @desc   Login/Blog/Landing page
router.use('/', index);
router.use('/auth', auth);
router.use('/blogs', blogs);
router.use('/', blog_component);

// @desc  Home through Components pages
router.use('/', home);
router.use('/', cover);
router.use('/', about);
router.use('/', history);
router.use('/', resume);
router.use('/', projects);
router.use('/', code_examples);
router.use('/', goals);
router.use('/', contact);
router.use('/', library);
router.use('/', spacex);
router.use('/', error404);
router.use('/', error500);

// @desc Partials
router.use((_req: Request, res: Response, next: NextFunction) => {
    if (!res.locals.partials) res.locals.partials = {};
    next();
});

export default router;
