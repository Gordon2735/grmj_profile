import profile_sharedStyles from '../../interfaces/interfaces.js';

// will have to create an interface for this

const profile_sharedStyles = {
    global: ``,
    home: ``,
    dropdown: ``
};

profile_sharedStyles.global = /*css*/ `   

    .drop-down-shell {
        margin: 0;
        padding: 0;
        position: sticky;
        top: 0em;
        width: 100%;
        height: 10vh;
        z-index: 1;
    }

    .profile-home-shell {
        margin: 0;
        padding: 0;
        top: 0;
    }

    .check-switch-shell {
        margin: 0;
        padding: 0;
        position: absolute;
        top: 95%;
        left: 85%;
    }

`;

profile_sharedStyles.home = /*css*/ `

    .main {
        margin: 0;
        padding: 0;
        position: relative;
        width: 100%;
        height: 100vh;
        background-image: var(--image-home);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .title-official {
        margin: 0em 0em 0em 3.4em;
        padding-top: 1.52em;
        font-size: var(--grmj-font-size-8vw);
        font-weight: var(--grmj-font-weight-4);
        color: var(--color-primary);
        font-style: var(--grmj-italic);
        letter-spacing: var(--grmj-letter-spacing-1a);
    }

    .grmj-profile-title {
        margin: 0.3em auto 0em 1em;
        font-size: max(min(7vw, 1.5em), 4vw);
        font-weight: var(--grmj-font-weight-7);
        color: var(--color-primary);
        text-shadow: var(--grmj-text-shadow-1z);
        letter-spacing: var(--grmj-letter-spacing-1a);
        filter: var(--grmj-filter-dropShadow-4);
    }   

    .title-of {
        margin: 0em auto 2em 16.75em;
        font-size: var(--grmj-font-size-3vw);
        font-weight: var(--grmj-font-weight-4);
        color: var(--color-primary);
        font-style:var(--grmj-italic);
        letter-spacing: var(--grmj-letter-spacing-1a);
    }

    .grmj-pers-fig {
        margin: 2em 0em 1em 7em;
        padding: 1.5em 0.5em;
        top: 13.5em;
        left: 6.5em;
        width: max(min(18vw, 12.5em), 16vw);
        height: auto;
        position: absolute;
        justify-content: center;
    } 

    .grmj-pers-fig .grmj-pic {
        width: 18vw;
        aspect-ratio: 111 / 122;
        border-radius: 2em;        
        filter: var(--filter-dropShadow-5);
    }  

    .grmj-pers-fig .grmj-pers-fig-cap {
        margin-top: 0.5em;
        margin-left: 1.9em;
        position: relative;
        font-size: var(--grmj-font-size-1avw);
        font-weight: var(--grmj-font-weight-7);
        color: var(--color-tertiary);
        text-shadow: var(--grmj-text-shadow-3);
        letter-spacing: var(--grmj-letter-spacing-1);
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

profile_sharedStyles.dropdown = /*css*/ ``;

export { profile_sharedStyles };

// .menu-navbar-shell {
//     margin: 0em 0em 1em 0em;
//     padding: 0;
//     position: absolute;
//     width: 100%;
//     top: 0;
//     z-index: 1000;
// }

// .grmj-profile-section {
//     margin: 10em auto 0.2em auto;
//     padding: auto, 2em;
//     width: 80%;
//     justify-content: center;
// }

// .grmj-profile-section > .grmj-profile-quote {
//     margin: 2em auto 1em auto;
//     font-size: var(--grmj-font-size-1vw);
//     color: var(--grmj-font-color-2);
//     text-align: center;
//     text-justify: inter-word;
// }

// .details-dev {
//     margin: -2.5em 0em 0em 0em;
//     position: absolute;
//     pointer-events: all;
//     left: 35%;
//     z-index: 999;
// }

// .details-software {
//     margin: 3.5em 0em 0em 0em;
//     position: absolute;
//     left: 35%;
// }

// .details-quote {
//     margin: 9.5em 0em 0em 0em;
//     position: absolute;
//     left: 35%;
// }

// .grmj-profile-subtitle2 {
//     margin: 1em 0em 1em 20.4em;
//     font-size: var(--grmj-font-size-3vw);
//     font-weight: var(--grmj-font-weight-6);
//     color: var(--grmj-font-color-3);
//     text-shadow: var(--grmj-text-shadow-1);
// }

// .grmj-profile-subtitle3 {
//     margin: 1em 0 1em 22.8em;
//     font-size: var(--grmj-font-size-2vw);
//     font-weight: var(--grmj-font-weight-7);
//     font-style: var(--grmj-italic);
//     color: var(--grmj-font-color-5);
//     text-shadow: var(--grmj-text-shadow-3);
//     letter-spacing: var(--grmj-letter-spacing-1a);
// }
