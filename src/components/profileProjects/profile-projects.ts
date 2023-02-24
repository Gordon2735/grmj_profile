/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
'use strict';

import { ProjectsTemplate } from './profile-projects_template.js';
import { profileProjects_sharedHTML } from './profile-projects_sharedHTML.js';
import { profileProjects_sharedStyles } from './profile-projects_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes
import historyStack from '../../controller/state/profileState.js';
import { HistoryObject } from '../../interfaces/interfaces.js';

export class ProfileProjects extends ProjectsTemplate {
    override activateShadowDOM = false;
    body: HTMLBodyElement | null;
    spaceInvader(): void {}
    // setAttributes:
    // 	| ((tag: HTMLElement, attribute: string | object | any) => void)
    // 	| undefined;
    // appendChildren:
    // 	| ((parent: HTMLElement | ShadowRoot | null, children: any[]) => void)
    // 	| undefined;
    State: any;
    historyStack: import('d:/grmj_profile/src/interfaces/interfaces.js').HistoryObject;

    constructor() {
        super();

        this.activateShadowDOM = false;

        const body: HTMLBodyElement | null = document.querySelector('body');
        this.body = body;

        this.State = { pageOpen: '/projects' };
        this.historyStack = historyStack;

        window.history.pushState(this.State, 'projects', '/projects');
        this.historyStack.push(history.state);

        window.onpopstate = (event) => {
            event.state
                ? ((this.State = event.state), this.historyStack.pop())
                : this.historyStack.pop();
        };
    }
    override connectedCallback(): void {
        super.connectedCallback();
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
