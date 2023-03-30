/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import { LandingPageTemplate } from './landing-page_template.js';
import { landingPage_sharedHTML } from './landing-page_sharedHTML.js';
import { landingPage_sharedStyles } from './landing-page_sharedStyles.js';
import RegisterComponents from '../componentTools/components_services.js'; // setAttributes

export class LandingPage extends LandingPageTemplate {
    override activateShadowDOM: boolean;
    button: HTMLElement | undefined | null;
    navMenu: HTMLElement | null | undefined;
    grabComponent: HTMLElement | null | undefined;
    themeSwitcher: string | null | undefined;
    themeSwitcherState: string | null | undefined;
    setTheme: string | null | undefined;

    constructor() {
        super();

        this.activateShadowDOM = false;
    }

    override connectedCallback(): void {
        super.connectedCallback();

        window.addEventListener('DOMContentLoaded', init);

        const button: HTMLElement | undefined | null =
            document.getElementById('menu-btn');
        const navMenu: HTMLElement | null = document.getElementById('menu');
        const grabComponent: HTMLElement | any =
            document.getElementById('landingPage');
        const themeSwitcher: string | null | undefined =
            window.localStorage.getItem('theme');

        async function init() {
            await grabComponent.setAttribute('data-theme', themeSwitcher);
        }

        const navClassSwitch = async (): Promise<void> => {
            button?.classList.toggle('open');
            navMenu?.classList.toggle('hidden');
            document.body.classList.toggle('no-scroll');
        };

        const dataTheme = async (): Promise<void> => {
            const currentTheme: string | null =
                window.localStorage.getItem('theme');

            switch (currentTheme) {
                case 'theme-dark':
                    await grabComponent.setAttribute(
                        'data-theme',
                        currentTheme
                    );
                    console.info(
                        `%c The current state of the Landing Page dataset-theme: ${currentTheme}`,
                        'color: chartreuse;'
                    );
                    break;
                case 'theme-light':
                    await grabComponent.setAttribute(
                        'data-theme',
                        currentTheme
                    );
                    console.info(
                        `%c The current state of the Landing Page dataset-theme: ${currentTheme}`,
                        'color: yellow;'
                    );
                    break;
                default:
                    console.error(
                        `There's has been an error in the dataTheme Function`
                    );
            }
        };

        button?.addEventListener('click', (event) => {
            event.preventDefault();
            navClassSwitch();
            event.stopPropagation();
        });

        const currentHTML: HTMLElement | any =
            document.getElementById('html-main');

        const options = {
            attributes: true
        };

        function callback(mutationList: any[], observer: any) {
            mutationList.map(function (mutation) {
                if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === 'class'
                ) {
                    dataTheme();
                    console.info(observer);
                }
            });
        }

        const observer = new MutationObserver(callback);
        observer.observe(currentHTML, options);
    }

    static get observedAttributes(): string[] {
        return [`data-theme`];
    }

    public attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ): void {
        console.info(
            `LIFECYCLE__attribute callback: ${name}, ${oldValue}, ${newValue}`
        );
    }

    override get template(): string {
        return /*html*/ `

           ${landingPage_sharedHTML.page}
           <style>${landingPage_sharedStyles.page}</style>        
        
        `;
    }

    disconnectedCallback(): void {
        const button: HTMLElement | undefined | null =
            document.getElementById('menu-btn');

        button?.removeEventListener('click', (event) => {
            event.stopPropagation();
            return;
        });
    }
}
RegisterComponents('landing-page', LandingPage);
