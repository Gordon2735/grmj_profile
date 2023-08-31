/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

console.log(`Hello OpenAI from openai.ts!`);

const chatForm: HTMLElement | null = document.querySelector('.chat-form');

const paraOpenai: HTMLParagraphElement | null =
    document.querySelector('.article-openai p');

chatForm?.addEventListener('submit', async (event: Event) => {
    event.preventDefault();

    const response = await fetch('/title', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: chatForm.title.valueOf() }),
        method: 'POST'
    });
    const chatData = await response.json();

    let chatReceiver: string | null | undefined = paraOpenai?.textContent;

    console.info(`chatData: ${chatData}`);

    chatReceiver !== undefined || null
        ? (chatReceiver = chatData.message.content)
        : (chatReceiver = `No response from OpenAI.`);
});
