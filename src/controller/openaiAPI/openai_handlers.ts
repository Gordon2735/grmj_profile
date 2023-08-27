'use strict';

import express, { Application, Request, Response } from 'express';
import Chatbox from '../../models/schemas/Chatbox_Schema.js';
import { generateResponse } from '../openaiAPI/controllers.js';

// import { fileURLToPath } from 'url';
// import path from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const app: Application = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// let openai: any;

async function openaiHandler(req: Request, res: Response): Promise<void> {
    try {
        const openaiScript = /*html*/ `<script type="module" content="text/javascript" src="/src/components/chatBox/resources/API/openai.js"></script>`;
        res.set('Content-Type', 'text/html');
        res.set('target', 'openai');
        req.body = await generateResponse();
        const chatbox = await Chatbox.find({ content: 'user' })
            .populate('user')
            .lean();
        res.render('openai', {
            layout: 'openai_main',
            script: openaiScript,
            title: 'OpenAI Chatbot',
            chatbox
        });
        return;
    } catch (error: unknown) {
        console.error(`ERROR with openaiHandler: ${error}`);
        res.render('errors/500');
        console.info(`openaiHandler _req: ${req}`);
    }
}

async function openaiHandlerPost(req: Request, res: Response): Promise<void> {
    try {
        await Chatbox.create(req.body);
        res.redirect('openai');
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('errors/500');
    }
}

async function openaiHandlerPut(
    req: Request<{
        role: string;
        content: string;
        createdAt: Date;
    }>,
    res: Response
): Promise<void> {
    try {
        const { role, content, createdAt } = req.body;
        const chatbox = await Chatbox.findOneAndUpdate(
            { role, content, createdAt },
            req.body,
            { new: true, runValidators: true }
        ).lean();
        if (!chatbox) {
            return res.render('errors/404');
        } else {
            res.render('openai', {
                chatbox
            });
            console.log(`chatbox: ${chatbox}`, `req.body: ${req.body}`);
        }
        res.redirect('openai');
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.render('errors/500');
    }
}

export { openaiHandler, openaiHandlerPost, openaiHandlerPut };
