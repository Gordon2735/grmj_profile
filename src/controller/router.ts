import express, { Router } from 'express';
import { router as index } from './routes/index.js';
import { router as auth } from './routes/auth_route.js';
import { router as blogs } from './routes/blogs_route.js';
import { router as users } from './routes/user_route.js';
import landing, {
    loginModal,
    home,
    cover,
    about,
    blog_component,
    code_examples,
    contact,
    goals,
    history,
    library,
    partialsRouter,
    resume,
    projects,
    spacex,
    error404,
    error500
} from './routes/appRoutes.js';
import { router as admin } from './admin/admin_routes.js';

const router: Router = express.Router();

// @desc   Login/Blog/Users Routes/Endpoints/Controllers
const blogRouting: express.Router[] = [index, auth, blogs, users];
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
        case users:
            URL = '/users';
            break;
        default:
            URL = '/landing';
            break;
    }
    blogRoutes.use(URL, routes);
}

// @desc Admin Panel Routes/Endpoints/Controllers
// const adminRouting: express.Router[] = [admin];
// const adminRoutes: express.Router = router;

// for (const routes of adminRouting) {
//     let URL: string;
//     switch (routes) {
//         case admin:
//             URL = '/admin_panel';
//             break;
//         default:
//             URL = '/admin_panel';
//             break;
//     }
//     adminRoutes.use(URL, routes);
// }

// @desc Login Modal Routes/Endpoints/Controllers
// @desc  App Components pages Routes/Handler-Functions-Controllers
const routing: express.Router[] = [
    admin,
    landing,
    loginModal,
    home,
    cover,
    about,
    blog_component,
    code_examples,
    contact,
    goals,
    history,
    library,
    partialsRouter,
    resume,
    projects,
    spacex,
    error404,
    error500
];
const componentRoutes: express.Router = router;

for (const routes of routing) {
    componentRoutes.use('/', routes);
}

export default router;
