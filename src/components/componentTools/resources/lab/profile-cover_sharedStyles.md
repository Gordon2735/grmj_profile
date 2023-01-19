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

    .section-cover {
      margin: 1.75em 0em 0em 1em;
      padding: 0;
      display: inline-block;
    }

    .h1-cover {
      margin: 6em 0em 0em 10em;
      position: absolute;
      font-family: var(--grmj-font-family-1);
      font-size: 2em;
      font-weight: var(--grmj-font-weight-8);
      color: var(--grmj-font-color-5);
      letter-spacing: 0.15em;
      text-align: center;
      text-shadow: 2px 1px 3px var(--grmj-font-color-5);
      z-index: 1;
    }
    
    .h2-cover {
      margin: 18em 0em 0em 31em;
      position: absolute;
      font-family: var(--grmj-font-family-1);
      font-size: 1.25em;
      font-weight: var(--grmj-font-weight-8);
      font-style: italic;
      color: var(--grmj-font-color-5);
      letter-spacing: 0.15em;
      text-align: center;
      text-shadow: 2px 1px 3px var(--grmj-font-color-5);
      z-index: 1;
    }

    .arrow-span {
      position: absolute;
      top: 1.8em;
      left: 44%;
      font-size: 1.75em;
      font-weight: var(--grmj-font-weight-9);
      color: hsla(144, 56%, 37%, 0.9); 
      z-index: 1;
    }

    .cover-image {
      width: 820px;
      filter: drop-shadow(3px 2px 12px var(--grmj-font-color-5));
    }

    .cover-image-grmj {
      margin: 0em 0em 0em 0em;
      position: absolute;
      top: 30em;
      left: 25%;
      width: 160px;
      border-radius: 0.5em;
      filter: drop-shadow(3px 2px 12px var(--grmj-font-color-5));
    }

    .details-cover1 {
      margin: 2em auto 0em auto;
      position: absolute;
      top: 10em;
      left: 47%;
      font-family: var(--grmj-font-family-1);
      font-size: 2em;
      font-weight: var(--grmj-font-weight-8);
      color: hsla(144, 56%, 37%, 0.9);
      letter-spacing: 0.15em;
      filter: drop-shadow(2px 1px 3px var(--grmj-font-color-5));
      overflow: hidden;
    }

    .button {
      padding: 8px;
      width: 100px;
      border: 2px solid white;
      background-color: transparent;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      transition: 0.3s ease-out;
    }
    
    .button:hover {
      transform: scale(1.05);
    }
    
    .para-cover {
      margin: -7em 0em 0em 2em;
      text-align: center;
      justify-self: center;
      align-items: center;
      justify-content: center;

      display: flex;
      flex-direction: column;
      gap: 10px;
      transition: all 0.7s;


      padding: 0;
      font-size: 1em;
      width: 40vw;
      height:50vh;
      color: var(--grmj-font-color-5);
      background-color: hsla(144, 56%, 37%, 0.09);
      border-radius: 0.3em;
      text-shadow: 2px 1px 3px var(--grmj-font-color-5);
      z-index: 1;
    }

    .details {
      display: flex;
      /*width: 400%;*/
      box-sizing: border-box;
    }
    
    .paragraph {
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      transition: all 0.7s;
      color: white;
    }

    .one {
      background-color: orangered;
    }
    
    .two {
      background-color: dodgerblue;
    }

`;

profileCover_sharedStyles.slide = /*css*/ `


`;
export { profileCover_sharedStyles };
