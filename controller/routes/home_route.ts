'use strict';

import express from 'express';

const router = express.Router();
router.use(express.static('../../views'));

//* Home Page Router
let user: { create: (arg0: any) => Promise<any> };
const home = router
	.get('/', (req, res) => {
		res.set('Content-Type', 'text/html');
		res.render('home');
		console.info(`Home Page Retrieved and has been routed through the Node.js || Nodemon Server,
			Request Data View: ${req}
			Response Data View: ${res}`);
	})
	.post('/', async (req, res) => {
		res.json(
			await user.create(req.body).catch((error: any) => {
				res.status(400),
					console.error(
						`Whoops, seems there has been a "Page" ERROR: ${error}`
					);
			})
		);
		console.info(`Home Page Posted and has been routed through the Node.js || Nodemon Server,
			Request Data View When Posted: ${req}
			Response Data View when Posted: ${res}`);
	});

export default home;
