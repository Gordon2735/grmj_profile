'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
import { sidePanel_sharedHTML } from './side-panel_sharedHTML.js';

export class SidePanel extends SidePanelTemplate {
	// [x: string]: any;
	// menu: Menu | undefined;
	body: HTMLBodyElement | null | undefined;
	root: any;
	menu: any;
	document: Document | null = this.ownerDocument;

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
			isMenuShown: any;
			//
			[x: string]: any;

			setAttributeInput: undefined;

			slide(): any {
				this.body = document.querySelector('body');
				this.container = document.getElementById('container');
				this.big3 = document.getElementById('big-3');
				this.vanilla = document.getElementById('vanilla');
				this.jsSymbol = document.getElementById('js-symbol');

				!this.isMenuShown
					? ((this.container!.style.transform = 'translateX(0px)'),
					  (this.big3!.style.transform = 'rotate(360deg)'),
					  (this.big3!.style.animation = 'FadeIn 2s'),
					  (this.jsSymbol!.style.transform = 'rotate(360deg)'),
					  (this.jsSymbol!.style.animation = 'FadeIn 2s'),
					  (this.vanilla!.style.animation = 'FadeIn 4s'))
					: ((this.container!.style.transform = 'translateX(-210px)'),
					  (this.big3!.style.transform = 'rotate(-360deg)'),
					  (this.big3!.style.animation = 'FadeOut 500ms'),
					  (this.jsSymbol!.style.transform = 'rotate(-360deg)'),
					  (this.jsSymbol!.style.animation = 'FadeOut 500ms'),
					  (this.vanilla!.style.animation = 'FadeOut 1s'));
				this.isMenuShown = !this.isMenuShown;
			}

			constructor() {
				this.isMenuShown = false;

				let bods: HTMLElement | null | undefined =
					document.querySelector('body');
				this.bods = bods;

				let itemHTML: any = /*html*/ `
                    <div class="item">&#127932;&nbsp;&nbsp;&nbsp; Synthesizer</div>
                    <div class="item">&#127929;&nbsp;&nbsp;&nbsp; Keyboard</div>
                    <div  id:="boombox"  class="item">&#128251;&nbsp;&nbsp;&nbsp;<a id="boombox-input" class="boombox-input"
                        type="button" value="stopped"> Boom Box</a></div>
                    <div  id:="player"  class="item">&#128192;&nbsp;&nbsp;&nbsp;<a id="player-input" class="player-input"
                        type="button" value="start"> MP3 Player</a></div>
                    <div class="item">&#128187;&nbsp;&nbsp;&nbsp; Code &#160   <  &#160 |  &#160 ></div>

                    <img id="big-3" src="/src/components/sidePanel/tools/images/html-js-css_transparent.png"
                        alt="big three languages image" class="big-3">

                    <hr id="line" class="line">

                    <img id="js-symbol" src="/src/components/sidePanel/tools/images/javascript-transparent.png"
                        alt="big three languages image" class="js-symbol">

                    <hr id="line2" class="line2">

                    <h3 id="vanilla" class="vanilla">Vanilla is BEST!</h3>
                `;
				this.bods.querySelector('.container').innerHTML = itemHTML;
			}
		}

		const menu = new Menu();
		// this.menu = menu;

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
				console.warn(menu.isMenuShown, !menu.isMenuShown);
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
