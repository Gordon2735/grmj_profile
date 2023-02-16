'use strict';

import { TimeObjectTemplate } from './time-object_template.js';
import { timeObject_sharedHTML } from './time-object_sharedHTML.js';
import { timeObject_sharedStyles } from './time-object_sharedStyles.js';
import RegisterComponent, {
    setAttributes,
    appendChildren
} from '../componentTools/components_services.js';

export class TimeObjectShell extends TimeObjectTemplate {
    override activateShadowDOM: boolean;

    override get template(): string {
        return /*html*/ `
            
            ${timeObject_sharedHTML.shell}
            <style>${timeObject_sharedStyles.shell}</style>
            <time-object id="timeObject" class="time-object" data-set-options></time-object>
        `;
    }

    constructor() {
        super();
        this.activateShadowDOM = true;
    }
    override connectedCallback(): void {
        super.connectedCallback();
    }
}
RegisterComponent('time-object_shell', TimeObjectShell);
