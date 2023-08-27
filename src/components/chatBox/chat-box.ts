'use strict';

'use strict';

import { ChatBoxTemplate } from './chat-box_template.js';
import { chatBox_sharedHTML } from './chat-box_sharedHTML.js';
import { chatBox_sharedStyles } from './chat-box_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // setAttributes // appendChildren
// import { chalkTerminal } from '../../controller/openaiAPI/controllers.js';

export class ChatBox extends ChatBoxTemplate {
    override activateShadowDOM: boolean;

    override get template(): string {
        return /*html*/ `

            ${chatBox_sharedHTML.chatBox}
            <style>${chatBox_sharedStyles.chatBox}</style>
            
            ${chatBox_sharedHTML.footer}
            <style>${chatBox_sharedStyles.footer}</style>

        `;
    }
    constructor() {
        super();
        this.activateShadowDOM = false;

        // console.log(chalkTerminal.blue('Hello world!'));
    }
    override connectedCallback(): void {
        super.connectedCallback();

        console.log(`${new Date().toLocaleTimeString()} connectedCallback()`);
    }
}
RegisterComponent('chat-box', ChatBox);
