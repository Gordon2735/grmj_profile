'use strict';

import { landingPage_sharedStyles } from '../../interfaces/interfaces.js';

const landingPage_sharedStyles = {
    shell: ``,
    page: ``
};

landingPage_sharedStyles.shell = /*css*/ `

    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    /* font-family: 'Open Sans', sans-serif; */

        /* Setup */
    :root {
        // --color-primary: #006241;
        // --color-secondary: #d50032;
        --color-extra: #d4e9e2;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    @font-face {
        font-family: 'SpaceX';
        src: url('/src/resources/font/SpaceX.ttf') format('truetype');
    }

    .theme-light {
        --image-home: url('../../src/components/componentTools/resources/images/005___home-theme-light__BACKGROUND.jpg');
        --color-primary: #fff;
        --color-secondary: #fbfbfe;
        --color-tertiary: var(--grmj-font-color-6);
        --color-quandary: var(--grmj-font-color-8);
        --color-quinary: #fff;
        --color-senary: rgba(0, 0, 0, 0.10);
        --color-octonary: #bebebe;
        --color-nectary: #ccc;
        --color-denary: #ccc;
        --color-nonary: rgba(0, 0, 0, 0.07);
        --color-accent: #fd6f53;
        --font-color: #000000;
        --button-background: hsla(0, 0%, 41%, 0.99);
        --button-background-hover: hsla(212, 62%, 49%, 0.99);
        --button-ff: Arial, Helvetica, sans-serif;
        --button-color: hsla(219, 97%, 73%, 0.99);
        --button-fs: 0.7em;
        --button-border: 0.1em ridge hsla(180, 25%, 25%, 0.99);
        --button-hover: hsla(0, 0%, 86%, 0.39);
        --button-filter: drop-shadow(0.1em 0.08rem 0.08rem rgba(0, 0, 0, 0.22));
    }
    
    .theme-startup,
    .theme-dark {
        --image-home: url('../../src/components/componentTools/resources/images/000___home-theme-dark__BACKGROUND.png');
        --color-primary: rgba(0, 0, 0, 0.99);
        --color-secondary: #2a2c2d;
        --color-tertiary: var(--grmj-font-color-3);
        --color-quandary: var(--grmj-font-color-5);
        --color-quinary: #000;
        --color-senary: rgba(0, 0, 0, 0.99);
        --color-octonary: #333;
        --color-nectary: #bebebe;
        --color-denary: #ccc;
        --color-nonary: rgba(0, 0, 0, 0.17);
        --color-accent: #12cdea;
        --font-color: #ffffff;
        --button-background: hsla(0, 0%, 41%, 0.99);
        --button-background-hover: hsla(212, 62%, 49%, 0.99);
        --button-ff: Arial, Helvetica, sans-serif;
        --button-color: hsla(0, 0%, 86%, 0.99);
        --button-fs: 0.7em;
        --button-border: 0.1em ridge hsla(180, 25%, 25%, 0.99);
        --button-hover: hsla(90, 100%, 50%, 0.99);
        --button-filter: drop-shadow(0.1em 0.08rem 0.08rem rgba(0, 0, 0, 0.22));
    }

    .drop-down-shell {
        margin: 0;
        padding: 0;
        position: sticky;
        top: 0em;
        width: 100%;
        height: 10vh;
        z-index: 1;
    }
    
    html,
    body {
        overflow: scroll;
        scroll-behavior: smooth;
        font-family: 'Open Sans', sans-serif;
        line-height: 1.4;
        color: #000;
    }    
 
    body::-webkit-scrollbar {
        width: 0.75em;
    }
    
    body::-webkit-scrollbar-track {
        -webkit-box-shadow: var(--grmj_profile_scrollbar-box-shadow);
        box-shadow: var(--grmj_profile_scrollbar-box-shadow);
        background: var(--grmj_profile_scrollbar-background);
    }
    
    body::-webkit-scrollbar-thumb {
        background: var(--grmj_profile_scrollbar-thumb);
        border-radius: 0.35em;
        border: 0.18em solid var(--grmj_profile_scrollbar-border);
    }
    
    body::-webkit-scrollbar-thumb:hover {
        background: var(--grmj_profile_scrollbar-thumb_hover);
        color: hsla(0, 0%, 41%, 0.99);
    }

    a {
        color: var(--color-primary);
    }

    ul {
        list-style: none;
    }

    p {
        margin: 5px 0;
        line-height: 1.7;
    }

    img {
        max-width: 100%;
    }

    section a {
        color: var(--color-secondary);
    }

    .side-panel-shell {
        z-index = 100;
    }

`;

landingPage_sharedStyles.page = /*css*/ `

    /* Navbar Styles */
    .navbar {
        padding: 20px;
        width: 100%;
        height: auto;
        background-color: var(--color-nectary);
        box-shadow: 0 1px 3px rgb(0 0 0 / 10%),
            0 2px 2px rgb(0 0 0 / 6%),
            0 0 2px rgb(0 0 0 / 7%);
    }

    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .navbar ul {
        display: flex;
        align-items: center;
    }

    .navbar li {
        margin: 0 15px;
        font-weight: bold;
    }

    .navbar a {
        color: var(--color-quinary);
        text-decoration: none;
    }

    .navbar a:hover {
        color: var(--color-secondary);
    }

    .navbar-brand {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        width: 100%;
    }

    .navbar-brand > .navbar-div {
        text-align: center;
    }

    .navbar-div img {
        order: 1;
        aspect-ratio: 130 / 103;
        width: 320px;
    }

    .navbar-div .h1-team {
        margin: 55px 0px 0px -32px;
        order: 2;
        font-family: var(--grmj-font-family-1);
        font-size: 85px;
        font-weight: var(--grmj-font-weight-7);
        color: var(--color-bracket-blue);
    }

    .navbar-div .h2-webelistics {
        margin: 55px 60px 0px 0px;
        order: 3;
        font-family: var(--grmj-font-family-1);
        font-size: 105px;
        font-weight: var(--grmj-font-weight-9);
        color: var(--color-bracket-yellow);
        -webkit-text-stroke: 0.007em #000; /* width and color */
        letter-spacing: -0.7;
    }

    .sup-reg {
        position: relative;
        font-family: var(--grmj-font-family-3);
        font-size: 15%;
        font-weight: 6;
        -webkit-text-stroke: none;
        color: var(--color-bracket-blue); 
        line-height: 0;
        vertical-align: baseline;
        top: -2.5em;
    }

    .navbar-div .p-simplicity {
        order: 4;
        flex-shrink: 0;
        margin: 40px 30px -110px -20px;
        position: relative;
        top: 90%;
        left: -20%;
        font-family: var(--grmj-font-family-1);
        font-size: 14px;
        font-style: italic;
        font-weight: bold;
        color: var(--color-secondary);
    }

    .gordon-image {
        margin: 0px 10px 0px 20px;
        aspect-ratio: 28 / 27;
        width: 280px;
        border-radius: 40px;
        filter: var(--grmj-filter-dropShadow-6);
    }

    .box-c .gordon-blog {
        aspect-ratio: 1 / 1;
        margin: 0px 0px 0px 0px;
        position: absolute;
        display: flow-root;
        width: 340px;
        filter: var(--grmj-filter-dropShadow-6);
    }

    .box-c .gordon-blog-ts {
        aspect-ratio: 413 / 534;
        margin: 15px 0px -25px 25px;
        top: 25%;
        left: 15%;
        position: relative;
        display: flow-root;
        width: 60px;
        filter: var(--grmj-filter-dropShadow-6);
        transform: rotate(-20deg);
        z-index: 260;
    }

    .box-d .image-spacex {
        margin: 0px auto 0px auto;
        padding-left: 10px;
        position: relative;
        display: inline-block;
        width: 560px;
    }

    .box-e .image-linkedin-social {
        margin: 0px auto 0px auto;
        padding-left: 10px;
        position: relative;
        display: inline-block;
        width: 560px;
    }

    .box-f .profile-project-image {
        margin: 0px auto 0px auto;
        position: relative;
        display: inline-block;
        width: 680px;
        height: auto;
    }
 
    .box-f .image-dg {
        aspect-ratio: 3 / 4;
        margin: 0px auto 0px auto;
        position: relative;
        display: inline-block;
        width: 320px;
        height: auto;
        z-index: 260;
    }

    .box-f .image-honeymoon {
        aspect-ratio: 280 / 373;
        margin: 0px auto 0px auto;
        position: relative;
        display: inline-block;
        width: 320px;
        height: auto;
        z-index: 260;
    }

    .navbar-nav-left {
        margin-left: 20px;
        text-transform: uppercase;
        flex: 1;
    }

    .navbar-nav-right li:first-child a {
        display: flex;
        align-items: center;
    }

    .navbar-nav-right img {
        height: 30px;
        width: 30px;
        margin-right: 10px;
    }

    .navbar-nav-right li:nth-child(2) {
        margin: 0 5px;
    }

    /* Footer & Social Icons */
    .footer-container {
        margin: 0 auto;
        padding: 0 30px 30px;
        width: 100%;
        max-width: 1440px;
    }

    .social {
        display: flex;
        align-items: center;
        margin: 20px 0;
    }

    .social img {
        width: 35px;
        height: 35px;
    }

    .social a {
        text-decoration: none;
        margin-right: 20px;
    }

    .divider {
        margin: 40px auto;
        width: 95%;
        height: 1px;
        background-color: #ccc;
    }

    /* Box Styles */
    .box {
        margin-bottom: 30px;
    }

    .box-inner {
        max-width: 700px;
        margin: 0 auto;
    }

    .box-text {
        margin: 0 auto;
        padding: 20px 0;
        max-width: 500px;
        text-align: center;
        justify-self: center;
    }

    .box-text .btn {
        margin-top: 20px;
    }

    .box-f .box-text {
        max-width: 600px;
    }

    /* Grid Styles */
    .grid-col-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /* same result would be. grid-template-columns: 1fr 1fr; */
        gap: 2rem;
        align-items: center;
        justify-content: space-between;
    }

    .grid-reversed :first-child {
        order: 2;
    }

    /* Buttons Styles*/
    .btn {
        padding: 7px 16px;
        line-height: 1.2;
        cursor: pointer;
        display: inline-block;
        background: none;
        border: 1px #000 solid;
        border-radius: 50px;
        text-align: center;
        text-decoration: none;
    }

    .btn-dark-outline {
        border-color: var(--color-senary);
        color: var(--color-senary);
    }

    .btn-dark-outline:hover,
    .btn-light-outline:hover {
        background-color: var(--color-nonary);
        color: var(--font-color);
    }

    .btn-light-outline {
        border-color: var(--font-color);
        color: var(--font-color);
    }

    .btn-dark {
        background-color: var(--color-senary);
        color: var(--font-color);
    }

    .btn-dark:hover {
        background-color: var(--color-octonary);
    }

    /* Background Classes */
    .bg-primary {
        background-color: var(--color-senary);
        color: var(--font-color);
    }

    .bg-secondary {
        background-color: var(--color-secondary);
        color: var(--font-color);
    }

    .bg-extra {
        background-color: var(--color-extra);
        color: var(--color-senary);
    }

    .bg-dark {
        background-color: var(--color-dark);
        color: var(--color-senary);
    }

    /* Text Styles */
    .text-center {
        text-align: center;
    }

    .text-xl {
        margin-bottom: 20px;
        font-size: 50px;
        text-transform: uppercase;
        letter-spacing: 6px;
        font-weight: 600;
    }

    .text-lg {
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 40px;
    }

    .text-md {
        margin-bottom: 20px;
        font-size: 24px;
    }

    .text-sm {
        margin-bottom: 20px;
        font-size: 19px;
    }

    /* Padding */
    .py-sm {
        padding: 10px 0;
    }

    .py-md {
        padding: 20px 0;
    }

    .py-lg {
        padding: 40px 0;
    }

    /* Hamburger Menu Icon */
    .hamburger {
        position: relative;
        display: none;
        width: 24px;
        height: 24px;
        background: none;
        border: none;
        cursor: pointer;
        transition: all 0.25s;
        z-index: 110;
    }

    .hamburger-top,
    .hamburger-middle,
    .hamburger-bottom {
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 2.8px;
        background: var(--color-primary);
        transform: rotate(0);
        transition: all 0.5s;
    }

    .hamburger-middle {
        transform: translateY(8px);
    }

    .hamburger-bottom {
        transform: translateY(16px);
    }

    .open .hamburger-top {
        transform: rotate(45deg) translateY(6px) translateX(6px);
    }

    .open .hamburger-middle {
        display: none;
    }

    .open .hamburger-bottom {
        transform: rotate(-45deg) translateY(6px) translateX(-6px);
    }

    /* Mobile Menu */
    .mobile-menu {
        padding: 30px;
        position: fixed;
        top: 85px;
        right: 0;
        width: 90%;
        height: 100%;
        background-color: #fff;
        color: #000;
        box-shadow: inset 0 4px 3px -3px rgb(0 0 0 / 10%),
            inset 0 4px 2px -2px rgb(0 0 0 / 7%);
        transition: all 0.3s;
        z-index: 125;
    }

    .mobile-menu img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .mobile-menu ul {
        margin-bottom: 30px;
        padding-bottom: 10px;
        line-height: 3;
        border-bottom: #777 solid 1px;
    }

    .mobile-menu a {
        text-decoration: none;
        font-size: 20px;
    }

    .mobile-menu a:hover {
        color: var(--color-primary);
    }

    .mobile-menu div {
        margin-top: 20px;

    }

    .mobile-menu div a {
        display: flex;
        align-items: center;
        font-size: 16px;
    }

    .hidden {
        transform: translateX(100%);
    }

    .no-scroll {
        overflow: hidden;
    }

    @media(max-width: 1080px) {

        .image-bracket {
            width: 240px;
        }

        .navbar-div .h1-team {
            font-size: 55px;
        }

        .navbar-div .h2-webelistics {
            font-size: 65px;
        }

        .p-simplicity {
            font-size: 12px;
        }  

    }
 

    @media(max-width: 960px) {

        .image-bracket {
            width: 180px;
        }

        .navbar-div .h1-team {
            font-size: 35px;
        }

        .navbar-div .h2-webelistics {
            font-size: 50px;
        } 

        .p-simplicity {
            font-size: 10px;
        }

        .gordon-image {
            width: 220px;
        }
      
        .text-xl {
            font-size: 30px;
        }

        .text-lg {
            font-size: 25px;
        }

        .text-md {
            font-size: 19px;
        }
    }

    @media(max-width: 768px) {
        
        .side-panel,
        .drop-down {
            display: none;
        }   
  
        .image-bracket {
            aspect-ratio: 130 / 103;
            width: 120px;
        }

        .navbar-div .h1-team {
            font-size: 25px;
        }

        .navbar-div .h2-webelistics {
            font-size: 40px;
        }

        .sup-reg {
            font-size: 9%;
        }

        .navbar-div .p-simplicity {
            margin: 40px auto -10px auto;
            top: 50%;  
            font-size: 6px;
        }

        .gordon-image {
            margin: 15px auto 0px auto;
            padding-top: 10px;
            position: relative;
            display: inline-block;
            width: 280px;
        }
        
        .gordon-blog {
            margin: 0px auto 0px auto;            
        }
        
        .gordon-blog-ts {
            margin: 35px 0px -25px 25px;  
            padding: 4px 0px -12px 0px;          
            width: 22px;
            display: inline-flex;
        }

        .image-spacex {
            width: 280;
            margin: 15px auto 0px auto;
            padding-top: 10px;
            position: relative;
            display: inline-block;
        }

        .box-e .image-linkedin-social {
            margin: 0px auto 0px auto;
             width: 360px;
        }
   
        .box-f .profile-project-image {
            margin: 0px auto 0px auto;
            width: 420px;
        }

        .box-f .image-dg {
            margin: 0px auto 0px auto;
            width: 240px;
        }

        .box-f .image-honeymoon {
            margin: 0px auto 0px auto;
            width: 240px;
        }

        .hamburger {
            position: absolute;
            display: block;
            top: 1.5em;
            left: 81%;
        }

        .grid-col-2 {
            grid-template-columns: 1fr;
        }

        .grid-reversed :first-child {
            order: 0;
        }

        .navbar .navbar-nav-left,
        .navbar .navbar-nav-right {
            display: none;
        }

        .footer {
            text-align: center;
        }
    }  
    
    @media(max-width: 449px) {

        .navbar-div {
            width: 220px;
        }

        .image-bracket {
            width: 120px;
        }

        .p-simplicity {
            font-size: 3px;
        }
    }

    @media(min-width: 1440px) {
        .box {
            margin-right: auto;
            margin-left: auto;
            max-width: 1440px;
        }

        .divider {
            max-width: 90%;
        }
    }

`;

export { landingPage_sharedStyles };
