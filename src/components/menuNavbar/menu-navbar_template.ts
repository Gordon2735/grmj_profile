'use strict';

export class MenuNavbarTemplate extends HTMLElement {
    initializeShadowDOM = false;

    public get template(): string {
        return this.template;
    }
    public set template(value: string) {
        this.template = value;
    }
    connectedCallback() {
        if (this.initializeShadowDOM) this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }
    render(template: string) {
        if (!this.initializeShadowDOM) {
            this.innerHTML = template || this.template;
            return;
        } else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.shadowRoot!.innerHTML = template || this.template;
        }
    }
}
