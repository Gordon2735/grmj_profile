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
    currentHREF: string;
    targetHREF: string;
    targetStyleMap: string;
    targetElement: HTMLElement;
    getElement: HTMLElement | undefined | null;
    getStyleMap: string;
    landingHREF: string;
    homeHREF: string;
    coverHREF: string;
    projectHREF: string;
    blogHREF: string;
    contactHREF: string;
    aboutHREF: string;
    resumeHREF: string;
    goalsHREF: string;
    historyHREF: string;
    codeExHREF: string;
    pageHREF: string;
    coverLetterHREF: any;
    styleModifier: string;

    constructor(
        pageHREF: string,
        targetHREF: string,
        targetStyleMap: string,
        targetElement: HTMLElement,
        styleModifier: string,
        landingHREF: string,
        homeHREF: string,
        coverLetterHREF: string,
        projectHREF: string,
        blogHREF: string,
        contactHREF: string,
        aboutHREF: string,
        resumeHREF: string,
        goalsHREF: string,
        historyHREF: string,
        codeExHREF: string
    ) {
        super();

        this.activateShadowDOM = false;
        this.getHREF = window.location.href;
        this.currentHREF = this.getHREF;
        this.targetHREF = targetHREF;
        this.targetStyleMap = targetStyleMap;
        this.targetElement = targetElement;
        this.styleModifier = styleModifier;
        this.getElement = document.getElementById('profileFooter');
        this.landingHREF = landingHREF;
        this.homeHREF = homeHREF;
        this.coverHREF = coverLetterHREF;
        this.getStyleMap = `${profileFooter_sharedStyles}`;
        this.pageHREF = pageHREF;
        this.coverLetterHREF = coverLetterHREF;
        this.projectHREF = projectHREF;
        this.blogHREF = blogHREF;
        this.contactHREF = contactHREF;
        this.aboutHREF = aboutHREF;
        this.resumeHREF = resumeHREF;
        this.goalsHREF = goalsHREF;
        this.historyHREF = historyHREF;
        this.codeExHREF = codeExHREF;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        // async function styleModifier(
        //     this: any,
        //     getHREF: string,
        //     targetHREF: string,
        //     targetStyleMap: string,
        //     targetElement: HTMLElement
        // ): Promise<string> {
        //     try {
        //         switch (targetHREF) {
        //             case getHREF:
        //                 targetElement.insertAdjacentHTML(
        //                     'afterbegin',
        //                     `<style>${targetStyleMap}</style>`
        //                 );
        //                 break;

        //             default:
        //                 this.getElement.insertAdjacentHTML(
        //                     'beforeend',
        //                     `<style>${profileFooter_sharedStyles.letter}</style>`
        //                 );
        //                 break;
        //         }
        //     } catch (error: unknown) {
        //         console.log(`The Footer Style Modifying Function has
        // 			encountered an error of type: ${error}`);
        //     }
        //     return targetHREF;
        // }

        const currentStyleMod = async (): Promise<string> => {
            // switch to map the current page to modify the styles of the footer
            switch (this.currentHREF) {
                case 'http://127.0.0.1:9080/':
                    this.targetStyleMap = profileFooter_sharedStyles.landing;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/home':
                    this.targetStyleMap = profileFooter_sharedStyles.home;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/cover_letter':
                    this.targetStyleMap = profileFooter_sharedStyles.letter;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/projects':
                    this.targetStyleMap = profileFooter_sharedStyles.projects;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/blog':
                    this.targetStyleMap = profileFooter_sharedStyles.blog;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/contact':
                    this.targetStyleMap = profileFooter_sharedStyles.contact;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/about':
                    this.targetStyleMap = profileFooter_sharedStyles.about;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/resume':
                    this.targetStyleMap = profileFooter_sharedStyles.resume;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/goals':
                    this.targetStyleMap = profileFooter_sharedStyles.goals;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/history':
                    this.targetStyleMap = profileFooter_sharedStyles.history;
                    this.getHREF = this.currentHREF;
                    break;
                case 'http://127.0.0.1:9080/code_examples':
                    this.targetStyleMap = profileFooter_sharedStyles.codeEx;
                    this.getHREF = this.currentHREF;
                    break;
                default:
                    this.targetStyleMap = profileFooter_sharedStyles.landing;
                    this.getHREF = this.currentHREF;
                    break;
            }
            // styleModifier(
            //     this.getHREF,
            //     this.targetHREF,
            //     this.targetStyleMap,
            //     this.targetElement
            // );
            // console.info(this.targetStyleMap);
            return this.targetStyleMap;
        };
        currentStyleMod();
    }
    override get template() {
        return /*html*/ `        
	
			${profileFooter_sharedHTML.footer}
            <style>${this.targetStyleMap}</style>
        `;
    }
}
RegisterComponent('profile-footer', ProfileFooter);
