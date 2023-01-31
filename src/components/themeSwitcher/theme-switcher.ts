'use strict';

import { ThemeSwitcherTemplate } from './theme-switcher_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { themeSwitcher_sharedHTML } from './theme-switcher_sharedHTML.js';
import { themeSwitcher_sharedStyles } from './theme-switcher_sharedStyles.js';

export class ThemeSwitcher extends ThemeSwitcherTemplate {
    themeInputSwitch: HTMLInputElement | undefined;
    grabComponent: HTMLElement | undefined;

    override get template(): any {
        return /* html */ `
      
		${themeSwitcher_sharedHTML.switcher}
		<style>${themeSwitcher_sharedStyles.switcher}</style>
      
      `;
    }
    static get observedAttributes(): any {
        return ['state'];
    }
    constructor() {
        super();

        this.noShadow = true;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        init();

        this.grabComponent = document.getElementById(
            'themeSwitcher'
        ) as HTMLElement;

        this.themeInputSwitch = document.getElementById(
            'sliderCheckbox'
        ) as HTMLInputElement;

        const thiz: ThemeSwitcher = this;

        async function setTheme(themeName: string): Promise<void> {
            try {
                localStorage.setItem('theme', themeName);
                document.documentElement.className = themeName;
            } catch (error) {
                console.error(
                    `%cThe setTheme Function failed: ${error}`,
                    'color: fuchsia; font-weight: bold;'
                );
            } finally {
                return;
            }
        }

        async function toggleTheme(): Promise<void> {
            try {
                localStorage.getItem('theme') === 'theme-dark'
                    ? (setTheme('theme-light'),
                      thiz.grabComponent?.setAttribute('state', 'light'))
                    : (setTheme('theme-dark'),
                      thiz.grabComponent?.setAttribute('state', 'dark'));
            } catch (error: unknown) {
                console.error(
                    `%cThe toggleTheme Function failed: ${error}`,
                    'color: fuchsia; font-weight: bold;'
                );
            } finally {
                return;
            }
        }

        async function init(this: any): Promise<void> {
            try {
                setTimeout(() => {
                    localStorage.getItem('theme') !== 'theme-dark'
                        ? (setTheme('theme-dark'),
                          this.grabComponent.setAttribute('state', 'dark'))
                        : null;
                }, 500);
            } catch (error) {
                console.error(
                    `%cThe init Function failed: ${error}`,
                    'color: fuchsia; font-weight: bold;'
                );
            } finally {
                return;
            }
        }

        this.themeInputSwitch?.addEventListener(
            'click',
            (event: MouseEvent) => {
                try {
                    toggleTheme();
                    event.stopPropagation();
                } catch (error: unknown) {
                    console.error(
                        `%cThe Input-Listener failed to invoke the toggleTheme Function: ${error}`,
                        'color: fuchsia; font-weight: bold;'
                    );
                }
            }
        );
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        try {
            switch (newValue) {
                case 'light':
                    console.log(
                        `%cThe component's state (${name}) attribute changed from ${oldValue} to ${newValue}`,
                        'color: fuchsia; font-weight: bold;'
                    );
                    break;
                case 'dark':
                    console.log(
                        `%cThe component's state (${name}) attribute changed from ${oldValue} to ${newValue}`,
                        'color: gold; font-weight: bold;'
                    );
                    break;
                default:
                    console.error(
                        `%cThe attributeChangedCallback function's "Switch Statement" failed 
              to change the component's state attribute from ${oldValue} to ${newValue}`,
                        'color: red; font-weight: bold;'
                    );
                    break;
            }
        } catch (error: unknown) {
            console.error(
                `%cThe component's state attribute failed to change from ${oldValue} to ${newValue}`,
                'color: red; font-weight: bold;'
            );
        }
    }
    disConnectedCallback(): void {
        this.themeInputSwitch?.removeEventListener(
            'click',
            (event: MouseEvent) => {
                console.log(
                    `%cThe Input-Listener was removed`,
                    'color: fuchsia; font-weight: bold;'
                );
                event.stopPropagation();
            }
        );
    }
}
RegisterComponent('theme-switcher', ThemeSwitcher);
