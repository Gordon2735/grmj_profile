/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import { LandingPageTemplate } from './landing-page_template.js';
import { landingPage_sharedHTML } from './landing-page_sharedHTML.js';
import { landingPage_sharedStyles } from './landing-page_sharedStyles.js';
import RegisterComponents from '../componentTools/components_services.js'; // setAttributes

export class LandingPage extends LandingPageTemplate {
    override activateShadowDOM: boolean;
    button: HTMLElement;
    navMenu: HTMLElement;
    themeSwitcher: string;
    grabComponent: HTMLElement;
    setTheme: string | null | undefined;

    constructor(
        button: HTMLElement,
        navMenu: HTMLElement,
        themeSwitcher: string,
        grabComponent: HTMLElement
    ) {
        super();

        this.activateShadowDOM = false;

        this.button = button;
        this.navMenu = navMenu;
        this.themeSwitcher = themeSwitcher;
        this.grabComponent = grabComponent;
    }

    override connectedCallback(): void {
        super.connectedCallback();

        this.button = document.getElementById('menu-btn') as HTMLElement;
        this.navMenu = document.getElementById('menu') as HTMLElement;
        this.themeSwitcher = window.localStorage.getItem('theme') as string;
        this.grabComponent = document.getElementById(
            'landingPage'
        ) as HTMLElement;

        const init = async (): Promise<void> => {
            try {
                this.grabComponent.setAttribute(
                    'data-theme',
                    this.themeSwitcher
                );
            } catch (error: unknown) {
                console.error(`The Init function had error: ${error}`);
            }
        };

        const navClassSwitch = async (): Promise<void> => {
            this.button.classList.toggle('open');
            this.navMenu.classList.toggle('hidden');
            document.body.classList.toggle('no-scroll');
        };

        const dataTheme = async (): Promise<void> => {
            try {
                const currentTheme: string | null =
                    window.localStorage.getItem('theme');

                switch (currentTheme) {
                    case 'theme-dark':
                        this.grabComponent.setAttribute(
                            'data-theme',
                            currentTheme
                        );
                        console.info(
                            `%c The current state of the Landing Page dataset-theme: ${currentTheme}`,
                            'color: chartreuse;'
                        );
                        break;
                    case 'theme-light':
                        this.grabComponent.setAttribute(
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
                        break;
                }
                return;
            } catch (error: unknown) {
                console.error(`dataTheme function had error code: ${error}`);
            }
        };

        this.button.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            navClassSwitch();
            event.stopPropagation();
        });

        const currentHTML = document.getElementById('html-main') as Node;

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

        window.addEventListener('DOMContentLoaded', init);
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
        this.button.removeEventListener('click', (event) => {
            event.stopPropagation();
            return;
        });
    }
}
RegisterComponents('landing-page', LandingPage);
