/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

// import { fileURLToPath } from 'url';
// import path from 'path';
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
    chatBoxHandler,
    chatBoxHandlerPost,
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
import {
    signinModalHandler,
    signinUserPostHandler,
    userLogoutHandler
} from '../route_handlers/signinModal_handlers.js';
import {
    openaiHandler,
    openaiHandlerPost,
    openaiHandlerPut
} from '../openaiAPI/openai_handlers.js';

// import isLoggedIn from '../middleware/authenticate.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const app: express.Application = express();
const router: Router = express.Router();

// app.use(express.static(path.join(__dirname, 'src')));

// loginModal Pop-up Router
const loginModal: Router = router
    .get('/login_modal', loginModalHandler)
    .post('/login_modal', loginUserCreateHandler);

// Signin Modal Pop-up Router
const signinModal: Router = router
    .get('/signin_modal', signinModalHandler)
    .post('/signin_modal', signinUserPostHandler)
    .get('/signin_modal/logout', userLogoutHandler);

// Home Page Router
const home: Router = router
    .get('/home', homeHandler)
    // .get('/home', isLoggedIn, homeHandler)
    .post('/home', homeHandlerPost);

// Landing Page Router
const landing: Router = router
    .get('/landing', landingHandler)
    .post('/landing', landingHandlerPost);

// Chat Box Router
const chatBox: Router = router
    .get('/chatbox', chatBoxHandler)
    .post('/chatbox', chatBoxHandlerPost);

const openAI: Router = router
    .get('/openai', openaiHandler)
    .post('/openai', openaiHandlerPost)
    .put('/openai', openaiHandlerPut);

// Cover Letter Page Router
const cover: Router = router
    .get('/cover_letter', coverHandler)
    .post('/cover_letter', coverHandlerPost);

// About Page Router
const about: Router = router
    .get('/about', aboutHandler)
    .post('/about', aboutHandlerPost);

//  Blog Component Router
const blog_component: Router = router
    .get('/blog', blogComponentHandler)
    .post('/blog', blogComponentHandlerPost);

// History Page Router
const history: Router = router
    .get('/history', historyHandler)
    .post('/history', historyHandlerPost);

// Code Example Router
const code_examples: Router = router
    .get('/code_examples', codeExampleHandler)
    .post('/code_examples', codeExampleHandlerPost);

// Contact Page Router
const contact: Router = router
    .get('/contact', contactHandler)
    .post('/contact', contactHandlerPost);

// Goals Page Router
const goals: Router = router
    .get('/goals', goalsHandler)
    .post('/goals', goalsHandlerPost);

// Library Page Router
const library: Router = router
    .get('/library', libraryHandler)
    .post('/library', libraryHandlerPost);

// Partials Router
const partialsRouter = router.use(partialsHandler);

// Resume Page Router
const resume: Router = router
    .get('/resume', resumeHandler)
    .post('/resume', resumeHandlerPost);

// Projects Page Router
const projects: Router = router
    .get('/projects', projectsHandler)
    .post('/projects', projectsHandlerPost);

//  SpaceX Page Router
const spacex: Router = router
    .get('/spacex', spaceXHandler)
    .post('/spacex', spaceXHandlerPost);

// Error 404 Route
const error404: Router = router.get('*', error404Handler);

// Error 500 Route
const error500: Router = router.get('*', error500Handler);

export {
    landing as default,
    chatBox,
    openAI,
    loginModal,
    signinModal,
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
};
