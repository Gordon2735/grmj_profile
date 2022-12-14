'use strict';

export class ProjectsTemplate extends HTMLElement {
	noShadow: boolean = true;
	root: ShadowRoot | null = this.shadowRoot;
	public _template: any;

	public get template(): any {
		this.noShadow = true;
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
		!this.noShadow
			? (this.shadowRoot!.innerHTML = template || this.template)
			: (this.innerHTML = template || this.template);
		return;
	}
	// render(template: any) {
	// 	const root: any | null = this.shadowRoot;
	// 	if (this.noShadow) {
	// 		this.innerHTML = template || this.template;
	// 		return;
	// 	} else {
	// 		root.innerHTML = template || this.template;
	// 	}
	// }
}
