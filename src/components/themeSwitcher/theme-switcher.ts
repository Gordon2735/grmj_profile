'use strict';

import { ThemeSwitcherTemplate } from './theme-switcher_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { themeSwitcher_sharedHTML } from './theme-switcher_sharedHTML.js';
import { themeSwitcher_sharedStyles } from './theme-switcher_sharedStyles.js';

export class ThemeSwitcher extends ThemeSwitcherTemplate {
  themeInputSwitch: HTMLInputElement | undefined;

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

    this.themeInputSwitch = document.getElementById('sliderCheckbox') as
      | HTMLInputElement
      | undefined;

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
      const grabComponent = document.getElementById(
        'themeSwitcher'
      ) as HTMLElement;

      try {
        localStorage.getItem('theme') === 'theme-dark'
          ? (setTheme('theme-light'),
            grabComponent.setAttribute('state', 'light'))
          : (setTheme('theme-dark'),
            grabComponent.setAttribute('state', 'dark'));
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
      const grabComponent = document.getElementById(
        'themeSwitcher'
      ) as HTMLElement;

      try {
        localStorage.getItem('theme') === 'theme-dark'
          ? (setTheme('theme-dark'),
            (this.themeInputSwitch.checked = false),
            grabComponent.setAttribute('state', 'dark'))
          : (setTheme('theme-light'),
            (this.themeInputSwitch.checked = true),
            grabComponent.setAttribute('state', 'light'));
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

    this.themeInputSwitch?.addEventListener('click', (event: MouseEvent) => {
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

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    name === 'state'
      ? console.log(
          `%cThe component's state (${name}) attribute changed from ${oldValue} to ${newValue}`,
          'color: fuchsia; font-weight: bold;'
        )
      : console.error(
          `%cThe component's state attribute failed to change from ${oldValue} to ${newValue}`,
          'color: red; font-weight: bold;'
        );
  }
  disConnectedCallback(): void {
    this.themeInputSwitch?.removeEventListener('click', (event: MouseEvent) => {
      console.log(
        `%cThe Input-Listener was removed`,
        'color: fuchsia; font-weight: bold;'
      );
      event.stopPropagation();
    });
  }
}
RegisterComponent('theme-switcher', ThemeSwitcher);
