/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */

export class ProfileHistoryTemplate extends HTMLElement {
  noShadow: any;
  root: ShadowRoot | null = this.shadowRoot;
  private _template: any;
  public get template(): any {
    return this._template;
  }
  connectedCallback() {
    if (!this.noShadow) this.attachShadow({ mode: 'open' });
    this.render(this.template);
  }
  render(template: undefined) {
    if (this.noShadow) {
      this.innerHTML = template || this.template;
      return;
    } else {
      this.root!.innerHTML = template || this.template;
    }
  }
}
