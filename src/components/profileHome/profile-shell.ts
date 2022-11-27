'use strict';

import { ProfileTemplate } from './profile-template.js';
import { profile_sharedStyles } from './profile-sharedStyles.js';
import { profile_sharedHTML } from './profile-sharedHTML.js';
import ComponentRegistry, {
	setAttributes
} from '../componentTools/components_services.js';

export class ProfileShell extends ProfileTemplate {
	override noShadow: boolean;
	head: HTMLHeadElement | null;
	scriptHome: HTMLScriptElement;

	constructor() {
		super();

		this.noShadow = true;

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

		this.head?.appendChild(this.scriptHome);
	}
	override get template() {
		return /*html*/ `

			${profile_sharedHTML.shell}
			
            <style>${profile_sharedStyles.global}</style>
			
        `;
	}
}
ComponentRegistry('profile-shell', ProfileShell);
