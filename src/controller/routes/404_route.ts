'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.use(express.static('../../views'));

//%  /404 Error Route

const error404: Router = router.get('*', (_req: Request, res: Response) => {
    res.set('Content-Type', 'text/html');
    res.render('errors/404', { layout: '404' });
    // res.send('404 Error');
    res.status(404);
});

export default error404;
