'use strict';

import { DropDownTemplate } from './drop-down_template.js';
import { dropDown_sharedHTML } from './drop-down_sharedHTML.js';
import { dropDown_sharedStyles } from './drop-down_sharedStyles.js';
import RegisterComponent, {
	setAttributes,
	appendChildren
} from '../componentTools/components_services.js';

export class DropDownShell extends DropDownTemplate {
	override noShadow: boolean;
	head: HTMLHeadElement | null;
	scriptDropDown: HTMLScriptElement;

	appendChildren(
		_parent: HTMLElement | ShadowRoot | null,
		_attributes: string | object | any
	): void {}
	setAttributes(_tag: HTMLElement, _attribute: string | object | any): void {}

	override get template() {
		return /*html*/ `
			${dropDown_sharedHTML.shell}
			${dropDown_sharedHTML.dynadrop}

        `;
	}
	constructor() {
		super();

		this.noShadow = true;

		this.head = document.querySelector('head');
		this.scriptDropDown = document.createElement('script');

		setAttributes(this.scriptDropDown, {
			type: 'module',
			content: 'text/javascript',
			src: '/src/components/dropDown/drop-down.js',
			alt: 'DropDown Menu Script'
		});
	}
	override connectedCallback(): void {
		super.connectedCallback();

		appendChildren(this.head, [this.scriptDropDown]);
		this.homePageStyleMod();

		return;
	}
	override homePageStyleMod() {
		super.homePageStyleMod(
			(this.locationHREF = window.location.href),
			(this.checkLocation = 'http://127.0.0.1:9080/'),
			(this.dropShell = document.getElementById('dropDownShell')),
			(this.styleSheetMod = `${dropDown_sharedStyles.home}`),
			(this.styleSheetFlat = `${dropDown_sharedStyles.dropdown}`)
		);
		return;
	}
	override render() {}
}
RegisterComponent('drop-down_shell', DropDownShell);
