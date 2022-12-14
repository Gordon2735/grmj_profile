'use strict';

import profileHistory_sharedStyles from '../../interfaces/interfaces.js';

const profileHistory_sharedStyles = {
	shell: ``,
	history: ``
};

profileHistory_sharedStyles.shell = /*css*/ `

    body {
        background-image: var(--grmj-profile-background_image_3);

    }

`;

profileHistory_sharedStyles.history = /*css*/ `

    .title {
        margin: 2em auto 1em auto;	
        left: 3em;	
        position: relative;
        font-family: var(--grmj-font-family-1);
        font-size: var(--grmj-font-size-11vw);
        font-weight: var(--grmj-font-weight-7);
        color: var(--grmj-font-color-2);
        text-shadow: var(--grmj-text-shadow-1);
        letter-spacing: var(--grmj-letter-spacing-1a);
    }

    .early-years-section {
        margin: 10em 5em 2em 0em;
        width: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .early-years-para {
        margin: -1.5em 2em 2em 3em;
        padding: 0em 2em;
        font-family: var(--grmj-font-family-1);
        font-size: var(--grmj-font-size-5vw);
        font-weight: var(--grmj-font-weight-4);
        color: var(--grmj-font-color-3);
        text-shadow: var(--grmj-text-shadow-1);
        text-align: justify;
    }

`;

export { profileHistory_sharedStyles };
