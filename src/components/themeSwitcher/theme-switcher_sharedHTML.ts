'use strict';

import { themeSwitcher_sharedHTML } from '../../interfaces/interfaces';

const themeSwitcher_sharedHTML = {
  shell: '',
  switcher: '',
  switcherBtn: '',
};

themeSwitcher_sharedHTML.shell = /* html */ `


`;

themeSwitcher_sharedHTML.switcher = /* html */ `

    <div class="container-theme">
    <h1 id="h1Theme" class="h1-theme">Theme Switcher</h1>
    <label id="labelSwitch" class="label-switch">
        <input type="checkbox" id="sliderCheckbox" class="slider-checkbox">
        <span id="span-slider" data-theme-now="" class="span-slider round"></span>
    </label>
    </div>

`;

themeSwitcher_sharedHTML.switcherBtn = /* html */ `


`;

export { themeSwitcher_sharedHTML };

// "typescript.tsdk": "{ C:/Users/gordo/AppData/Roaming/npm/node_modules }/typescript/lib",

// "prettier.tabWidth": 4,
// "prettier.useTabs": false,
// "printWidth": 80,
// "singleQuote": true,
// "trailingComma": "es5",
// "bracketSpacing": true,

// "[javascript]": {
//   "editor.defaultFormatter": "esbenp.prettier-vscode",
//   "editor.formatOnSave": true
// },
