```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Request, Response } from 'express';
import openAi from '../../../config/OpenAiAPI.js';
import { ChatCompletionMessage } from 'openai/resources/chat/completions.mjs';

async function generateResponse(
    _req: Request,
    res: Response,
    input: any
): Promise<void> {
    try {
        const { userInput } = input;

        const message: {
            role: any;
            content: any;
        }[] = [
            {
                role: 'user',
                content: `${userInput}`
            }
        ];

        const completionMessages: {
            role: any;
            content: any;
        }[] = message;

        const requestMessage: {
            role: any;
            content: any;
        } = {
            role: 'user',
            content: `${userInput}`
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
