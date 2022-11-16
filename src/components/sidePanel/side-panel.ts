'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
import { sidePanel_sharedHTML } from './side-panel_sharedHTML.js';
import { setAttributes } from './tools/ts/side-panel_utility.js';
// import express, { Router, Request, Response } from 'express';
// import router from './controller/router.js';

// const app = express();
// const router: Router = express.Router();

// app.use('/', router);

export class SidePanel extends SidePanelTemplate {
	// [x: string]: any;
	// menu: Menu | undefined;
	body: HTMLBodyElement | null | undefined;
	root: any;
	menu: any;
	document: Document | null = this.ownerDocument;
	historyAnchor: HTMLElement | null | undefined;
	// setAAttributes: any;

	constructor() {
		super();

		const body = document.querySelector('body');
		this.body = body;

		this.noShadow = true;
	}

	override connectedCallback() {
		super.connectedCallback();
		// const root: ShadowRoot | null = this.shadowRoot;

		class Menu {
			body: HTMLBodyElement | null | undefined;
			container: HTMLElement | null | undefined;
			big3: HTMLElement | null | undefined;
			vanilla: HTMLElement | null | undefined;
			historyA: HTMLElement | null | undefined;
			isMenuShown: any;

			[x: string]: any;
			setAttributeInput: undefined;

			slide(): any {
				this.body = document.querySelector('body');
				this.container = document.getElementById('container');
				this.big3 = document.getElementById('big-3');
				this.vanilla = document.getElementById('vanilla');
				this.jsSymbol = document.getElementById('js-symbol');
				this.tsSymbol = document.getElementById('ts-symbol');

				!this.isMenuShown
					? ((this.container!.style.transform = 'translateX(0px)'),
					  (this.big3!.style.transform = 'rotate(360deg)'),
					  (this.big3!.style.animation = 'FadeIn 2s'),
					  (this.jsSymbol!.style.transform = 'rotate(360deg)'),
					  (this.jsSymbol!.style.animation = 'FadeIn 2s'),
					  (this.tsSymbol!.style.transform = 'rotate(360deg)'),
					  (this.tsSymbol!.style.animation = 'FadeIn 2s'),
					  (this.vanilla!.style.animation = 'FadeIn 4s'))
					: ((this.container!.style.transform = 'translateX(-210px)'),
					  (this.big3!.style.transform = 'rotate(-360deg)'),
					  (this.big3!.style.animation = 'FadeOut 500ms'),
					  (this.jsSymbol!.style.transform = 'rotate(-360deg)'),
					  (this.jsSymbol!.style.animation = 'FadeOut 500ms'),
					  (this.tsSymbol!.style.transform = 'rotate(-360deg)'),
					  (this.tsSymbol!.style.animation = 'FadeOut 500ms'),
					  (this.vanilla!.style.animation = 'FadeOut 1s'));
				this.isMenuShown = !this.isMenuShown;
			}

			constructor() {
				this.isMenuShown = false;

				let bodi: HTMLElement | null | undefined =
					document.querySelector('body');
				this.bodi = bodi;

				// Résumé
				let itemHTML: any = /*html*/ `
                    <div id="historyDiv" class="item" >&#127915;&nbsp;&nbsp;&nbsp;<a id="historyA" class="history-a" href="/history">Gordon's History</a></div>
                    <div class="item">&#128203;&nbsp;&nbsp;&nbsp;Resume</div>
                    <div  id:="boombox"  class="item">&#128230;&nbsp;&nbsp;&nbsp;<a id="boombox-input" class="boombox-input"
                        type="button" value="stopped">Project Examples</a></div>
                    <div  id:="player"  class="item">&#128211;&nbsp;&nbsp;&nbsp;<a id="player-input" class="player-input"
                        type="button" value="start"> Gordon's Goals</a></div>
                    <div class="item">&lambda;&nbsp;&nbsp;&nbsp;Code Examples &#160 <&#160|&#160></div>

                    <img id="big-3" src="/src/components/sidePanel/tools/images/html-js-css_transparent.png"
                        alt="big three languages image" class="big-3">

                    <hr id="line" class="line">

                    <img id="js-symbol" src="/src/components/sidePanel/tools/images/javascript-transparent.png"
                        alt="big three languages image" class="js-symbol">
                    <img id="ts-symbol" src="/src/components/sidePanel/tools/images/typescript-transparent_tall.png"
                        alt="big three languages image" class="ts-symbol">

                    <hr id="line2" class="line2">

                    <h3 id="vanilla" class="vanilla">Vanilla is BEST!</h3>
                `;
				this.bodi.querySelector('.container').innerHTML = itemHTML;
			}
		}

		const menu = new Menu();
		const ham: HTMLElement | null = document.getElementById('hamburger');
		ham?.addEventListener(
			'click',
			(event: {
				preventDefault: () => void;
				stopPropagation: () => void;
			}) => {
				event.preventDefault();
				menu.slide();
				event.stopPropagation();
			}
		);
		document.addEventListener('click', event => {
			event.preventDefault();

			menu.isMenuShown === true ? menu.slide() : event.stopPropagation(),
				console.info(
					`Menu-Shown: ${
						menu.isMenuShown
					}, Menu-noShow: ${!menu.isMenuShown}`
				);
			// event.stopImmediatePropagation();
		});

		const historyAnchor: HTMLElement | null | undefined =
			document.getElementById('historyA');

		setAttributes(historyAnchor, {
			href: '/history',
			id: 'historyA',
			class: 'history-a'
		});
		this.historyAnchor = historyAnchor;

		this.historyAnchor?.addEventListener('click', event => {
			event.preventDefault();
			open('/history');
			console.info('history clicked');
			// event.stopPropagation();
		});
	}
	override get template() {
		return /*html*/ `
            <style>${sidePanel_sharedStyles.panel}</style>
            ${sidePanel_sharedHTML.panel} 
        `;
	}
}
customElements.define('side-panel', SidePanel);
