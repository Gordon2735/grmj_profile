/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { ProfileTemplate } from './profile-template.js';
import { profile_sharedStyles } from './profile-sharedStyles.js';
import { profile_sharedHTML } from './profile-sharedHTML.js';
import RegisterComponent from '../componentTools/components_services.js'; // setAttributes // appendChildren, // setAttributes
import historyStack from '../../images/state/profileState.js';

/**
 * @description The ProfileHome class is a custom element that extends the ProfileTemplate class
 * @class ProfileHome
 * @extends ProfileTemplate
 * @type {ProfileHome}
 * @example <profile-home></profile-home>

 *
 */
export class ProfileHome extends ProfileTemplate {
    override activateShadowDOM: boolean;
    State: any | undefined;
    historyStack: import('d:/grmj_profile/src/interfaces/interfaces.js').HistoryObject;
    head: HTMLHeadElement | null;
    body: HTMLBodyElement | any | null;

    override get template() {
        return /*html*/ `            
			
			<style>${profile_sharedStyles.home}</style>
			${profile_sharedHTML.home}	
		`;
    }
    static get observedAttributes(): string[] {
        return ['nowLocale'];
    }
    constructor() {
        super();

        this.activateShadowDOM = false;

        let State: any | undefined;
        this.State = State;
        this.State = { pageOpen: '/' };
        this.historyStack = historyStack;

        const head: HTMLHeadElement | null = document.querySelector('head');
        const body: HTMLBodyElement | any | null =
            document.querySelector('body');

        this.head = head;
        this.body = body;

        window.history.replaceState(this.State, 'home', '');
        this.historyStack.push(history.state);

        window.onpopstate = (event: PopStateEvent): any | null => {
            event.state
                ? ((this.State = event.state), this.historyStack.pop())
                : (this.State = { pageOpen: '/' });
            console.log(this.State.pageOpen);
        };
        // console.log(history.state);
        // console.log(this.historyStack, window.location.href);
    }
    override connectedCallback(): void {
        super.connectedCallback();

        // console.log(window.location.origin);
    }
    public attributeChangedCallback(
        _name: string,
        _oldValue: string,
        _newValue: string
    ): void {
        null;
        // oldValue !== newValue
        //     ? console.info(`old location: ${oldValue},
        // 		${name} has a new location of: ${newValue}
        // 		which should be equal to: ${window.location} `)
        //     : console.info(`old location: ${oldValue}`);
    }
}
RegisterComponent('profile-home', ProfileHome);
