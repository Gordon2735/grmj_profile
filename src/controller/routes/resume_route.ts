'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

let user: any;

const resume: Router = router
	.get('/resume', (_req: Request, res: Response) => {
		res.set('Content-Type', 'text/html');
		res.render('resume', { layout: 'main' });
	})
	.post('/resume', async (req: Request, res: Response) => {
		res.json(
			await user.create(req.body).catch((error: any) => {
				res.status(404),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});

export default resume;
