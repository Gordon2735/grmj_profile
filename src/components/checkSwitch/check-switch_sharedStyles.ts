'use strict';

import { checkSwitch_sharedStyles } from '../../interfaces/interfaces.js';

const checkSwitch_sharedStyles: checkSwitch_sharedStyles = {
    shell: ``,
    switcher: ``,
    home: ``
};

checkSwitch_sharedStyles.shell = /*css*/ `

`;

checkSwitch_sharedStyles.switcher = /*css*/ `

        .center {
            position: absolute;
            left: 0%;
            top: 0%;
            width: 460px;
            height: 350px;
            text-align: center;
            justify-content: space-around;
            align-items: center;
            transform: translate(-50%, -50%);
        }

        input[type="checkbox"] {
            margin: 0em auto 0em auto;
            position: relative;
            width: 60px;
            height: 20px;
            -webkit-appearance: none;
            text-align: center;
            background: linear-gradient(0deg, #333, #000);
            cursor: pointer;
            outline: none;
            border-radius: 20px;
            box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px rgba(0, 0, 0, 1);
        }

        input:checked[type="checkbox"]:nth-of-type(1) {
            background: linear-gradient(0deg, #e67e22, #f39c12);
            box-shadow: 0 0 0 4px #353535, 0 0 0 5px #3e3e3e, inset 0 0 10px rgba(0, 0, 0, 1);
        }

        input[type="checkbox"]:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 20px;
            background: linear-gradient(0deg, #000, #6b6b6b);
            border-radius: 20px;
            box-shadow: 0 0 0 1px #232323;
            transform: scale(.98, .96);
            transition: .5s;
        }

        input:checked[type="checkbox"]:before {
            left: 20px;
        }

        input[type="checkbox"]:after {
            content: '';
            position: absolute;
            top: calc(50% - 2px);
            left: 30px;
            width: 4px;
            height: 4px;
            background: linear-gradient(0deg, #6b6b6b, #000);
            border-radius: 50%;
            transition: .5s;
        }

        input:checked[type="checkbox"]:after {
            left: 27px;
        }

        .h3-test-me {
            margin: 0em auto 0em auto;
            padding: 0em 0em 1em 0em;
            display: inline-block;
            text-align: center;
            font-family: sans-serif;
            font-size: 1.8em;
            font-weight: normal;
            color: gold;
            filter: drop-shadow(0.3em 0.6rem 0.65rem rgba(0, 0, 0, 0.99));
            text-transform: uppercase;
            letter-spacing: 0.2em;
        }

        .ck-box-label {
            margin: 0.3em auto 0em auto;
            padding: 0.1em;
            position: relative;
            display: inline-block;
            cursor: pointer;
            font-family: 'chango';
            font-size: 0.8em;
            font-weight: lighter;
            color: slategray;
            text-align: center;
            text-shadow: inset 0.3em 0.6rem 0.65rem rgba(0, 0, 0, 0.99);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            letter-spacing: 0.35em;
        }

        .ck-box-label:hover {
            color: steelblue;
        }

`;

checkSwitch_sharedStyles.home = /*css*/ `

`;

export { checkSwitch_sharedStyles };
