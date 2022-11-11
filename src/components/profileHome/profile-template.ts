'use strict';

export class ProfileTemplate extends HTMLElement {
	noShadow: any;
	private _template: any;
	public get template(): any {
		return this._template;
	}
	public set template(value: any) {
		this._template = value;
	}
	connectedCallback() {
		if (!this.noShadow) this.attachShadow({ mode: 'open' });
		this.render(this);
	}
	render(template: any) {
		const root: any | null = this.shadowRoot;
		if (this.noShadow) {
			this.innerHTML = template || this.template;
			return;
		} else {
			root.innerHTML = template || this.template;
		}
	}
}
