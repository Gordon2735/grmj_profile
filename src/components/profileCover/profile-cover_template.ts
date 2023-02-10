'use strict';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
export class ProfileCoverTemplate extends HTMLElement {
    noShadow = true;

    public get template(): string {
        return this.template;
    }
    public set template(value: string) {
        this.template = value;
    }

    connectedCallback() {
        if (!this.noShadow) this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }
    render(template: string) {
        if (this.noShadow) {
            this.innerHTML = template || this.template;
            return;
        } else {
            this.shadowRoot!.innerHTML = template || this.template;
        }
    }
}
