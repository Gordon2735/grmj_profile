'use strict';

import { profileHistory_sharedHTML } from '../../interfaces/interfaces.js';

const profileHistory_sharedHTML = {
    shell: ``,
    history: ``
};

profileHistory_sharedHTML.shell = /*html*/ `
	<profile-history id="profileHistory" class="profile-history"></profile-history>
`;

profileHistory_sharedHTML.history = /*html*/ `

    <main id="main" class="main">

        <img id="historyImage" src="/src/components/componentTools/resources/images/rustic-circles.webp'" alt="History main picture" class="history-image" type="webp">
        <h1 id="title" class="title">The History of Gordon Mullen</h1>


    </main>
	
`;

export { profileHistory_sharedHTML };
