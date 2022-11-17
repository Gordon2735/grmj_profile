'use strict';

import { ProfileTemplate } from './profile-template.js';
import { profile_sharedStyles } from './profile-sharedStyles.js';
import { profile_sharedHTML } from './profile-sharedHTML.js';
import ComponentRegistry from '../componentTools/components_services.js';

export class ProfileShell extends ProfileTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	override connectedCallback() {
		super.connectedCallback();
	}
	override get template() {
		return /*html*/ `
            <profile-home id="profileHome" class="profile-home"></profile-home>
			
            <style>
				${profile_sharedStyles.global}
            </style>

			${profile_sharedHTML.shell}
			
			<side-panel_shell id="sidePanelShell" class="side-panel"></side-panel_shell>
        `;
	}
}
ComponentRegistry('profile-shell', ProfileShell);
