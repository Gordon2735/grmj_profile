'use strict';

import profile_sharedStyles from '../../interfaces/interfaces';

// will have to create an interface for this

const profile_sharedStyles = {
	global: ``,
	home: ``
};

profile_sharedStyles.global = /*css*/ `

    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,400;0,600;0,700;0,900;1,200;1,600;1,700;1,900&display=swap');
    /*font-family: 'Source Sans Pro', sans-serif;*/
        :root {

            /* Backgrounds */
            --grmj-profile-background: -webkit-linear-gradient(180deg, hsla(0, 0%, 75%, 0.5), hsla(0, 0%, 20%, 0.79) 25.71%),
                                       -webkit-linear-gradient(359deg, hsla(0, 0%, 75%, 0.2), hsla(197, 98%, 17%, 0.49) 20.71%),
                                       -webkit-linear-gradient(000deg, hsla(197, 45%, 63%, 0.59), hsla(197, 45%, 63%, 0.69) 10.71%);
            --grmj-profile-background_1: orange;
            --grmj-profile-background_2: light purple;
            --grmj-profile-background_3:  hsla(197, 98%, 17%, 0.39);

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
            --grmj-profile-box-shadow-1: 5px 3px 5px hsla(0, 0%, 0%, 0.99);
            --grmj-profile-box-shadow-2: 7px 5px 9px hsla(0, 0%, 0%, 0.69);

            /*Filter: drop-shadow*/
            --grmj-filter-dropShadow-0: drop-shadow(6px 5px 7px hsla(0, 0%, 0%, 0.72));
            --grmj-filter-dropShadow-1: drop-shadow(3px 2px 2px rgba(0, 0, 0, 0.6));
            --grmj-filter-dropShadow-2: drop-shadow(6px 4px 4px hsla(0, 0%, 0%, 0.6));
            --grmj-filter-dropShadow-3: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.9));


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
            --grmj-font-size-18vw: 1.75rem;
            --grmj-font-size-19vw: 1.85rem;
            --grmj-font-size-20vw: 2rem;
            --grmj-font-size-21vw: 2.15rem;
            --grmj-font-size-22vw: 2.3rem;
            --grmj-font-size-23vw: 2.45rem;
            --grmj-font-size-24vw: 2.6rem;

            /*Font Colors*/
            --grmj-font-color-1: hsla(198, 86%, 92%, 0.99);
            --grmj-font-color-2: hsla(197, 71%, 73%, 0.99);
            --grmj-font-color-3: hsla(198, 53%, 87%, 0.99);
            --grmj-font-color-4: hsla(198, 23%, 59%, 0.99);
            --grmj-font-color-5: hsla(0, 0%, 0%, 0.99);
            --grmj-font-color-6: hsla(197, 98%, 17%, 0.99);

            /*Borders*/
            --grmj-border-0: 2.5px solid hsl(240, 81%, 12%);

            /*Scrollbar Colors*/
            --grmj_profile_scrollbar-background:  hsla(201, 11%, 53%, 0.99);
            --grmj_profile_scrollbar-thumb: hsla(210, 2%, 74%, 0.99); 
            --grmj_profile_scrollbar-thumb_hover: hsla(213, 62%, 45%, 0.99);
            --grmj_profile_scrollbar-border: hsla(201, 11%, 53%, 0.99);
            --grmj_profile_scrollbar-box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.6);        
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            width: 100%;
            background: var(--grmj-profile-background);
            font-family: var(--grmj-font-family-1);
        }

        body::-webkit-scrollbar {
            width: 0.75em;
        }

        body::-webkit-scrollbar-track {
            -webkit-box-shadow: var(--grmj_profile_scrollbar-box-shadow);
            background: var(--grmj_profile_scrollbar-background);
        }

        body::-webkit-scrollbar-thumb {
            background: var(--grmj_profile_scrollbar-thumb);
            border-radius: 0.35em;
            border: 0.18em solid var(--grmj_profile_scrollbar-border);
        }

        body::-webkit-scrollbar-thumb:hover {
            background: var(--grmj_profile_scrollbar-thumb_hover);
        }

        .main {
            width: 100%;
        }

        .title-official {
            margin: 0.32em auto 0em 6.8em;
            font-size: var(--grmj-font-size-8vw);
            font-weight: var(--grmj-font-weight-2);
            color: var(--grmj-font-color-2);
            font-style:var(--grmj-italic);
            letter-spacing: var(--grmj-letter-spacing-1a);
        }

        .grmj-profile-title {
            margin: 0em auto 0.3em 3em;
            font-size: max(min(7vw, 1.5em), 4vw);
            font-weight: var(--grmj-font-weight-7);
            color: var(--grmj-font-color-2);
            text-shadow: var(--grmj-text-shadow-1);
            letter-spacing: var(--grmj-letter-spacing-1a);
        }   

        .title-of {
            margin: 0em auto 0em 15.5em;
            font-size: var(--grmj-font-size-8vw);
            font-weight: var(--grmj-font-weight-2);
            color: var(--grmj-font-color-2);
            font-style:var(--grmj-italic);
            letter-spacing: var(--grmj-letter-spacing-1a);
        }

        .grmj-profile-subtitle {
            margin: -0.03em auto 1em 14.002em;
            font-size: var(--grmj-font-size-11vw);
            font-weight: var(--grmj-font-weight-5);
            color: var(--grmj-font-color-2);
            text-shadow: var(--grmj-text-shadow-1);
            letter-spacing: var(--grmj-letter-spacing-1a);
        }

        .grmj-profile-subtitle2 {
            margin: 1em 0em 1em 20.4em;
            font-size: var(--grmj-font-size-3vw);
            font-weight: var(--grmj-font-weight-6);
            color: var(--grmj-font-color-3);
            text-shadow: var(--grmj-text-shadow-1);
        }

        .grmj-profile-subtitle3 {
            margin: 1em 0 1em 22.8em;
            font-size: var(--grmj-font-size-2vw);
            font-weight: var(--grmj-font-weight-7);
            font-style: var(--grmj-italic);
            color: var(--grmj-font-color-5);
            text-shadow: var(--grmj-text-shadow-3);
            letter-spacing: var(--grmj-letter-spacing-1a);
        }

        .grmj-pers-fig {
            top: 10.5em;
            left: 1.5em;
            margin: 2em 0em 1em 4em;
            padding: 0.5em 0.5em;
            width: max(min(18vw, 12.5em), 16vw);
            height: auto;
            position: absolute;
            justify-content: center;
        } 
        
        .grmj-pers-fig .grmj-pic {
            width: 18vw;
            aspect-ratio: 111 / 122;
            border-radius: 2em;        
            box-shadow: var(--grmj-profile-box-shadow-2);
        }  
        
        .grmj-pers-fig .grmj-pers-fig-cap {
            margin-left: 1.2em;
            font-size: var(--grmj-font-size-2vw);
            color: var(--grmj-font-color-1);
            position: relative;
            text-shadow: var(--grmj-text-shadow-0);
        }

        .grmj-profile-section {
            margin: 10em auto 0.2em auto;
            padding: auto, 2em;
            width: 80%;
            justify-content: center;
        }

        .grmj-profile-section > .grmj-profile-quote {
            margin: 2em auto 1em auto;
            font-size: var(--grmj-font-size-1vw);
            color: var(--grmj-font-color-2);
            text-align: center;
            text-justify: inter-word;
        }


    @media screen and (max-width: 600px) {

        body {
            background: var(--grmj-profile-background_1);
        }

        .title-official {
            margin: 2.12em auto 0em auto;
            font-size: max(var(--grmj-font-size-14vw));
            font-weight: var(--grmj-font-weight-6);
            text-shadow: var(--grmj-text-shadow-0);
            text-align: center;
        }
        
        .grmj-profile-title {
            margin: 0.6em auto 0.3em auto;
            font-size: max(var(--grmj-font-size-19vw));
            text-align: center;
        }

        .grmj-profile-subtitle {
            margin: -2em auto 1em auto;
            font-size: var(--grmj-font-size-11vw);
            font-weight: var(--grmj-font-weight-7);
            text-shadow: var(--grmj-text-shadow-0);
            text-align: center;
        }

        .grmj-profile-subtitle2 {
            margin: 1em auto 1em auto;
            font-size: var(--grmj-font-size-6vw);
            font-weight: var(--grmj-font-weight-6);
            text-shadow: var(--grmj-text-shadow-0);
            text-align: center;
        }

        .grmj-profile-subtitle3 {
            margin: 1em auto 1em auto;
            font-size: var(--grmj-font-size-3vw);
            font-weight: var(--grmj-font-weight-7);
            color: var(--grmj-font-color-5);
            text-shadow: var(--grmj-text-shadow-3);
            text-align: center;
            letter-spacing: var(--grmj-letter-spacing-1a);
        }

        .main + .grmj-pers-fig {
            margin: 4em auto 1em auto;
            position: fixed;
            display: inline-block;
            width: 100%;
            height: auto;
            text-align: center;
            align-content: center; 
        }  

        .grmj-pers-fig > .grmj-pic {
            margin: 3.5em auto 0.5em 3em;
            width: 260px;
            height: auto;
            position: relative;
            border-radius: 2em;        
            filter: var(--grmj-filter-dropShadow-3);
            text-align: center;
            justify-self: center;
            aspect-ratio: 111 / 122;
        }  

        .grmj-pers-fig > #grmjPersFigCap {
            width: 100%;
            position: relative;
            display: inline-block;
            text-align: center;
            font-size: var(--grmj-font-size-10vw);
            color: var(--grmj-font-color-1);
            text-shadow: var(--grmj-text-shadow-0);
        }
    
        .grmj-profile-section {
            margin: 23.75em auto 0em auto;
            padding: 1.25em;
            width: 85%;
            height: auto;
            background-color: var(--grmj-profile-background_3);
            border-radius: 1.5em;
            filter: var(--grmj-filter-dropShadow-3);
        }

        #grmjProfileQuote {
            width: 100%;
            font-size: var(--grmj-font-size-9vw);
            font-weight: var(--grmj-font-weight-6);
            color: var(--grmj-font-color-3);
            text-align: justify;
            text-justify: inter-character;
        }
    
    }
`;

profile_sharedStyles.home = /*css*/ `



`;

export { profile_sharedStyles };
