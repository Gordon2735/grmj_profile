'use strict';

// import express, { Router, Request, Response } from 'express';
// import Chatbox from '../../models/schemas/Chatbox_Schema.js';
// import { openaiHandler } from '../openaiAPI/openai_handlers.js';
// import { generateResponse } from '../openaiAPI/controllers.js';

// const router: Router = express.Router();

// @desc    Show openai page
// @route   GET /openai
// const openAI: Router = router
//     .get('/openai', async (_req: Request, res: Response) => {
//         try {
//             const chatbox = await Chatbox.find({})
//                 .sort({ createdAt: 'desc' })
//                 .lean();
//             res.render('openai', {
//                 chatbox,
//                 generateResponse
//             });
//         } catch (error) {
//             console.error(`ERROR: ${error}`);
//             res.render('errors/500');
//             console.info(`router.get  _req: ${_req}`);
//         }
//     })
//     .get('/openai', openaiHandler)
//     .post('/openai', async (req: Request, res: Response) => {
//         try {
//             await Chatbox.create(req.body);
//             res.redirect('openai');
//         } catch (error) {
//             console.error(`ERROR: ${error}`);
//             res.render('errors/500');
//         }
//     });

// export { openAI };
