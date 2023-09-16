```typescript

* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Request, Response } from 'express';
import openAi from '../../../config/OpenAiAPI.js';
import { ChatCompletionMessage } from 'openai/resources/chat/completions.mjs';

async function generateResponse(req: Request, res: Response): Promise<void> {
    try {
        const { title }: any = req.body;

        const message: {
            role: string | (() => void) | any;
            content: string | null;
        }[] = [
            {
                role: 'user',
                content: `${title}`
            }
        ];

        const completionMessages: [
            {
                role: string | (() => void) | any;
                content: string | null;
            }
        ] = message || [];

        const requestMessage: {
            role: string;
            content: string;
        } = {
            role: 'user',
            content: `${title}`
        };

        completionMessages.push(requestMessage);

        const completion = await openAi.chat.completions.create({
            model: 'gpt-3.5-turbo-0613',
            messages: completionMessages,
            max_tokens: 100
        });

        const responseMessage: ChatCompletionMessage =
            completion.choices[0].message;

        if (responseMessage) {
            console.log(responseMessage.content);

            completionMessages.push({
                role: responseMessage.role,
                content: responseMessage.content
            });
            await sendResponseMessage(responseMessage);
        }
        return;
    } catch (error: unknown) {
        console.error(
            `
                Error occurred in the generateResponse()
                    Function || ERROR: ${error}
            `
        );
    }

    async function sendResponseMessage(
        resMsg: ChatCompletionMessage
    ): Promise<Response<any, Record<string, any>> | undefined> {
        try {
            // const currentResponseMessage = resMsg.content;

            // const sendCompletionFrontend: Response<
            //     any,
            //     Record<string, any>
            // > = res.status(200).json({ message: currentResponseMessage });
            res.status(200).json({ message: resMsg.content });

            // return sendCompletionFrontend;
            return;
        } catch (error: unknown) {
            console.error(
                `
                    Error occurred in the sendResponseMessage()
                        Function || ERROR: ${error}
                `
            );
            return;
        }
    }
    return;
}

export { generateResponse };

// "GPT" stands for "Generative Pre-trained Transformer".
```
