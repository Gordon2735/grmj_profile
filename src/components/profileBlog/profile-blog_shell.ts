'use strict';

import { ProfileBlogTemplate } from './profile-blog_template.js';
import { profileBlog_sharedHTML } from './profile-blog_sharedHTML.js';
import { profileBlog_sharedStyles } from './profile-blog_sharedStyles.js';
import RegisterComponent, {
    setAttributes,
    appendChildren
} from '../componentTools/components_services.js';

export class ProfileBlogShell extends ProfileBlogTemplate {
    override activateShadowDOM: boolean;
    head: HTMLHeadElement | null;
    scriptBlog: HTMLScriptElement;

    override get template(): string {
        return /*html*/ `
            
            ${profileBlog_sharedHTML.shell}
            <style>${profileBlog_sharedStyles.shell}</style>
            <profile-blog id="profileBlog" class="profile-blog" data-testid="blog-3"></profile-blog>
        `;
    }

    constructor() {
        super();

        this.activateShadowDOM = false;
        this.head = document.getElementById('head');
        this.scriptBlog = document.createElement('script');

        setAttributes(this.scriptBlog, {
            type: 'module',
            content: 'text/javascript',
            src: '/src/components/profileBlog/profile-blog.js',
            alt: 'Profile Blog Script'
        });
    }
    override connectedCallback(): void {
        super.connectedCallback();

        appendChildren(this.head, [this.scriptBlog]);
    }
}
RegisterComponent('profile-blog_shell', ProfileBlogShell);
