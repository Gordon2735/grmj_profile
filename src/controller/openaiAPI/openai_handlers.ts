'use strict';

// import { Request, Response } from 'express';
// import { generateResponse } from '../openaiAPI/controllers.js';
// import { ensureAuth } from '../middleware/auth.js';

// async function openaiHandler(req: Request, res: Response): Promise<void> {
//     try {
//         ensureAuth;
//         res.set('Content-Type', 'application/json'), res.set('target', 'blank');
//         res.render('/chatbox', {
//             role: 'user'
//         });
//         return;
//     } catch (error: unknown) {
//         console.error(`ERROR with openaiHandler: ${error}`);
//         res.render('errors/500');
//         console.info(`openaiHandler _req: ${req}`);
//     }
// }

// async function openaiHandlerPost(req: Request, res: Response): Promise<void> {
//     try {
//         ensureAuth;
//         // const userInput = req.body.userInput as string;
//         const chatGptResponse = await generateResponse(req, res);
//         res.render('/chatbox/input', {
//             message: chatGptResponse
//         });
//         return;
//     } catch (error) {
//         console.error(`ERROR: ${error}`);
//         res.render('errors/500');
//     }
// }

// async function openaiHandlerPut(res: Response): Promise<void> {
//     try {
//         return;
//     } catch (error) {
//         console.error(`ERROR: ${error}`);
//         res.render('errors/500');
//     }
// }

// export { openaiHandler, openaiHandlerPost };
