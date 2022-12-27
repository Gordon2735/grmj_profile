'use strict';

import { profileHistory_sharedHTML } from '../../interfaces/interfaces.js';

const profileHistory_sharedHTML = {
  shell: ``,
  history: ``,
};

profileHistory_sharedHTML.shell = /*html*/ `

	<profile-history id="profileHistory" class="profile-history"></profile-history>
	<h1 id="title" class="title">The History of Gordon Mullen</h1>

`;

profileHistory_sharedHTML.history = /*html*/ `

	<drop-down_shell id="dropDownShell" class="drop-down-shell"></drop-down_shell>
	
`;

export { profileHistory_sharedHTML };
