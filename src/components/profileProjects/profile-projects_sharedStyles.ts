'use strict';

import { profileProjects_sharedStyles } from '../../interfaces/interfaces.js';

const profileProjects_sharedStyles = {
	shell: ``,
	projects: ``,
	slide: ``,
	footer: ``,
	footerMod: ``
};

profileProjects_sharedStyles.shell = /*css*/ `

    body {
        background-image: var(--grmj-profile-background_image_1);
    }

    .profile-projects-shell .drop-down-shell {
        margin: 0em 0em 0em 0em;
        position: absolute;
        right: 4em;
    }    

`;

profileProjects_sharedStyles.projects = /*css*/ `
  

    .main-wrapper {
      margin: 0.85em;
      width: 100%;  
      display: grid;
      grid-gap: 15px;
      grid-template-columns: [col1-start] 25vw  [col2-start] 25vw  [col3-start] 47.3vw [col3-end];
      grid-template-rows: [row1-start] auto [row2-start] auto [row2-end];  
      background-color: var(--grmj-profile-background);
      color: var(--grmj-font-color-9);
    }
 
    .box {
      padding: 20px;
      background-color: var(--grmj-profile-background_6);
      font-size: var(--grmj-font-size-9vw);  
      color: var(--grmj-font-color-10);
      /*border: 6px solid var(--grmj-font-color-15);*/
      border-radius: 15px;
      background-image: url('/src/components/profileProjects/tools/images/water-drops-transparent-many.png')

    }  
    
    .gordon-projects {
        grid-column: col1-start / col3-start;
        grid-row: row1-start;
        height: 65vh;
        align-items: center;
        text-align: center;        
    }

    .profile-projects__title {
        font-family: var(--grmj-font-family-1);
        font-size: var(--grmj-font-size-9vw);
        font-weight: var(--grmj-font-weight-7);
        color: var(--grmj-font-color-3);
        text-shadow: var(--grmj-text-shadow-0);
        letter-spacing: var(--grmj-letter-spacing-2);
        filter: var(--grmj-filter-dropShadow-3);
    }

    .b {
        grid-column: col3-start ;
        grid-row: row1-start / row2-end;  
        text-align: center;
        align-items: center; 
    }

    .project-tools__title {
        font-family: var(--grmj-font-family-1);
        font-size: var(--grmj-font-size-9vw);
        font-weight: var(--grmj-font-weight-7);
        color: var(--grmj-font-color-3);
        text-shadow: var(--grmj-text-shadow-0);
        letter-spacing: var(--grmj-letter-spacing-2);
        filter: var(--grmj-filter-dropShadow-3);
    }

    .projects-line {
        margin: 8em auto -9em auto;
        width: 35vw;
        border: 0.01px solid var(--grmj-font-color-3);
        border-radius: 0.33em;
        filter: var(--grmj-filter-dropShadow-3);
        box-shadow: var(--grmj-profile-box-shadow-1);
    }

    
    .b .express-image {
        margin: 5em 0.45em 1.5em 0em;
        display: inline-flex;
        width: 118px;   
        filter: var(--grmj-filter-dropShadow-4);
        aspect-ratio: 345 / 211; 
    }
    
    .b .handlebars-image {
        margin: 5em 0.4em 1.5em 0em;
        display: inline-flex;
        width: 85px;   
        filter: var(--grmj-filter-dropShadow-4);
        aspect-ratio: 1 / 1;        
    }

    .b .es-lint-image {
        margin: 10em 0.45em 2em 0em;
        display: inline-flex;
        width: 68px;   
        aspect-ratio: 398 / 233;        
        filter: var(--grmj-filter-dropShadow-4);
    }

    .b .mongo-db-image {
        margin: 10em 0.45em 2em 0em;
        display: inline-flex;
        width: 75px;   
        aspect-ratio: 1 / 1;        
        filter: var(--grmj-filter-dropShadow-4);
    }

    .b .penguin-image {
        margin: 10em 0em 2em 0em;
        display: inline-flex;
        width: 45px;   
        aspect-ratio: 400 / 461;        
        filter: var(--grmj-filter-dropShadow-4);
    }

    .b .chrome-v8-image {
        margin: 10em 0.05em 1.85em 0em;
        display: inline-flex;
        width: 50px;   
        aspect-ratio: 1 / 1;        
        filter: var(--grmj-filter-dropShadow-4);
    }
    
    .b .mongoose-image {
        margin: 10em 0em 2em 0.1em;
        display: inline-flex;
        width: 55px;   
        aspect-ratio: 7 / 4;        
        filter: var(--grmj-filter-dropShadow-4);
    } 

    .b .ts-image {
         margin: -11em 0em 0em 0em;
         display: inline-flex;   
         width: 68px;
         filter: var(--grmj-filter-dropShadow-4);
         aspect-ratio: 413 / 535;
     }
     
     .b .web-big3-image {
         margin: -11em 0em 0em 0em;
         display: inline-flex;
         width: 246px;   
         filter: var(--grmj-filter-dropShadow-4);
         aspect-ratio: 160 / 61;
     }
 
     .b .node-image {
         margin: -11em 0em 0em 0em;
         display: inline-flex;
         width: 67px;   
         filter: var(--grmj-filter-dropShadow-4);
         aspect-ratio: 457 / 634;        
     }
  
    .c {
        grid-column: col1-start;
        grid-row: row2-start;
        height: 50vh;
    }
  
    .d {
        grid-column: col2-start;
        grid-row: row2-start;
        height: 50vh;
    }
 
`;

profileProjects_sharedStyles.slide = /*css*/ `

    .container {
        margin: -17em 0em 5em 0em;
        position: relative;
        display: block;
        align-items: center;
        justify-content: center;
        top: -29em;
        bottom: 30px;
        left: -12px;
        width: 225px;
        height: calc(77% - 85px);
        background-color: var(--grmj-profile-background_5);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--grmj-filter-dropShadow-0);
        border: var(--grmj-border-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--grmj-font-family-1);
        z-index: 5;
    }

    .container::before {
        position: absolute;
        content: "";
        background-image: var(--grmj-profile-background_image_2);
        background-size: cover;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.09;
        z-index: 5;
    }

    #webBig3 {
        margin: 27px 0px 15px 0px;
        left: 25px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--grmj-filter-dropShadow-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 1000;
    }

    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }

    #jsSymbol {
        margin: -14px 0px 0.5px 0px;
        left: 60px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--grmj-filter-dropShadow-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 1000;
    }

    #tsSymbol {
        margin: 80px 0px 1px 0px;
        left: 60px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--grmj-filter-dropShadow-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 1000;
    }

    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }    
 
    #blueVanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: var(--grmj-profile-background_4);
        font-size: var(--grmj-font-size-1avw);
        font-weight: var(--grmj-font-weight-9);
        letter-spacing: 0.2em;
        color: var(--grmj-font-color-13);
        text-shadow: var(--grmj-text-shadow-0);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: var(--grmj-box-shadow-1);
    }
    
    #line3 {
        margin: 221px 0px 20px 0px;
        left: 15px;
    }

       #yellowVanilla {
        margin: -112px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: var(--grmj-profile-background_4);
        font-size: var(--grmj-font-size-1avw);
        font-weight: var(--grmj-font-weight-9);
        letter-spacing: 0.2em;
        color: var(--grmj-font-color-14);
        text-shadow: var(--grmj-text-shadow-0);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: var(--grmj-box-shadow-1);
    }
    

    @keyframes FadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes FadeOut {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }

    .hamburger-menu {
        margin: 32px -2px 3px 30px;
        position: absolute;
        top: -9px;
        cursor: pointer;
        font-size: 40px;
        color: var(--grmj-font-color-3);
        text-shadow: var(--grmj-text-shadow-4);
        filter: var(--grmj-filter-dropShadow-5);
    }

    .hamburger-menu:hover {
        color: var(--grmj-font-color-12);
    }

    .hamburger-menu:active {
        color: var(--grmj-font-color-11);
        transform: rotate(180deg);
        transition: all .5s;
    }

    .item {
        padding: 15px 0 15px 7px;
        position: relative;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 10px; 
        cursor: pointer;
        z-index: 999;  
    }

    .space-invaders-anchor {
        color: var(--grmj-profile-background_4);
        text-decoration: none;
        outline: none;
    }

    .space-X-anchor {
        color: var(--grmj-profile-background_4);
        text-decoration: none;
        outline: none;
    }

    .stock-anchor {
        color: var(--grmj-profile-background_4);
        text-decoration: none;
        outline: none;
    }

    .blog-anchor {
        color: var(--grmj-profile-background_4);
        text-decoration: none;
        outline: none;
    }

    .i-own {
        color: var(--grmj-profile-background_4);
        text-decoration: none;
        outline: none;
    }

    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 9px;
        font-weight: 200;
        letter-spacing: 0.15em;
    }

`;

profileProjects_sharedStyles.footer = /*css*/ `




`;

profileProjects_sharedStyles.footerMod = /*css*/ `

    .footer {

        margin: 0em auto 0em auto; 
    }

`;

export { profileProjects_sharedStyles };
