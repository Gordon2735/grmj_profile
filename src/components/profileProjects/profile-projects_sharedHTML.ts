'use strict';

import { profileProjects_sharedHTML } from '../../interfaces/interfaces.js';

const profileProjects_sharedHTML = {
	shell: ``,
	projects: ``,
	slide: ``
};

profileProjects_sharedHTML.shell = /*html*/ `

	<profile-projects id="profileProjects" class="profile-projects">
	</profile-projects>

	<slide-projects id="slideProjects" class="slide-projects">
	</slide-projects>

`;

profileProjects_sharedHTML.projects = /*html*/ `
	
	<div id="profileProjects__container" class="profile-projects__container">
		<h1 id="profileProjects__title" class="profile-projects__title">
			Gordon's Projects
		</h1>
	</div>
`;

profileProjects_sharedHTML.slide = /*html*/ `
	
		<div id="hamburgerMenu" class="hamburger-menu">&#9776;</div>
	
		<div id="container" class="container">
		</div>

`;

export { profileProjects_sharedHTML };
