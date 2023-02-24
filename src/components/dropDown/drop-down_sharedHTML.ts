'use strict';

import { dropDown_sharedHTML } from '../../interfaces/interfaces.js';

const dropDown_sharedHTML = {
    shell: ``,
    dropdown: ``,
    dynadrop: ``
};

dropDown_sharedHTML.shell = /*html*/ `
`;

dropDown_sharedHTML.dropdown = /*html*/ `
	<section id="ddSection" class="dd-section" data-testid="dropdowntestid" name="ddsection">
		<section id="shutdownContainer" class="shutdown-container">
			<button id="shutdownButton" class="shutdown-button" data-testid="shutdownbutton" name="shutdownbutton">Shutdown</button>
		</section>
   		<div id="dd1"></div><div id="dd2"></div>
	</section>
`;

dropDown_sharedHTML.dynadrop = /*html*/ `
	
`;

export { dropDown_sharedHTML };

// <drop-down id="dropDown" class="drop-down" operations="startup" data-dd1_2="hiding"></drop-down>
