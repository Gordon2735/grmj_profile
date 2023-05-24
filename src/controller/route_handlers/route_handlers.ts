/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import express, { Application, Request, Response, NextFunction } from 'express';

let user: any;

const app: Application = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static('src'));

// Home Route Handlers
export async function homeHandler(
    _req: Request,
    res: Response
    // _next: NextFunction
): Promise<void> {
    try {
        const homeShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileHome/profile-shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('home', {
            layout: 'main',
            title: 'Home-Profile',
            script: [`${homeShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`HomeHandler Error: ${error}`);
    }
}
export async function homeHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error) {
        console.error(`HomeHandlerPost Error: ${error}`);
    }
}

// Landing Page Route Handlers
export async function landingHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const landingScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/landingPage/landing-page_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('landing', {
            layout: 'landing_page',
            title: 'Gordon Landing Page',
            script: [`${landingScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`LandingHandler Error: ${error}`);
    }
}
export function landingHandlerPost(req: Request, res: Response): void {
    try {
        res.json(
            user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`LandingHandlerPost Error: ${error}`);
    }
}

// Cover Letter Page Route Handlers
export async function coverHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const coverShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileCover/profile-cover_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('cover_letter', {
            layout: 'main',
            title: 'Cover-Letter-Profile',
            script: [`${coverShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`CoverHandler Error: ${error}`);
    }
}
export async function coverHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`CoverHandlerPost Error: ${error}`);
    }
}

// About Page Route Handlers
export async function aboutHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const aboutShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileAbout/profile-about_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('about', {
            layout: 'main',
            title: 'About-Profile',
            script: [`${aboutShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`AboutHandler Error: ${error}`);
    }
}
export async function aboutHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
        return;
    } catch (error: unknown) {
        console.error(`AboutHandlerPost Error: ${error}`);
    }
}

// Blog Component Route Handlers
export async function blogComponentHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const scriptBlogShell = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileBlog/profile-blog_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('blog', {
            layout: 'main',
            title: 'Profile-Blog',
            script: [`${scriptBlogShell}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`BlogComponentHandler Error: ${error}`);
    }
}
export async function blogComponentHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`BlogComponentHandlerPost Error: ${error}`);
    }
}

// Code Examples Route Handlers
export async function codeExampleHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const codeShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileCodeEx/profile-codeEx_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.render('code_examples', {
            layout: 'main',
            title: 'Code Examples-Profile',
            script: [`${codeShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`CodeExampleHandler Error: ${error}`);
    }
}
export async function codeExampleHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`CodeExampleHandlerPost Error: ${error}`);
    }
}

// Contact Page Route Handlers
export async function contactHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const contactShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileContact/profile-contact_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('contact', {
            layout: 'main',
            title: 'Contact-Profile',
            script: [`${contactShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`ContactHandler Error: ${error}`);
    }
}
export async function contactHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`ContactHandlerPost Error: ${error}`);
    }
}

// Goals Page Route Handlers
export async function goalsHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const goalsShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileGoals/profile-goals_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.render('goals', {
            layout: 'main',
            title: 'Goals-Profile',
            script: [`${goalsShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`GoalsHandler Error: ${error}`);
    }
}
export async function goalsHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`GoalsHandlerPost Error: ${error}`);
    }
}

// History Page Route Handlers
export async function historyHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const historyShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileHistory/profile-history_shell.js"></script>`;
        // const historyFontStylesheet = /*html*/ `<link type="text/css" rel="stylesheet" href="/src/Global/global_fonts.css" alt="CSS Self-Hosted Fonts Stylesheet" />`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('history', {
            layout: 'history_main',
            title: 'History-Profile',
            script: [`${historyShellScript}`]
            // stylesheet: [`${historyFontStylesheet}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`HistoryHandler Error: ${error}`);
    }
    return;
}
export async function historyHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`HistoryHandlerPost Error: ${error}`);
    }
}

// Library Page Route Handlers
export async function libraryHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const libraryShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileLibrary/profile-library_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.render('library', {
            layout: 'main',
            title: 'Library-Profile',
            script: [`${libraryShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`LibraryHandler Error: ${error}`);
    }
}
export async function libraryHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`LibraryHandlerPost Error: ${error}`);
    }
}

// Partials Route Handlers
export function partialsHandler(
    _req: Request,
    res: Response,
    next: NextFunction
): void {
    try {
        if (!res.locals.partials) res.locals.partials = {};
        next();
    } catch (error: unknown) {
        console.error(`PartialsHandler Error: ${error}`);
    }
}

// Resume Page Route Handlers
export async function resumeHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const resumeShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileResume/profile-resume_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.render('resume', {
            layout: 'main',
            title: 'Resume-Profile',
            script: [`${resumeShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`ResumeHandler Error: ${error}`);
    }
}
export async function resumeHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`ResumeHandlerPost Error: ${error}`);
    }
}

// Projects Page Route Handlers
export async function projectsHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const projectsShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/profileProjects/profile-projects_shell.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.render('projects', {
            layout: 'main',
            title: 'Projects-Profile',
            script: [`${projectsShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`ProjectsHandler Error: ${error}`);
    }
}
export async function projectsHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`ProjectsHandlerPost Error: ${error}`);
    }
}

// SpaceX Page Route Handlers
export async function spaceXHandler(
    _req: Request,
    res: Response
): Promise<void> {
    try {
        const spacexShellScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/spacexpage/spacex-page_shell.js"></script>`;
        const timeObjectShellScript = /*html*/ `<script type="module" content="text/javascript" src="src/components/timeObject/time-object_shell.js"></script></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'blank');
        res.render('spacex', {
            layout: 'main',
            title: 'SpaceX-Profile',
            link: '<script type="module" content="text/javascript" src="src/components/timeObject/time-object_shell.js"></script></script>',
            script: [`${spacexShellScript}`],
            script2: [`${timeObjectShellScript}`]
        });
        return;
    } catch (error: unknown) {
        console.error(`SpaceXHandler Error: ${error}`);
    }
}
export async function spaceXHandlerPost(
    req: Request,
    res: Response
): Promise<void> {
    try {
        res.json(
            await user.create(req.body).catch((error: unknown) => {
                res.status(404),
                    console.info(
                        `Whoops, seems there was a "Page Not Found Error" ${error}`
                    );
            })
        );
    } catch (error: unknown) {
        console.error(`SpaceXHandlerPost Error: ${error}`);
    }
}
