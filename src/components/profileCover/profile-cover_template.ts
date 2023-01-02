'use strict';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class ProfileCoverTemplate extends HTMLElement {
  noShadow: boolean = true;
  root: ShadowRoot | null = this.shadowRoot;
  private _template: any;
  public get template(): any {
    return this._template;
  }
  public set template(value: any) {
    this._template = value;
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
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.shadowRoot!.innerHTML = template || this.template;
    }
  }
}
