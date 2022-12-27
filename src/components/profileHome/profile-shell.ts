/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
'use strict';

import { ProfileTemplate } from './profile-template';
import { profile_sharedStyles } from './profile-sharedStyles';
import { profile_sharedHTML } from './profile-sharedHTML';
import RegisterComponent, {
  setAttributes,
  appendChildren,
} from '../componentTools/components_services';

export class ProfileShell extends ProfileTemplate {
  override noShadow: boolean;
  head: HTMLHeadElement | null;
  scriptHome: HTMLScriptElement;

  constructor() {
    super();

    this.noShadow = true;

    this.head = document.getElementById('head');
    this.scriptHome = document.createElement('script');

    setAttributes(this.scriptHome, {
      type: 'module',
      content: 'text/javascript',
      src: '/src/components/profileHome/profile-home.ts',
      alt: 'Profile Home Script',
    });
  }
  override connectedCallback() {
    super.connectedCallback();

    appendChildren(this.head, [this.scriptHome]);
  }
  override get template() {
    return /*html*/ `

			${profile_sharedHTML.shell}
			<style>${profile_sharedStyles.global}</style>

    `;
  }
}
RegisterComponent('profile-shell', ProfileShell);
