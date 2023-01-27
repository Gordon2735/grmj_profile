'use strict';

import { ThemeSwitcherTemplate } from './theme-switcher_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { themeSwitcher_sharedHTML } from './theme-switcher_sharedHTML.js';
import { themeSwitcher_sharedStyles } from './theme-switcher_sharedStyles.js';
import {
  setAttributes,
  // appendChildren,
} from '../componentTools/components_services.js';

export class ThemeSwitcherShell extends ThemeSwitcherTemplate {
  override noShadow: boolean;
  head: HTMLHeadElement | null | undefined;
  themeScript: HTMLScriptElement | null | undefined;

  constructor() {
    super();

    this.noShadow = true;

    const head: HTMLHeadElement | null | undefined =
      document.getElementById('head');
    this.head = head;
    const themeScript: HTMLScriptElement | null | undefined =
      document.createElement('script');

    setAttributes(themeScript, {
      type: 'module',
      content: 'text/javascript',
      src: '/src/components/themeSwitcher/theme-switcher.js',
      alt: 'Theme Switcher Script',
    });
    this.themeScript = themeScript;

    // appendChildren(this.head, [this.themeScript]);
    this.head?.appendChild(themeScript);
    // appendChildren(this.head, [themeScript]);
  }

  override connectedCallback(): void {
    super.connectedCallback();
  }
  override get template(): any {
    return /* html */ `

      <theme-switcher id="themeSwitcher" class="theme-switcher" state="dark"></theme-switcher>
    
      ${themeSwitcher_sharedHTML.shell}
      <style>${themeSwitcher_sharedStyles.shell}</style>
    
    `;
  }
}
RegisterComponent('theme-switcher_shell', ThemeSwitcherShell);
