/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { ProfileTemplate } from './profile-template.js';
import { profile_sharedStyles } from './profile-sharedStyles.js';
import { profile_sharedHTML } from './profile-sharedHTML.js';
import RegisterComponent from '../componentTools/components_services.js'; // setAttributes // appendChildren, // setAttributes
import historyStack from '../../controller/state/profileState.js';

/**
 * @description The ProfileHome class is a custom element that extends the ProfileTemplate class
 * @class ProfileHome
 * @extends ProfileTemplate
 * @type {ProfileHome}
 * @example <profile-home></profile-home>

 *
 */
export class ProfileHome extends ProfileTemplate {
    override noShadow: boolean;
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

    constructor() {
        super();

        this.noShadow = true;

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

        window.onpopstate = (event) => {
            event.state
                ? ((this.State = event.state), this.historyStack.pop())
                : (this.State = { pageOpen: '/' });
            console.log(this.State.pageOpen);
        };
        console.log(history.state);
        console.log(this.historyStack, window.location.href);
    }
    override connectedCallback() {
        super.connectedCallback();
    }
    static get observedAttributes() {
        return ['window.location.href'];
    }
    public attributeChangedCallback(
        name: string,
        _oldValue: string,
        _newValue: string
    ) {
        _oldValue !== _newValue
            ? console.info(`old location: ${_oldValue},
				${name} has a new location of: ${_newValue}
				which should be equal to: ${window.location} `)
            : console.info(`old location: ${_oldValue}`);
    }
}
RegisterComponent('profile-home', ProfileHome);
