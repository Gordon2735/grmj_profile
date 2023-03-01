'use strict';

import { ProfileBlogTemplate } from './profile-blog_template.js';
import { profileBlog_sharedHTML } from './profile-blog_sharedHTML.js';
import { profileBlog_sharedStyles } from './profile-blog_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes,

export class ProfileBlog extends ProfileBlogTemplate {
    override activateShadowDOM = false;

    override get template(): string {
        return /*html*/ `

            ${profileBlog_sharedStyles.blog}
            ${profileBlog_sharedHTML.blog}
            
        `;
    }
    static get observedAttributes(): string[] {
        return [''];
    }
    constructor() {
        super();

        this.activateShadowDOM = false;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        // this.shadowRoot?.querySelector('')?.addEventListener('click', () => {});
    }
    disconnectedCallback(): void {
        // this.shadowRoot?.querySelector('')?.removeEventListener('click', () => {});
        return;
    }
}
RegisterComponent('profile-blog', ProfileBlog);
