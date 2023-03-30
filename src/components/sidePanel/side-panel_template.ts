/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

export class SidePanelTemplate extends HTMLElement {
    // override shadowRoot: ShadowRoot = this.shadowRoot;
    activateShadowDOM = false;
    // declare root: ShadowRoot;

    public get template(): string {
        return this.template;
    }
    public set template(value: string) {
        this.template = value;
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
            this.shadowRoot!.innerHTML = template || this.template;
        }
    }
}
