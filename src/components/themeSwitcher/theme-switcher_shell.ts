'use strict';

import { ThemeSwitcherTemplate } from './theme-switcher_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { themeSwitcher_sharedHTML } from './theme-switcher_sharedHTML.js';
import { themeSwitcher_sharedStyles } from './theme-switcher_sharedStyles.js';
import {
    setAttributes,
    appendChildren
} from '../componentTools/components_services.js';

export class ThemeSwitcherShell extends ThemeSwitcherTemplate {
    override activateShadowDOM: boolean;
    head: HTMLHeadElement | null | undefined;
    themeScript: HTMLScriptElement | null | undefined;

    constructor() {
        super();

        this.activateShadowDOM = false;

        const head: HTMLHeadElement | null | undefined =
            document.getElementById('head');
        this.head = head;
        const themeScript: HTMLScriptElement | null | undefined =
            document.createElement('script');

        setAttributes(themeScript, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/themeSwitcher/theme-switcher.js',
            alt: 'Theme Switcher Script'
        });
        this.themeScript = themeScript;

        // appendChildren(this.head, [this.themeScript]);
        // this.head?.appendChild(this.themeScript);
    }

    override connectedCallback(): void {
        super.connectedCallback();

        appendChildren(this.head, [this.themeScript]);
    }
    override get template(): string {
        return /* html */ `

            <theme-switcher id="themeSwitcher" class="theme-switcher" state="dark"></theme-switcher>
            
            ${themeSwitcher_sharedHTML.shell}
            <style>${themeSwitcher_sharedStyles.shell}</style>
            
        `;
    }
}
RegisterComponent('theme-switcher_shell', ThemeSwitcherShell);

// this.themeInputSwitch = document.getElementById(
//     'sliderCheckbox'
// ) as HTMLInputElement;

// this.grabComponent = document.getElementById(
//     'themeSwitcher'
// ) as HTMLElement;

// {
//     const theme: string | null = localStorage.getItem('theme');
//     console.log(theme);
//     // console.log(thiz.themeInputSwitch.checked);
//     setTimeout(() => {
//         switch (theme) {
//             case null:
//                 setTheme('theme-dark');
//                 thiz.grabComponent?.setAttribute('state', 'dark');
//                 break;
//             case 'theme-dark':
//                 setTheme('theme-light');
//                 thiz.grabComponent?.setAttribute('state', 'light');
//                 // thiz.themeInputSwitch.checked = true;
//                 break;
//             case 'theme-light':
//                 setTheme('theme-dark');
//                 thiz.grabComponent?.setAttribute('state', 'dark');
//                 // thiz.themeInputSwitch.checked = false;
//                 break;
//             default:
//                 console.error(
//                     `%cThe init Function's "Switch Statement" failed to set the theme to ${theme}`
//                 );
//                 break;
//         }
//         return;
//     }, 500);
//     return;
