'use strict';

import { ProfileTemplate } from './profile-template';
import { profile_sharedStyles } from './profile-sharedStyles';

export class ProfileShell extends ProfileTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	override connectedCallback() {
		super.connectedCallback();
	}
	override get template() {
		return `
            <profile-home id="profileHome" class="profile-home"></profile-home>

            <style>
                ${profile_sharedStyles.global}
            </style>
        `;
	}
}
customElements.define('profile-shell', ProfileShell);
