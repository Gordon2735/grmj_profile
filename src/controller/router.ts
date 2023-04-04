import express, { Router } from 'express';
import loginModal from './routes/loginModal_route.js';
import partialsRouter from './routes/partials_route.js';
import landing from './routes/landing_route.js';
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
const blogRouting: express.Router[] = [index, auth, blogs, blog_component];
const blogRoutes: express.Router = router;

for (const routes of blogRouting) {
    let URL: string;
    switch (routes) {
        case index:
            URL = '/';
            break;
        case auth:
            URL = '/auth';
            break;
        case blogs:
            URL = '/blogs';
            break;
        case blog_component:
            URL = '/';
            break;
        default:
            URL = '/';
            break;
    }
    blogRoutes.use(URL, routes);
}

// @desc  Home through Components pages
const routing: express.Router[] = [
    loginModal,
    partialsRouter,
    landing,
    home,
    cover,
    about,
    history,
    resume,
    projects,
    code_examples,
    goals,
    contact,
    library,
    spacex,
    error404,
    error500
];
const componentRoutes: express.Router = router;

for (const routes of routing) {
    componentRoutes.use('/', routes);
}

export default router;
