'use strict';

import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

let user: any;

const code_examples: Router = router
	.get('/code_examples', (_req: Request, res: Response) => {
		res.set('Content-Type', 'text/html');
		res.render('code_examples', { layout: 'main' });
	})
	.post('/code_examples', async (req: Request, res: Response) => {
		res.json(
			await user.create(req.body).catch((error: any) => {
				res.status(404),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});

export default code_examples;
