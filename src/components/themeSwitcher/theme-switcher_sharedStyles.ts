'use strict';

import { themeSwitcher_sharedStyles } from '../../interfaces/interfaces.js';

const themeSwitcher_sharedStyles = {
    shell: '',
    switcher: '',
    switcherBtn: '',
    home: '',
    letter: '',
    about: '',
    projects: '',
    history: '',
    resume: '',
    codeEx: '',
    goals: '',
    contact: '',
    library: ''
};

themeSwitcher_sharedStyles.shell = /* css */ `

        .theme-switcher-shell {
            position: absolute;
            top: 0%;
            left: 89%;
            z-index: 3;
        }

`;

themeSwitcher_sharedStyles.switcher = /* css */ `

        .container-theme {
            margin-top: 0.5em;
            display: flex;
            width: 210px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            z-index: 1;
        }

        .container-theme .h1-theme {
            padding: 0.4em;
            font-size: 0.7em;
            color: var(--font-color);
            font-family: var(--grmj-font-family-1);
            letter-spacing: 0.15em;
        }

        .container-theme button {
            margin-bottom: 0.3em;
            color: var(--font-color);
            background: var(--color-primary);
            padding: 10px 20px;
            border: 0;
            border-radius: 4px;
            z-index: 2;
        }
        
        /* The switch - the box around the slider */
        .label-switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 18px;
            z-index: 2;
        }

        /* Hide default HTML checkbox */
        .label-switch .slider-checkbox {
            opacity: 0;
            width: 0;
            height: 0;
            z-index: 2;
        }

        /* The slider */
        .span-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            z-index: 2;
        }

        .span-slider::before {
            position: absolute;
            content: "";
            height: 30px;
            width: 30px;
            left: 0px;
            bottom: 4px;
            top: 0;
            bottom: 0;
            margin: auto 0;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            box-shadow: 0 0px 15px #2020203d;
            background: white url('https://i.ibb.co/FxzBYR9/night.png');
            background-repeat: no-repeat;
            background-position: center;
            z-index: 2;
        }

        .slider-checkbox:checked+.span-slider {
            background-color: #2196f3;
            z-index: 1200;
        }

        .slider-checkbox:focus+.span-slider {
            box-shadow: 0 0 1px #2196f3;
            z-index: 1200;
        }

        .slider-checkbox:checked+.span-slider::before {
            -webkit-transform: translateX(24px);
            -ms-transform: translateX(24px);
            transform: translateX(24px);
            background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
            background-repeat: no-repeat;
            background-position: center;
            z-index: 1200;
        }

        /* Rounded sliders */
        .span-slider.round {
            border-radius: 34px;
            z-index: 1200;
        }

        .span-slider.round:before {
            border-radius: 50%;
            z-index: 1200;
        }


`;

themeSwitcher_sharedStyles.switcherBtn = /* css */ `



`;

themeSwitcher_sharedStyles.home = /* css */ `



`;

themeSwitcher_sharedStyles.letter = /* css */ `



`;

themeSwitcher_sharedStyles.about = /* css */ `



`;

themeSwitcher_sharedStyles.projects = /* css */ `



`;

themeSwitcher_sharedStyles.history = /* css */ `



`;

themeSwitcher_sharedStyles.resume = /* css */ `



`;

themeSwitcher_sharedStyles.codeEx = /* css */ `



`;

themeSwitcher_sharedStyles.goals = /* css */ `



`;

themeSwitcher_sharedStyles.contact = /* css */ `



`;

themeSwitcher_sharedStyles.library = /* css */ `



`;

export { themeSwitcher_sharedStyles };

// .theme-light {
//     --color-primary: #0060df;
//     --color-secondary: #fbfbfe;
//     --color-accent: #fd6f53;
//     --font-color: #000000;
// }

// .theme-dark {
//     --color-primary: #17ed90;
//     --color-secondary: #2a2c2d;
//     --color-accent: #12cdea;
//     --font-color: #ffffff;
// }

// "typescript.tsdk": "{ C:/Users/gordo/AppData/Roaming/npm/node_modules }/typescript/lib",
