'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.use(express.static('../../views'));

//%  /500 Error Route
const error500: Router = router.get('*', (_req: Request, res: Response) => {
	res.status(500);
	res.set('Content-Type', 'text/html');
	res.render('500', { layout: 'errors' });
	res.send('500 Error');
});

export default error500;
