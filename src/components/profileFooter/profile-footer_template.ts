'use strict';
export class ProfileFooterTemplate extends HTMLElement {
	noShadow: boolean = true;
	root: ShadowRoot | null = this.shadowRoot;
	private _template: any;
	public get template(): any {
		return this._template;
	}
	public set template(value: any) {
		this._template = value;
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
}
