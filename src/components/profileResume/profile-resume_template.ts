'use strict';

export class ResumeTemplate extends HTMLElement {
	noShadow: boolean = true;
	private _template: any;
	public get template(): any {
		return this._template;
	}
	public set template(value: any) {
		this._template = value;
	}
	connectedCallback() {
		!this.noShadow
			? this.attachShadow({ mode: 'open' }) && this.render(this.template)
			: this.render(this.template);
	}
	render(template: any) {
		const root: ShadowRoot | null = this.shadowRoot;

		!this.noShadow
			? (root!.innerHTML = template || this.template)
			: (this.innerHTML = template || this.template);
		return;
	}
}
