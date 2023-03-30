'use strict';

import sidePanel_sharedHTML from '../../interfaces/interfaces.js';

const sidePanel_sharedHTML = {
    shell: ``,
    panel: ``
};

sidePanel_sharedHTML.shell = /*html*/ `

	<side-panel id="side-panel" class="side-panel"></side-panel>
    
`;

sidePanel_sharedHTML.panel = /*html*/ `
    <div id="hamburgers" class="hamburgers">&#9776;</div>
    <div id="container" class="container" data-testid="containertestid" name="slide-container">
    </div>
`;

export { sidePanel_sharedHTML };
