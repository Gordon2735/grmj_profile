'use strict';

import { ProjectsTemplate } from './profile-projects_template.js';
import { profileProjects_sharedHTML } from './profile-projects_sharedHTML.js';
import { profileProjects_sharedStyles } from './profile-projects_sharedStyles.js';
import RegisterComponent, {
    setAttributes,
    appendChildren
} from '../componentTools/components_services.js';

export class ProfileProjectsShell extends ProjectsTemplate {
    override activateShadowDOM = false;
    head: HTMLHeadElement;
    scriptProjects: HTMLScriptElement;
    scriptMarked: HTMLScriptElement;

    constructor() {
        super();

        this.activateShadowDOM = false;

        const head = document.getElementById('head') as HTMLHeadElement;
        const scriptProjects: HTMLScriptElement =
            document.createElement('script');
        const scriptMarked: HTMLScriptElement =
            document.createElement('script');

        this.head = head;
        this.scriptProjects = scriptProjects;
        this.scriptMarked = scriptMarked;

        setAttributes(this.scriptProjects, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/profileProjects/profile-projects.js',
            alt: 'Profile Projects Script'
        });

        setAttributes(this.scriptMarked, {
            type: 'module',
            content: 'text/javascript',
            src: 'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
            alt: 'Marked Script'
        });
    }
    override connectedCallback() {
        super.connectedCallback();

        appendChildren(this.head, [this.scriptProjects, this.scriptMarked]);
    }
    override get template(): string {
        return /*html*/ `		            
            ${profileProjects_sharedHTML.shell}
            <style>${profileProjects_sharedStyles.shell}</style>			
        `;
    }
}
RegisterComponent('profile-projects_shell', ProfileProjectsShell);
