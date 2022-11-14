'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
// import { setAttributes } from './tools/ts/side-panel_utility.js';

export class SidePanelShell extends SidePanelTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	override connectedCallback() {
		super.connectedCallback();
	}
	override get template() {
		return /*html*/ `
			<side-panel id="side-panel" class="side-panel"></side-panel>
            <style>${sidePanel_sharedStyles.global}</style>
        `;
	}
}
customElements.define('side-panel_shell', SidePanelShell);
