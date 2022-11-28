'use strict';

import { profileProjects_sharedHTML } from '../../interfaces/interfaces.js';

const profileProjects_sharedHTML = {
	shell: ``,
	projects: ``
};

profileProjects_sharedHTML.shell = /*html*/ `

	<profile-projects id="profileProjects" class="profile-projects">
	</profile-projects>

	`;

profileProjects_sharedHTML.projects = /*html*/ `
	
	<div id="profileProjects__container" class="profile-projects__container">
		<h1 id="profileProjects__title" class="profile-projects__title">
			Gordon's Projects
		</h1>
	</div>
`;

export { profileProjects_sharedHTML };
