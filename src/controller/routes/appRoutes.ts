'use strict';

import express, { Router } from 'express';
import {
    error404Handler,
    error500Handler
} from '../route_handlers/error_handlers.js';
import {
    homeHandler,
    homeHandlerPost,
    landingHandler,
    landingHandlerPost,
    coverHandler,
    coverHandlerPost,
    aboutHandler,
    aboutHandlerPost,
    blogComponentHandler,
    blogComponentHandlerPost,
    codeExampleHandler,
    codeExampleHandlerPost,
    contactHandler,
    contactHandlerPost,
    goalsHandler,
    goalsHandlerPost,
    historyHandler,
    historyHandlerPost,
    libraryHandler,
    libraryHandlerPost,
    partialsHandler,
    resumeHandler,
    resumeHandlerPost,
    projectsHandler,
    projectsHandlerPost,
    spaceXHandler,
    spaceXHandlerPost
} from '../route_handlers/route_handlers.js';
import {
    loginModalHandler,
    loginUserCreateHandler
} from '../route_handlers/loginModal_handlers.js';

// const app = express();
const router: Router = express.Router();

// app.use(express.static('../../views'));

// loginModal Pop-up Router
const loginModal: express.Router = router
    .get('/login_modal', loginModalHandler)
    .post('/login_modal', loginUserCreateHandler);

// Home Page Router
export const home: Router = router
    .get('/home', homeHandler)
    .post('/home', homeHandlerPost);

// Landing Page Router
const landing: Router = router
    .get('/landing', landingHandler)
    .post('/landing', landingHandlerPost);

// Cover Letter Page Router
export const cover: Router = router
    .get('/cover_letter', coverHandler)
    .post('/cover_letter', coverHandlerPost);

// About Page Router
export const about: Router = router
    .get('/about', aboutHandler)
    .post('/about', aboutHandlerPost);

//  Blog Component Router
export const blog_component: Router = router
    .get('/blog', blogComponentHandler)
    .post('/blog', blogComponentHandlerPost);

// Code Example Router
export const code_examples: Router = router
    .get('/code_examples', codeExampleHandler)
    .post('/code_examples', codeExampleHandlerPost);

// Contact Page Router
export const contact: Router = router
    .get('/contact', contactHandler)
    .post('/contact', contactHandlerPost);

// Goals Page Router
export const goals: Router = router
    .get('/goals', goalsHandler)
    .post('/goals', goalsHandlerPost);

// History Page Router
export const history: Router = router
    .get('/history', historyHandler)
    .post('/history', historyHandlerPost);

// Library Page Router
export const library: Router = router
    .get('/library', libraryHandler)
    .post('/library', libraryHandlerPost);

// Partials Router
export const partialsRouter = router.use(partialsHandler);

// Resume Page Router
export const resume: Router = router
    .get('/resume', resumeHandler)
    .post('/resume', resumeHandlerPost);

// Projects Page Router
export const projects: Router = router
    .get('/projects', projectsHandler)
    .post('/projects', projectsHandlerPost);

//  SpaceX Page Router
export const spacex: Router = router
    .get('/spacex', spaceXHandler)
    .post('/spacex', spaceXHandlerPost);

// Error 404 Route
export const error404: Router = router.get('*', error404Handler);

// Error 500 Route
export const error500: Router = router.get('*', error500Handler);

export { landing as default, loginModal };
