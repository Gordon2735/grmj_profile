'use strict';

export class MenuNavbarTemplate extends HTMLElement {
    initializeShadowDOM: boolean = false;

    public get template(): any {
        return this.template;
    }
    public set template(value: any) {
        this.template = value;
    }

    connectedCallback() {
        if (this.initializeShadowDOM) this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }
    render(template: any) {
        if (!this.initializeShadowDOM) {
            this.innerHTML = template || this.template;
            return;
        } else {
            this.shadowRoot!.innerHTML = template || this.template;
        }
    }
}
