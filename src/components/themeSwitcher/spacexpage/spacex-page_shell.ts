'use strict';

import { SpacexPageTemplate } from './spacex-page_template.js';
import { spacexPage_sharedHTML } from './spacex-page_sharedHTML.js';
import { spacexPage_sharedStyles } from './spacex-page_sharedStyles.js';
import RegisterComponent, {
    setAttributes
} from '../../componentTools/components_services.js';

export class SpacexPageShell extends SpacexPageTemplate {
    override activateShadowDOM: boolean;
    head: Element | null;
    spacexScript: HTMLScriptElement;

    override get template(): string {
        return /*html*/ `
            
            ${spacexPage_sharedHTML.shell}
            <style>${spacexPage_sharedStyles.shell}</style>

            <spacex-page id="spaceXPage" class="spacex-page" data-set-options=''></spacex-page>

        `;
    }

    constructor() {
        super();

        this.activateShadowDOM = false;

        const head = document.querySelector('#head');
        const spacexScript = document.createElement('script');

        setAttributes(spacexScript, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/spacexpage/spacex-page.js',
            alt: 'SpaceX Page'
        });

        this.head = head;
        this.spacexScript = spacexScript;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        this.head?.appendChild(this.spacexScript);
    }
}
RegisterComponent('spacex-page_shell', SpacexPageShell);
