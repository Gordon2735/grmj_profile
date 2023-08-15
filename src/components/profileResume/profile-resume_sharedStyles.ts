'use strict';

import { profileResume_sharedStyles } from '../../interfaces/interfaces.js';

const profileResume_sharedStyles = {
    shell: ``,
    resume: ``
};

profileResume_sharedStyles.shell = /*css*/ `

@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');
/* font-family: 'Architects Daughter', cursive; */

	body {
		margin: 0;
		padding: 0;
		width: 100%;
		background-color: var(--resume-background-main);
		overflow: hidden;
	}	
`;

profileResume_sharedStyles.resume = /*css*/ `

	.resume-figure {
		margin: 10em auto 0em auto;
		position: absolute;
		top: 14%;
		left: 5.4%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 28vw;
		text-align: center;
		transform: rotate(-9deg);

	}	

	.resume-figure .resume-figure-div {
		background: var(--resume-yellow-note) no-repeat;
		margin: 0em auto 0em auto;
		position: absolute;
		display: inline-flex;
		width: 24.2vw;
		filter: var(--resume-filter-dropShadow-1);
		aspect-ratio: 87/88;
	}

	.resume-figure .resume-figure-title {
		margin: -3.7em 2em 1em -2em;
		position: relative;
		display: inline-flex;
		justify-content: left;
		text-align: left;
		font-family: 'Architects Daughter', cursive;
		font-size: var(--grmj-font-size-7vw);
		color: var(--grmj-font-color-5);
		text-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.7);
		letter-spacing: 0.088em;
		transform: rotate(-7deg);
	}

	.resume-figure .resume-team-bracket {
		margin: 3.2em 5.9em -1em -10.05em;
		position: relative;
		display: inline-flex;
		width: 1.4vw;
		filter: var(--resume-filter-dropShadow-2);
		aspect-ratio: 130/103;
		transform: rotate(-6.2deg);
	}

	.resume-figure .resume-caption {
		margin: -0.4em -0.7em 0em -7.4em;
		position: relative;
		display: inline-flex;
		font-family: var(--grmj-font-family-0);
		font-size: var(--grmj-font-size-1zwx);
		color: var(--resume-color);
		letter-spacing: 0.1em;
		text-align: center;
		transform: rotate(-6.2deg);
	}
	
	.resume-main-container {
		margin: 0em auto 0em auto;
		position: absolute;
		top: 05%;
		left: 28%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 73%;
		height: 92.75%;
		text-align: center;
	}

	.resume-main-container .resume-section {
		margin: 0em auto 0em auto;
		position: relative;
		display: inline-block;
		width: 90%;
		height: 90%;
    	justify-content: flex-start;
		align-items: center;
		text-align: center;
		background: var(--resume-background-section);
		border-radius: 0.5em;
		box-shadow: var(--resume-box-shadow);
	}

	.resume-section .resume-embed {
		margin: 0em auto 0em auto;
		position: relative;
		display: inline-block;
		width: 95%;
		height: 95%;
		justify-content: flex-start;
		align-items: center;
		text-align: center;
	}

	.btn-section {
		margin: 4em auto 0em auto;
		position: absolute;
		top: 45%;
		left: 5.5%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 280px;
		text-align: center;
	}

	.btn-section .btn {
		margin: 0.4em auto 0em auto;
		padding: 1.35em 1.25em 1.25em 1.25em;
		position: relative;
		display: inline-flex;
		background-color: var(--resume-background-btn);		
		width: 180px;
		height: 55px;
		text-align: center;
		decoration: none;
		font-family: var(--grmj-font-family-1);
		font-size: var(--grmj-font-size-3vw);
		justify-content: center;
		align-items: center;
		border: var(--resume-border-btn);
		border-radius: 0.5em;
		filter: var(--resume-filter-dropShadow-3);
	}

	.btn:hover {
		cursor: pointer;
		background-color: var(--resume-background-btn-hover);
		color: var(--resume-btn-text-color-hover);
		width: 183px;
		height: 57px;
	}

	.btn:active {
		color: var(--resume-btn-text-color-active);
	}

	.footer {
		margin-top: -8em auto 6em auto;
		position: absolute;
		width: 32%;
		top: 97.81%;
		left: 38%;
		display: inline-block;
		justify-content: center;
		text-align: center;
	}

	.footer .footer-h3 {
		margin: 0em auto -1.5em auto;
		padding-top: 0.05em;
		position: relative;
		display: inline-block;
		font-family: 'Lexend Deca', sans-serif;
		font-size: 0.9rem;
		font-weight: 400;
		color: var(--resume-footer-color);
		text-shadow: 0.5em 0.5em 0.5em hsla(0, 0%, 0%, 0.5);
	}
	
	.footer .built-by-h1 {
		margin: 0em auto 0em auto;
		position: relative;
		display: inline-block;
		width: 100%;
		text-align: center;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 0.75rem;
		color: var(--resume-footer-color);
		letter-spacing: 0.1em;
		filter: var(--resume-filter-dropShadow-3);
	}
	
	.footer .built-by-h1 u {
		display: inline-block;
		position: relative;
		text-decoration-line: underline;
		font-weight: 200;
		color: var(--resume-footer-color);
		inset: 10% auto 15% auto;
		filter: var(--resume-filter-dropShadow-3);
	}
`;

export { profileResume_sharedStyles };
