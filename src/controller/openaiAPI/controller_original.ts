/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { Request, Response } from 'express';
import openai from '../../../config/OpenAiAPI.js';
import { CreateChatCompletionRequestMessage } from '../../../node_modules/openai/resources/chat/completions.js';
import { ChatCompletionMessage } from '../../../node_modules/openai/resources/chat/completions.js';

async function generateResponse(
    _req: Request,
    _res: Response,
    usesInput: string
): Promise<any> {
    if (usesInput) {
        const message: Array<CreateChatCompletionRequestMessage> = [
            {
                role: 'user',
                content: usesInput
            }
        ];

        const completionMessages: Array<CreateChatCompletionRequestMessage> = [
            ...message
        ];

        const requestMessage: CreateChatCompletionRequestMessage = {
            // role: 'function' | 'user' | 'system' | 'assistant' | 'agent' | 'owner',
            role: 'assistant',
            content: usesInput
        };
        completionMessages.push(requestMessage);

        console.info(`usesInput: ${usesInput}`);

        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-0613',
            messages: completionMessages,
            max_tokens: 100
        });

        const responseMessage: ChatCompletionMessage =
            completion.choices[0].message;

        completionMessages.push(responseMessage);

        return responseMessage.content;
    } else {
        const message: Array<CreateChatCompletionRequestMessage> = [
            {
                role: 'user',
                content: 'Hello, how are you?'
            }
        ];

        const completionMessages: Array<CreateChatCompletionRequestMessage> = [
            ...message
        ];

        const requestMessage: CreateChatCompletionRequestMessage = {
            // role: 'function' | 'user' | 'system' | 'assistant' | 'agent' | 'owner',
            role: 'user',
            content: 'Hello, how are you?'
        };
        completionMessages.push(requestMessage);

        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-0613',
            messages: completionMessages,
            max_tokens: 100
        });

        const responseMessage: ChatCompletionMessage =
            completion.choices[0].message;

        completionMessages.push(responseMessage);

        return responseMessage.content;
    }
}

export default generateResponse;
