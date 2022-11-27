'use strict';

import { ResumeTemplate } from './profile-resume_template.js';
import RegisterComponent, {
	setAttributes
} from '../componentTools/components_services.js';
import { profileResume_sharedHTML } from './profile-resume_sharedHTML.js';
import { profileResume_sharedStyles } from './profile-resume_sharedStyles.js';

export class ProfileResumeShell extends ResumeTemplate {
	head: HTMLHeadElement | null;
	script: HTMLScriptElement;
	setAttributes(): void {}

	constructor() {
		super();

		const head: HTMLHeadElement | null = document.querySelector('head');
		this.head = head;

		const script: HTMLScriptElement | null =
			document.createElement('script');
		this.script = script;

		setAttributes(this.script, {
			type: 'module',
			content: 'text/javascript',
			src: '/src/components/profileResume/profile-resume.js',
			alt: 'Resume Main Script'
		});
	}
	override connectedCallback(): void {
		super.connectedCallback();

		this.head?.appendChild(this.script);
	}
	override get template() {
		return /*html*/ `
            ${profileResume_sharedHTML.shell}
            <style>${profileResume_sharedStyles.shell}</style>
        `;
	}
}
RegisterComponent('profile-resume_shell', ProfileResumeShell);
