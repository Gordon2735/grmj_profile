```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

console.log(`Hello OpenAI from openai.ts!`);

const chatForm: HTMLFormElement | null = document.querySelector('.chat-form');

const paraOpenai: HTMLParagraphElement | null =
    document.querySelector('.article-openai p');

chatForm?.addEventListener('submit', async (event: Event) => {
    try {
        event.preventDefault();

        console.log(`The event listener fired!`);

        const response = await fetch('/openaiAPI/openai', {
            body: JSON.stringify({ message: chatForm.userInput.value }),
            method: 'POST'
        });
        const chatData = await response.json();

        let chatReceiver: any = paraOpenai?.textContent;

        console.info(`chatData: ${chatData}${chatReceiver}`);

        chatReceiver = chatData.message.content;
    } catch (error: unknown) {
        console.error(
            `
                Error occurred in the chatForm?.addEventListener()
                    Function || ERROR: ${error}
            `
        );
    }
});
```
