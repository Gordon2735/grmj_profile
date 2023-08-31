'use strict';

import { Request, Response } from 'express';
import { generateResponse } from '../openaiAPI/controllers.js';

async function openaiHandler(req: Request, res: Response): Promise<void> {
    try {
        return;
    } catch (error: unknown) {
        console.error(`ERROR with openaiHandler: ${error}`);
        res.render('errors/500');
        console.info(`openaiHandler _req: ${req}`);
    }
}

async function openaiHandlerPost(req: Request, res: Response): Promise<void> {
    try {
        generateResponse(req, res);
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('errors/500');
    }
}

async function openaiHandlerPut(res: Response): Promise<void> {
    try {
        return;
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('errors/500');
    }
}

export { openaiHandler, openaiHandlerPost, openaiHandlerPut };
