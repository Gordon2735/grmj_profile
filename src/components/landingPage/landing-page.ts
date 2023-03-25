'use strict';

import { LandingPageTemplate } from './landing-page_template.js';
import { landingPage_sharedHTML } from './landing-page_sharedHTML.js';
import { landingPage_sharedStyles } from './landing-page_sharedStyles.js';
import RegisterComponents from '../componentTools/components_services.js'; // setAttributes

export class LandingPage extends LandingPageTemplate {
    override activateShadowDOM: boolean;

    override get template(): string {
        return /*html*/ `

           ${landingPage_sharedHTML.page}
           <style>${landingPage_sharedStyles.page}</style>        
        
        `;
    }

    constructor() {
        super();

        this.activateShadowDOM = false;
    }

    override connectedCallback(): void {
        super.connectedCallback();
    }
    static get observedAttributes(): string[] {
        return [``];
    }

    public attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ): void {
        console.info(name, oldValue, newValue);
    }

    disconnectedCallback(): void {
        return;
    }
}
RegisterComponents('landing-page', LandingPage);
