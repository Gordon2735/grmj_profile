'use strict';

import { CheckSwitchTemplate } from './check-switch_template.js';
import { checkSwitch_sharedHTML } from './check-switch_sharedHTML.js';
import { checkSwitch_sharedStyles } from './check-switch_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js';

export class CheckSwitch extends CheckSwitchTemplate {
    override activateShadowDOM: boolean;

    constructor() {
        super();

        this.activateShadowDOM = false;
    }
    observedAttributes(): never[] {
        return [];
    }
    override get template(): string {
        return /*html*/ `

            ${checkSwitch_sharedHTML.switcher}
            <style>${checkSwitch_sharedStyles.switcher}</style>

        `;
    }

    override connectedCallback(): void {
        super.connectedCallback();
    }

    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ): void {
        console.info(
            `attributeChangedCallback, ${name}, ${oldValue}, ${newValue}`
        );
    }
}
RegisterComponent('check-switch', CheckSwitch);
