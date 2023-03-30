'use strict';

import sidePanel_sharedStyles from '../../interfaces/interfaces.js';

const sidePanel_sharedStyles = {
    global: ``,
    panel: ``
};

sidePanel_sharedStyles.global = /*css*/ `
    :root {
	    --bg-sythColor-primary: rgb(6, 6, 56);
        
    }
    :host {
        
        
    }

    .theme-light {
        --image-home: url('../../src/components/componentTools/resources/images/005___home-theme-light__BACKGROUND.jpg');
        --color-primary: var(--grmj-font-color-6);
        --color-secondary: #fbfbfe;
        --color-tertiary: var(--grmj-font-color-6);
        --color-accent: #fd6f53;
        --font-color: #000000;
        --button-background: hsla(0, 0%, 41%, 0.99);
        --button-background-hover: hsla(212, 62%, 49%, 0.99);
        --button-ff: Arial, Helvetica, sans-serif;
        --button-color: hsla(219, 97%, 73%, 0.99);
        --button-fs: 0.7em;
        --button-border: 0.1em ridge hsla(180, 25%, 25%, 0.99);; 
        --button-hover: hsla(0, 0%, 86%, 0.39);
        --button-filter: drop-shadow(0.1em 0.08rem 0.08rem rgba(0, 0, 0, 0.22));
    }    
    
    .theme-startup,
    .theme-dark {
        --image-home: url('../../src/components/componentTools/resources/images/000___home-theme-dark__BACKGROUND.png');
        --color-primary: var(--grmj-font-color-2);
        --color-secondary: #2a2c2d;
        --color-tertiary: var(--grmj-font-color-3);
        --color-accent: #12cdea;
        --font-color: #ffffff;
        --button-background: hsla(0, 0%, 41%, 0.99);
        --button-background-hover: hsla(212, 62%, 49%, 0.99);
        --button-ff: Arial, Helvetica, sans-serif;
        --button-color: hsla(0, 0%, 86%, 0.99);
        --button-fs: 0.7em;
        --button-border: 0.1em ridge hsla(180, 25%, 25%, 0.99);; 
        --button-hover: hsla(90, 100%, 50%, 0.99);
        --button-filter: drop-shadow(0.1em 0.08rem 0.08rem rgba(0, 0, 0, 0.22));
    }
        
`;

sidePanel_sharedStyles.panel = /*css*/ `
    #container {
        margin-bottom: 30px;
        position: absolute;
        top: 80px;
        left: 0px;
        width: 200px;
        height: calc(100% - 255px);
        background: hsla(0, 0%, 66%, 0.69);
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--grmj-filter-dropShadow-0);
        border: var(--grmj-border-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--grmj-font-family-1);
        z-index: 500;
    }
    #big-3 {
        margin: 27px 0px 15px 0px;
        left: 15px;
        display: inline-block;
        position: absolute;
        width: 160px;
        align-items: center;
        filter: var(--grmj-filter-dropShadow-1);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 160 / 61;
        z-index: 600;
    }
    #line {
        margin: 110px 0px 20px 0px;
        left: 15px;
    }
    #js-symbol {
        margin: -14px 0px 0.5px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: center;
        filter: var(--grmj-filter-dropShadow-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    
    #ts-symbol {
        margin: 80px 0px 1px 0px;
        left: 37px;
        display: inline-block;
        position: absolute;
        width: 80px;
        align-items: baseline;
        filter: var(--grmj-filter-dropShadow-2);
        transform: rotate(-360deg);
        transition: all 2s;
        aspect-ratio: 1 / 1;
        z-index: 600;
    }
    #line2 {
        margin: 190px 0px 20px 0px;
        left: 15px;
    }
    #vanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: 1.75rem;
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 600;
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
    .hamburgers {
        margin: 8px 0px 1px 15px;
        position: absolute;
        top: -13px;
        cursor: pointer;
        font-size: 35px;
        color: var(--grmj-font-color-5);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        z-index: 2;
    }
    .hamburgers:hover {
        color: var(--grmj-font-color-17);
    }
    .hamburgers:active {
        color: rgb(252, 4, 4);
        transform: rotate(180deg);
        transition: all .5s;
    }
    .item {
        padding: 20px 0 20px 10px;
        width: 200px;
        height: 8px;
        line-height: 9px;
        border-bottom: 1px solid #999;
        font-size: 12px; 
        cursor: pointer;  
    }

    .landing-a {
        color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }

    .history-a {
		color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }
    .resume {
        color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }
 
    .project-anchor {
        color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }
  
    .goals-anchor {
        color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }
    .code-ex {
        color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }
    
    .item:hover {
        background: rgb(112, 112, 112);
        border-radius: 0px 8px 8px 0px;
        box-shadow: 10px 6px 16px  rgba(0, 0, 0, 0.6);
        color: rgb(233, 242, 255);
        font-size: 12px;
        font-style: italic;
        font-weight: 600;
        letter-spacing: 0.22em;
    }
`;

export { sidePanel_sharedStyles };
