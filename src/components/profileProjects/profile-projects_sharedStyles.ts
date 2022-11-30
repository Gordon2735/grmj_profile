'use strict';

import { profileProjects_sharedStyles } from '../../interfaces/interfaces.js';

const profileProjects_sharedStyles = {
	shell: ``,
	projects: ``,
	slide: ``
};

profileProjects_sharedStyles.shell = /*css*/ `

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,400;0,600;0,700;0,900;1,200;1,600;1,700;1,900&display=swap');
/*font-family: 'Source Sans Pro', sans-serif;*/
    :root {

        /* Backgrounds */
        --grmj-profile-background: -webkit-linear-gradient(180deg, hsla(0, 0%, 75%, 0.5), hsla(0, 0%, 20%, 0.79) 25.71%),
                                    -webkit-linear-gradient(359deg, hsla(0, 0%, 75%, 0.2), hsla(197, 98%, 17%, 0.49) 20.71%),
                                    -webkit-linear-gradient(000deg, hsla(197, 45%, 63%, 0.59), hsla(197, 45%, 63%, 0.69) 10.71%);
        --grmj-profile-box-shadow-1: 5px 3px 5px hsla(0, 0%, 0%, 0.99);
        --grmj-profile-box-shadow-2: 7px 5px 9px hsla(0, 0%, 0%, 0.69);

        /*Font Family*/
        --grmj-font-family-1: 'Source Sans Pro', sans-serif;

        /*Font Weight*/
        --grmj-font-weight-1: 100;
        --grmj-font-weight-2: 200;
        --grmj-font-weight-3: 300;
        --grmj-font-weight-4: 400;
        --grmj-font-weight-5: 500;
        --grmj-font-weight-6: 600;
        --grmj-font-weight-7: 700;
        --grmj-font-weight-8: 800;
        --grmj-font-weight-9: 900;

        /*text styles*/
        --grmj-italic: italic;

        /*text shadows*/
        --grmj-text-shadow-0: 3px 2px 3px hsla(0, 0%, 0%, 0.99);
        --grmj-text-shadow-1: 5px 3px 5px hsla(0, 0%, 0%, 0.99);
        --grmj-text-shadow-2: 7px 5px 9px hsla(0, 0%, 0%, 0.69);
        --grmj-text-shadow-3: 2px 1px 3px hsla(0, 0%, 0%, 0.59);

        /*Box Shadows*/
        --grmj-box-shadow-0: 5px 4px 7px hsla(0, 0%, 0%, 0.79);

        /*Filter: drop-shadow*/
        --grmj-filter-dropShadow-0: drop-shadow(6px 5px 7px hsla(0, 0%, 0%, 0.72));
        --grmj-filter-dropShadow-1: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
        --grmj-filter-dropShadow-2: drop-shadow(6px 4px 4px hsla(0, 0%, 0%, 0.6));


        /*Letter Spacing*/
        --grmj-letter-spacing-1: 0.1em;
        --grmj-letter-spacing-1a: 0.15em;
        --grmj-letter-spacing-2: 0.2em;
        --grmj-letter-spacing-3: 0.3em;
        --grmj-letter-spacing-4: 0.4em;
        --grmj-letter-spacing-5: 0.5em;

        /*Font Sizing*/
        --grmj-font-size-1vw: 0.5vw;
        --grmj-font-size-1avw: 0.75vw;
        --grmj-font-size-1vw: 1vw;
        --grmj-font-size-2vw: 1.2vw;
        --grmj-font-size-3vw: 1.4vw;
        --grmj-font-size-4vw: 1.6vw;
        --grmj-font-size-5vw: 1.8vw;
        --grmj-font-size-6vw: 2vw;
        --grmj-font-size-7vw: 2.2vw;
        --grmj-font-size-8vw: 2.4vw;
        --grmj-font-size-9vw: 2.6vw;
        --grmj-font-size-10vw: 2.8vw;
        --grmj-font-size-11vw: 3vw;
        --grmj-font-size-12vw: 3.2vw;
        --grmj-font-size-13vw: 3.4vw;
        --grmj-font-size-14vw: 3.6vw;
        --grmj-font-size-15vw: 3.8vw;
        --grmj-font-size-16vw: 4vw;
        --grmj-font-size-17vw: 4.5vw;

        /*Font Colors*/
        --grmj-font-color-1: hsla(198, 86%, 92%, 0.99);
        --grmj-font-color-2: hsla(197, 71%, 73%, 0.99);
        --grmj-font-color-3: hsla(198, 53%, 87%, 0.99);
        --grmj-font-color-4: hsla(198, 23%, 59%, 0.99);
        --grmj-font-color-5: hsla(0, 0%, 0%, 0.99);
        --grmj-font-color-6: hsla(212, 62%, 49%, 0.99);
        --grmj-font-color-7: hsla(210, 95%, 62%, 0.99);
        --grmj-font-color-8: hsla(208, 42%, 77%, 0.99);

        /*Borders*/
        --grmj-border-0: 2.5px solid hsl(240, 81%, 12%);
        
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        background: var(--grmj-profile-background);
    }
    
    
    `;

profileProjects_sharedStyles.projects = /*css*/ `

    .profile-projects__container {
        margin: 3em auto 1em auto;
        width: 50%;
        display: flex;
    }
    
    .profile-projects__title {
        padding: 1em;
        display: flex;
        font-family: var(--grmj-font-family-1);
        font-size: var(--grmj-font-size-15vw);
        font-weight: var(--grmj-font-weight-7);
        color: var(--grmj-font-color-8);
        text-shadow: var(--grmj-text-shadow-0);
        letter-spacing: var(--grmj-letter-spacing-1);
        text-align: center;
    }

    .section {
        margin: 2em auto 1em auto;
        top: 20em;
        left: 25em;
        display: flex;
        position: absolute;
    }

    .ts-image {
        margin: 2em auto 1em auto;
        display: flex;
        position: relative;
        width: 280px;
        text-align: center;
        filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.9));
        aspect-ratio: 413 / 535;
    }
`;

profileProjects_sharedStyles.slide = /*css*/ `

    #container {
        margin-bottom: 20px;
        position: absolute;
        top: 120px;
        left: 0px;
        width: 210px;
        height: calc(100% - 145px);
        background: #ccc;
        overflow: hidden;
        transform: translateX(-227px);
        transition: all 1s;
        filter: var(--grmj-filter-dropShadow-0);
        border: var(--grmj-border-0);
        border-radius: 0px 8px 8px 0px;
        font-Family: var(--grmj-font-family-1);
        z-index: 999;
    }

    #webBig3 {
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

    #jsSymbol {
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

    #tsSymbol {
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
    
 
    #blueVanilla {
        margin: 7px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: var(--grmj-font-size-1vw);
        letter-spacing: 0.2em;
        color: hsl(52, 97%, 58%);
        text-shadow: 5px 3px 4px rgba(0, 0, 0, 0.9);
        border-top: 2px solid hsl(10, 66%, 51%);
        border-bottom: 2px solid hsl(213, 62%, 45%);
        box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.5);
        z-index: 1000;
    }
    
    #line3 {
        margin: 221px 0px 20px 0px;
        left: 15px;
    }

       #vanilla {
        margin: -112px 0px 3px 0px;
        padding: 0.3em;
        position: absolute;
        display: inline-block;
        left: 0px;
        align-self: center;
        text-align: center;
        background: rgb(87, 87, 87);
        font-size: var(--grmj-font-size-1vw);
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

    .hamburger-menu {
        margin: 39px 0px 3px 15px;
        position: absolute;
        top: -10px;
        cursor: pointer;
        font-size: 40px;
        color: var(240, 81%, 12%, 0.99);
        filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
    }

    .hamburger-menu:hover {
        color: hsl(52, 77%, 53%);
    }

    .hamburger-menu:active {
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

    .space-invaders-anchor {
        color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }

    .space-X-anchor {
        color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }

    .stock-anchor {
        color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }

    .blog-anchor {
        color: var(--grmj-font-color-5);
        text-decoration: none;
        outline: none;
    }

    .i-own {
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

export { profileProjects_sharedStyles };
