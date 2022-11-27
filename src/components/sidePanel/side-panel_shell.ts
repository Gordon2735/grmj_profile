'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
import ComponentRegistry, {
	setAttributes
} from '../componentTools/components_services.js';

export class SidePanelShell extends SidePanelTemplate {
	head: HTMLHeadElement | null;
	script: HTMLScriptElement;

	constructor() {
		super();

		this.noShadow = true;

		const head: HTMLHeadElement | null = document.getElementById('head');
		const script: HTMLScriptElement = document.createElement('script');

		this.head = head;
		this.script = script;

		setAttributes(this.script, {
			type: 'module',
			content: 'text/javascript',
			src: '/src/components/sidePanel/side-panel.js'
		});
	}
	override connectedCallback() {
		super.connectedCallback();

		this.head?.appendChild(this.script);
	}
	override get template() {
		return /*html*/ `
			<side-panel id="side-panel" class="side-panel"></side-panel>
            <style>${sidePanel_sharedStyles.global}</style>
        `;
	}
}
ComponentRegistry('side-panel_shell', SidePanelShell);
