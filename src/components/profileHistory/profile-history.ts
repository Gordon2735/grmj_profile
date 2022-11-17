'use strict';

import { ProfileHistoryTemplate } from './profile-history_template.js';
import { profileHistory_sharedStyles } from './profile-history_sharedStyles.js';
import { profileHistory_sharedHTML } from './profile-history_sharedHTML.js';
import RegisterComponent, {
	setAttributes,
	appendChildren,
	removeChildren
} from '../componentTools/components_services.js';
export class ProfileHistory extends ProfileHistoryTemplate {
	body: HTMLBodyElement | null;
	removeChildren = removeChildren;
	setAttributes = setAttributes;
	appendChildren = appendChildren;
	constructor() {
		super();

		this.noShadow = true;

		const body = document.querySelector('body');
		this.body = body;
	}
	override connectedCallback() {
		super.connectedCallback();
	}
	override get template() {
		return /*html*/ `

            ${profileHistory_sharedHTML.history}

            <style>
                ${profileHistory_sharedStyles.history}
            </style>
        `;
	}
}
RegisterComponent('profile-history', ProfileHistory);
