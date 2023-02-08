'use strict';

import { checkSwitch_sharedHTML } from '../../interfaces/interfaces.js';

const checkSwitch_sharedHTML: checkSwitch_sharedHTML = {
    shell: ``,
    switcher: ``
};

checkSwitch_sharedHTML.shell = /*html*/ `

        <check-switch id="checkSwitch" class="check-switch" ck-switch="off">
            <h3 slot="blankMe"> Try Me! </h3>
            <label slot="toggleMe"> Wiggle Me! </label>
        
        </check-switch>

`;

checkSwitch_sharedHTML.switcher = /*html*/ `

        <div id="toggleContainer" class="toggle-container center" data-toggle="false">
            <h3 id="h3TestMe" class="h3-test-me" alt="test-me header"><slot name="blankMe">Test Me!</slot></h3>
            <br>
            <input id="ckBox" class="ck-box switchBox" type="checkbox" alt="toggle switch">
            <br>
            <label id="ckBoxLabel" class="ck-box-label" for="ckBox" alt="toggle switch label">
                <slot name="toggleMe">
                    Toggle Me!
                </slot>
            </label>
        </div>

`;

export { checkSwitch_sharedHTML };
