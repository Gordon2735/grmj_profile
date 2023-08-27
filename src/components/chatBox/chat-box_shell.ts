'use strict';

import { ChatBoxTemplate } from './chat-box_template.js';
import { chatBox_sharedHTML } from './chat-box_sharedHTML.js';
import { chatBox_sharedStyles } from './chat-box_sharedStyles.js';
import RegisterComponent, {
    setAttributes
} from '../componentTools/components_services.js'; // appendChildren

export class ChatBoxShell extends ChatBoxTemplate {
    override activateShadowDOM: boolean;

    constructor() {
        super();
        this.activateShadowDOM = false;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        async function init(): Promise<void> {
            const chatBoxScript = document.createElement('script');

            setAttributes(chatBoxScript, {
                id: 'chatBoxScript',
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/chatBox/chat-box.js',
                alt: 'Chat Box Script'
            });
            document.head.appendChild(chatBoxScript);
        }
        window.addEventListener('DOMContentLoaded', init);
    }

    override get template(): string {
        return /*html*/ `

            ${chatBox_sharedHTML.shell}
            <style>${chatBox_sharedStyles.shell}</style>
        `;
    }
}
RegisterComponent('chat-box_shell', ChatBoxShell);
