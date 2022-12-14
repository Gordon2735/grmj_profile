'use strict';

import { ProjectsTemplate } from './profile-projects_template.js';
import { profileProjects_sharedHTML } from './profile-projects_sharedHTML.js';
import { profileProjects_sharedStyles } from './profile-projects_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes
import historyStack from '../../controller/state/profileState.js';
import { HistoryObject } from '../../interfaces/interfaces.js';

export class ProfileProjects extends ProjectsTemplate {
	override noShadow: boolean = true;
	body: HTMLBodyElement | null;
	// gordonProjectsDiv: HTMLElement | null;
	spaceInvader(): void {}
	// dynamicRender(): Promise<void> {
	// 	return new Promise(resolve => {
	// 		resolve();
	// 	});
	// }
	// setAttributes:
	// 	| ((tag: HTMLElement, attribute: string | object | any) => void)
	// 	| undefined;
	// appendChildren:
	// 	| ((parent: HTMLElement | ShadowRoot | null, children: any[]) => void)
	// 	| undefined;
	State: any;
	historyStack: import('d:/grmj_profile/src/interfaces/interfaces').HistoryObject;

	constructor() {
		super();

		this.noShadow = true;

		const body: HTMLBodyElement | null = document.querySelector('body');
		// const gordonProjectsDiv: HTMLElement | null =
		// 	document.querySelector('.gordon-projects');
		// const tsImage: HTMLImageElement = document.createElement('img');

		this.body = body;
		// this.gordonProjectsDiv = gordonProjectsDiv;
		// this.tsImage = tsImage;
		// const thiz: this = this;

		this.State = { pageOpen: '/projects' };
		this.historyStack = historyStack;

		window.history.pushState(this.State, 'projects', '/projects');
		this.historyStack.push(history.state);

		window.onpopstate = event => {
			event.state
				? ((this.State = event.state), this.historyStack.pop())
				: this.historyStack.pop();
		};
		console.log(this.State.pageOpen);
		console.log(history.state);
		console.log(this.historyStack);

		// async function dynamicRender(): Promise<void> {
		// 	try {
		// 		thiz.gordonProjectsDiv?.append(thiz.tsImage);

		// 		// appendChildren(thiz.body, [thiz.gordonProjectsDiv]);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// 	return;
		// }
		// this.dynamicRender = dynamicRender;
	}
	override connectedCallback(): void {
		super.connectedCallback();

		// this.dynamicRender();
	}
	override get template(): string {
		return /*html*/ `
        
			${profileProjects_sharedHTML.projects}
            <style>${profileProjects_sharedStyles.projects}</style>
			${profileProjects_sharedHTML.footer}
            <style>${profileProjects_sharedStyles.footerMod}</style>

		`;
	}
	static get observedAttributes(): string[] {
		return ['this.historyStack.pageOpen'];
	}
	public attributeChangedCallback(
		name: string,
		_oldValue: string,
		_newValue: string
	) {
		const currentLocation: HistoryObject = this.historyStack;
		console.log(currentLocation);

		_oldValue !== _newValue
			? console.info(`old location: ${_oldValue},
				${name} has a new location of: ${_newValue}
				which should be equal to: ${currentLocation} `)
			: console.info(`old location: ${_oldValue}`);
	}
}
RegisterComponent('profile-projects', ProfileProjects);
