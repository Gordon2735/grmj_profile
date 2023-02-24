'use strict';

import { CheckSwitchTemplate } from './check-switch_template.js';
import { checkSwitch_sharedHTML } from './check-switch_sharedHTML.js';
import { checkSwitch_sharedStyles } from './check-switch_sharedStyles.js';
import RegisterComponent, {
    setAttributes,
    appendChildren
} from '../componentTools/components_services.js';

export class CheckSwitchShell extends CheckSwitchTemplate {
    checkSwitchScript: HTMLScriptElement;
    head: HTMLHeadElement;
    linkChango: HTMLLinkElement;

    constructor() {
        super();

        this.activateShadowDOM = false;

        const head = document.querySelector('head') as HTMLHeadElement;
        setAttributes(head, {
            id: 'head',
            class: 'head',
            alt: 'Head'
        });
        this.head = head;

        const linkChango = document.createElement('link');
        setAttributes(linkChango, {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Chango&display=swap',
            alt: 'Chango Font'
        });
        this.linkChango = linkChango;

        const checkSwitchScript = document.createElement('script');
        setAttributes(checkSwitchScript, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/checkSwitch/check-switch.js',
            alt: 'Check Switch Script'
        });
        this.checkSwitchScript = checkSwitchScript;
    }
    observedAttributes() {
        return [];
    }
    override get template(): string {
        return /*html*/ `

            ${checkSwitch_sharedHTML.shell}
            <style>${checkSwitch_sharedStyles.shell}</style>

        `;
    }

    override connectedCallback() {
        super.connectedCallback();

        appendChildren(this.head, [this.linkChango, this.checkSwitchScript]);
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.info(
            `attributeChangedCallback, ${name}, ${oldValue}, ${newValue}`
        );
    }
}
RegisterComponent('check-switch_shell', CheckSwitchShell);
