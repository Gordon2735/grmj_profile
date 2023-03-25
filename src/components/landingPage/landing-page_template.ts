/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

export class LandingPageTemplate extends HTMLElement {
    activateShadowDOM = false as boolean;
    root: ShadowRoot | null = this.shadowRoot;

    public set template(value: string) {
        this.template = value;
    }

    public get template(): string {
        return this.template;
    }

    connectedCallback(): void {
        if (this.activateShadowDOM) this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }
    render(template: string): void {
        if (!this.activateShadowDOM) {
            this.innerHTML = template || this.template;
            return;
        } else {
            this.root!.innerHTML = template || this.template;
            return;
        }
    }
}
