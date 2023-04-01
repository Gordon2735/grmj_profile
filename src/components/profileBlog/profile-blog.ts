'use strict';

import { ProfileBlogTemplate } from './profile-blog_template.js';
import { profileBlog_sharedHTML } from './profile-blog_sharedHTML.js';
import { profileBlog_sharedStyles } from './profile-blog_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes,

export class ProfileBlog extends ProfileBlogTemplate {
    override activateShadowDOM = false;
    grabComponent: HTMLElement;
    grabLocation: string;
    datasetChange: string;
    stateAttribute: string;

    override get template(): string {
        return /*html*/ `

            ${profileBlog_sharedStyles.blog}
            ${profileBlog_sharedHTML.blog}
            
        `;
    }

    constructor(
        grabComponent: HTMLElement,
        grabLocation: string,
        datasetChange: string,
        stateAttribute: string
    ) {
        super();

        this.activateShadowDOM = false;

        this.grabComponent = grabComponent;
        this.grabLocation = grabLocation;
        this.datasetChange = datasetChange;
        this.stateAttribute = stateAttribute;
    }

    override connectedCallback(): void {
        super.connectedCallback();

        this.grabComponent = document.getElementById(
            'profileBlog'
        ) as HTMLElement;
        this.grabLocation = window.location.href;
        this.datasetChange = this.grabComponent.dataset.blogState as string;
        this.stateAttribute = this.grabComponent.getAttribute(
            'state'
        ) as string;

        // this.shadowRoot?.querySelector('')?.addEventListener('click', () => {});
    }

    static get observedAttributes(): string[] {
        return ['data-blog-state', 'state'];
    }

    public attributeChangedCallback(
        name: string,
        oldValue: string,
        newValue: string
    ): void {
        console.info(
            `Name: ${name}, Old Value: ${oldValue}, New Value: ${newValue}`
        );
    }

    disconnectedCallback(): void {
        // this.shadowRoot?.querySelector('')?.removeEventListener('click', () => {});
        return;
    }
}
RegisterComponent('profile-blog', ProfileBlog);
