'use strict';

import { TimeObjectTemplate } from './time-object_template.js';
import { timeObject_sharedHTML } from './time-object_sharedHTML.js';
import { timeObject_sharedStyles } from './time-object_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes,

export class TimeObject extends TimeObjectTemplate {
    override activateShadowDOM: boolean;

    override get template(): string {
        return /*html*/ `

            ${timeObject_sharedHTML.time}
            <style>${timeObject_sharedStyles.time}</style>

        `;
    }

    static get observedAttributes(): string[] {
        return ['data-set-options'];
    }

    constructor() {
        super();

        this.activateShadowDOM = false;
    }
    override connectedCallback(): void {
        super.connectedCallback();
    }
    public attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ): void {
        console.info(name, oldValue, newValue);
    }
}
RegisterComponent('time-object', TimeObject);
