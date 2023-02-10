export class ThemeSwitcherTemplate extends HTMLElement {
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
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.shadowRoot!.innerHTML = template || this.template;
        }
    }
}
