'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

let user: any;

const projects: Router = router
	.get('/projects', (_req: Request, res: Response) => {
		res.set('Content-Type', 'text/html');
		res.render('projects', { layout: 'main' });
	})
	.post('/projects', async (req: Request, res: Response) => {
		res.json(
			await user.create(req.body).catch((error: any) => {
				res.status(404),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});

export default projects;
