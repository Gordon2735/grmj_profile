'use strict';

export class SpacexPageTemplate extends HTMLElement {
    activateShadowDOM = false;

    public get template(): string {
        return this.template;
    }
    public set template(value: string) {
        this.template = value;
    }

    connectedCallback() {
        if (this.activateShadowDOM) this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }
    render(template: string) {
        if (this.activateShadowDOM) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.shadowRoot!.innerHTML = template || this.template;
        } else {
            this.innerHTML = template || this.template;
        }
    }
}
