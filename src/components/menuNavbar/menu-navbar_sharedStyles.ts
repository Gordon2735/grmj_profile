'use strict';

import { menuNavbar_sharedStyles } from '../../interfaces/interfaces';

const menuNavbar_sharedStyles = {
    shell: ``,
    navbar: ``,
    navHamBtn: ``
};

menuNavbar_sharedStyles.shell = /*css*/ `

    @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

    :root {
        --webe-header-primary: hsl(0, 0%, 13%);
        --webe-header-clr: #eb9028;
        --webe--orange-clr: rgba(235, 144, 40, 0.83);
        --webe-header-trim: hsl(30, 4%, 11%);
        --webe-greyout-clr: hsl(0, 38%, 38%);
        --webe-HOOT-clr: hsl(32, 83%, 54%);
        --webe-HOOT-hover: hsl(32, 70%, 29%);
        --webe-title-clr: hsl(0, 0%, 70%);
        --webe-white-clr: hsl(0, 3%, 85%);
        --webe-btn-hover: rgba(94, 93, 93, 0.719);
        --webe-HOOT-fs: 'Chango', cursive;
        --webe-title-fs: 'Days One', sans-serif;
        /* --webe-font-size: 2vw; */
    }       

`;

menuNavbar_sharedStyles.navbar = /*css*/ `

    .navbar {
        top: 0vh;
        right: 2vw;
        display: flex;
        position: sticky;
        height: 4vh;
        justify-content: space-between;
        align-items: center;
        background-color: var(--grmj-profile-background_3);
        color: var(--grmj-profile-background_4);
        z-index: 1300;
    }

    .brand-title {
        font-size: 2vw;
        margin: 0.5rem;
    }

    .navbar-links {
        height: 65%;
    }

    .navbar-links ul {
        display: flex;
        margin: 0;
        padding: 0;
    }

    .navbar-links li {
        list-style: none;
        height: 65%;
    }

    .navbar-links li a {
        display: block;
        text-decoration: none;
        color: var(--webe-title-clr);
        padding: 1rem;
    }

    .navbar-links li a:hover {
        background-color: rgba(105, 105, 105, 0.095);
        border-radius: 14px;
        color: var(--webe-greyout-clr);
        z-index: 6;
    }
    .navbar-links li a::after {
        background-color: rgba(105, 105, 105, 0.081);
        border-radius: 14px;
        color: var(--webe-greyout-clr);
        z-index: 6;
    }

    .toggle-button {
        position: absolute;
        top: 5.75px;
        right: 20px;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
    }

    .toggle-button .bar {
        height: 3px;
        width: 100%;
        background-color: var(--webe-HOOT-clr);
        border-radius: 10px;
        z-index: 7;
    }

    .toggle-button .bar:hover {
        box-shadow: rgb(78, 64, 64) 3px 3px 15px;
    }

    .toggle-button:hover {
        box-shadow: var(--webe-HOOT-clr) 3px 3px 15px;
        background-color: rgba(105, 105, 105, 0.081);
    }

    @media (max-width: 1000px) {
        .navbar {
            top: 11.7vh;
            right: -1vw;
            margin-top: -20px;
            flex-direction: column;
            align-items: flex-start;
        }

        .toggle-button {
            display: flex;
        }

        .navbar-links {
            display: none;
            width: 40%;
        }

        .navbar-links ul {
            margin-top: 7.3vh;
            width: 100%;
            flex-direction: column;
            background: var(--webe-title-clr);
        }

        .navbar-links ul li {
            text-align: right;
        }

        .navbar-links ul li a {
            padding: 0.5rem 1rem;
            color: var(--webe-HOOT-clr);
        }
        .navbar-links ul li a:hover {
            padding: 0.5rem 1rem;
            background-color: rgba(105, 105, 105, 0.081);
            color: var(--webe-greyout-clr);
        }
        .navbar-links ul li a::after {
            padding: 0.5rem 1rem;
            color: var(--webe-greyout-clr);
        }

        .navbar-links.active {
            display: flex;
            width: 100vw;
        }
    }

`;

menuNavbar_sharedStyles.navHamBtn = /*css*/ `


`;

export { menuNavbar_sharedStyles };
