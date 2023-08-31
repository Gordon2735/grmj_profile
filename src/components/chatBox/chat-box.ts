'use strict';

'use strict';

import { ChatBoxTemplate } from './chat-box_template.js';
import { chatBox_sharedHTML } from './chat-box_sharedHTML.js';
import { chatBox_sharedStyles } from './chat-box_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // setAttributes // appendChildren

export class ChatBox extends ChatBoxTemplate {
    override activateShadowDOM: boolean;

    override get template(): string {
        return /*html*/ `

            ${chatBox_sharedHTML.chatBox}
            <style>${chatBox_sharedStyles.chatBox}</style>

            ${chatBox_sharedHTML.openai}
            <style>${chatBox_sharedStyles.openai}</style>
            
            ${chatBox_sharedHTML.footer}
            <style>${chatBox_sharedStyles.footer}</style>

        `;
    }
    constructor() {
        super();
        this.activateShadowDOM = false;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        const timeTag: HTMLElement | null | undefined =
            document.getElementById('openaiTime');
        const time: string = new Date().toLocaleTimeString('en-US', {
            timeZone: 'UTC'
        });
        const date: string = new Date().toLocaleDateString('default', {
            month: 'long',
            weekday: 'long',
            day: 'numeric'
        });

        timeTag?.insertAdjacentHTML('afterbegin', `${date}  ${time}`);

        console.log(`time:  ${time}`);
    }
}
RegisterComponent('chat-box', ChatBox);
