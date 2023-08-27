'use strict';

import { chatBox_sharedStyles } from '../../interfaces/interfaces.js';

const chatBox_sharedStyles = {
    shell: ``,
    chatBox: ``,
    footer: ``
};

chatBox_sharedStyles.shell = /*css*/ `

    html,
    body {
        margin: 0;
        padding: 0;
		box-sizing: border-box;

        background-color: var(--chatbox-background-color);
		overflow: hidden;  
    }
 
`;

chatBox_sharedStyles.chatBox = /*css*/ `

	.header {
		margin: 0.75em auto 0em auto;
		padding-top: 0.025em;
		position: absolute;
		width: 31%;
		height: 13.5em;
		top: 7%;
		left: 35.2%;
		display: inline-block;
		background-color: var(--chatbox-background-main);
		border: var(--chatbox-border-standard);
		border-radius: 0.5em;
		justify-content: start;
		text-align: center;	
		filter: var(--chatbox-filter-standard);
	}

	.header .header-chat-gpt-img {
		margin: 0.1em 0em -1.28em auto;
		position: relative;
		display: inline-block;
		width: 6.35em;
		height: 6.35em;	
		filter: var(--chatbox-filter-logo);
		aspect-ratio: 1 / 1;	
	}

	.header .chat-box-h1 {
		margin: 0.25em 1.02em 0em auto;
		position: relative;
		display: inline-block;
		text-align: center;		
		font-family: 'Lexend Deca', sans-serif;
		font-size: 3.2rem;
		font-weight: 700;
		color: var(--chatbox-color-lightgrey);
		letter-spacing: 0.1.2em;
		text-shadow: 0.03em 0.03em 0.03em hsla(0, 0%, 0%, 0.35);
	}

	.header .chat-box-h2 {
		margin: 0.05em auto 0em 0.5em;
		position: relative;
		display: inline-block;
		text-align: center;		
		font-family: 'Lexend Deca', sans-serif;
		font-size: 1.75rem;
		font-weight: 400;
		color: var(--chatbox-color-blue);
		text-shadow: 0.03em 0.03em 0.0915em hsla(0, 0%, 0%, 0.7);
	}

	.header .header-thematic-break {
		margin: 1.0505em auto 0em auto;
		position: relative;
		width: 26em;
		height: 0.068em;
		border:  0 none;
		border-radius: 0.2em;
		text-align: center;
		filter: var(--chatbox-filter-standard);	
		background: hsla(0, 0%, 0%, 0.9);
        background-image: linear-gradient(to right, #ccc, #095484, hsla(0, 0%, 0%, 0.9));	
	}

	.header .header-tw-img {
		margin: 0.85em 0.05em 0.5em auto;
		position: relative;
		display: inline-block;
		width: 1.35em;
		height: 1.15em;	
		filter: var(--chatbox-filter-logo);
		aspect-ratio: 317 / 282;
	}

	.header .tw-h3 {
		margin: 0.05em auto 0em auto;
		position: relative;
		display: inline-block;
		text-align: center;		
		font-family: 'Chango', cursive;
		font-size: 1.25rem;
		font-weight: 400;
		color: var(--chatbox-color-powderblue);
		text-shadow: 0.07em 0.07em 0.05em hsla(0, 0%, 0%, 0.5);
		letter-spacing: 0.08em;
	}

	.tw-h3 sup {
		margin: -0.02em 0em 0em 0em;
		font-family: 'Arial', sans-serif;
		font-size: 0.55em;
		font-weight: 100;
		text-shadow: none;
	}

	.section-openai {
		margin: 0em 5em 0em -3em;
		padding-top: 0.05em;
		position: absolute;
		width: 35%;
		height: 13.5em;
		top: 12%;
		left: 2%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		rotate: -7deg;
	}

	.section-openai .openai-figure {
		margin: 0;
		padding: 0;
		text-align: center;
	}

	.openai-figure .openai-img {
		margin: -1.25em auto 0em auto;
		position: relative;
		display: inline-block;
		width: 14em;
		filter: var(--chatbox-filter-modified);
		border-radius: 0.3em;
		aspect-ratio: 340 / 191;
	}
	.openai-figure .openai-figcaption {
		margin: 0.2em 0em 0em 23em;
		position: relative;
		display: flex;
		justify-content: baseline;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 0.55rem;
		font-weight: 200;
		color: var(--chatbox-color-lightgrey);
		opacity: 0;
		transition: opacity 1s;
	}
	
	.openai-figure .openai-img:hover + .openai-figcaption {
		cursor: pointer;
		opacity: 1;
	}

	.section-robot {
		margin: 0em 3em 0em 0em;
		padding-top: 0.05em;
		position: absolute;
		width: 15%;
		height: 21.5em;
		top: 3%;
		left: 74%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		rotate: 9deg;
	}

	.section-robot .robot-figure {
		margin: 0;
		padding: 0;
		text-align: center;
	}

	.robot-figure .robot-img {
		margin: 0em auto 0em auto;
		position: relative;
		display: inline-block;
		width: 12em;
		/*height: 25em;*/
		filter: var(--chatbox-filter-modified);
		/*aspect-ratio: 340 / 191;*/
	}

	.robot-figure .robot-figcaption {
		margin: 0.2em 0em 0em 4em;
		position: relative;
		display: inline-block;
		justify-content: end baseline;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 0.95rem;
		font-weight: 200;
		color: var(--chatbox-color-lightgrey);
		opacity: 0;
		transition: opacity 1s;
	}

	.robot-figure .robot-img:hover + .robot-figcaption {
		cursor: pointer;
		opacity: 1;
	}

	.openai-chatbot-section {
		margin: 1.2em auto 0em auto;
		position: absolute;
		width: 82%;
		height: 57%;
		top: 35%;
		left: 9%;
		display: inline-block;
		text-align: center;
		border: 1px solid var(--chatbox-color-powderblue_clear);		
		border-radius: 0.5em;
		overflow: hidden;		
	}

	.openai-chatbot-section .openai-time-aside {
		margin: 0em auto 0em auto;
		position: relative;
		display: block;
		width: 20em;
		height: 3.25em;
		text-align: center;
	}

	.openai-chatbot-section .openai-time-aside .openai-time {
		margin: 0em auto 0.2em auto;
		position: relative;
		display: inline-block;
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 0.65rem;
		font-weight: 200;
		color: var(--chatbox-color-powderblue);
		text-shadow: 0.1em 0.1em 0.3em hsla(0, 0%, 0%, 0.7);
		letter-spacing: 0.07em;
	}

	.openai-chatbot-section .openai-frame {
		margin: 0em auto 0em auto;
		position: relative;
		display: inline-block;
		width: 75em;
		height: 24em;
		border-radius: 0.4em;
		overflow: hidden;
		box-shadow:
		  1px 1px 25px var(--chatbox-color-black_white_box),
		  1px 1px 25px var(--chatbox-color-black_white_box),
		  1px 1px 25px var(--chatbox-color-black_white_box),	
		  1px 1px 25px var(--chatbox-color-black_white_box);
	}

	.openai-chatbot-section .openai-span {
		margin: 1.25em auto 0em auto;
		position: relative;
		display: inline-flex;
		flex-direction: row;
		width: 85%;
		height: 12%;
		justify-content: center;
		text-align: center;
	}

	.openai-span .openai-span-break {
		margin: 0em 0.75em 0em 0.75em;
		display: inline-block;
		border: 1px solid var(--chatbox-color-powderblue-thematic);
		height: 3em;
		text-align: center;
		opacity: 0.15;
	}

	.openai-span button {
		margin: 1em auto 0.5em auto;
		position: relative;
		display: inline-block;
		width: 150px;
		height: 25px;
		border-radius: 5px;
		border: none;
		background-image: linear-gradient(to bottom right, #777, #ddd);
		box-shadow:
		  1px 1px 1px black,
		  inset 2px 3px 5px rgba(0, 0, 0, 0.3),
		  inset -2px -3px 5px rgba(255, 255, 255, 0.5);
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 0.75rem;
		font-weight: 200;
		color: var(--chatbox-color-darkblue);
		text-shadow: 0.1em 0.1em 0.3em hsla(0, 0%, 0%, 0.5);
		letter-spacing: 0.1em;	
		text-align: center;
		justify-self: center;
	}

	.openai-chatbot-section .openai-span button:hover {
		cursor: pointer;
		background-color: var(--chatbox-color-blue);
		color: var(--chatbox-color-lightgrey);
		width: 155px;
		line-height: 2.1;
	}

	.openai-chatbot-section .openai-span button:active {
		background-color: var(--chatbox-color-darkblue);
		filter: var(--chatbox-filter-button-active);
	}

`;

chatBox_sharedStyles.footer = /*css*/ `

    .footer {
		margin-top: -8em auto 6em auto;
		position: absolute;
		width: 32%;
		top: 97.81%;
		left: 37%;
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
		color: var(--chatbox-color-blue);
		text-shadow: 0.1em 0.1em 0.3em hsla(0, 0%, 0%, 0.8);
		letter-spacing: 0.13em;
		transition: font-size 1s;
	}

	.footer .footer-h3:hover {
		color: var(--resume-btn-text-color-hover);
		font-size: 1.1rem;
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

export { chatBox_sharedStyles };
