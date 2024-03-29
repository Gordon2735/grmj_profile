/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

export class ProjectsTemplate extends HTMLElement {
    activateShadowDOM = false as boolean;
    root = this.shadowRoot as ShadowRoot;

    public get template(): string {
        return this.template;
    }
    public set template(value: string) {
        this.template = value;
    }

    connectedCallback(): void {
        if (this.activateShadowDOM === true)
            this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }
    render(template: string): void {
        if (this.activateShadowDOM === false) {
            this.innerHTML = template || this.template;
            return;
        } else {
            this.root.innerHTML = template || this.template;
            return;
        }
    }
    disconnectedCallback(): void {
        return;
    }
}
