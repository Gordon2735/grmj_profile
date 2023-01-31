'use strict';

import { MenuNavbarTemplate } from './menu-navbar_template.js';
import { menuNavbar_sharedHTML } from './menu-navbar_sharedHTML.js';
import { menuNavbar_sharedStyles } from './menu-navbar_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes,

export class MenuNavbar extends MenuNavbarTemplate {
    override initializeShadowDOM: boolean;
    menuNav: HTMLElement | null | undefined;
    clickToggle: HTMLAnchorElement | null | undefined;
    clickNavbarLinks: HTMLDivElement | null | undefined;

    override get template(): any {
        return /* html */ `

            ${menuNavbar_sharedHTML.navbar}
            <style>${menuNavbar_sharedStyles.navbar}</style>

        `;
    }
    static get observedAttributes(): string[] {
        return ['state'];
    }
    constructor() {
        super();

        this.initializeShadowDOM = false;

        let menuNav = document.getElementById('menuNavbar');
        let clickToggle = menuNav?.querySelector(
            '.toggle-button'
        ) as HTMLAnchorElement;
        let clickNavbarLinks = menuNav?.querySelector(
            '.navbar-links'
        ) as HTMLDivElement;

        this.menuNav = menuNav;
        this.clickToggle = clickToggle;
        this.clickNavbarLinks = clickNavbarLinks;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        let viewportWidth: number = 0;
        const thiz = this;

        async function getViewportWidth(): Promise<number | void> {
            try {
                return new Promise((resolve: any | undefined) => {
                    resolve(
                        (viewportWidth =
                            window.innerWidth ||
                            document.documentElement.clientWidth)
                    );
                });
            } catch (error) {
                console.error(
                    `%cError with the getViewportWidth function: **** ${error} ****`,
                    'color: red; font-weight: bold;'
                );
                return;
            }
        }

        function currentWidth(): Promise<any> | void {
            try {
                const currentState = thiz.menuNav?.getAttribute('state');
                if (viewportWidth >= 140 && viewportWidth <= 399) {
                    currentState !== 'micronized'
                        ? thiz.menuNav?.setAttribute('state', 'micronized')
                        : null;
                } else if (viewportWidth >= 400 && viewportWidth <= 1179) {
                    currentState !== 'minimized'
                        ? thiz.menuNav?.setAttribute('state', 'minimized')
                        : null;
                } else if (viewportWidth >= 1180) {
                    currentState !== 'maximized'
                        ? thiz.menuNav?.setAttribute('state', 'maximized')
                        : null;
                }
                return;
            } catch (error) {
                console.error(
                    `%cError with the current Width function: **** ${error} ****`,
                    'color: red; font-weight: bold;'
                );
                return;
            }
        }

        thiz.clickToggle?.addEventListener('click', (event: MouseEvent) => {
            try {
                thiz.clickNavbarLinks?.classList.toggle('active');
            } catch (error) {
                console.error(
                    `%cError with the click-toggle event listener: **** ${error} ****`,
                    'color: red; font-weight: bold;'
                );
            }
            event.stopPropagation();
        });

        window.addEventListener(
            'resize',
            () => {
                try {
                    getViewportWidth();
                    currentWidth();
                    const getState: string | null | undefined =
                        this.menuNav?.getAttribute('state');
                    console.log(
                        `%c The Current Status of component State:  ${getState}`,
                        'color: chartreuse font-weight: bold;'
                    );
                } catch (error) {
                    console.error(
                        `%cError with the window resize event listener: **** ${error} ****`,
                        'color: red; font-weight: bold;'
                    );
                }
            },
            false
        );
        async function init(): Promise<void> {
            try {
                await getViewportWidth();
                currentWidth();
            } catch (error) {
                console.error(
                    `%cError with the init function: **** ${error} ****`,
                    'color: red; font-weight: bold;'
                );
            }
        }
        init();
    }
    attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ): void {
        try {
            switch (newValue) {
                case 'maximized':
                    console.info(
                        `%cMenuNavbar ${name}: Component State changed from ${oldValue} to ${newValue}`,
                        'color: gold; font-weight: bold;'
                    );
                    break;
                case 'minimized':
                    console.info(
                        `%cMenuNavbar ${name}: Component State changed from ${oldValue} to ${newValue}`,
                        'color: fuchsia; font-weight: bold;'
                    );
                    break;
                case 'micronized':
                    console.info(
                        `%cMenuNavbar ${name}: Component State changed from ${oldValue} to ${newValue}`,
                        'color: lime; font-weight: bold;'
                    );
                    break;
                case 'startup':
                    console.warn(
                        `%cMenuNavbar ${name}: Component State has been initialized || ${newValue} ||`,
                        'color: cyan; font-weight: bold;'
                    );
                    break;
                default:
                    console.error(
                        `%c attributeChangedCallback:  **** Error || Warning ****`,
                        'color: red; font-weight: bold;'
                    );
                    break;
            }
        } catch (error) {
            console.error(
                `%c attributeChangedCallback:  **** Switch Error || Warning ****,
                    **** ${error} ****`,
                'color: red; font-weight: bold;'
            );
        }
    }
    disconnectedCallback(): void {
        try {
            this.clickToggle?.removeEventListener('click', () => {});
            window.removeEventListener('resize', () => {});
        } catch (error) {
            console.error(
                `%c disconnectedCallback:  **** Error || Warning ****,
                    **** ${error} ****`,
                'color: red; font-weight: bold;'
            );
        }
    }
}
RegisterComponent('menu-navbar', MenuNavbar);
