'use strict';

import { menuNavbar_sharedHTML } from '../../interfaces/interfaces.js';

const menuNavbar_sharedHTML = {
    shell: ``,
    navbar: ``,
    navHamBtn: ``
};

menuNavbar_sharedHTML.shell = /*html*/ `


`;

menuNavbar_sharedHTML.navbar = /*html*/ `

    <nav class="navbar">
        <div class="brand-title"></div>
            <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                </a>
            <div class="navbar-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/cover_letter">Cover Letter</a></li>
                    <li><a href="/goals">goals</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/code_examples">Code Examples</a></li>
                    <li><a href="/history">History</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/library">Library</a></li>
                </ul>
        </div>
    </nav>

`;

menuNavbar_sharedHTML.navHamBtn = /*html*/ `


`;

export { menuNavbar_sharedHTML };
