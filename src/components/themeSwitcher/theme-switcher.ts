'use strict';

import { ThemeSwitcherTemplate } from './theme-switcher_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { themeSwitcher_sharedHTML } from './theme-switcher_sharedHTML.js';
import { themeSwitcher_sharedStyles } from './theme-switcher_sharedStyles.js';

export class ThemeSwitcher extends ThemeSwitcherTemplate {
  // setTheme: (themeName: string) => Promise<void>;
  // toggleTheme: () => Promise<void>;

  override get template(): any {
    return /* html */ `
      
      ${themeSwitcher_sharedHTML.switcher}
      <style>${themeSwitcher_sharedStyles.switcher}</style>
      
      `;
  }
  static get observedAttributes(): any {
    return ['theme'];
  }
  constructor() {
    super();

    this.noShadow = true;
  }
  override connectedCallback(): void {
    super.connectedCallback();

    const themeInputSwitch = document.getElementById(
      'sliderCheckbox'
    ) as HTMLInputElement;

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
          ? setTheme('theme-light')
          : setTheme('theme-dark');
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
        localStorage.getItem('theme') === 'theme-dark'
          ? (setTheme('theme-dark'), (themeInputSwitch.checked = false))
          : (setTheme('theme-light'), (themeInputSwitch.checked = true));
      } catch (error) {
        console.error(
          `%cThe init Function failed: ${error}`,
          'color: fuchsia; font-weight: bold;'
        );
      } finally {
        return;
      }
    }
    init();

    themeInputSwitch?.addEventListener('click', (event: MouseEvent) => {
      try {
        toggleTheme();
        event.stopPropagation();
      } catch (error: unknown) {
        console.error(
          `%cThe Input-Listener failed to invoke the toggleTheme Function: ${error}`,
          'color: fuchsia; font-weight: bold;'
        );
      }
    });
  }

  disConnectedCallback(): void {}
  attributeChangedCallback() {}
}
RegisterComponent('theme-switcher', ThemeSwitcher);
