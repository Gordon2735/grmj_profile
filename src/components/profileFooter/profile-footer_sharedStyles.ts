'use strict';

import { profileFooter_sharedStyles } from '../../interfaces/interfaces.js';

const profileFooter_sharedStyles = {
  footer: ``,
  footerMod: ``,
  home: ``,
  jumps: ``,
  letter: ``,
};

profileFooter_sharedStyles.footer = /*css*/ `
    .footer {
        margin: 0em auto 0.5em auto;
        bottom: 3em;
        left: 35%;
        position: absolute;
        text-align: center;        
    }
    /*width: max(min(300px, 0.5em), 60vw);*/
    .logo {
        margin: 0em 1.2em -1.5em 0em;
        padding: 0.21em;
        width: 102px;
        height: 42px;
        position: relative;
        display: inline-flex;
        left: -20em;
        text-align: none;
        justify-self: start; 
        align-items: left;
        transform: rotate(-10deg);
        aspect-ratio: 5 / 4;
    }
    .footer-title-h1 {
        font-family: var(--grmj-font-family-2);
        font-size: var(--grmj-font-size-1yvw);
        font-weight: var(--grmj-font-weight-7) ;
        color: var(--grmj-font-color-2);
        text-shadow: var(--grmj-text-shadow-0);        
        filter: var(--grmj-filter-dropShadow-4);
    }
    .entity-symbol {
        font-family: var(--grmj-font-family-3);
        font-size: var(--grmj-font-size-1zwy);
        font-weight: var(--grmj-font-weight-1);
        color: var(--grmj-font-color-2);
        text-shadow: none;
        filter: none;
    } 
    @media screen and (max-width: 1100px) {
        
        .footer-title-h1 {
            font-size: var(--grmj-font-size-4vw);
        }
    }
    @media screen and (max-width: 600px) {
        .footer {
            width: 250px;
        }
        .footer-title-h1 {
            font-size: var(--grmj-font-size-11vw);
        }
        .entity-symbol {
            font-size: var(--grmj-font-size-04vw);
            color: var(--grmj-font-color-6);
        }
    }
`;

profileFooter_sharedStyles.footerMod = /*css*/ `
    .footer {
        margin: 0em auto 0em auto; 
    }
`;

profileFooter_sharedStyles.jumps = /*css*/ `
`;

// refactor for DRY!
profileFooter_sharedStyles.home = /*css*/ `
    .footer {
        margin: 2em auto 0em auto;
        bottom: 2em;
        left: 3%;
        position: absolute;
        display: inline-flex;
        width: 779px;
        height: 115px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    /*width: max(min(300px, 0.5em), 60vw);*/
    .logo {
        margin: 0em 1.2em 0em 1em;
        width: 78px;
        position: absolute;
        display: inline-block;
        left: 0.2em;
        justify-self: start; 
        align-items: left;
        transform: rotate(-15deg);
        aspect-ratio: 631 / 580;
        border-radius: 4.65em;
        z-index: 50;   
    }
    
    .footer-title-h1 {
        margin: 0em auto 0em auto;
        left: 1%;
        font-family: var(--grmj-font-family-2);
        font-size: var(--grmj-font-size-1yvw);
        font-weight: var(--grmj-font-weight-8) ;
        color: var(--grmj-font-color-5);
        text-shadow: var(--grmj-text-shadow-3);        
        filter: var(--grmj-filter-dropShadow-4a);
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .footer-title-h1.hoot {
        margin: 0em -2.2em 0em 3.2em;
        left: 2%;  
        font-family: var(--grmj-font-family-0);
        font-size: var(--grmj-font-size-3vw);
        font-weight: var(--grmj-font-weight-9) ;
        color: var(--grmj-font-color-16); 
        transform: rotate(-10deg);    
    }
    .entity-symbol {
        margin: 0em auto 0em auto;
        font-family: var(--grmj-font-family-3);
        font-size: var(--grmj-font-size-1zwy);
        font-weight: var(--grmj-font-weight-2);
        color: var(--grmj-font-color-5);
        text-shadow: none;
        filter: none;
    }
    
    .entity-symbol.hoot-rotate {
        font-size: var(--grmj-font-size-1avw);
        transform: rotate(-10deg);
    }
    .footer-span {
        margin: 4em auto 0em auto;
        position: absolute;
        display: inline-block;
        width: 225px;
        height: 26px;
        background: var(--grmj-profile-background_11);        
        border: var(--grmj-border-2);
        border-radius: 0.35em;
        filter: var(--grmj-filter-dropShadow-4a);
        align-items: center;
        text-align: center;
    }
    .footer-span > .footer-link {
        margin: 0em auto 0em auto;
        font-family: var(--grmj-font-family-0);
        font-size: var(--grmj-font-size-1zwx);
        font-weight: var(--grmj-font-weight-4);
        color: var(--grmj-font-color-1);
        text-align: center;
        text-decoration: none;
        letter-spacing: var(--grmj-letter-spacing-1a);
    }
    .footer-link:hover {
        color: var(--grmj-font-color-16);
        font-weight: var(--grmj-font-weight-9);
    }
    @media screen and (max-width: 1100px) {
        
        .footer-title-h1 {
            font-size: var(--grmj-font-size-4vw);
        }
    }
    @media screen and (max-width: 600px) {
        .footer {
            width: 250px;
        }
        .footer-title-h1 {
            font-size: var(--grmj-font-size-11vw);
        }
        .entity-symbol {
            font-size: var(--grmj-font-size-04vw);
            color: var(--grmj-font-color-6);
        }
    }
`;

profileFooter_sharedStyles.letter = /*css*/ `

    .footer {
        margin: 2em auto 0em auto;
        bottom: 2em;
        left: 49%;
        position: absolute;
        display: inline-flex;
        width: 779px;
        height: 115px;
        background: var(--grmj-profile-background_8);
        border: var(--grmj-border-2);
        border-radius: 0.75em;
        filter: var(--grmj-filter-dropShadow-4);
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    /*width: max(min(300px, 0.5em), 60vw);*/
    .logo {
        margin: 0em 1.2em 0em 1em;
        width: 78px;
        position: absolute;
        display: inline-block;
        left: 0.2em;
        justify-self: start; 
        align-items: left;
        transform: rotate(-15deg);
        aspect-ratio: 631 / 580;
        border-radius: 4.65em;
        z-index: 50;   
    }

    .footer-title-h1 {
        margin: 0em auto 0em auto;
        left: 1%;
        font-family: var(--grmj-font-family-2);
        font-size: var(--grmj-font-size-1yvw);
        font-weight: var(--grmj-font-weight-8) ;
        color: var(--grmj-font-color-5);
        text-shadow: var(--grmj-text-shadow-3);        
        filter: var(--grmj-filter-dropShadow-4a);
        letter-spacing: var(--grmj-letter-spacing-1);
    }
    .footer-title-h1.hoot {
        margin: 0em -2.2em 0em 3.2em;
        left: 2%;  
        font-family: var(--grmj-font-family-0);
        font-size: var(--grmj-font-size-3vw);
        font-weight: var(--grmj-font-weight-9) ;
        color: var(--grmj-font-color-16); 
        transform: rotate(-10deg);    
    }
    .entity-symbol {
        margin: 0em auto 0em auto;
        font-family: var(--grmj-font-family-3);
        font-size: var(--grmj-font-size-1zwy);
        font-weight: var(--grmj-font-weight-2);
        color: var(--grmj-font-color-5);
        text-shadow: none;
        filter: none;
    }

    .entity-symbol.hoot-rotate {
        font-size: var(--grmj-font-size-1avw);
        transform: rotate(-10deg);
    }
    .footer-span {
        margin: 4em auto 0em auto;
        position: absolute;
        display: inline-block;
        width: 225px;
        height: 26px;
        background: var(--grmj-profile-background_11);        
        border: var(--grmj-border-2);
        border-radius: 0.35em;
        filter: var(--grmj-filter-dropShadow-4a);
        align-items: center;
        text-align: center;
    }
    .footer-span > .footer-link {
        margin: 0em auto 0em auto;
        font-family: var(--grmj-font-family-0);
        font-size: var(--grmj-font-size-1zwx);
        font-weight: var(--grmj-font-weight-4);
        color: var(--grmj-font-color-1);
        text-align: center;
        text-decoration: none;
        letter-spacing: var(--grmj-letter-spacing-1a);
    }
    .footer-link:hover {
        color: var(--grmj-font-color-16);
        font-weight: var(--grmj-font-weight-9);
    }
    @media screen and (max-width: 1100px) {
        
        .footer-title-h1 {
            font-size: var(--grmj-font-size-4vw);
        }
    }
    @media screen and (max-width: 600px) {
        .footer {
            width: 250px;
        }
        .footer-title-h1 {
            font-size: var(--grmj-font-size-11vw);
        }
        .entity-symbol {
            font-size: var(--grmj-font-size-04vw);
            color: var(--grmj-font-color-6);
        }
    }
`;

export { profileFooter_sharedStyles };
