'use strict';

import { profileCover_sharedStyles } from '../../interfaces/interfaces.js';

const profileCover_sharedStyles = {
  shell: ``,
  cover: ``,
  slide: ``,
};

profileCover_sharedStyles.shell = /*css*/ `

    body {
      margin-top: 0em;
      padding: 0;
      width: 100%;
      background-image: var(--grmj-profile-background_image_01);
      background-repeat: no-repeat;
      background-size: cover;
    }

`;

profileCover_sharedStyles.cover = /*css*/ `

    .h1-cover {
      font-size: 3em;
      font-weight: 700;
      color: var(--grmj-profile-color_01);
    }

`;

profileCover_sharedStyles.slide = /*css*/ `


`;
export { profileCover_sharedStyles };
