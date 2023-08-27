'use strict';

import { ResumeTemplate } from './profile-resume_template.js';
import { profileResume_sharedStyles } from './profile-resume_sharedStyles.js';
import { profileResume_sharedHTML } from './profile-resume_sharedHTML.js';
import RegisterComponent from '../componentTools/components_services.js';

export class ProfileResume extends ResumeTemplate {
    override activateShadowDOM: boolean;

    constructor() {
        super();

        this.activateShadowDOM = false;
    }
    override connectedCallback() {
        super.connectedCallback();

        const landingBtn = document.getElementById(
            'resumeLandingBtn'
        ) as HTMLButtonElement | null;

        const historyBtn: HTMLButtonElement | null = document.querySelector(
            '.resume-history-btn'
        );
        const projectsBtn: HTMLButtonElement | null = document.querySelector(
            '.resume-projects-btn'
        );
        const goalsBtn: HTMLButtonElement | null =
            document.querySelector('.resume-goals-btn');

        const contactBtn: HTMLButtonElement | null = document.querySelector(
            '.resume-contact-btn'
        );

        landingBtn?.addEventListener('click', (event: MouseEvent) => {
            createAElement('/landing', event);
        });

        historyBtn?.addEventListener('click', (event: MouseEvent) => {
            createAElement('/history', event);
        });

        projectsBtn?.addEventListener('click', (event: MouseEvent) => {
            createAElement('/projects', event);
        });

        goalsBtn?.addEventListener('click', (event: MouseEvent) => {
            createAElement('/goals', event);
        });

        contactBtn?.addEventListener('click', (event: MouseEvent) => {
            createAElement('/contact', event);
        });

        async function createAElement(
            HREF: string,
            ev: MouseEvent
        ): Promise<void> {
            const anchorElement = ev.target as HTMLAnchorElement;
            anchorElement.href = HREF;
            return location.replace(anchorElement.href);
        }
    }
    override get template() {
        return /*html*/ `
            ${profileResume_sharedHTML.resume}
            <style>${profileResume_sharedStyles.resume}</style>
        `;
    }
}
RegisterComponent('profile-resume', ProfileResume);
