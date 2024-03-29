/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { ProfileHistoryTemplate } from './profile-history_template.js';
import { profileHistory_sharedStyles } from './profile-history_sharedStyles.js';
import sheet from '../../Global/global_fonts.css' assert { type: 'css' };

import { profileHistory_sharedHTML } from './profile-history_sharedHTML.js';
import RegisterComponent, {
    setAttributes
    // appendChildren
} from '../componentTools/components_services.js';

// import historyStack from '../../images/state/profileState.js';
// import { HistoryObject } from '../../interfaces/interfaces.js';

export class ProfileHistory extends ProfileHistoryTemplate {
    override activateShadowDOM: boolean;
    profileHistory_sharedStyles: any;
    profileHistory_sharedHTML: any;
    body: HTMLElement | null | undefined;
    setAttributes:
        | ((tag: any, attribute: string | object | any) => void)
        | undefined;
    appendChildren:
        | ((parent: HTMLElement | ShadowRoot | null, children: any[]) => void)
        | undefined;
    earlyYearsPara: HTMLParagraphElement;
    earlyYearsText: string;
    earlyYearsSection: HTMLElement;
    // State: any;
    // historyStack: import('d:/grmj_profile/src/interfaces/interfaces.js').HistoryObject;

    constructor() {
        super();

        this.activateShadowDOM = false;

        const body: HTMLElement | null | undefined =
            document.getElementById('mainBody');
        this.body = body;

        // this.State = State;
        // this.historyStack = historyStack;
        // this.historyStacK = []; // historyStack;

        // this.State = { pageOpen: '/history' };
        // window.history.pushState(this.State, 'history', '/history');
        // this.historyStack.push(history.state);

        // window.onpopstate = (event) => {
        //     event.state
        //         ? ((this.State = event.state), this.historyStack.pop())
        //         : this.historyStack.pop();
        // };
        // console.log(this.State.pageOpen);
        // console.log(history.state);
        // console.log(this.historyStack);

        const earlyYearsSection: HTMLElement =
            document.createElement('section');
        setAttributes(earlyYearsSection, {
            id: 'earlyYearsSection',
            class: 'early-years-section',
            alt: 'earlyYearsSection'
        });
        this.earlyYearsSection = earlyYearsSection;

        const earlyYearsPara: HTMLParagraphElement =
            document.createElement('p');
        setAttributes(earlyYearsPara, {
            id: 'earlyYearsPara',
            class: 'early-years-para',
            alt: 'early years paragraph'
        });
        this.earlyYearsPara = earlyYearsPara;

        const earlyYearsText = "Gordon's Early Years";
        this.earlyYearsText = earlyYearsText;
    }

    override connectedCallback() {
        super.connectedCallback();

        document.adoptedStyleSheets = [sheet];

        console.log('History-Page is Rendered :::: HooT™️ Webelistics®️ ');

        this.earlyYearsPara.textContent = this.earlyYearsText;
        this.earlyYearsSection.appendChild(this.earlyYearsPara);
        // appendChildren(this.body, [this.earlyYearsSection]);
    }
    override get template() {
        return /*html*/ `
            ${profileHistory_sharedHTML.history}
            <style>
                ${profileHistory_sharedStyles.history}
            </style>
        `;
    }
    static get observedAttributes() {
        return;
        // return ['this.historyStack.pageOpen'];
    }
    public attributeChangedCallback() {
        // _newValue: string // _oldValue: string, // name: string,
        // const currentLocation: HistoryObject = this.historyStack;
        // console.log(currentLocation);
        // _oldValue !== _newValue
        //     ? console.info(`old location: ${_oldValue},
        // 		${name} has a new location of: ${_newValue}
        // 		which should be equal to: ${currentLocation}`)
        //     : console.info(`old location: ${_oldValue}`);
    }
}
RegisterComponent('profile-history', ProfileHistory);
