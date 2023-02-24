/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';
import { ProfileFooterTemplate } from './profile-footer_template.js';
import { profileFooter_sharedHTML } from './profile-footer_sharedHTML.js';
import { profileFooter_sharedStyles } from './profile-footer_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js';

export class ProfileFooter extends ProfileFooterTemplate {
    override activateShadowDOM = false;
    getHREF: string;
    targetHREF: string;
    getElement: HTMLElement | undefined | null;
    getStyleMap: string;
    coverHREF: string;
    styleModifier: (
        currentHREF: string,
        keyHREF: string,
        targetElement: HTMLElement,
        targetStyleMap: string,
        coverLetterHREF: string
    ) => Promise<void>;

    constructor() {
        super();

        this.activateShadowDOM = false;
        this.getHREF = window.location.href;
        this.targetHREF = 'http://127.0.0.1:9080/';
        this.getElement = document.getElementById('profileFooter');
        this.coverHREF = 'http://127.0.0.1:9080/cover_letter';
        this.getStyleMap = `${profileFooter_sharedStyles.home}`;

        async function styleModifier(
            this: any,
            currentHREF: string,
            keyHREF: string,
            targetElement: HTMLElement,
            targetStyleMap: string,
            coverLetterHREF: string
        ) {
            try {
                switch (currentHREF) {
                    case keyHREF:
                        targetElement.insertAdjacentHTML(
                            'afterbegin',
                            `<style>${targetStyleMap}</style>`
                        );
                        break;
                    case coverLetterHREF:
                        this.getElement.insertAdjacentHTML(
                            'afterbegin',
                            `<style>${profileFooter_sharedStyles.letter}</style>`
                        );
                        break;
                    default:
                        this.getElement.insertAdjacentHTML(
                            'afterbegin',
                            `<style>${profileFooter_sharedStyles.letter}</style>`
                        );
                        break;
                }
            } catch (error: unknown) {
                console.log(`The Footer Style Modifying Function has
					encountered an error of type: ${error}`);
            }
            return;
        }
        this.styleModifier = styleModifier;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        this.styleModifier(
            this.getHREF,
            this.targetHREF,
            this.getElement!,
            this.getStyleMap,
            this.coverHREF
        );
    }
    override get template() {
        return /*html*/ `        
	
			${profileFooter_sharedHTML.footer}
        `;
    }
}
RegisterComponent('profile-footer', ProfileFooter);
