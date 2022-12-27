'use strict';

'use strict';
export class SidePanelTemplate extends HTMLElement {
  noShadow = true;
  root: ShadowRoot | null = this.shadowRoot;
  private _template: any;

  public get template(): any {
    return this._template;
  }
  public set template(value: any) {
    this._template = value;
  }
  connectedCallback() {
    !this.noShadow
      ? this.attachShadow({ mode: 'open' }) && this.render(this.template)
      : this.render(this.template);
  }
  render(template: any) {
    !this.noShadow
      ? (this.root!.innerHTML = template || this.template)
      : (this.innerHTML = template || this.template);
    return;
  }
}
