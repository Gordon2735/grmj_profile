'use strict';

import { ResumeTemplate } from './profile-resume_template.js';
import { profileResume_sharedStyles } from './profile-resume_sharedStyles.js';
import { profileResume_sharedHTML } from './profile-resume_sharedHTML.js';
import RegisterComponent from '../componentTools/components_services.js';

export class ProfileResume extends ResumeTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	override connectedCallback() {
		super.connectedCallback();

		console.log('Resume-Page is Rendered :::: HooT™️ Webelistics®️ ');
	}
	override get template() {
		return /*html*/ `

            ${profileResume_sharedHTML.resume}
            <style>${profileResume_sharedStyles.resume}</style>
        `;
	}
}
RegisterComponent('profile-resume', ProfileResume);
