'use strict';

import { ProfileCoverTemplate } from './profile-cover_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { profileCover_sharedHTML } from './profile-cover_sharedHTML.js';
import { profileCover_sharedStyles } from './profile-cover_sharedStyles.js';
import { setAttributes } from '../componentTools/components_services.js';
// import { setAttributes, appendChildren } from '../componentTools/components_services.js';

export class ProfileCoverShell extends ProfileCoverTemplate {
  head: HTMLHeadElement | null | undefined;
  script: HTMLScriptElement | null | undefined;
  override noShadow: boolean;

  constructor() {
    super();

    this.noShadow = true;

    const head: HTMLHeadElement | null | undefined =
      document.getElementById('head');
    const script: HTMLScriptElement | null | undefined =
      document.createElement('script');
    // const coverScript: HTMLScriptElement | null | undefined =
    // document.createElement('script');
    this.head = head;
    this.script = script;

    setAttributes(script, {
      type: 'module',
      content: 'text/javascript',
      alt: 'profile-cover script',
      src: '/src/components/profileCover/profile-cover.js',
    });
    this.head?.appendChild(script);

    // setAttributes(coverScript, {
    //   type: 'module',
    //   content: 'text/javascript',
    //   alt: 'profile-cover script',
    //   src: '/src/components/profileCover/cover_pages.js',
    // });
    // this.head?.appendChild(coverScript);
  }
  override connectedCallback() {
    super.connectedCallback();

    // appendChildren(this.head!, [this.script]);
  }
  override get template() {
    return /*html*/ `

            ${profileCover_sharedHTML.shell}
            <style>${profileCover_sharedStyles.shell}</style>

        `;
  }
}
RegisterComponent('profile-cover_shell', ProfileCoverShell);
