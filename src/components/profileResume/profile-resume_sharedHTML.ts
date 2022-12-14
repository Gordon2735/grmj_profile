'use strict';

import { profileResume_sharedHTML } from '../../interfaces/interfaces.js';

const profileResume_sharedHTML = {
	shell: ``,
	resume: ``
};

profileResume_sharedHTML.shell = /*html*/ `

	<profile-resume id="profileResume" class="profile-resume"></profile-resume>

`;

profileResume_sharedHTML.resume = /*html*/ `

	<drop-down_shell id="dropDownShell" class="drop-down-shell"></drop-down_shell>

	<h1 id="resumeTitle" class="resume-title">Gordon's Resume</h1>
`;

export { profileResume_sharedHTML };
