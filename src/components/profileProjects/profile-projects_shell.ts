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
	scriptProjects: HTMLScriptElement | null;
	scriptSlides: HTMLScriptElement | null;
	renderScripts(): Promise<void> {
		return new Promise(resolve => {
			resolve();
		});
	}

	constructor() {
		super();

		this.noShadow = true;

		const head: HTMLHeadElement | null = document.getElementById('head');

		const scriptProjects: HTMLScriptElement =
			document.createElement('script');

		const scriptSlides: HTMLScriptElement =
			document.createElement('script');

		this.head = head;
		this.scriptProjects = scriptProjects;
		this.scriptSlides = scriptSlides;

		setAttributes(this.scriptProjects, {
			type: 'module',
			content: 'text/javascript',
			src: '/src/components/profileProjects/profile-projects.js',
			alt: 'Profile Projects Script'
		});
		setAttributes(this.scriptSlides, {
			type: 'module',
			content: 'text/javascript',
			src: '/src/components/profileProjects/slide-projects.js',
			alt: 'Profile Projects Script'
		});
	}
	override connectedCallback() {
		super.connectedCallback();

		appendChildren(this.head, [this.scriptProjects, this.scriptSlides]);
	}
	override get template() {
		return /*html*/ `
		            
			<style>${profileProjects_sharedStyles.shell}</style>
            ${profileProjects_sharedHTML.shell}
        `;
	}
}
RegisterComponent('profile-projects_shell', ProfileProjectsShell);
