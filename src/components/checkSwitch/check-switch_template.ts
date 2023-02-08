'use strict';

export class CheckSwitchTemplate extends HTMLElement {
    activateShadowDOM: Boolean | undefined = false;

    set template(value: any) {
        this.template = value;
    }

    get template(): any {
        return this.template;
    }

    connectedCallback() {
        if (this.activateShadowDOM) this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }

    render(template: any): void {
        if (this.activateShadowDOM) {
            this.shadowRoot!.innerHTML = template || this.template;
            return;
        } else {
            this.innerHTML = template || this.template;
            return;
        }
    }
}
