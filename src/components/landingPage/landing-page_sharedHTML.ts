'use strict';

import { landingPage_sharedHTML } from '../../interfaces/interfaces.js';

const landingPage_sharedHTML = {
    shell: ``,
    page: ``
};

landingPage_sharedHTML.shell = /*html*/ `

    <landing-page id="landingPage" class="landing-page" data-theme=""></landing-page>

`;

landingPage_sharedHTML.page = /*html*/ `

    <nav class="navbar">
        <div id="navbarBrand" class="navbar-brand">
            <div class="navbar-div">
                <a href="/landing">
                    <img class="image-bracket" src="/src/components/componentTools/resources/images/lPage_imgs/team_webelistics_brackets.svg"
                        alt="Team Logo Brackets" />
                </a>
            </div>
            <div class="navbar-div">
                <h1 id="h1Team" class="h1-team">Team</h1>
            </div>
            <div class="navbar-div">            
                <h2 id="h2Webelistics" class="h2-webelistics">Webelistics<sup class="sup-reg">&#174;</sup></h2>
            </div>            
            <div class="navbar-div">            
                <p id="pSimplicity" class="p-simplicity">refactored for clean, readable code, always respecting the constraints while empirically reaching for an engineering simplicity</p>
            </div>            
        </div>
        <ul class="navbar-nav-left">
            <li>
                <a href="/home">Portfolio</a>
            </li>
            <li>
                <a href="/cover_letter">Cover</a>
            </li>
            <li>
                <a href="/">Blog</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/spacex">SpaceX API</a>
            </li>
        </ul>
        <ul class="navbar-nav-right">
            <li>
                <a href="https://maps.google.com/">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/marker.svg" alt="Find me" />
                    <span>Find me</span>
                </a>
            </li>
            <li><button class="btn btn-dark-outline">Sign in</button></li>
            <li><button id="buttonJoin" class="btn btn-dark">Join now</button></li>
        </ul>
        <button type="button" id="menu-btn" class="hamburger">
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
        </button>
    </nav>

    <!-- Mobile Menu -->
    <div id="menu" class="mobile-menu hidden">
        <ul>
            <li>
                <a href="/home">Portfolio</a>
            </li>
            <li>
                <a href="/cover_letter">Cover</a>
            </li>
            <li>
                <a href="/">Blog</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/spacex">SpaceX API</a>
            </li>
        </ul>
        <div class="mobile-menu-bottom">
            <button class="btn btn-dark-outline">
                Sign in
            </button>
            <button class="btn btn-dark">
                Join now
            </button>
            <div>
                <a href="https://maps.google.com/">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/marker.svg"
                        alt="Google Map marker" />
                    <span>Find me</span>
                </a>
            </div>
        </div>
    </div>

    <!-- Box A -->
    <section class="box box-a bg-primary text-center py-md">
        <div class="box-inner">
            <h2 class="text-xl">TDD & Continuous Delivery/Continuos Integration</h2>
            <p class="text-md">Always deployable without a need for production rollout!
                <a href="#">Learn more</a>
            </p>
        </div>
    </section>

    <!-- Box B -->
    <section class="box box-b bg-secondary grid-col-2">
        <img class="gordon-image" src="/src/components/componentTools/resources/images/lPage_imgs/gordonPhoto.webp" alt="box-b">
        <div class="box-text">
            <h2 class="text-xl">Gordon's Portfolio</h2>
            <p class="text-md">Take a look at Gordon's Personal Profile and review his Cover Letter
            </p>
            <a href="#" class="btn btn-light-outline">Contact Gordon</a>
        </div>
    </section>

    <!-- Box C -->
    <section class="box box-c bg-secondary grid-col-2 grid-reversed">
        <img class="gordon-blog" src="/src/components/componentTools/resources/images/lPage_imgs/int_app_basic.webp" alt="box-c">
        <img class="gordon-blog-ts" src="/src/components/componentTools/resources/images/lPage_imgs/typescript-transparent_tall DARK.svg" alt="box-c">
        <div class="box-text">
            <h2 class="text-xl">Gordon's Blog</h2>
            <p class="text-md">Share a blog about software engineering,
                and view Gordon's blogs concerning development too!
            </p>
            <a href="#" class="btn btn-light-outline">Join now!</a>
        </div>
    </section>

    <!-- Box D -->
    <section class="box box-d bg-primary grid-col-2">
        <img class="image-spacex" src="/src/components/componentTools/resources/images/lPage_imgs/elon_starship.webp" alt="box-d">
        <div class="box-text">
            <h2 class="text-xl">Check out this neat SpaceX Page with Launch details!</h2>
            <p class="text-md">
                A cool API  that interfaces SpaceX' Launch Data.
            </p>
            <a href="#" class="btn btn-light-outline">Even More!</a>
        </div>
    </section>

    <!-- Box E -->
    <section class="box box-e bg-secondary grid-col-2 grid-reversed">
        <img class="image-linkedin-social" src="/src/components/componentTools/resources/images/lPage_imgs/linkedin_social.webp" alt="box-e">
        <div class="box-text">
            <h2 class="text-md">Gordon's LinkedIn Information</h2>
            <p class="text-sm">
                Check out Gordon's LinkedIn Data and send him a message!
            </p>
            <a href="#" class="btn btn-light-outline">Go to his LinkedIn Page!</a>
        </div>
    </section>

    <!-- Box F -->
    <section class="box box-f grid-col-2">
        <div>
            <img class="profile-project-image" src="/src/components/componentTools/resources/images/lPage_imgs/profile_projects.webp" alt="profile-project-image">
            <div class="bg-extra py-lg">
                <div class="box-text">
                    <h2 class="text-md">Project Applications</h2>
                    <p class="text-sm">
                        Check out some of Gordon's Applications he developed!
                    </p>
                    <a href="#" class="btn btn-dark-outline">Your Comments are wanted!</a>
                </div>
            </div>
        </div>
        <div>
            <img class="image-dg" src="/src/components/componentTools/resources/images/lPage_imgs/d-g.jpg" alt="Gordon and Wife Donna Picture">
            <img class="image-honeymoon" src="/src/components/componentTools/resources/images/lPage_imgs/honeymoon-kiss.webp" alt="Gordon and Wife Donna Picture">
            <div class="bg-primary py-lg">
                <div class="box-text">
                    <h2 class="text-md">About Gordon</h2>
                    <p class="text-sm">
                        Read a quick synopsis of Gordon's Personal & Employment History
                    </p>
                    <a href="#" class="btn btn-light-outline">Contact Gordon Now!</a>
                </div>
            </div>
        </div>
    </section>

    <div class="divider"></div>

    <footer class="footer">
        <div class="footer-container">
            <div class="social">
                <a href="https://spotify.com">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/social-spotify.svg" alt="" />
                </a>
                <a href="https://facebook.com">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/social-facebook.svg" alt="" />
                </a>
                <a href="https://pinterest.com">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/social-pinterest.svg" alt="" />
                </a>
                <a href="https://instagram.com">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/social-instagram.svg" alt="" />
                </a>
                <a href="https://youtube.com">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/social-youtube.svg" alt="" />
                </a>
                <a href="https://twitter.com">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/social-twitter.svg" alt="" />
                </a>
                <a href="https://code.visualstudio.com/">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/Visual_Studio_Code.svg" alt="" />
                </a>
                <a href="https://nodejs.org/en">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/nodejs-icon.svg" alt="" />
                </a>
                <a href="https://developer.mozilla.org/en-US/">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/mdn-seeklogo.com.svg" alt="" />
                </a>
                <a href="https://stackoverflow.com/">
                    <img src="/src/components/componentTools/resources/images/lPage_imgs/stack-overflow.svg" alt="" />
                </a>
            </div>
            <p>© 2023 Team Webelistics®️. All rights reserved.</p>
        </div>
    </footer>

`;

export { landingPage_sharedHTML };
