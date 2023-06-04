/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import { sidePanel_sharedHTML } from './side-panel_sharedHTML.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';

export class SidePanelTemplate extends HTMLElement {
    // override shadowRoot: ShadowRoot = this.shadowRoot;
    sidePanel: HTMLElement | undefined;
    activateShadowDOM = false;
    styleSheetMod: string | null | undefined;
    sidePanelContainer: HTMLElement | undefined;
    locationHREF!: string;
    checkLocation!: string;
    landingHREF!: string;
    homeStartHREF!: string;
    coverLetterHREF!: string;
    aboutHREF!: string;
    projectsHREF!: string;
    projectsHtmlCode!: string;
    historyHREF!: string;
    resumeHREF!: string;
    codeExHREF!: string;
    goalsHREF!: string;
    contactHREF!: string;
    spacexHREF!: string;
    libraryHREF!: string;
    renderStyles!: string;

    public get template(): string {
        return this.template;
    }
    public set template(value: string) {
        this.template = value;
    }

    connectedCallback(): void {
        if (this.activateShadowDOM) this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }
    render(template: string): void {
        if (!this.activateShadowDOM) {
            this.innerHTML = template || this.template;
            return;
        } else {
            this.shadowRoot!.innerHTML = template || this.template;
        }
    }
    public sidePanelStyleMod(
        locationHREF: string,
        checkLocation: string,
        landingHREF: string,
        homeStartHREF: string,
        coverLetterHREF: string,
        aboutHREF: string,
        projectsHREF: string,
        projectsHtmlCode: string,
        historyHREF: string,
        resumeHREF: string,
        codeExHREF: string,
        goalsHREF: string,
        contactHREF: string,
        spacexHREF: string,
        libraryHREF: string,
        renderStyles: string
    ) {
        this.locationHREF = locationHREF;
        this.checkLocation = checkLocation;
        this.landingHREF = landingHREF;
        this.homeStartHREF = homeStartHREF;
        this.coverLetterHREF = coverLetterHREF;
        this.aboutHREF = aboutHREF;
        this.projectsHREF = projectsHREF;
        this.projectsHtmlCode = projectsHtmlCode;
        this.historyHREF = historyHREF;
        this.resumeHREF = resumeHREF;
        this.codeExHREF = codeExHREF;
        this.goalsHREF = goalsHREF;
        this.contactHREF = contactHREF;
        this.spacexHREF = spacexHREF;
        this.libraryHREF = libraryHREF;
        this.renderStyles = renderStyles;

        const sidePanel = document.getElementById(
            'sidePanelShell'
        ) as HTMLElement;
        this.sidePanel = sidePanel;

        const sidePanelContainer = document.getElementById(
            'container'
        ) as HTMLElement;
        this.sidePanelContainer = sidePanelContainer;

        try {
            switch (location.pathname) {
                case '/landing':
                    sidePanel_sharedStyles.panel = this.landingHREF;
                    console.info(
                        `%cUsing landingHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/home':
                    sidePanel_sharedStyles.panel = this.homeStartHREF;
                    console.info(
                        `%cUsing homeStartHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/cover_letter':
                    sidePanel_sharedStyles.panel = this.coverLetterHREF;
                    console.info(
                        `%cUsing coverLetterHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/about':
                    sidePanel_sharedStyles.panel = this.aboutHREF;
                    console.info(
                        `%cUsing aboutHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/projects':
                    sidePanel_sharedStyles.panel = this.projectsHREF;
                    sidePanel_sharedHTML.home = this.projectsHtmlCode;
                    console.info(
                        `%cUsing projectsHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/history':
                    sidePanel_sharedStyles.panel = this.historyHREF;
                    console.info(
                        `%cUsing historyHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/resume':
                    sidePanel_sharedStyles.panel = this.resumeHREF;
                    console.info(
                        `%cUsing resumeHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/code_examples':
                    sidePanel_sharedStyles.panel = this.codeExHREF;
                    console.info(
                        `%cUsing codeExHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/goals':
                    sidePanel_sharedStyles.panel = this.goalsHREF;
                    console.info(
                        `%cUsing goalsHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/contact':
                    sidePanel_sharedStyles.panel = this.contactHREF;
                    console.info(
                        `%cUsing contactHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/spacex':
                    sidePanel_sharedStyles.panel = this.spacexHREF;
                    console.info(
                        `%cUsing spacexHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                case '/library':
                    sidePanel_sharedStyles.panel = this.libraryHREF;
                    console.info(
                        `%cUsing libraryHREF for Side-Panel Component Styles`,
                        'color: #00ff00; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
                default:
                    console.error(
                        `%cNo Switch for styling Side-Panel Component with Specificity had an ERROR an switched to DEFAULT?`,
                        'color: #ff0000; font-size: 1.5rem; font-weight: bold;'
                    );
                    break;
            }
        } catch (error) {
            console.error(
                `%cThere has been an ERROR choosing Side-Panel Styles within the side-panel shell`,
                'color: #ff0000; font-size: 1.5rem; font-weight: bold;'
            );
        }

        return;
    }
}
