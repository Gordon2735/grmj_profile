'use strict';

import { ProjectsTemplate } from './profile-projects_template.js';
import { profileProjects_sharedHTML } from './profile-projects_sharedHTML.js';
import { profileProjects_sharedStyles } from './profile-projects_sharedStyles.js';
import RegisterComponent, {
	setAttributes,
	appendChildren
} from '../componentTools/components_services.js';

export class ProfileProjectsShell extends ProjectsTemplate {
	override noShadow: boolean = true;
	head: HTMLHeadElement | null;
	script: HTMLScriptElement | null;

	constructor() {
		super();

		this.noShadow = true;

		const head: HTMLHeadElement | null = document.getElementById('head');
		const script: HTMLScriptElement = document.createElement('script');

		this.head = head;
		this.script = script;

		setAttributes(this.script, {
			type: 'module',
			content: 'text/javascript',
			src: '/src/components/profileProjects/profile-projects.js',
			alt: 'Profile Projects Script'
		});
	}
	override connectedCallback() {
		super.connectedCallback();

		appendChildren(this.head, [this.script]);
	}
	override get template() {
		return /*html*/ `
        
            <style>${profileProjects_sharedStyles.shell}</style>
            ${profileProjects_sharedHTML.shell}
        `;
	}
}
RegisterComponent('profile-projects_shell', ProfileProjectsShell);
