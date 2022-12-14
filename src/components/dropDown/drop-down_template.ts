'use strict';

export class DropDownTemplate extends HTMLElement {
	noShadow: boolean = true;
	root: ShadowRoot | null = this.shadowRoot;
	public get template(): any {
		return this.template;
	}
	connectedCallback() {
		if (!this.noShadow) this.attachShadow({ mode: 'open' });
		this.render(this.template);
	}

	render(template: undefined) {
		if (this.noShadow) {
			this.innerHTML = template || this.template;
			return;
		} else {
			this.shadowRoot!.innerHTML = template || this.template;
		}
	}
	// connectedCallback() {
	// 	!this.noShadow
	// 		? this.attachShadow({ mode: 'open' }) && this.render(this.template)
	// 		: this.render(this.template);
	// }
	// render(template: any) {
	// 	!this.noShadow
	// 		? (this.root!.innerHTML = template || this.template)
	// 		: (this.innerHTML = template || this.template);
	// }
}
