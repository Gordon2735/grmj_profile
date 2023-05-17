/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import profileHistory_sharedStyles from '../../interfaces/interfaces.js';

const profileHistory_sharedStyles = {
    shell: ``,
    history: ``,
    page_sweeper: ``,
    footer: ``
};

profileHistory_sharedStyles.shell = /*css*/ `

    /* Braah One */
    @font-face {
        font-family: 'Braah One';
        src: url('/src/resources/font/Braah_One/BraahOne-Regular.ttf') format('truetype');
    }

    /* Finger Paint */
    @font-face {
        font-family: 'Finger Paint';
        src: url('/src/resources/font/Finger_Paint/FingerPaint-Regular.ttf') format('truetype');
    }

    /* CabinSketch-Bold, CabinSketch-Regular */
    @font-face {
        font-family: 'CabinSketch';
        src: url('/src/resources/font/CabinSketch/CabinSketch-Bold.ttf') format('truetype');
        src: url('/src/resources/font/Cabin_Sketch/CabinSketch-Regular.ttf') format('truetype');
    }

    /* Lobster */
    @font-face {
        font-family: 'Lobster';
        src: url('/src/resources/font/Lobster/Lobster-Regular.ttf') format('truetype');
    }

    /* Ruslan Display */
    @font-face {
        font-family: 'Ruslan Display';
        src: url('/src/resources/font/Ruslan_Display/RuslanDisplay-Regular.ttf') format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
        background:
            linear-gradient(var(--scratchy-blue), transparent),
            linear-gradient(to top left, var(--scratchy-mediumblue), transparent),
            linear-gradient(to top right, var(--scratchy-darkbrown), transparent);
        background-blend-mode: screen;  
        background-size: cover; 
        background-repeat: no-repeat; 
        overflow: hidden;
    }

`;

profileHistory_sharedStyles.history = /*css*/ `


    .drop-down-shell {
        margin: 0;
        padding: 0;
        position: sticky;
        top: 0em;
        width: 100%;
        height: 10vh;
        z-index: 1;
    }

    .side-panel-shell {
        z-index = 100;
    }

    .main {
        width: 100%;
        height: 100vh;
        position: absolute;
        display: inline-block;
        justify-content: center;
        text-align: center;
    }

    .main .old-circles {
        margin: 2em auto 1em auto;
        position: absolute;
        width: 50vw;
        height:75vh;
        left: 25%;
        text-align: center;
        aspect-ratio: 500 / 501;
        filter: var(--grmj-filter-dropShadow-6);
    }

    .main .history-header {
        margin: 2.65em auto -2em auto;	
        position: relative;
        display: block;
        text-align: center;
        z-index: 101;
    }

    .history-header .h1-brief {
        margin: 1.55em 2em 0.25em auto;	
        position: relative;
        text-align: center;
        font-family: 'Finger Paint';
        font-size: var(--grmj-font-size-5vw);
        font-weight: var(--grmj-font-weight-4);
        font-style: bold;
        color: var(--scratchy-blue-header);
        filter: var(--filter-dropShadow-4b);
        letter-spacing: var(--grmj-letter-spacing-1a);
    }

    .history-header .h2-grmj {
        margin: 0em auto 0em 4.75em;
        position: relative;
        text-align: center;
        font-family: 'Braah One';
        font-size: var(--grmj-font-size-6vw);
        font-weight: var(--grmj-font-weight-4);
        font-style: light;
        color: var(--font-color-4);
        filter: var(--filter-dropShadow-4c);
        letter-spacing: var(--grmj-letter-spacing-1a);
    }

    /* Gordon Solo Pic */
    .main .history-figure-g {
        margin: 0em auto -3em auto;
        position: relative;
        top: -2%;
        left: -37%;
        display: block;
        width: 365px;
        text-align: center;
        z-index: 115;
        transform: rotate(10deg);
    }

    .history-figure-g .history-img-g {
        aspect-ration: 333 / 333;
        margin: 1em auto 0em auto;
        position: relative;
        width: 280px;
        border-radius: 50%;
        opacity: 0.15;
    }

    .history-img-g:hover {
        width: 340px;
        opacity: 0.9;
        cursor: pointer;
    }

    .history-figure-g .history-figcaption-g {
        margin: 0.5em auto 0em auto;
        position: relative;
        text-align: center;
        width: 80%;
    }

    .history-figcaption-g .h3-gordon {
        margin: 0em auto 0em auto;
        position: relative;
        text-align: center;
        font-family: 'CabinSketch';
        font-size: var(--grmj-font-size-4vw);
        color: var(--font-color);
        opacity: 0.1;
    }

    /* Gordon & Donna Pic */
    .main .history-figure-g-d {
        margin: 0.5em auto 0em auto;
        position: relative;
        top: -7%;
        left: 35.5%;
        display: block;
        width: 380px;
        text-align: center;
        z-index: 113;
        transform: rotate(13deg);
    }

    .history-figure-g-d .history-img-g-d {
        aspect-ratio: 3 / 4;
        margin: 1em auto 0em auto;
        position: relative;
        width: 260px;
        border-radius: 50%;
        opacity: 0.15;
    }

    .history-img-g-d:hover {
        width: 340px;
        opacity: 0.9;
        cursor: pointer;
    }

    .history-figure-g-d .history-figcaption-g-d {
        margin: 0.5em auto 0em auto;
        position: relative;
        text-align: center;
        width: 80%;
    }

    .history-figcaption-g-d .h3-gordon-d {
        margin: 0em auto 0em auto;
        position: relative;
        text-align: center;
        font-family: 'CabinSketch';
        font-size: var(--grmj-font-size-4vw);
        color: var(--font-color);
        opacity: 0.1;
    }

    /* Gordon in Suit Pic */
    .main .history-figure-g-suit {
        margin: 0em auto 0em auto;
        position: relative;
        top: -77%;
        right: 38.5%;
        display: block;
        width: 365px;
        z-index: 115;
        transform: rotate(-18deg);
    }

    .history-figure-g-suit .history-img-g-suit {
        aspect-ration: 333 / 366;
        margin: 1em auto 0em auto;
        position: relative;
        width: 280px;
        border-radius: 65%;
        opacity: 0.15;
    }

    .history-img-g-suit:hover {
        width: 340px;
        opacity: 0.9;
        cursor: pointer;
    }

    .history-figure-g-suit .history-figcaption-g-suit {
        margin: 0.5em auto 0em auto;
        position: relative;
        text-align: center;
        width: 80%;
    }

    .history-figcaption-g-suit .h3-gordon-suit {
        margin: 0em auto 0em auto;
        position: relative;
        text-align: center;
        font-family: 'CabinSketch';
        font-size: var(--grmj-font-size-4vw);
        color: var(--font-color);
        opacity: 0.1;
    }
    
    /* My son Daniel */
    .main .history-figure-g-daniel {
        margin: 0em auto 0em auto;
        position: relative;
        bottom: 65%;
        left: 31.5%;
        display: block;
        width: 240px;
        z-index: 115;
        transform: rotate(18deg);
    }

    .history-figure-g-daniel .history-img-g-daniel {
        aspect-ration: 283 / 362;
        margin: 1em auto 0em auto;
        position: relative;
        width: 200px;
        border-radius: 65%;
        opacity: 0.15;
    }

    .history-img-g-daniel:hover {
        width: 340px;
        opacity: 0.9;
        cursor: pointer;
    }

    .history-figure-g-daniel .history-figcaption-g-daniel {
        margin: 0.5em auto 0em auto;
        position: relative;
        text-align: center;
        width: 80%;
    }

    .history-figcaption-g-daniel .h3-gordon-daniel {
        margin: 0em auto 0em auto;
        position: relative;
        text-align: center;
        font-family: 'CabinSketch';
        font-size: var(--grmj-font-size-1vw);
        color: var(--font-color);
        opacity: 0.1;
    }

    /* My daughter Hannah */
    .main .history-figure-g-hannah {
        margin: 0em auto 0em auto;
        position: relative;
        bottom: 115%;
        left: 41.5%;
        display: block;
        width: 240px; 
        z-index: 112;
        transform: rotate(-8deg);
    }

    .history-figure-g-hannah .history-img-g-hannah {
        aspect-ration: 160 / 383;
        margin: 1em auto 0em auto;
        position: relative;
        width: 160px;
        border-radius: 65%;
        opacity: 0.15;
    }

    .history-img-g-hannah:hover {
        width: 340px;
        opacity: 0.9;
        cursor: pointer;
    }

    .history-figure-g-hannah .history-figcaption-g-hannah {
        margin: 0.5em auto 0em auto;
        position: relative;
        text-align: center;
        width: 80%;
    }

    .history-figcaption-g-hannah .h3-gordon-hannah {
        margin: 0em auto 0em auto;
        position: relative;
        text-align: center;
        font-family: 'CabinSketch';
        font-size: var(--grmj-font-size-1vw);
        color: var(--font-color);
        opacity: 0.1;
    }

`;

profileHistory_sharedStyles.page_sweeper = /*css*/ `

    .layer {        
        text-align: center;
        z-index: 175;
    }

    .layer h2 {
        margin: 1.2em auto 0.5em auto;
        position: relative;
        font-family: 'Finger Paint';
        font-size: 2.25em;
        font-style: bold;
        color: var(--scratchy-blue-header);
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.6);
        filter: var(--filter-dropShadow-4b);
        letter-spacing: var(--grmj-letter-spacing-1a);
        z-index: 175;
    }

    .layer p {
        margin: 0.5em auto 0em auto;
        padding: 0 1.7em 0 1.7em;
        position: relative;
        font-family: var(--grmj-font-family-1);
        font-size: 16px;
        color: var(--font-color);
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
        z-index: 175;
    }

    .layer.zero {
        background: var(--history-page);
        z-index: 175;
    }

    .layer.one {
        background: var(--history-page);
        z-index: 175;
    }

    .layer.two {
        background: var(--history-page);
        z-index: 175;
    }

    .layer.three {
        background: var(--history-page);
        z-index: 175;
    }

    .layer.four {
        background: var(--history-page);
        z-index: 175;
    }

    .layer.five {
        background: var(--history-page);
        z-index: 175;
    }



    .bullets {
        margin: 2em auto 1em auto;
        padding: 0;
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 40px;
        z-index: 175;
    }

    .bullets li {
        margin: 0 3px;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;

        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
        cursor: pointer;

        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        z-index: 175;
    }

    .bullets li:hover {
        background: rgba(255, 255, 255, 0.8);
    }

    .bullets li.active {
        cursor: default;
        background: chartreuse;
    }

    .bullets li.active:hover {
        cursor: pointer;
        background: rgba(255, 255, 255, 0.8);
    }

    .section-btn {
        margin: 3em auto 1em auto;
        padding: 0;
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 70px;
        z-index: 176;
    }

    .section-btn .left-btn {
        padding: 2px;
        z-index: 176;
    }

    .section-btn .right-btn {
        padding: 2px;
        z-index: 176;
    }

    .left-btn,
    .right-btn:hover {
        cursor: pointer;
    }


    @media screen and (max-width: 400px) {
        /*body {
            font-size: 12px;
        }*/

        .layer h2 {
            font-size: 5em;
        }

        .bullets li {
            margin: 0 6px;
        }
    }

    /* Transition Styles */
    .page_sweeper {
        position: absolute;
        width: 58%;
        height: 61%;
        top: 23%;
        left: 26.98%;
        z-index: 175;
    }
    
    .page_sweeper .layer {
        position: absolute;
        width: 79.7%;
        height: 92%;
        visibility: hidden;
        /*box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.8); */
        z-index: 175;
    }

    .page_sweeper .layer.reveal {
        visibility: visible;
    }

    .page_sweeper.capable {
        -webkit-perspective: 1000px;
        -moz-perspective: 1000px;
        perspective: 1000px;

        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    .page_sweeper.capable .layer {
        -webkit-transform: translateZ(-100px);
        -moz-transform: translateZ(-100px);
        transform: translateZ(-100px);
    }

    .page_sweeper.capable .layer.reveal {
        -webkit-transform: translateZ(0px);
        -moz-transform: translateZ(0px);
        transform: translateZ(0px);
    }

    .page_sweeper.capable.animate .layer.reveal.right {
        -webkit-animation: reveal-right 1s forwards ease;
        -moz-animation: reveal-right 1s forwards ease;
        animation: reveal-right 1s forwards ease;
    }

    .page_sweeper.capable.animate .layer.hide.right {
        -webkit-animation: hide-right 1s forwards ease;
        -moz-animation: hide-right 1s forwards ease;
        animation: hide-right 1s forwards ease;
    }

    .page_sweeper.capable.animate .layer.reveal.left {
        -webkit-animation: reveal-left 1s forwards ease;
        -moz-animation: reveal-left 1s forwards ease;
        animation: reveal-left 1s forwards ease;
    }

    .page_sweeper.capable.animate .layer.hide.left {
        -webkit-animation: hide-left 1s forwards ease;
        -moz-animation: hide-left 1s forwards ease;
        animation: hide-left 1s forwards ease;
    }

    @-webkit-keyframes reveal-right {
        0% {
            -webkit-transform: translateZ(-200px);
        }

        40% {
            -webkit-transform: translate(40%, 0) scale(0.8) rotateY(-20deg);
        }

        100% {
            -webkit-transform: translateZ(0px);
        }
    }

    /* @-webkit-keyframes RIGHT */
    @-webkit-keyframes hide-right {
        0% {
            -webkit-transform: translateZ(0px);
            visibility: visible;
        }

        40% {
            -webkit-transform: translate(-40%, 0) scale(0.8) rotateY(20deg);
        }

        100% {
            -webkit-transform: translateZ(-200px);
            visibility: hidden;
        }
    }

    @-moz-keyframes reveal-right {
        0% {
            -moz-transform: translateZ(-200px);
        }

        40% {
            -moz-transform: translate(40%, 0) scale(0.8) rotateY(-20deg);
        }

        100% {
            -moz-transform: translateZ(0px);
        }
    }

    @-moz-keyframes hide-right {
        0% {
            -moz-transform: translateZ(0px);
            visibility: visible;
        }

        40% {
            -moz-transform: translate(-40%, 0) scale(0.8) rotateY(20deg);
        }

        100% {
            -moz-transform: translateZ(-200px);
            visibility: hidden;
        }
    }

    @keyframes reveal-right {
        0% {
            transform: translateZ(-200px);
        }

        40% {
            transform: translate(40%, 0) scale(0.8) rotateY(-20deg);
        }

        100% {
            transform: translateZ(0px);
        }
    }

    @keyframes hide-right {
        0% {
            transform: translateZ(0px);
            visibility: visible;
        }

        40% {
            transform: translate(-40%, 0) scale(0.8) rotateY(20deg);
        }

        100% {
            transform: translateZ(-200px);
            visibility: hidden;
        }
    }

    /* @-webkit-keyframes LEFT */
    @-webkit-keyframes hide-left {
        0% {
            -webkit-transform: translateZ(0px);
            visibility: visible;
        }

        40% {
            -webkit-transform: translate(-40%, 0) scale(0.8) rotateY(20deg);
        }

        100% {
            -webkit-transform: translateZ(-200px);
            visibility: hidden;
        }
    }

    @-moz-keyframes reveal-left {
        0% {
            -moz-transform: translateZ(-200px);
        }

        40% {
            -moz-transform: translate(40%, 0) scale(0.8) rotateY(-20deg);
        }

        100% {
            -moz-transform: translateZ(0px);
        }
    }

    @-moz-keyframes hide-left {
        0% {
            -moz-transform: translateZ(0px);
            visibility: visible;
        }

        40% {
            -moz-transform: translate(-40%, 0) scale(0.8) rotateY(20deg);
        }

        100% {
            -moz-transform: translateZ(-200px);
            visibility: hidden;
        }
    }

    @keyframes reveal-left {
        0% {
            transform: translateZ(-200px);
        }

        40% {
            transform: translate(40%, 0) scale(0.8) rotateY(-20deg);
        }

        100% {
            transform: translateZ(0px);
        }
    }

    @keyframes hide-left {
        0% {
            transform: translateZ(0px);
            visibility: visible;
        }

        40% {
            transform: translate(-40%, 0) scale(0.8) rotateY(20deg);
        }

        100% {
            transform: translateZ(-200px);
            visibility: hidden;
        }
    }

    /* Dimmer */
    .page_sweeper .layer .dimmer {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        visibility: hidden;
        background: transparent;
    }

    .page_sweeper.capable.animate .layer .dimmer {
        -webkit-transition: background 1s ease;
        -moz-transition: background 1s ease;
        transition: background 1s ease;
    }

    .page_sweeper.capable.animate .layer.hide .dimmer {
        visibility: visible;
        background: rgba(0, 0, 0, 0.2);
    }

`;

profileHistory_sharedStyles.footer = /*css*/ `

    .history-footer {
        margin: 1em auto 0em auto;
        position: absolute;
        display: block;
        width: 100%;
        text-align: center;
        bottom: 2.3%;
        z-index: 120;
    }

    .history-footer .history-para {
        margin: 0em auto 0em auto;
        position: relative;
        display: inline-block;
        text-align: center;
        font-family: 'CabinSketch';
        font-style: bold;
        font-size: var(--grmj-font-size-1avw);
        font-weight: var(--grmj-font-weight-2);
        color: var(--font-color-5);
        filter: var(--filter-dropShadow-4b);
    }
    
    .history-para:hover {
        font-size: var(--grmj-font-size-1zvwh);
        font-weight: var(--grmj-font-weight-7);
        color: var(--color-accent);
        cursor: pointer;
        filter: var(--grmj-filter-dropShadow-6);
    } 

`;

export { profileHistory_sharedStyles };
