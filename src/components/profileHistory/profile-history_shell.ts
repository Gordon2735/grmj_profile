'use strict';

import { ProfileHistoryTemplate } from './profile-history_template.js';
import { profileHistory_sharedStyles } from './profile-history_sharedStyles.js';
import { profileHistory_sharedHTML } from './profile-history_sharedHTML.js';
import RegisterComponent, {
    setAttributes
} from '../componentTools/components_services.js';

export class ProfileHistoryShell extends ProfileHistoryTemplate {
    override activateShadowDOM: boolean;
    head: HTMLHeadElement | null | undefined;
    script: HTMLScriptElement;

    constructor() {
        super();

        this.activateShadowDOM = false;

        const head: HTMLHeadElement | null = document.getElementById('head');
        const script: HTMLScriptElement = document.createElement('script');

        this.head = head;
        this.script = script;

        setAttributes(this.script, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/profileHistory/profile-history.js',
            alt: 'profile History Script'
        });
    }
    override connectedCallback() {
        super.connectedCallback();

        this.head?.appendChild(this.script);
    }
    override get template() {
        return /*html*/ `
            <style>${profileHistory_sharedStyles.shell}</style>
            ${profileHistory_sharedHTML.shell}
        `;
    }
}
RegisterComponent('profile-history_shell', ProfileHistoryShell);
