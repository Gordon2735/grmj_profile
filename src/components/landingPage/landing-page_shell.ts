'use strict';

import { LandingPageTemplate } from './landing-page_template.js';
import { landingPage_sharedHTML } from './landing-page_sharedHTML.js';
import { landingPage_sharedStyles } from './landing-page_sharedStyles.js';
import RegisterComponents, {
    setAttributes
} from '../componentTools/components_services.js';

export class LandingPageShell extends LandingPageTemplate {
    override activateShadowDOM: boolean;
    head: HTMLHeadElement | null;
    landingPageScript: HTMLScriptElement;

    override get template(): string {
        return /*html*/ `

            <h1>Hello World!</h1>

           ${landingPage_sharedHTML.shell}
           <style>${landingPage_sharedStyles.shell}</style>        
        
        `;
    }
    constructor() {
        super();

        this.activateShadowDOM = false;

        const head = document.querySelector('head');
        const landingPageScript = document.createElement('script');

        setAttributes(landingPageScript, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/landPage/landing-page.js',
            alt: 'component script'
        });

        this.head = head;
        this.landingPageScript = landingPageScript;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        this.head?.appendChild(this.landingPageScript);

        console.info('The Landing Page has Rendered');
    }
}
RegisterComponents('landing-page_shell', LandingPageShell);
