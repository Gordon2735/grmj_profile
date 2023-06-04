/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
'use strict';

import { ProjectsTemplate } from './profile-projects_template.js';
import { profileProjects_sharedHTML } from './profile-projects_sharedHTML.js';
import { profileProjects_sharedStyles } from './profile-projects_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes
import ProfileProject, {
    ProfileProjectsState
} from '../../interfaces/interfaces_components.js';

export default class ProfileProjects
    extends ProjectsTemplate
    implements ProfileProject
{
    override activateShadowDOM = false;
    override root = this.shadowRoot as ShadowRoot;
    state: string | undefined;
    projectPage: number | undefined;
    projectGrouping: HTMLElement[];
    spaceInvaders: string;
    teamWebelisticsBlog: string;
    todoApp: string;

    override get template(): string {
        return /*html*/ `
        
            ${profileProjects_sharedHTML.projects}
            <style>${profileProjects_sharedStyles.projects}</style>
            ${profileProjects_sharedHTML.footer}
            <style>${profileProjects_sharedStyles.footerMod}</style>
        `;
    }

    constructor(
        spaceInvaders: string,
        teamWebelisticsBlog: string,
        todoApp: string
    ) {
        super();

        this.activateShadowDOM = false;

        this.spaceInvaders = spaceInvaders;
        this.teamWebelisticsBlog = teamWebelisticsBlog;
        this.todoApp = todoApp;

        const projectGrouping = [
            this.spaceInvaders,
            this.teamWebelisticsBlog,
            this.todoApp
        ] as unknown as HTMLElement[];
        this.projectGrouping = projectGrouping;
    }
    get observedAttributes(): string[] {
        return ['state', 'data-project-page'];
    }
    dataProjectPage: ProfileProjectsState | null | undefined;
    stateValue: ProfileProjectsState | null | undefined;
    dataValue: ProfileProjectsState | null | undefined;
    override connectedCallback(): void {
        super.connectedCallback();
    }
    static get observedAttributes(): string[] {
        return ['state', 'data-project-page'];
    }
    public attributeChangedCallback(
        _name: string,
        _oldValue: string,
        _newValue: string
    ): void {
        // create a asynchronous function to query custom element for data-project-page attribute and set it to the newValue of the attribute.

        console.log(_name, _oldValue, _newValue);
        (async () => {
            const projectPage = (await this.getAttribute(
                'data-project-page'
            )) as string;
            const projectPageInt: number = parseInt(projectPage, 10);
            this.projectPage = projectPageInt;
            console.info('projectPage', this.projectPage);
        })();
    }
}
RegisterComponent('profile-projects', ProfileProjects);
