'use strict';

import sidePanel_sharedStyles from '../../interfaces/interfaces.js';

const sidePanel_sharedStyles = {
  global: ``,
  panel: ``,
};

sidePanel_sharedStyles.global = /*css*/ `
    :root {
	    --bg-sythColor-primary: rgb(6, 6, 56);
        
    }
    :host {
        
        
    }
        
`;

sidePanel_sharedStyles.panel = /*css*/ `
    #container {
        margin-bottom: 20px;
        position: absolute;
        top: 160px;
        left: 0px;
        width: 200px;
        height: calc(100% - 225px);
        background: #ccc;
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--grmj-filter-dropShadow-0);
        border: var(--grmj-border-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--grmj-font-family-1);
        opacity: 0.84;
        z-index: 999;
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
        z-index: 1000;
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
        z-index: 1000;
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
        z-index: 1000;
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
        z-index: 1000;
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
    .hamburger {
        margin: 39px 0px 3px 15px;
        position: absolute;
        top: -10px;
        cursor: pointer;
        font-size: 40px;
        color: var(240, 81%, 12%, 0.99);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
    }
    .hamburger:hover {
        color: hsl(52, 77%, 53%);
    }
    .hamburger:active {
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
