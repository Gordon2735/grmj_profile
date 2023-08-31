```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import openAi from '../../../config/OpenAiAPI.js';
import readline from 'readline';
import chalk from 'chalk';

async function generateResponse(
    message: { role: string | (() => void) | any; content: string | null }[]
): Promise<void> {
    try {
        const messages: {
            role: string | (() => void) | any;
            content: string | null;
        }[] = message || [];

        const userInterface: readline.Interface = readline.createInterface({
            input: process.stdin as NodeJS.ReadableStream,
            output: process.stdout as NodeJS.WritableStream | undefined,
            terminal: false,
            removeHistoryDuplicates: true,
            historySize: 1000,
            crlfDelay: Infinity,
            escapeCodeTimeout: 500,
            tabSize: 4,
            prompt: '>',
            completer: (line: string): any => {
                const completions: string[] =
                    '.help .error .exit .quit .q'.split(' ');
                const hits: string[] = completions.filter(
                    (c: string) => c.indexOf(line) === 0
                );
                // show all completions if none found
                return [hits.length ? hits : completions, line];
            }
        });

        console.log(chalk.blue('Hello world!'));

        // Set Prompt for user
        userInterface.setPrompt(`\\n${chalk.blue('Send a message:')}\\n`);
        userInterface.prompt();
        userInterface.on('line', async (input: string): Promise<void> => {
            const requestMessage = {
                role: 'user',
                content: input
            };
            messages.push(requestMessage);

            const completion = await openAi.chat.completions.create({
                model: 'gpt-3.5-turbo-0613',
                messages: messages
            });
            const responseMessage = completion.choices[0].message;
            if (responseMessage) {
                console.log(chalk.green(responseMessage.content));
                messages.push({
                    role: responseMessage.role,
                    content: responseMessage.content
                });
                await sendResponseMessage();
            }

            async function sendResponseMessage() {
                const currentResponseMessage = responseMessage.content;

                return chalk.green(currentResponseMessage);
            }

            // Set Prompt for user
            userInterface.prompt();
        });
        //Handle Program Exit
        userInterface.on('close', (): void => {
            console.log(
                chalk.blue(`Team Webelistics®️ Chatbot:  \n${'Exiting...'}\n`)
            );
            process.exit(0);
        });
    } catch (error: unknown) {
        console.error(`Error occurred: ${error}`);
    }
}

export { generateResponse };

// "GPT" stands for "Generative Pre-trained Transformer".
```
