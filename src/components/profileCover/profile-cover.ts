'use strict';

import { ProfileCoverTemplate } from './profile-cover_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { profileCover_sharedHTML } from './profile-cover_sharedHTML.js';
import { profileCover_sharedStyles } from './profile-cover_sharedStyles.js';

export class ProfileCover extends ProfileCoverTemplate {
  override noShadow: boolean = false;

  constructor() {
    super();
  }
  override connectedCallback() {
    super.connectedCallback();
  }
  override get template() {
    return /*html*/ ` 

            ${profileCover_sharedHTML.cover}
            <style>${profileCover_sharedStyles.cover}</style>

        `;
  }
}
RegisterComponent('profile-cover', ProfileCover);
