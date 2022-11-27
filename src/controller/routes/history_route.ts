'use strict';

import express, { Router, Request, Response } from 'express';

// const app = express();
const router: Router = express.Router();
// router.use(express.static('/src/views'));
router.use(express.static('../../views'));

//%  /Home page Route
let user: any;
// : { create: (arg0: any) => Promise<any> };
const history: Router = router
	.get('/history', (_req: Request, res: Response) => {
		res.set('Content-Type', 'text/html');
		res.render('history', { layout: 'main' });
	})
	.post('/history', async (req: Request, res: Response) => {
		res.json(
			await user.create(req.body).catch((error: any) => {
				res.status(404),
					console.info(
						`Whoops, seems there was a "Page Not Found Error" ${error}`
					);
			})
		);
	});
export default history;
