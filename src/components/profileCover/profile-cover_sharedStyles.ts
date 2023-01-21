'use strict';

import { profileCover_sharedStyles } from '../../interfaces/interfaces.js';

const profileCover_sharedStyles = {
  shell: ``,
  cover: ``,
  transition: ``,
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
`;

profileCover_sharedStyles.transition = /*css*/ ` 

    .loader {
      position: absolute;
      width: 100%;
      height: 100vh;
      left: -100%;
      transition: .5s;
      z-index: 1000;
    }

    .loader .loader-image {
      position: absolute;
      left: 50%;
      top: 50%;

    }

    .page0 {
      padding: 0.5em;
      position: absolute;
      top: 30%;
      left: 20%;
      width: 360px;
      border-radius: 0.5em;
      text-align: center;  
      visibility: hidden;
    }

    .page0 a {
      font-size: 1em;
      color: var(--grmj-font-color-6a);
      cursor: pointer;
    }

    .page0 a:hover {
      font-size: 1.2em;
      color: var(--grmj-font-color-11);
    }

    .page0 a:active {
      color: var(--grmj-font-color-17);
      transition: 0.2s;
      opacity: 0.1;
    }

    .page0 a:after {
      color: var(--grmj-font-color-17);
    }

    .page1 {
      padding: 1.2em;
      position: absolute;
      top: 15%;
      left: 60%;
      width: 460px;
      height: 60vh;
      border-radius: 0.5em;
      background-color: var(--grmj-profile-background_10);
      text-align: center;
      visibility: hidden;
    }

    .page1 .h3-cover-1 {
      top: 0%;
      padding: 0.5em;
      font-size: 1.5em;
      font-weight: var(--grmj-font-weight-8);
      color: var(--grmj-font-color-6a);
    }

    .page1 .p-cover-1 {
      padding: 1em;
    }

    .page1 a {
      top: 95%;
      left: 50%;
      font-size: 1em;
      color: var(--grmj-font-color-6a);
      cursor: pointer;
    }

    .page1 a:hover {
      font-size: 1.2em;
      color: var(--grmj-font-color-11);
    }

    .page1 a:active {
      font-size: 1.2em;
      color: var(--grmj-font-color-17);
      transition: 0.2s;
      opacity: 0.1;
    }

    .page1 a:after {
      color: var(--grmj-font-color-17);
    }

    .page2 {
      padding: 1.2em;
      position: absolute;
      top: 15%;
      left: 60%;
      width: 460px;
      height: 60vh;
      border-radius: 0.5em;
      background-color: var(--grmj-profile-background_10);
      text-align: center;
      visibility: hidden;
    }

    .page2 .h3-cover-2 {
      top: 0%;
      padding: 0.5em;
      font-size: 1.5em;
      font-weight: var(--grmj-font-weight-8);
      color: var(--grmj-font-color-6a);
    }

    .page2 .p-cover-2 {
      padding: 1em;
    }

    .page2 a {
      top: 95%;
      left: 50%;
      font-size: 1em;
      color: var(--grmj-font-color-6a);
      cursor: pointer;
    }

    .page2 a:hover {
      font-size: 1.2em;
      color: var(--grmj-font-color-11);
    }

    .page2 a:active {
      font-size: 1.2em;
      color: var(--grmj-font-color-17);
      transition: 0.2s;
      opacity: 0.1;
    }

    .page2 a:after {
      color: var(--grmj-font-color-17);
    }

    .page3 {
      padding: 1.2em;
      position: absolute;
      top: 15%;
      left: 60%;
      width: 460px;
      height: 60vh;
      border-radius: 0.5em;
      background-color: var(--grmj-profile-background_10);
      text-align: center;
      visibility: hidden;
    }

    .page3 .h3-cover-3 {
      top: 0%;
      padding: 0.5em;
      font-size: 1.5em;
      font-weight: var(--grmj-font-weight-8);
      color: var(--grmj-font-color-6a);
    }

    .page3 .p-cover-3 {
      padding: 1em;
    }

    .page3 a {
      top: 95%;
      left: 50%;
      font-size: 1em;
      color: var(--grmj-font-color-6a);
      cursor: pointer;
    }

    .page3 a:hover {
      font-size: 1.2em;
      color: var(--grmj-font-color-11);
    }

    .page3 a:active {
      font-size: 1.2em;
      color: var(--grmj-font-color-17);
      transition: 0.2s;
      opacity: 0.1;
    }

    .page3 a:after {
      color: var(--grmj-font-color-17);
    }

    @keyframes loading {
      0% {
        top: -100%;
      } 
      100% {
        top: 20%;
      }
    }

    @keyframes offLoading {
      0% {
        opacity: 1;
      }
      25% {
        opacity: 0.75;
      }
      50% {
        opacity: 0.5;
      }
      75% {
        opacity: 0.25;
      }
      100% {
        opacity: 0;
      }
    }

`;
profileCover_sharedStyles.slide = /*css*/ `


`;
export { profileCover_sharedStyles };

// * {
//   margin: 0;
//   padding: 0;
//   -webkit-box-sizing: border-box;
//           box-sizing: border-box;
//   font-family: var(--grmj-font-family-1);
// }

// @keyframes loading {
//   0% {
//     left: -100%;
//   }
//   25% {
//     left: -75%;
//   }
//   50% {
//     left: -50%;
//   }
//   75% {
//     left: -25%;
//   }
//   100% {
//     left: 0%;
//   }
// }
