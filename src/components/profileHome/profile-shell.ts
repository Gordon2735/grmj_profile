/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
'use strict';

import { ProfileTemplate } from './profile-template.js';
import { profile_sharedStyles } from './profile-sharedStyles.js';
import { profile_sharedHTML } from './profile-sharedHTML.js';
import RegisterComponent, {
    setAttributes,
    appendChildren
} from '../componentTools/components_services.js';

export class ProfileShell extends ProfileTemplate {
    override activateShadowDOM: boolean;
    head: HTMLHeadElement | null;
    scriptHome: HTMLScriptElement;

    constructor() {
        super();

        this.activateShadowDOM = false;

        this.head = document.getElementById('head');
        this.scriptHome = document.createElement('script');

        setAttributes(this.scriptHome, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/profileHome/profile-home.js',
            alt: 'Profile Home Script'
        });
    }
    override connectedCallback() {
        super.connectedCallback();

        appendChildren(this.head, [this.scriptHome]);
    }
    override get template() {
        return /*html*/ `
			${profile_sharedHTML.shell}
			<style>${profile_sharedStyles.global}</style>
    `;
    }
}
RegisterComponent('profile-shell', ProfileShell);
