'use strict';

import { profileProjects_sharedHTML } from '../../interfaces/interfaces.js';

const profileProjects_sharedHTML = {
    shell: ``,
    projects: ``,
    footerWC: ``,
    footer: ``
};

profileProjects_sharedHTML.shell = /*html*/ `
	<profile-projects id="profileProjects" class="profile-projects" state="rest" data-project-page="0"></profile-projects>
		
	
`;

profileProjects_sharedHTML.projects = /*html*/ `	
	<main id="mainWrapper" class="main-wrapper" alt="Main Projects Container">
			<section class="box a gordon-projects">
				<h1 id="profileProjects__titleH1" class="profile-projects__title-h1">
					Gordon's Projects
				</h1>		

				<ul id="profileProjectsList" class="profile-projects-list"></ul>				
				
			</section>
			<section id="sectionB" class="box b">
				<h1 id="projectViewerH1" class="project-viewer-h1">
					Project App Viewer
				</h1>
				<nav id="projectViewerNav" class="project-viewer-nav"></nav>	
			</section>			
			<section class="box c">C</section>
			<section class="box d">D</section>
	</main>
`;

profileProjects_sharedHTML.footerWC = /*html*/ `
`;

profileProjects_sharedHTML.footer = /*html*/ `
`;

export { profileProjects_sharedHTML };

// <img id="expressImage" class="express-image" src="/src/components/componentTools/resources/images/express.png" />
// <img id="handlebarsImage" class="handlebars-image" src="/src/components/componentTools/resources/images/handlebars.png" />
// <img id="esLintImage" class="es-lint-image" src="/src/components/componentTools/resources/images/eslint.png" />
// <img id="mongoDBImage" class="mongo-db-image" src="/src/components/componentTools/resources/images/mongodb_leaf.png" />
// <img id="penguinImage" class="penguin-image" src="/src/components/componentTools/resources/images/penguin_linux.png" />
// <img id="chromeV8Image" class="chrome-v8-image" src="/src/components/componentTools/resources/images/chrome-V8.png" />
// <img id="mongooseImage" class="mongoose-image" src="/src/components/componentTools/resources/images/mongoose_head-name.png" />

// <br>
// <img id="tsImage" class="ts-image"
// 	src="/src/components/componentTools/resources/images/typescript.png"
// 	alt="Typescript Image" />
// <img id="webBig3Image" class="web-big3-image"
// 	src="/src/components/componentTools/resources/images/html-js-css_transparent.png" />
// <img id="nodeImage" class="node-image"
// 	src="/src/components/componentTools/resources/images/node_js_tall_transparent.png" />
