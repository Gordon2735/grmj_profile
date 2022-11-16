'use strict';

import { ProfileHistoryTemplate } from './profile-history_template.js';
import { profileHistory_sharedStyles } from './profile-history_sharedStyles.js';
import { profileHistory_sharedHTML } from './profile-history_sharedHTML.js';
// import { profile_sharedStyles } from '../profileHome/profile-sharedStyles.js';
import removeAttributes, {
	setAttributes,
	appendChildren
	// newDomTag
} from './profile-history_services.js';

export class ProfileHistory extends ProfileHistoryTemplate {
	body: HTMLBodyElement | null;
	removeAttributes = removeAttributes;
	setAttributes = setAttributes;
	appendChildren = appendChildren;
	constructor() {
		super();

		this.noShadow = true;

		const body = document.querySelector('body');
		this.body = body;

		// const titleText: string | any = 'The History of Gordon Mullen';

		// const title: HTMLElement | any = newDomTag(
		// 	'01',
		// 	'h1',
		// 	{
		// 		id: 'title',
		// 		class: 'title'
		// 	},
		// 	null,
		// 	null
		// );
		// title.innerHTML = titleText;
		// this.title = title;
		// this.body?.append(title);
	}
	override connectedCallback() {
		super.connectedCallback();

		// appendChildren(this.body, [this.title]);
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
customElements.define('profile-history', ProfileHistory);
