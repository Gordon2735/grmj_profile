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

	<main id="mainWrapper" class="main-wrapper" alt="Main Projects Container">

			<div class="box gordon-projects">

				<h1 id="profileProjects__title" class="profile-projects__title">
					Gordon's Projects
				</h1>
				
				<img id="tsImage" class="ts-image" 
					src="/src/components/profileProjects/tools/images/typescript.png" 
					alt="Typescript Image" />
				<img id="webBig3Image" class="web-big3-image"
					src="/src/components/profileProjects/tools/images/html-js-css_transparent.png" />
				<img id="nodeImage" class="node-image" src="/src/components/profileProjects/tools/images/node_js_tall_transparent.png" />

				<br>

				<img id="expressImage" class="express-image" src="/src/components/profileProjects/tools/images/express.png" /> 
				<img id="handlebarsImage" class="handlebars-image" src="/src/components/profileProjects/tools/images/handlebars.png" />
				<img id="esLintImage" class="es-lint-image" src="/src/components/profileProjects/tools/images/eslint.png" />
				<img id="mongoDBImage" class="mongo-db-image" src="/src/components/profileProjects/tools/images/mongodb_leaf.png" />
				<img id="penguinImage" class="penguin-image" src="/src/components/profileProjects/tools/images/penguin_linux.png" />
				<img id="chromeV8Image" class="chrome-v8-image" src="/src/components/profileProjects/tools/images/chrome-V8.png" />
				<img id="mongooseImage" class="mongoose-image" src="/src/components/profileProjects/tools/images/mongoose_head-name.png" />

			</div>

			<div class="box b">B</div>
			<div class="box c">C</div>
			<div class="box d">D</div>

	</main>
`;

profileProjects_sharedHTML.slide = /*html*/ `
	
		<div id="hamburgerMenu" class="hamburger-menu">&#9776;</div>
	
		<div id="container" class="container">
		</div>

`;

export { profileProjects_sharedHTML };