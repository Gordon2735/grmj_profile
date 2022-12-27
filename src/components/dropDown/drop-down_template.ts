'use strict';

export class DropDownTemplate extends HTMLElement {
  noShadow = true;
  locationHREF: string | undefined;
  checkLocation: string | undefined;
  dropShell: HTMLElement | null | undefined;
  styleSheetMod: string | null | undefined;
  styleSheetFlat: string | null | undefined;
  private _template: any;
  private _homePageStyleMod: any;

  public get template(): any {
    return this._template;
  }

  constructor() {
    super();
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
      this.shadowRoot!.innerHTML = template || this.template;
    }
  }
  public homePageStyleMod(
    locationHREF: string,
    checkLocation: string | undefined,
    dropShell: HTMLElement | null | undefined,
    styleSheetMod: string | null | undefined,
    styleSheetFlat: string | null | undefined
  ): void {
    this.locationHREF = locationHREF;
    this.checkLocation = checkLocation;
    this.dropShell = dropShell;
    this.styleSheetMod = styleSheetMod;
    this.styleSheetFlat = styleSheetFlat;

    try {
      this.locationHREF === this.checkLocation
        ? ((this.dropShell!.innerHTML = `<style>${this.styleSheetMod}</style>`),
          console.log(
            `%cWhat is going on here?`,
            'color: orange; font-size: 3.5rem;'
          ))
        : ((this.dropShell!.innerHTML = `<style>${this.styleSheetFlat}</style>`),
          console.log(
            `%cCurrent page is not the home page`,
            'color: red; font-size: 3.5rem;'
          ));
    } catch (error: unknown) {
      console.log(
        `%cThere has been an error choosing the Drop Down Style
					within the shell ternary statement: Error Code-- || ${error}
					`,
        'color: chartreuse; font-size: 0.4rem;'
      );
    }
    // const insertDropDown: HTMLElement | void =

    this.dropShell!.insertAdjacentHTML(
      'afterbegin',
      `<drop-down id="dropDown" class="drop-down"></drop-down>`
    );
    this.render(this._homePageStyleMod);
    return;
  }
}
