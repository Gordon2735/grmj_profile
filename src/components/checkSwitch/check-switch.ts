'use strict';

import { CheckSwitchTemplate } from './check-switch_template.js';
import { checkSwitch_sharedHTML } from './check-switch_sharedHTML.js';
import { checkSwitch_sharedStyles } from './check-switch_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js';

export class CheckSwitch extends CheckSwitchTemplate {
    override activateShadowDOM: Boolean | undefined;

    constructor() {
        super();

        this.activateShadowDOM = false;
    }
    observedAttributes() {
        return [];
    }
    override get template() {
        return /*html*/ `

            ${checkSwitch_sharedHTML.switcher}
            <style>${checkSwitch_sharedStyles.switcher}</style>

        `;
    }

    override connectedCallback() {
        super.connectedCallback();
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.info(
            `attributeChangedCallback, ${name}, ${oldValue}, ${newValue}`
        );
    }

    disconnectedCallback() {}

    adoptedCallback() {}
}
RegisterComponent('check-switch', CheckSwitch);
