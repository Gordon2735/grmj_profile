/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { ThemeSwitcherTemplate } from './theme-switcher_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { themeSwitcher_sharedHTML } from './theme-switcher_sharedHTML.js';
import { themeSwitcher_sharedStyles } from './theme-switcher_sharedStyles.js';

export class ThemeSwitcher extends ThemeSwitcherTemplate {
    override activateShadowDOM: boolean;
    themeInputSwitch: HTMLInputElement | undefined;
    grabComponent: HTMLElement | undefined;

    override get template(): string {
        return /* html */ `
      
            ${themeSwitcher_sharedHTML.switcher}
            <style>${themeSwitcher_sharedStyles.switcher}</style>
      
        `;
    }
    constructor() {
        super();

        this.activateShadowDOM = false;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        const grabComponent = document.getElementById(
            'themeSwitcher'
        ) as HTMLElement;

        const themeInputSwitch = document.getElementById('sliderCheckbox') as
            | HTMLInputElement
            | undefined;

        init();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async function init(this: any): Promise<void> {
            // localStorage.clear();
            try {
                setTimeout(() => {
                    const currentTheme = window.localStorage.getItem(
                        'theme'
                    ) as string | null;
                    const initThemeName = 'theme-startup';

                    switch (currentTheme) {
                        case null || undefined || initThemeName:
                            themeInputSwitch!.checked = false;
                            window.localStorage.setItem('theme', initThemeName);
                            document.documentElement.className = initThemeName;
                            grabComponent?.setAttribute(
                                'state',
                                'theme-startup'
                            );
                            break;
                        case 'theme-dark':
                            themeInputSwitch!.checked = false;
                            setTheme('theme-dark');
                            grabComponent?.setAttribute('state', 'theme-dark');
                            break;
                        case 'theme-light':
                            themeInputSwitch!.checked = true;
                            setTheme('theme-light');
                            grabComponent?.setAttribute('state', 'theme-light');
                            break;
                        default:
                            themeInputSwitch!.checked = false;
                            setTheme(initThemeName);
                            grabComponent?.setAttribute(
                                'state',
                                'theme-startup'
                            );
                            break;
                    }
                    return;
                }, 0);
            } catch (error: unknown) {
                console.error(
                    `%cThe init Function failed: ${error}`,
                    'color: fuchsia; font-weight: bold;'
                );
                return;
            }
        }

        async function setTheme(themeName: string): Promise<void> {
            try {
                window.localStorage.setItem('theme', themeName);
                document.documentElement.className = themeName;
                return;
            } catch (error: unknown) {
                console.error(
                    `%cThe setTheme Function failed: ${error}`,
                    'color: fuchsia; font-weight: bold;'
                );
                return;
            }
        }

        async function toggleTheme(): Promise<void> {
            try {
                window.localStorage.getItem('theme') !==
                ('theme-dark' || 'theme-startup')
                    ? (setTheme('theme-dark'),
                      grabComponent.setAttribute('state', 'theme-dark'))
                    : (setTheme('theme-light'),
                      grabComponent.setAttribute('state', 'theme-light'));
                return;
            } catch (error: unknown) {
                console.error(
                    `%cThe toggleTheme Function failed: ${error}`,
                    'color: fuchsia; font-weight: bold;'
                );
                return;
            }
        }

        themeInputSwitch?.addEventListener('click', (event: MouseEvent) => {
            try {
                toggleTheme();
                event.stopPropagation();
                return;
            } catch (error: unknown) {
                console.error(
                    `%cThe Input-Listener failed to invoke the toggleTheme Function: ${error}`,
                    'color: fuchsia; font-weight: bold;'
                );
                return;
            }
        });
    }

    static get observedAttributes(): string[] {
        return ['state'];
    }

    attributeChangedCallback(
        _name: string,
        oldValue: string,
        newValue: string
    ) {
        try {
            // console.log(name, oldValue, newValue);
            switch (oldValue) {
                case 'theme-startup':
                    // console.log(
                    //     `%cThe component's state (${name}) attribute changed from ${oldValue} to ${newValue}`,
                    //     'color: fuchsia; font-weight: bold;'
                    // );
                    break;
                case 'theme-light':
                    // console.log(
                    //     `%cThe component's state (${name}) attribute changed from ${oldValue} to ${newValue}`,
                    //     'color: fuchsia; font-weight: bold;'
                    // );
                    break;
                case 'theme-dark':
                    // console.log(
                    //     `%cThe component's state (${name}) attribute changed from ${oldValue} to ${newValue}`,
                    //     'color: gold; font-weight: bold;'
                    // );
                    break;
                case null || undefined:
                    // console.log(
                    //     `%cThe component's state attribute is ${null}`,
                    //     'color: fuchsia; font-weight: bold;'
                    // );
                    break;
                default:
                    window.localStorage.getItem('theme') ===
                    ('theme-dark' || 'theme-startup')
                        ? null //console.log(
                        : //       `%cThe component's state attribute changed from ${oldValue} to ${newValue}`,
                          //       'color: fuchsia; font-weight: bold;'
                          //   )
                          null;
                    break;
            }
            return;
        } catch (error: unknown) {
            console.error(
                `%cThe component's state attribute failed to change from ${oldValue} to ${newValue}`,
                'color: red; font-weight: bold;'
            );
            return;
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
                // event.stopPropagation();
                return console.log(event);
            }
        );
        return;
    }
}
RegisterComponent('theme-switcher', ThemeSwitcher);
