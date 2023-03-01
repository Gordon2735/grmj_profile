'use strict';

import { spacexPage_sharedStyles } from '../../../interfaces/interfaces.js';

const spacexPage_sharedStyles = {
    shell: ``,
    spacex: ``,
    spacexData: ``
};

spacexPage_sharedStyles.shell = /*css*/ `

    :root {
   
           --bg-spacex-primary: hsl(0, 0%, 12%);
           --bg-spacex-secondary: hsl(195, 5%, 17%);
           --bb-spacex-tertiary: hsla(0, 0%, 100%, 0.99);
           --menu-spacex-primary: hsl(0, 0%, 20%);
           --icon-spacex-primary: hsl(0, 0%, 100%);
           --icon-spacex-secondary: hsl(0, 0%, 87%);
   
           --ff-spacex-primary: 'SpaceX';
           --ff-spacex-secondary: 'BIZ UDPGothic', sans-serif;
           --ff-spacex-tertiary: Arial, Helvetica, sans-serif;
           --fs-spacex-primary: 4.25rem;
           --fs-spacex-secondary: 3.5rem;
           --fs-spacex-tertiary: 2.5rem;
           --fs-spacex-quaternary: 1.8vw;
           --fs-spacex-quinary: 1rem;
           --fs-spacex-senary: 0.8vw;
           --fs-spacex-septenary: 1.2vw;
   
           --fc-spacex-primary: hsl(0, 0%, 100%);
           --fc-spacex-secondary: hsl(0, 0%, 87%);
           --fc-spacex-tertiary: hsl(0, 0%, 12%);
           --fc-spacex-quaternary: hsl(0, 0%, 8%);
           --fc-spacex-quinary: hsl(213, 64%, 33%);
           --fc-spacex-senary: hsl(213, 67%, 51%);
   
           --bold-spacex-primary: 700;
           --bold-spacex-secondary: 400;
   
           --ts-spacex-primary: 5px 3px 6px hsla(0, 0%, 0%, 0.91);
           --ts-spacex-secondary: 2px 1px 3px hsla(0, 0%, 0%, 0.5);
           --ts-spacex-tertiary: 2px 1px 3px hsla(0, 0%, 97%, 0.6);
           --ts-spacex-quaternary: 3px 1px 3px hsla(0, 0%, 87%, 0.6);
           --ts-spacex-quinary: 1px 1px 0.3px hsla(213, 64%, 33%, 0.9),
               2px 1px 2px hsla(0, 0%, 87%, 0.4);
           --ts-spacex-senary: 2px 1px 3px hsla(0, 0%, 87%, 0.4);
   
           --bs-spacex-primary: 0px 0px 0px 1em hsla(0, 0%, 0%, 0.56);
           --bs-spacex-secondary: 8px 6px 10px hsla(0, 0%, 0%, 0.89);
           --bs-spacex-tertiary: 5px 3px 5px hsla(0, 0%, 0%, 0.7);
           --bs-spacex-quaternary: 5px 7px 13px hsla(0, 0%, 87%, 0.6),
                -5px -7px 13px hsla(0, 0%, 87%, 0.6)
    }

        @font-face {
            font-family: 'SpaceX';
            src: url('/src/resources/font/SpaceX.ttf') format('truetype');
        }

        .theme-light {
            --background-image: url('../../src/components/componentTools/resources/images/spacex_images/SpaceX__MARS.webp');
            --image-home: url('../../src/components/componentTools/resources/images/005___home-theme-light__BACKGROUND.jpg');
            --image-cover: url('../../src/components/componentTools/resources/images/006___cover-light__BACKGROUND.png');
            --color-primary: var(--grmj-font-color-6);
            --color-secondary: #2a2c2d;
            --color-tertiary: var(--grmj-font-color-6);
            --color-accent: #fd6f53;
            --font-color: #000000;
            --border-bottom: 2px solid #fff;
            --width-main: 53%;
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
            --background-image: url('../../src/components/componentTools/resources/images/spacex_images/SpaceX__MOON_Rocket.webp');
            --image-home: url('../../src/components/componentTools/resources/images/000___home-theme-dark__BACKGROUND.png');
            --image-cover: url('../../src/components/componentTools/resources/images/006___cover-dark__BACKGROUND.png');
            --color-primary: var(--grmj-font-color-2);
            --color-secondary: #fbfbfe;
            --color-tertiary: var(--grmj-font-color-3);
            --color-accent: #12cdea;
            --font-color: #ffffff;
            --border-bottom: 2px solid #000;
            --width-main: 49%;
            --button-background: hsla(0, 0%, 41%, 0.99);
            --button-background-hover: hsla(212, 62%, 49%, 0.99);
            --button-ff: Arial, Helvetica, sans-serif;
            --button-color: hsla(0, 0%, 86%, 0.99);
            --button-fs: 0.7em;
            --button-border: 0.1em ridge hsla(180, 25%, 25%, 0.99);; 
            --button-hover: hsla(90, 100%, 50%, 0.99);
            --button-filter: drop-shadow(0.1em 0.08rem 0.08rem rgba(0, 0, 0, 0.22));
        }   

  
      
        .side-panel-shell {
            z-index: 600;
        }  
             
        *,
        *::before,
        *::after {
            margin: 0;  
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-image: var(--background-image); 
        }

        .scrollbar {
            overflow-y: scroll;
            overflow-x: hidden;
        }

        #style-1::-webkit-scrollbar {
            width: 0.4em;
            background-color: hsla(0, 1%, 66%, 0.9);
        }

        #style-1::-webkit-scrollbar:hover {
            width: 0.5em;
            background-color: hsla(0, 1%, 86%, 0.9);
        }

        #style-1::-webkit-scrollbar-thumb {
            width: 0.5em;
            background-color: hsla(90, 100%, 50%, 0.9);
            border-radius: 0.5em;
        }
    
        #style-1::-webkit-scrollbar-thumb:hover {
            background-color: hsla(59, 100%, 50%, 0.9);
        }
        
`;

spacexPage_sharedStyles.spacex = /*css*/ `
    
        .main {
            margin: 2em auto 0em 5em;
            padding: 0.5em 0.1em 0.5em 0.1em;
            text-align: center;
            width: var(--width-main);
            height: 75vh;
            background-color: hsla(34, 57%, 70%, 0.59);
            border: 4px solid var(--fc-spacex-quaternary);
            border-radius: 0.7em;
            box-shadow: var(--bs-spacex-quaternary);
            overflow: auto;  
  
        }

        .main.scrollbar {
            overflow-y: scroll;
            overflow-x: hidden;
        }

        .main::-webkit-scrollbar {
            width: 0.4em;
            background-color: hsla(0, 1%, 66%, 0.9);
        }

        .main::-webkit-scrollbar:hover {
            width: 0.5em;
            background-color: hsla(0, 0%, 27%, 0.19);
        }

        .main::-webkit-scrollbar-thumb {
            width: 0.5em;
            background-color: hsla(90, 100%, 50%, 0.9);
            border-radius: 0.5em;
        }
    
        .main::-webkit-scrollbar-thumb:hover {
            background-color: hsla(59, 100%, 50%, 0.9);
        }

        .time-date {
            margin: 0.5em auto 2.5em auto;
            padding: 0vh 0vw 0vh 0vw;
            display: inline-flex;
            width: 100%;
            height: 3vh;
            font-family: var(--ff-spacex-tertiary);
            font-size: var(--fs-spacex-senary);
            font-weight: 600;
            color: var(--color-secondary);
            text-shadow: var(--ts-spacex-tertiary);
            letter-spacing: 0.2em;
            z-index: 999;
        }

        .time {
            margin: 0.5em auto 0.1em auto;
            padding: 1em 2em 0em 2em;
        }
      
        .date {
            margin: 0.5em auto 0.1em auto;
            padding: 1em 2em 0em 2em;
        }
            
        .h1-title {
            margin: 2em auto 0.8em auto;
            /*padding: 0vh -10vw 0vh 4vw;*/
            display: block;
            position: relative;
            font-family: var(--ff-spacex-primary);
            font-size: var(--fs-spacex-septenary);
            color: var(--color-secondary);
            text-shadow: var(--ts-spacex-tertiary);
            letter-spacing: 0.2em;
        }
`;

spacexPage_sharedStyles.spacexData = /*css*/ `

        .spacex-logo {
            margin: 1.8vh auto 0.1vh auto;
            padding: 0vh 0 0 0;
            display: inline-block;
            position: relative;
            width: 300px;
            filter: drop-shadow(var(--ts-spacex-tertiary));
            aspect-ratio: 135 / 76;
        }

        .block {
            margin: 1.4em auto 0.9em auto;
            padding: 0.5em 1.75em 0.5em 1.75em;
            width: 265px;
            display: inline-block;
            font-family: var(--ff-spacex-tertiary);
            font-size: var(--fs-spacex-senary);
            color: var(--color-secondary);
            border-bottom: var(--border-bottom);
            text-justify: auto; 
            text-align: justify;  
        }

        /*
        .bordit {
            padding: 0.5em 2.75em 2em 3em;
            border: 1px solid var(--fc-spacex-secondary);
        } */

        @media screen and (max-width: 1012px) {
            .logo-box {
                height: 230px;
                min-height: 210px;
            }

            .api-container {
                min-width: 415px;
            }

            .api-header {
                font-size: 1.25rem;    
            }

            .block {
                padding: 0.5em 2em 2em 0em;
                width: 85px;
            }
        }

`;

export { spacexPage_sharedStyles };

// .api-header {
//     margin: 0 auto 0.5em auto;
//     font-family: var(--ff-spacex-primary);
//     font-size: var(--fs-spacex-quaternary);
//     font-weight: var(--bold-spacex-primary);
//     color: var(--fc-spacex-senary);
//     text-shadow: var(--ts-spacex-senary);
// }
