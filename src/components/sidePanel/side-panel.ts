'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
import { sidePanel_sharedHTML } from './side-panel_sharedHTML.js';
import Menu from './side-panel_services.js';

export class SidePanel extends SidePanelTemplate {
	// menu: Menu | undefined;
	body: HTMLBodyElement | null | undefined;
	root: any;
	menu: any;
	constructor() {
		super();

		const body = document.querySelector('body');
		this.body = body;

		this.menu = new Menu();

		this.noShadow = true;
	}

	override connectedCallback() {
		super.connectedCallback();

		const root: ShadowRoot | null = this.shadowRoot;

		class Menu {
			body: any;
			static slide() {
				throw new Error('Method not implemented.');
			}
			container: undefined | HTMLElement | null;
			big3: undefined | HTMLElement | null;
			jsSymbol: undefined | HTMLElement | null;
			vanilla: undefined | HTMLElement | null;
			isMenuShown: any;
			setAttributeInput: undefined;
			root: any;
			slide() {
				let container, big3, jsSymbol, vanilla;
				this.container = container;
				this.big3 = big3;
				this.jsSymbol = jsSymbol;
				this.vanilla = vanilla;

				this.container = root?.getElementById('container');
				this.big3 = root?.getElementById(`b!Id('${jsSymbol}`);
				this.vanilla = root?.getElementById('vanilla');

				this.body = document.querySelector('body');
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

				const itemHTML = /*html*/ `
                    <div class="item">&#127932;&nbsp;&nbsp;&nbsp; Synthesizer</div>
                    <div class="item">&#127929;&nbsp;&nbsp;&nbsp; Keyboard</div>
                    <div  id:="boombox"  class="item">&#128251;&nbsp;&nbsp;&nbsp;<a id="boombox-input" class="boombox-input"
                        type="button" value="stopped"> Boom Box</a></div>
                    <div  id:="player"  class="item">&#128192;&nbsp;&nbsp;&nbsp;<a id="player-input" class="player-input"
                        type="button" value="start"> MP3 Player</a></div>
                    <div class="item">&#128187;&nbsp;&nbsp;&nbsp; Code &#160   <  &#160 |  &#160 ></div>

                    <img id="big-3" src="/components/sidePanel/tools/images/html-js-css_transparent.png"
                        alt="big three languages image" class="big-3">

                    <hr id="line" class="line">

                    <img id="js-symbol" src="/components/sidePanel/tools/images/javascript-transparent.png"
                        alt="big three languages image" class="js-symbol">

                    <hr id="line2" class="line2">

                    <h3 id="vanilla" class="vanilla">Vanilla is BEST!</h3>
                `;

				this.body.getElementById('container').innerHTML = itemHTML;
			}
		}
		this.body?.appendChild(this.menu.container);

		this.root
			.getElementById('hamburger')
			.addEventListener(
				'click',
				(event: {
					preventDefault: () => void;
					stopPropagation: () => void;
				}) => {
					event.preventDefault();
					Menu.slide();
					event.stopPropagation();
				}
			);

		this.body?.addEventListener('click', event => {
			event.preventDefault();

			this.menu.isMenuShown === true
				? this.menu.slide()
				: console.warn(this.menu.isMenuShown, this.menu.isMenuShown),
				event.stopPropagation();
		});
	}
	override get template() {
		return /*html*/ `
            <style>${sidePanel_sharedStyles.panel}</style>
            ${sidePanel_sharedHTML.panel} 
        `;
	}

	static get observedAttributes() {
		return ['value'];
	}
	get value() {
		let boombox = this.root.querySelector('#boombox-input');
		return boombox.getAttribute('value');
	}
}
customElements.define('side-panel', SidePanel);
