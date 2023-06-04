/* eslint-disable @typescript-eslint/no-empty-function */
'use strict';

import { DropDownTemplate } from './drop-down_template.js';
import { dropDown_sharedHTML } from './drop-down_sharedHTML.js';
import { dropDown_sharedStyles } from './drop-down_sharedStyles.js';
import RegisterComponent, {
    setAttributes,
    appendChildren
} from '../componentTools/components_services.js';

export class DropDownShell extends DropDownTemplate {
    override activateShadowDOM: boolean;
    head: HTMLHeadElement;
    scriptDropDown: HTMLScriptElement;

    override get template() {
        return /*html*/ `
			${dropDown_sharedHTML.shell}             
			${dropDown_sharedHTML.dynadrop}             
        `;
    }
    constructor() {
        super();

        this.activateShadowDOM = false;

        this.head = document.querySelector('head') as HTMLHeadElement;
        this.scriptDropDown = document.createElement(
            'script'
        ) as HTMLScriptElement;

        setAttributes(this.scriptDropDown, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/dropDown/drop-down.js',
            alt: 'DropDown Menu Script'
        });
    }
    override connectedCallback(): void {
        super.connectedCallback();

        appendChildren(this.head, [this.scriptDropDown]);
        this.dropDownStyleMod();

        return;
    }
    override dropDownStyleMod() {
        super.dropDownStyleMod(
            (this.locationHREF = window.location.href),
            (this.checkLocation = 'http://127.0.0.1:9080/landing'),
            (this.landingHREF = `${dropDown_sharedStyles.landing}`),
            (this.homeStartHREF = `${dropDown_sharedStyles.home}`),
            (this.coverLetterHREF = `${dropDown_sharedStyles.letter}`),
            (this.aboutHREF = `${dropDown_sharedStyles.about}`),
            (this.projectsHREF = `${dropDown_sharedStyles.projects}`),
            (this.historyHREF = `${dropDown_sharedStyles.history}`),
            (this.resumeHREF = `${dropDown_sharedStyles.resume}`),
            (this.codeExHREF = `${dropDown_sharedStyles.codeEx}`),
            (this.goalsHREF = `${dropDown_sharedStyles.goals}`),
            (this.contactHREF = `${dropDown_sharedStyles.contact}`),
            (this.spacexHREF = `${dropDown_sharedStyles.spacex}`),
            (this.libraryHREF = `${dropDown_sharedStyles.library}`)
        );
        return;
    }
}
RegisterComponent('drop-down_shell', DropDownShell);
