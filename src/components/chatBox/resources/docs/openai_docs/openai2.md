```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

console.log(`Hello OpenAI from openai.ts!`);
const chatForm: HTMLFormElement | null = document.querySelector('.chat-form');
const input: HTMLInputElement | null = document.querySelector('.user-input');

input?.addEventListener('submit', async (event: Event) => {
    event.preventDefault();

    const paraOpenai: HTMLParagraphElement | null =
        document.querySelector('.article-openai p');

    try {
        console.log(`The event listener fired!`);

        const response = await fetch('/chatbox', {
            body: JSON.stringify({ message: chatForm?.usesInput.value }),
            method: 'POST'
        });
        const chatData = await response.json();

        let chatReceiver: any = paraOpenai?.textContent;

        console.info(`chatData: ${chatData}${chatReceiver}`);

        chatReceiver = chatData.message[0].content;

        paraOpenai!.insertAdjacentHTML('afterbegin', `${chatReceiver}`);
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
