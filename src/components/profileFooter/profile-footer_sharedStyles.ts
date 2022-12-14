'use strict';

import { profileFooter_sharedStyles } from '../../interfaces/interfaces';

const profileFooter_sharedStyles = {
	footer: ``,
	footerMod: ``,
	jumps: ``
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
        border-radius: 4em;
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

profileFooter_sharedStyles.jumps = /*css*/ `s



`;

export { profileFooter_sharedStyles };
