'use strict';

export class CheckSwitchTemplate extends HTMLElement {
    activateShadowDOM: boolean | undefined = false;

    set template(value: string) {
        this.template = value;
    }

    get template(): string {
        return this.template;
    }

    connectedCallback() {
        if (this.activateShadowDOM) this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }

    render(template: string): void {
        if (this.activateShadowDOM) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.shadowRoot!.innerHTML = template || this.template;
            return;
        } else {
            this.innerHTML = template || this.template;
            return;
        }
    }
}
