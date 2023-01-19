'use strict';

import { ProfileCoverTemplate } from './profile-cover_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { profileCover_sharedHTML } from './profile-cover_sharedHTML.js';
import { profileCover_sharedStyles } from './profile-cover_sharedStyles.js';

export class ProfileCover extends ProfileCoverTemplate {
  override noShadow: boolean = true;
  anchor0: HTMLAnchorElement | undefined;
  anchor1: HTMLAnchorElement | undefined;
  anchor2: HTMLAnchorElement | undefined;
  anchor3: HTMLAnchorElement | undefined;
  static dataset: any;

  override get template() {
    return /*html*/ ` 
    
      ${profileCover_sharedHTML.cover}
      ${profileCover_sharedHTML.transition}
      <style>${profileCover_sharedStyles.cover}</style>
      <style>${profileCover_sharedStyles.transition}</style>
    
    `;
  }
  static get observedAttributes(): any {
    return ['letter'];
  }
  constructor() {
    super();

    this.noShadow = true;
  }
  override connectedCallback() {
    super.connectedCallback();

    const sectionCheckSet = document.querySelector('#secCover0') as HTMLElement;

    sectionCheckSet.dataset.active === 'true' ? page_0() : null;

    this.anchor0 = document.querySelector('.anc0') as HTMLAnchorElement;
    this.anchor1 = document.querySelector('.anc1') as HTMLAnchorElement;
    this.anchor2 = document.querySelector('.anc2') as HTMLAnchorElement;
    this.anchor3 = document.querySelector('.anc3') as HTMLAnchorElement;
    const grabCoverComponent: HTMLElement | null =
      document.body.querySelector('#profileCover');

    this.anchor0.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      page_1();
      grabCoverComponent?.setAttribute('letter', 'page1');
      return event.target, event.stopPropagation();
    });
    this.anchor1.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      page_2();
      grabCoverComponent?.setAttribute('letter', 'page2');
      return event.target, event.stopPropagation();
    });
    this.anchor2.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      page_3();
      grabCoverComponent?.setAttribute('letter', 'page3');
      return event.target, event.stopPropagation();
    });
    this.anchor3.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      page_0();
      grabCoverComponent?.setAttribute('letter', 'page0');
      return event.target, event.stopPropagation();
    });

    async function page_0(this: any): Promise<any> {
      try {
        const load = document.getElementById('loader') as HTMLDivElement;
        const page0 = document.getElementById('secCover0') as HTMLElement;
        const page1 = document.getElementById('secCover1') as HTMLElement;
        const page2 = document.getElementById('secCover2') as HTMLElement;
        const page3 = document.getElementById('secCover3') as HTMLElement;
        load!.style.left = '0';
        setTimeout(() => {
          load.style.left = '-100%';
          page0.dataset.active = 'true';
          page0.style.display = 'block';
          page0.style.visibility = 'visible';
          page1.dataset.active = 'false';
          page1.style.display = 'none';
          page1.style.visibility = 'hidden';
          page2.dataset.active = 'false';
          page2.style.display = 'none';
          page2.style.visibility = 'hidden';
          page3.dataset.active = 'false';
          page3.style.display = 'none';
          page3.style.visibility = 'hidden';
        }, 1500);
        console.info(
          '%cCurrent Page is || page_0',
          'color: chartreuse; font-size: 0.75rem; font-weight: bold;'
        );
        return setTimeout(() => {
          console.info(
            `%cDataset value for Page 0 is: ${page0.dataset.active}`,
            'color: violet; font-size: 1rem; font-weight: bold;'
          );
        }, 1500);
      } catch (error: unknown) {
        alert(`**Warning** || Sorry, but there has been an Error invoking function page_0. 
          || ****  ${error}  ****`);
        console.error(
          `%c**Warning** || Sorry, but there has been an Error invoking function page_0. 
            || ****  ${error}  ****`,
          'color: red; font-size: 0.5rem; font-weight: bold;'
        );
      }
    }

    async function page_1(this: any): Promise<any> {
      try {
        const load = document.getElementById('loader') as HTMLDivElement;
        const page0 = document.getElementById('secCover0') as HTMLElement;
        const page1 = document.getElementById('secCover1') as HTMLElement;
        const page2 = document.getElementById('secCover2') as HTMLElement;
        const page3 = document.getElementById('secCover3') as HTMLElement;
        load!.style.left = '0';
        setTimeout(() => {
          load.style.left = '-100%';
          page0.dataset.active = 'false';
          page0.style.display = 'none';
          page0.style.visibility = 'hidden';
          page1.dataset.active = 'true';
          page1.style.display = 'block';
          page1.style.visibility = 'visible';
          page2.dataset.active = 'false';
          page2.style.display = 'none';
          page2.style.visibility = 'hidden';
          page3.dataset.active = 'false';
          page3.style.display = 'none';
          page3.style.visibility = 'hidden';
        }, 1500);
        console.info(
          '%cCurrent Page is || page_1',
          'color: chartreuse; font-size: 0.75rem; font-weight: bold;'
        );
        return setTimeout(() => {
          console.info(
            `%cDataset value for Page 1 is: ${page1.dataset.active}`,
            'color: violet; font-size: 1rem; font-weight: bold;'
          );
        }, 1500);
      } catch (error: unknown) {
        alert(`**Warning** || Sorry, but there has been an Error invoking function page_1. 
        || ****  ${error}  ****`);
        console.error(
          `%c**Warning** || Sorry, but there has been an Error invoking function page_1. 
          || ****  ${error}  ****`,
          'color: red; font-size: 0.5rem; font-weight: bold;'
        );
      }
    }

    async function page_2(this: any): Promise<any> {
      try {
        const load = document.getElementById('loader') as HTMLDivElement;
        const page0 = document.getElementById('secCover0') as HTMLElement;
        const page1 = document.getElementById('secCover1') as HTMLElement;
        const page2 = document.getElementById('secCover2') as HTMLElement;
        const page3 = document.getElementById('secCover3') as HTMLElement;
        load!.style.left = '0';
        setTimeout(() => {
          load.style.left = '-100%';
          page0.dataset.active = 'false';
          page0.style.display = 'none';
          page0.style.visibility = 'hidden';
          page1.dataset.active = 'false';
          page1.style.display = 'none';
          page1.style.visibility = 'hidden';
          page2.dataset.active = 'true';
          page2.style.display = 'block';
          page2.style.visibility = 'visible';
          page3.dataset.active = 'false';
          page3.style.display = 'none';
          page3.style.visibility = 'hidden';
        }, 1500);
        console.info(
          '%cCurrent Page is || page_2',
          'color: chartreuse; font-size: 0.75rem; font-weight: bold;'
        );
        return setTimeout(() => {
          console.info(
            `%cDataset value for Page 2 is: ${page2.dataset.active}`,
            'color: violet; font-size: 1rem; font-weight: bold;'
          );
        }, 1500);
      } catch (error: unknown) {
        alert(`**Warning** || Sorry, but there has been an Error invoking function page_2. 
        || ****  ${error}  ****`);
        console.error(
          `%c**Warning** || Sorry, but there has been an Error invoking function page_2. 
          || ****  ${error}  ****`,
          'color: red; font-size: 0.5rem; font-weight: bold;'
        );
      }
    }

    async function page_3(this: any): Promise<any> {
      try {
        const load = document.getElementById('loader') as HTMLDivElement;
        const page0 = document.getElementById('secCover0') as HTMLElement;
        const page1 = document.getElementById('secCover1') as HTMLElement;
        const page2 = document.getElementById('secCover2') as HTMLElement;
        const page3 = document.getElementById('secCover3') as HTMLElement;
        load!.style.left = '0';
        setTimeout(() => {
          load.style.left = '-100%';
          page0.dataset.active = 'false';
          page0.style.display = 'none';
          page0.style.visibility = 'hidden';
          page1.dataset.active = 'false';
          page1.style.display = 'none';
          page1.style.visibility = 'hidden';
          page2.dataset.active = 'false';
          page2.style.display = 'none';
          page2.style.visibility = 'hidden';
          page3.dataset.active = 'true';
          page3.style.display = 'block';
          page3.style.visibility = 'visible';
        }, 1500);
        console.info(
          '%cCurrent Page is || page_3',
          'color: chartreuse; font-size: 0.75rem; font-weight: bold;'
        );
        return setTimeout(() => {
          console.info(
            `%cDataset value for Page 3 is: ${page3.dataset.active}`,
            'color: violet; font-size: 1rem; font-weight: bold;'
          );
        }, 1500);
      } catch (error: unknown) {
        alert(`**Warning** || Sorry, but there has been an Error invoking function page_3. 
        || ****  ${error}  ****`);
        console.error(
          `%c**Warning** || Sorry, but there has been an Error invoking function page_3. 
          || ****  ${error}  ****`,
          'color: red; font-size: 0.5rem; font-weight: bold;'
        );
      }
    }
  }
  attributeChangedCallback(
    name: string | undefined,
    oldValue: string | undefined,
    newValue: string
  ): any {
    setTimeout(() => {
      let currentName: any = this.getAttribute('letter');
      console.info(
        `%c${currentName} is the current component's letter attribute:
        ${name} is the name of the attribute.
        ${newValue} is the new value.
        ${oldValue} is the old value.`,
        'color: orange; font-size: 1rem; font-weight: bold;'
      );
    }, 3500);
  }
  disconnectedCallback(): any {
    console.info(
      '%cThe Component "ProfileCover" has been removed from the DOM.',
      'color: goldenrod;  font-size: 0.5rem; font-weight: bold;'
    );

    // Remove any event listeners you added in connectedCallback.

    // Remove any children you added in connectedCallback.

    // Remove any references to any DOM nodes you added in connectedCallback.

    // Remove any references to any global objects you created in connectedCallback.

    // Remove any references to any other components you created in connectedCallback.
  }
}
RegisterComponent('profile-cover', ProfileCover);

//
//
//
// If your component adds an event listener to anything except
// itself or its children–for example, to Window, Document, or
// some element in the main DOM–you should add the listener in
// connectedCallback and remove it in disconnectedCallback.
//
