'use strict';

import { config } from 'dotenv';
// old version is now deprecated
// import { Configuration, OpenAIApi } from 'openai';
// openai / openai-node v3 to v4 Migration Guide @ GitHub
//  https://github.com/openai/openai-node/discussions/217
import OpenAI from 'openai';
import readline from 'readline';

config();

console.log(process.env.OPENAI_API_KEY);

const openAi = new OpenAI({
    apikey: process.env.OPENAI_API_KEY
});

// openAi.chat.completions.create({
//     model: 'gpt-3.5-turbo-0613',
//     messages: [{ role: 'user', content: 'Hello ChatGPT!' }]

// }).then(response => {
//     console.log(response.choices);
//     console.info(response.choices[0].message.content);
//     console.info(response.choices[0].message.role);
// });

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cause the user to have some kind of input
// userInterface.question('What is your name? ', (answer) => {

userInterface.prompt();
userInterface.on('line', async input => {
    const response = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo-0613',
        messages: [{ role: 'user', content: input }]

    });
    console.info(response.choices[0].message.content);
    userInterface.prompt();
})

