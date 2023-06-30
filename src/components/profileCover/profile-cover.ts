/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

import { ProfileCoverTemplate } from './profile-cover_template.js';
import RegisterComponent from '../componentTools/components_services.js';
import { profileCover_sharedHTML } from './profile-cover_sharedHTML.js';
import { profileCover_sharedStyles } from './profile-cover_sharedStyles.js';

export class ProfileCover extends ProfileCoverTemplate {
    override activateShadowDOM = false;
    anchor0: HTMLAnchorElement | undefined;
    anchor1: HTMLAnchorElement | undefined;
    anchor2: HTMLAnchorElement | undefined;
    anchor3: HTMLAnchorElement | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static dataset: any;

    override get template() {
        return /*html*/ ` 
    
            ${profileCover_sharedHTML.cover}
            ${profileCover_sharedHTML.transition}
            <style>${profileCover_sharedStyles.cover}</style>
            <style>${profileCover_sharedStyles.transition}</style>
    
        `;
    }
    static get observedAttributes(): string[] {
        return ['letter'];
    }
    constructor() {
        super();

        this.activateShadowDOM = false;
    }
    override connectedCallback() {
        super.connectedCallback();

        const sectionCheckSet = document.querySelector(
            '#secCover0'
        ) as HTMLElement;
        sectionCheckSet.dataset.active !== 'true' ? switchLetterPage() : null;

        this.anchor0 = document.querySelector('.anc0') as HTMLAnchorElement;
        this.anchor1 = document.querySelector('.anc1') as HTMLAnchorElement;
        this.anchor2 = document.querySelector('.anc2') as HTMLAnchorElement;
        this.anchor3 = document.querySelector('.anc3') as HTMLAnchorElement;

        const grabCoverComponent: HTMLElement | null =
            document.body.querySelector('#profileCover');

        this.anchor0.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            grabCoverComponent?.setAttribute('letter', 'page1');
            switchLetterPage();
            return event.target, event.stopPropagation();
        });
        this.anchor1.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            grabCoverComponent?.setAttribute('letter', 'page2');
            switchLetterPage();
            return event.target, event.stopPropagation();
        });
        this.anchor2.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            grabCoverComponent?.setAttribute('letter', 'page3');
            switchLetterPage();
            return event.target, event.stopPropagation();
        });
        this.anchor3.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            grabCoverComponent?.setAttribute('letter', 'page0');
            const page3 = document.getElementById('secCover3') as HTMLElement;
            page3.style.animation = 'offLoading 4.5s ease-out';
            switchLetterPage();
            return event.target, event.stopPropagation();
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async function switchLetterPage(this: any): Promise<any> {
            try {
                const load = document.getElementById(
                    'loader'
                ) as HTMLDivElement;
                const page0 = document.getElementById(
                    'secCover0'
                ) as HTMLElement;
                const page1 = document.getElementById(
                    'secCover1'
                ) as HTMLElement;
                const page2 = document.getElementById(
                    'secCover2'
                ) as HTMLElement;
                const page3 = document.getElementById(
                    'secCover3'
                ) as HTMLElement;

                const grabbingCoverComponent: HTMLElement | null =
                    document.body.querySelector('#profileCover');
                const componentLetterAttribute: string | undefined | null =
                    grabbingCoverComponent?.getAttribute('letter');
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                load!.style.left = '0';

                switch (componentLetterAttribute) {
                    case 'page0':
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
                        // console.info(
                        //     '%cCurrent Page is || page_0',
                        //     'color: chartreuse; font-size: 0.75rem; font-weight: bold;'
                        // );
                        setTimeout(() => {
                            null;
                            // console.info(
                            //     `%cDataset value for Page 0 is: ${page0.dataset.active}`,
                            //     'color: violet; font-size: 1rem; font-weight: bold;'
                            // );
                        }, 1500);
                        break;
                    case 'page1':
                        setTimeout(() => {
                            load.style.left = '-100%';
                            page1.style.animation = 'loading 1.5s ease-in';
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
                        // console.info(
                        //     '%cCurrent Page is || page_1',
                        //     'color: chartreuse; font-size: 0.75rem; font-weight: bold;'
                        // );
                        setTimeout(() => {
                            null;
                            // console.info(
                            //     `%cDataset value for Page 1 is: ${page1.dataset.active}`,
                            //     'color: violet; font-size: 1rem; font-weight: bold;'
                            // );
                        }, 1500);
                        break;
                    case 'page2':
                        page1.style.animation = 'offLoading 4.5s ease-out';
                        setTimeout(() => {
                            load.style.left = '-100%';
                            page0.dataset.active = 'false';
                            page0.style.display = 'none';
                            page0.style.visibility = 'hidden';
                            page1.dataset.active = 'false';
                            page1.style.display = 'none';
                            page1.style.visibility = 'hidden';
                            page2.style.animation = 'loading 1.5s ease-in';
                            page2.dataset.active = 'true';
                            page2.style.display = 'block';
                            page2.style.visibility = 'visible';
                            page3.dataset.active = 'false';
                            page3.style.display = 'none';
                            page3.style.visibility = 'hidden';
                        }, 1500);
                        // console.info(
                        //     '%cCurrent Page is || page_2',
                        //     'color: chartreuse; font-size: 0.75rem; font-weight: bold;'
                        // );
                        setTimeout(() => {
                            null;
                            // console.info(
                            //     `%cDataset value for Page 2 is: ${page2.dataset.active}`,
                            //     'color: violet; font-size: 1rem; font-weight: bold;'
                            // );
                        }, 1500);
                        break;
                    case 'page3':
                        page2.style.animation = 'offLoading 4.5s ease-out';
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
                            page3.style.animation = 'loading 1.5s ease-in';
                            page3.dataset.active = 'true';
                            page3.style.display = 'block';
                            page3.style.visibility = 'visible';
                        }, 1500);
                        // console.info(
                        //     '%cCurrent Page is || page_3',
                        //     'color: chartreuse; font-size: 0.75rem; font-weight: bold;'
                        // );
                        setTimeout(() => {
                            null;
                            // console.info(
                            //     `%cDataset value for Page 3 is: ${page3.dataset.active}`,
                            //     'color: violet; font-size: 1rem; font-weight: bold;'
                            // );
                        }, 1500);
                        break;
                    default:
                        null;
                        // console.info(
                        //     `%c${componentLetterAttribute} was the Letter Attribute @ DEFAULT of Switch Statement!`,
                        //     'color: red; font-size: 1rem; font-weight: bold;'
                        // );
                        break;
                }
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
    }
    attributeChangedCallback(
        _name: string | undefined | null,
        _oldValue: string | undefined,
        _newValue: string
    ): void {
        setTimeout(() => {
            null;
            // const currentName: string | undefined | null =
            //     this.getAttribute('letter');
            //     console.info(
            //         `%c${currentName} is the current component's letter attribute:
            // ${name} is the name of the attribute.
            // ${newValue} is the new value.
            // ${oldValue} is the old value.`,
            //         'color: orange; font-size: 1rem; font-weight: bold;'
            //     );
        }, 100);
    }
    disconnectedCallback(): void {
        console.info(
            '%cThe Component "ProfileCover" has been removed from the DOM.',
            'color: goldenrod;  font-size: 0.5rem; font-weight: bold;'
        );

        // Remove any event listeners you added in connectedCallback.
        this.anchor0?.removeEventListener('click', (event: MouseEvent) => {
            return event.target, event.stopPropagation();
        });
        this.anchor1?.removeEventListener('click', (event: MouseEvent) => {
            return event.target, event.stopPropagation();
        });
        this.anchor2?.removeEventListener('click', (event: MouseEvent) => {
            return event.target, event.stopPropagation();
        });
        this.anchor3?.removeEventListener('click', (event: MouseEvent) => {
            return event.target, event.stopPropagation();
        });

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
