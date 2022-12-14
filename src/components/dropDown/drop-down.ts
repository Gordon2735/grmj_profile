'use strict';

import { DropDownTemplate } from './drop-down_template.js';
import { dropDown_sharedHTML } from './drop-down_sharedHTML.js';
import { dropDown_sharedStyles } from './drop-down_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes,
// import historyStack from '../../controller/state/profileState.js';

export class DropDown extends DropDownTemplate {
	override noShadow: boolean = true;
	// State: any | undefined;
	// historyStack: import('d:/grmj_profile/src/interfaces/interfaces').HistoryObject;
	head: HTMLHeadElement | null;
	dd1: any;
	dd2: any;
	appendChildren(
		_parent: HTMLElement | ShadowRoot | null,
		_attribute: string | object | any
	): void {}
	setAttributes(_tag: HTMLElement, _attribute: string | object | any): void {}

	constructor(dd1: any, dd2: any) {
		super();

		this.noShadow = true;
		this.dd1 = dd1;
		this.dd2 = dd2;

		// let State: any | undefined;
		// this.State = State;
		// this.State = { pageOpen: '/' };
		// this.historyStack = historyStack;

		const head: HTMLHeadElement | null = document.querySelector('head');

		this.head = head;
		const root = this.shadowRoot;
		this.root = root;

		// window.history.replaceState(this.State, 'home', '');
		// this.historyStack.push(history.state);

		// window.onpopstate = event => {
		// 	event.state
		// 		? ((this.State = event.state), this.historyStack.pop())
		// 		: (this.State = { pageOpen: '/' });
		// 	console.log(this.State.pageOpen);
		// };
		// console.log(history.state);
		// console.log(this.historyStack);
	}
	override get template() {
		return /*html*/ `
        
            ${dropDown_sharedHTML.dropdown}
            <style>${dropDown_sharedStyles.dropdown}</style>        
        `;
	}
	override connectedCallback(): void {
		super.connectedCallback();

		console.log('DropDown Menu is Rendered :::: HooT™️ Webelistics®️ ');

		function DropDownMenu(
			this: any,
			o: {
				id: string;
				val: string;
				data: string[];
				cb: ((newval: any) => void) | ((newval: any) => void);
			}
		): any {
			this.options = o;

			// for root to work I'd have to change this "window.getdd"
			(<any>window).getdd = function (elem: {
				closest: (arg0: string) => {
					(): any;
					new (): any;
					parentElement: { (): any; new (): any; id: any };
				};
			}) {
				var id = elem.closest('.dropdown').parentElement.id;
				return (<any>window).dropdowns[id];
			};

			this.init = function (): void {
				this.elem = document.getElementById(this.options.id);

				let val: any;
				switch (window.location.href) {
					case 'http://127.0.0.1:9080/':
						val = this.options.val = 'Home';
						break;
					case 'http://127.0.0.1:9080/projects':
						val = this.options.val = 'Projects';
						break;
					case 'http://127.0.0.1:9080/history':
						val = this.options.val = 'History';
						break;
					case 'http://127.0.0.1:9080/resume':
						val = this.options.val = 'Resume';
						break;
					case 'http://127.0.0.1:9080/goals':
						val = this.options.val = 'Goals';
						break;
					case 'http://127.0.0.1:9080/code_examples':
						val = this.options.val = 'Code Examples';
						break;
					case 'http://127.0.0.1:9080/contact':
						val = this.options.val = 'Contact';
						break;
					case 'http://127.0.0.1:9080/library':
						val = this.options.val = 'Library';
						break;
					default:
						val = this.options.val = 'Home';
				}

				let HTML: string = /*html*/ `
                    <div id:="dropdown" class="dropdown">
                        <div class="dropdown_value">${val}</div>
                        <div class="dropdown_arrow">▾</div>
                        <div   class="dropdown_panel">
                            <div id:="dd1s"  class="dropdown_items scrollbar"></div>
                        </div>
                    </div>                
                `;

				this.elem.innerHTML = HTML;
				let elem: any = this.elem;

				// { { !--Make parent elem inline - block--; } }
				this.elem.style.display = 'inline-block';

				if (!(<any>window).dropdowns) (<any>window).dropdowns = {};
				(<any>window).dropdowns[this.options.id] = this;

				this.items = elem.querySelector(
					'.dropdown_items'
				) as HTMLDivElement;
				this.arrow = elem.querySelector(
					'.dropdown_arrow'
				) as HTMLDivElement;
				this.value = elem.querySelector(
					'.dropdown_value'
				) as HTMLDivElement;

				const data: any = this.options.data;
				HTML = '';
				data.forEach(function (elem: any) {
					HTML += /*html*/ `
                        <div class="dropdown_item" onmousedown="var self = getdd(this); self.clicked(this)">${elem}</div>
                    `;
				});
				this.items.innerHTML = HTML;

				var self: any = this;

				document.addEventListener('mousedown', function () {
					self.hide();
				});

				this.elem.addEventListener(
					'mousedown',
					function (event: Event) {
						event.preventDefault();
						event.stopPropagation();
						if (self.inVisible) self.hide();
						else self.show();
					}
				);
			};

			this.clicked = function (elem: { innerHTML: any }) {
				let event: Event | undefined;
				event?.stopPropagation();
				this.hide();

				var _newval: any = elem.innerHTML;
				this.value.innerHTML = _newval;

				if (this.options.cb) this.options.cb(_newval);
			};

			this.show = function (): void {
				// { { !--close all dropdowns--; } }
				for (var dd in (<any>window).dropdowns)
					(<any>window).dropdowns[dd].hide();

				this.inVisible = true;
				this.items.style.transform = 'translate(0px, 0px)';
				this.arrow.style.transform = 'rotate(180deg)';
			};

			this.hide = function (): void {
				if (!this.inVisible) return;

				this.inVisible = false;
				this.items.style.transform = 'translate(0px, -255px)';
				this.arrow.style.transform = 'rotate(0deg)';
			};

			this.init();

			return this;
		}

		this.dd1 = new (DropDownMenu as any)({
			id: 'dd1',
			val: 'Home',
			data: [
				'Home',
				'Projects',
				'History',
				'Resume',
				'Goals',
				'Code Examples',
				'Contact',
				'Library'
			],
			cb: function (_newval: any) {
				switch (_newval) {
					case 'Home':
						window.location.href = '/';
						break;
					case 'Projects':
						window.location.href = '/projects';
						break;
					case 'History':
						window.location.href = '/history';
						break;
					case 'Resume':
						window.location.href = '/resume';
						break;
					case 'Goals':
						window.location.href = '/goals';
						break;
					case 'Code Examples':
						window.location.href = '/code_examples';
						break;
					case 'Contact':
						window.location.href = '/contact';
						break;
					case 'Library':
						window.location.href = '/library';
						break;
					default:
						window.location.href = '/';
				}
			}
		});
		console.log(window.location.href);

		this.dd2 = new (DropDownMenu as any)({
			id: 'dd2',
			val: 'rabbit',
			data: [
				'cat',
				'dog',
				'mouse',
				'horse',
				'rabbit',
				'lion',
				'bear',
				'tiger'
			],
			cb: function (_newval: any) {
				// { { !--alert(newval); --} }
			}
		});
	}
	// static get observedAttributes() {
	// 	return ['window.location.href'];
	// }
	// public attributeChangedCallback(
	// 	name: string,
	// 	_oldValue: string,
	// 	_newValue: string
	// ) {
	// 	_oldValue !== _newValue
	// 		? console.info(`old location: ${_oldValue},
	// 			${name} has a new location of: ${_newValue}
	// 			which should be equal to: ${window.location} `)
	// 		: console.info(`old location: ${_oldValue}`);
	// }
}
RegisterComponent('drop-down', DropDown);
