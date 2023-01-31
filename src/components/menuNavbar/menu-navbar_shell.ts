'use strict';

import { MenuNavbarTemplate } from './menu-navbar_template.js';
import { menuNavbar_sharedHTML } from './menu-navbar_sharedHTML.js';
import { menuNavbar_sharedStyles } from './menu-navbar_sharedStyles.js';
import RegisterComponent, {
    setAttributes
} from '../componentTools/components_services.js';

export class MenuNavbarShell extends MenuNavbarTemplate {
    override initializeShadowDOM: boolean;
    head: HTMLHeadElement | null | undefined;
    menuNavbarScript: HTMLScriptElement;

    override get template(): any {
        return /* html */ `

            ${menuNavbar_sharedHTML.shell}
            <style>${menuNavbar_sharedStyles.shell}</style>

            <menu-navbar id="menuNavbar" class="menu-navbar" state="startup"></menu-navbar>

        `;
    }
    constructor() {
        super();

        this.initializeShadowDOM = false;

        const head: HTMLHeadElement | null | undefined =
            document.getElementById('head');
        this.head = head;

        const menuNavbarScript: HTMLScriptElement =
            document.createElement('script');
        setAttributes(menuNavbarScript, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/menuNavbar/menu-navbar.js',
            alt: 'Menu Navbar Script'
        });
        this.menuNavbarScript = menuNavbarScript;

        head?.appendChild(menuNavbarScript);

        // try {
        //     head
        //         ? head.insertAdjacentHTML('afterbegin', `${menuNavbarScript}`)
        //         : console.error(
        //               `%cError: Head element or Script not found.`,
        //               'color: red; font-weight: bold;'
        //           );
        // } catch (error) {
        //     console.error(
        //         `%cError: **** ${error} ****`,
        //         'color: red; font-weight: bold;'
        //     );
        // }
    }
    override connectedCallback(): void {
        super.connectedCallback();
    }
}
RegisterComponent('menu-navbar_shell', MenuNavbarShell);
