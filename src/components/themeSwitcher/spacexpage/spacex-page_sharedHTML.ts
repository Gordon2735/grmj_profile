'use strict';

import { spacexPage_sharedHTML } from '../../../interfaces/interfaces.js';

const spacexPage_sharedHTML = {
    shell: ``,
    spacex: ``,
    spacexData: ``
};

spacexPage_sharedHTML.shell = /*html*/ `


`;

spacexPage_sharedHTML.spacex = /*html*/ `

    <main id="main" class="main" data-set-main="startup">

        <aside id="time-date" class="time-date" alt="Time and Date">
            <div id="time" class="time" data-set-time="00:00:00"></div>
            <div id="date" class="date" data-set-date="0000-00-00"></div>
        </aside>

        <h1 id="h1Title" class="h1-title" alt="H1 Page Title">
            SpaceX Launch Data
        </h1>    
    
    </main>

`;

spacexPage_sharedHTML.spacexData = /*html*/ `


`;

export { spacexPage_sharedHTML };

// <h3 id="flight-number" class="block">Flight Number</h3>
// <h3 id="launch-date" class="block">Date</h3>
// <h3 id="Name" class="block">Name</h3>
// <h3 id="success" class="block">Success</h3>
// <h3 id="links" class="block">Links</h3>

// <div id="logo-box" class="logo-box" alt="SpaceX">
// <img id="spacex-logo" class="spacex-logo" src="/src/components/componentTools/resources/images/spacex_images/SpaceX-Logo-700x394.png" alt="SpaceX Logo" />
// </div>
