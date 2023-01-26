export class ThemeSwitcherTemplate extends HTMLElement {
  noShadow: boolean = true;

  public get template(): any {
    return this.template;
  }
  public set template(value: any) {
    this.template = value;
  }

  connectedCallback() {
    if (!this.noShadow) this.attachShadow({ mode: 'open' });
    this.render(this.template);
  }

  render(template: any) {
    if (this.noShadow) {
      this.innerHTML = template || this.template;
      return;
    } else {
      this.shadowRoot!.innerHTML = template || this.template;
    }
  }
}
