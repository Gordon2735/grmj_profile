'use strict';
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
export class ProfileCoverTemplate extends HTMLElement {
  noShadow: boolean = true;
  root: ShadowRoot | null = this.shadowRoot;

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

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
