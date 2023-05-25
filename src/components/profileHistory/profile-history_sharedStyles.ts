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
        margin: 2em auto 3em auto;
        position: absolute;
        width: 52vw;
        height:75vh;
        left: 26.98%;
        text-align: center;
        aspect-ratio: 500 / 501;
        border-radius: var(--history-page-border-radius);
        filter: var(--grmj-filter-dropShadow-6);
    }

    .main .history-header {
        margin: 0.35em auto 0em 3.4em;	
        position: relative;
        display: inline-block;
        text-align: center;
        z-index: 101;
    }

    .history-header .h1-brief {
        margin: 1.45em 2em 0.22em auto;	
        position: relative;
        text-align: center;
        font-family: 'Finger Paint';
        font-size: var(--grmj-font-size-header-1);
        font-weight: var(--grmj-font-weight-4);
        font-style: bold;
        color: var(--scratchy-blue-header);
        filter: var(--filter-dropShadow-4b);
        letter-spacing: var(--grmj-letter-spacing-1a);
    }

    .history-header .h2-grmj {
        margin: 0em auto 0em 6.2em;
        position: relative;
        text-align: center;
        font-family: 'Braah One';
        font-size: var(--grmj-font-size-header-3);
        font-weight: var(--grmj-font-weight-4);
        font-style: light;
        color: var(--font-color-4);
        filter: var(--filter-dropShadow-4c);
        letter-spacing: var(--grmj-letter-spacing-1a);
        z-index: 220;
    }

    /* Gordon Solo Pic */
    .main .history-figure-g {
        margin: 0em auto -3em auto;
        position: relative;
        top: -5%;
        left: -32%;
        display: block;
        width: 365px;
        text-align: center;
        z-index: 215;
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

    .history-figure-g:hover {
        top: -15%;
        left: -35%;
        cursor: pointer
    }

    .history-figure-g:hover .history-img-g {
        width: 340px;
        opacity: 0.9;
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

    .history-figure-g:hover .h3-gordon {
        opacity: 0.9;
    }

    /* Gordon & Donna Pic */
    .main .history-figure-g-d {
        margin: 0.5em auto 0em auto;
        position: relative;
        top: -12.65%;
        left: 40.5%;
        display: block;
        width: 380px;
        text-align: center;
        z-index: 215;
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

    .history-figure-g-d:hover .history-img-g-d {
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

    .history-figure-g-d:hover .h3-gordon-d {
        opacity: 0.9;
    }


    /* Gordon in Suit Pic */
    .main .history-figure-g-suit {
        margin: 0em auto 0em auto;
        position: relative;
        top: -93%;
        right: 38.5%;
        display: block;
        width: 365px;
        z-index: 215;
        transform: rotate(-18deg);
    }

    .history-figure-g-suit .history-img-g-suit {
        aspect-ration: 333 / 366;
        margin: 1em auto 0em auto;
        position: relative;
        width: 320px;
        border-radius: 65%;
        opacity: 0.15;
    }

    .history-figure-g-suit:hover .history-img-g-suit {
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

    .history-figure-g-suit:hover .h3-gordon-suit {
        opacity: 0.9;
    }
    
    /* My son Daniel */
    .main .history-figure-g-daniel {
        margin: 0em auto 0em auto;
        position: relative;
        bottom: 85%;
        left: 32.5%;
        display: block;
        width: 240px;
        z-index: 215;
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

    .history-figure-g-daniel:hover {
        bottom: 98%;
        left: 35.5%;
    }

    .history-figure-g-daniel:hover .history-img-g-daniel {
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

    .history-figure-g-daniel:hover .h3-gordon-daniel {
        opacity: 0.9;
    }

    /* My daughter Hannah */
    .main .history-figure-g-hannah {
        margin: 0em auto 0em auto;
        position: relative;
        bottom: 135%;
        left: 43.5%;
        display: block;
        width: 240px; 
        z-index: 215;
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

    .history-figure-g-hannah:hover {
        bottom: 165%;
        left: 36.5%;
    }

    .history-figure-g-hannah:hover .history-img-g-hannah {
        width: 240px;
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

    .history-figure-g-hannah:hover .h3-gordon-hannah {
        opacity: 0.9;
    }    

    @media screen and (max-width: 1230px) {

        .history-header .h1-brief {
            font-size: var(--grmj-font-size-header-2);
        }
    
        .history-header .h2-grmj {
            font-size: var(--grmj-font-size-header-4);
        }
    
        /* Gordon Solo Pic */
        .main .history-figure-g {
            width: 355px;      
        }
    
        .history-figure-g .history-img-g {
            width: 260px; 
        }
    
        .history-figure-g:hover .history-img-g {
            width: 310px;
        }
    
        .history-figcaption-g .h3-gordon {
            font-size: var(--grmj-font-size-3vw);
        }
    
        /* Gordon & Donna Pic */
        .main .history-figure-g-d {
            top: -12.65%;
            left: 40.5%;
            width: 330px;
        }
    
        .history-figure-g-d .history-img-g-d {
            width: 220px;
        }
    
        .history-figure-g-d:hover .history-img-g-d {
            width: 240px;
        }
  
        .history-figcaption-g-d .h3-gordon-d {
            font-size: var(--grmj-font-size-3vw);
        }
    
        /* Gordon in Suit Pic */
        .main .history-figure-g-suit {
            top: -82%;
            right: 38.5%;
            width: 345px;
        }
    
        .history-figure-g-suit .history-img-g-suit {
            width: 260px; 
        }
        
        .history-figure-g-suit:hover {
            bottom: 80%;
            right: 36.5%;
        }
    
        .history-figure-g-suit:hover .history-img-g-suit {
            width: 320px;
        }
     
        .history-figcaption-g-suit .h3-gordon-suit {
            font-size: var(--grmj-font-size-3vw);
        }
        
        /* My son Daniel */
        .main .history-figure-g-daniel {
            bottom: 70%;
            left: 32.5%;
            width: 210px;
        }
    
        .history-figure-g-daniel .history-img-g-daniel {
            width: 180px; 
        }

        .history-figure-g-daniel:hover {
            bottom: 80%;
            left: 29.5%;
        }

        .history-figure-g-daniel:hover .history-img-g-daniel {
            width: 320px;
        }        
    
        .history-figcaption-g-daniel .h3-gordon-daniel {
            font-size: var(--grmj-font-size-3vw);
        }
    
        /* My daughter Hannah */
        .main .history-figure-g-hannah {
            bottom: 110%;
            left: 44.5%;
            width: 220px; 
        }
    
        .history-figure-g-hannah .history-img-g-hannah {
            width: 130px;
        }

        .history-figure-g-hannah:hover {
            bottom: 125%;
            left: 41.5%;
        }
    
        .history-figure-g-hannah:hover .history-img-g-hannah {
            width: 150px;
        }
 
        .history-figcaption-g-hannah .h3-gordon-hannah {
            font-size: var(--grmj-font-size-3vw);
        }
    
    }

    @media screen and (max-width: 1030px) {
        .history-header .h1-brief {
            font-size: var(--grmj-font-size-header-5);
        }
    
        .history-header .h2-grmj {
            font-size: var(--grmj-font-size-header-6);
        }

        /* Gordon Solo Pic */
        .main .history-figure-g {
             top: -5%;
             left: -27%;
             width: 285px;
        }
    
        .history-figure-g .history-img-g {
            width: 190px; 
        }
    
        .history-figure-g:hover .history-img-g {
            width: 220px;
        }
    
        .history-figcaption-g .h3-gordon {
            font-size: var(--grmj-font-size-2vw);
        }
    
        /* Gordon & Donna Pic */
        .main .history-figure-g-d {
            top: -12.65%;
            left: 40.5%;
            width: 250px;
        }
    
        .history-figure-g-d .history-img-g-d {
            width: 180px;
        }
    
        .history-figure-g-d:hover .history-img-g-d {
            width: 205px;
        }  
     
        .history-figcaption-g-d .h3-gordon-d {
            font-size: var(--grmj-font-size-2vw);
        }
    
        /* Gordon in Suit Pic */
        .main .history-figure-g-suit {
            top: -65%;
            right: 38.5%;
            width: 305px;
        }
    
        .history-figure-g-suit .history-img-g-suit {
            width: 180px; 
        }
        
        .history-figure-g-suit:hover {
            top: -60%;
            right: 34.5%;
        }
    
        .history-figure-g-suit:hover .history-img-g-suit {
            width: 220px;
        }
     
        .history-figcaption-g-suit .h3-gordon-suit {
            font-size: var(--grmj-font-size-2vw);
        }
        
        /* My son Daniel */
        .main .history-figure-g-daniel {
            bottom: 70%;
            left: 32.5%;
            width: 180px;
        }
    
        .history-figure-g-daniel .history-img-g-daniel {
            width: 150px; 
        }

        .history-figure-g-daniel:hover {
            bottom: 80%;
            left: 29.5%;
        }

        .history-figure-g-daniel:hover .history-img-g-daniel {
            width: 180px;
        }   
    
        .history-figcaption-g-daniel .h3-gordon-daniel {
            font-size: var(--grmj-font-size-2vw);
        }
    
        /* My daughter Hannah */
        .main .history-figure-g-hannah {
            bottom: 70%;
            left: 44.5%;
            width: 180px; 
        }
    
        .history-figure-g-hannah .history-img-g-hannah {
            width: 70px;
        }

        .history-figure-g-hannah:hover {
            bottom: 85%;
            left: 41.5%;
        }
    
        .history-figure-g-hannah:hover .history-img-g-hannah {
            width: 90px;
        }
 
        .history-figcaption-g-hannah .h3-gordon-hannah {
            font-size: var(--grmj-font-size-2vw);
        }
    
    }

    @media screen and (max-width: 900px) {

        .main {
            margin: 0em auto 0em auto;
            width: 100%;
        }
   
        .main .old-circles {
            margin: 2em auto 3em auto;
            position: absolute;
            width: 62vw;
            height:75vh;
            left: 19.98%;
            text-align: center;
        }

        .main .history-header {
            margin: 1.45em auto 0em auto;	

        }

        .history-header .h1-brief {
            font-size: var(--grmj-font-size-header-7);
        }
    
        .history-header .h2-grmj {
            font-size: var(--grmj-font-size-header-8);
        }

        /* Gordon Solo Pic */
        .main .history-figure-g {
            top: -4%;
            left: -23%;
            width: 245px;
       }
   
       .history-figure-g .history-img-g {
           width: 150px; 
       }
   
       .history-figure-g:hover .history-img-g {
           width: 190px;
       }

        .history-figcaption-g .h3-gordon {
            font-size: var(--grmj-font-size-1vw);
        }
    
        /* Gordon & Donna Pic */
        .main .history-figure-g-d {
            top: -12.65%;
            left: 40.5%;
            width: 200px;
        }
    
        .history-figure-g-d .history-img-g-d {
            width: 140px;
        }
    
        .history-figure-g-d:hover .history-img-g-d {
            width: 165px;
        } 
     
        .history-figcaption-g-d .h3-gordon-d {
            font-size: var(--grmj-font-size-1vw);
        }
    
        /* Gordon in Suit Pic */
       .main .history-figure-g-suit {
            top: -60%;
            right: 34.5%;
            width: 265px;
        }
    
        .history-figure-g-suit .history-img-g-suit {
            width: 145px; 
        }
        
        .history-figure-g-suit:hover {
            top: -60%;
            right: 34.5%;
        }
    
        .history-figure-g-suit:hover .history-img-g-suit {
            width: 180px;
        }
     
        .history-figcaption-g-suit .h3-gordon-suit {
            font-size: var(--grmj-font-size-1vw);
        }
        
        /* My son Daniel */
        .main .history-figure-g-daniel {
            bottom: 40%;
            left: 32.5%;
            width: 150px;
        }
    
        .history-figure-g-daniel .history-img-g-daniel {
            width: 120px; 
        }

        .history-figure-g-daniel:hover {
            bottom: 80%;
            left: 29.5%;
        }

        .history-figure-g-daniel:hover .history-img-g-daniel {
            width: 150px;
        } 
    
        .history-figcaption-g-daniel .h3-gordon-daniel {
            font-size: var(--grmj-font-size-1vw);
        }
    
        /* My daughter Hannah */
        .main .history-figure-g-hannah {
            bottom: 70%;
            left: 44.5%;
            width: 140px; 
        }
    
        .history-figure-g-hannah .history-img-g-hannah {
            width: 40px;
        }

        .history-figure-g-hannah:hover {
            bottom: 80%;
            left: 41.5%;
        }
    
        .history-figure-g-hannah:hover .history-img-g-hannah {
            width: 60px;
        }

        .history-figcaption-g-hannah .h3-gordon-hannah {
            font-size: var(--grmj-font-size-1vw);
        }
    
    }

    @media screen and (max-width: 600px) {

        body {
            width: 600px;
        }

        .main {
            margin: 0em auto 0em auto;
            width: 100%;
        }

        .main .old-circles {
            width: 75vw;
            left: 17.98%;
        }

        .main .history-header {
            margin-top: 2.85em;
            margin-left: 4em;	
        }
        
        .main .history-header .h1-brief {
            font-size: var(--grmj-font-size-header-7);
        }
    
        .history-header .h2-grmj {
            font-size: var(--grmj-font-size-header-8);
        }

        .history-figure-g .history-img-g {
            width: 120px;  
        }
    
        .history-img-g:hover {
            width: 160px;
        } 
        
        /* Gordon Solo Pic */
        .main .history-figure-g {
            margin-top: 3em;
            top: -2%;
            left: -40%;
            width: 195px;
        }
   
        .history-figure-g .history-img-g {
           width: 110px; 
        }
   
        .history-figure-g:hover .history-img-g {
           width: 145px;
        }
    
        .history-figcaption-g .h3-gordon {
            font-size: var(--grmj-font-size-0vw);
        }
    
        /* Gordon & Donna Pic */
        .main .history-figure-g-d {
            top: -12.65%;
            left: 40.5%;
            width: 150px;
        }
    
        .history-figure-g-d .history-img-g-d {
            width: 90px;
        }
    
        .history-figure-g-d:hover .history-img-g-d {
            width: 115px;
        } 
     
        .history-figcaption-g-d .h3-gordon-d {
            font-size: var(--grmj-font-size-0vw);
        }
    
        /* Gordon in Suit Pic */
        .main .history-figure-g-suit {
            top: -40%;
            right: 37.5%;
            width: 235px;
        }
    
        .history-figure-g-suit .history-img-g-suit {
            width: 105px; 
        }
        
        .history-figure-g-suit:hover {
            top: -38%;
            right: 35.5%;
        }
    
        .history-figure-g-suit:hover .history-img-g-suit {
            width: 140px;
        }
        .history-figcaption-g-suit .h3-gordon-suit {
            font-size: var(--grmj-font-size-0vw);
        }
        
        /* My son Daniel */
        .main .history-figure-g-daniel {
            bottom: 20%;
            left: 32.5%;
            width: 100px;
        }
    
        .history-figure-g-daniel .history-img-g-daniel {
            width: 80px; 
        }

        .history-figure-g-daniel:hover {
            bottom: 50%;
            left: 29.5%;
        }

        .history-figure-g-daniel:hover .history-img-g-daniel {
            width: 120px;
        } 
        .history-figcaption-g-daniel .h3-gordon-daniel {
            font-size: var(--grmj-font-size-0vw);
        }
    
        /* My daughter Hannah */
        .main .history-figure-g-hannah {
            bottom: 30%;
            left: 44.5%;
            width: 120px; 
        }
    
        .history-figure-g-hannah .history-img-g-hannah {
            width: 40px;
        }

        .history-figure-g-hannah:hover {
            bottom: 80%;
            left: 41.5%;
        }
    
        .history-figure-g-hannah:hover .history-img-g-hannah {
            width: 60px;
        }
 
        .history-figcaption-g-hannah .h3-gordon-hannah {
            font-size: var(--grmj-font-size-0vw);
        }        
    }

`;

profileHistory_sharedStyles.page_sweeper = /*css*/ `

    .page_sweeper {
        margin: 0em auto 0em auto;
        position: absolute;
        width: 66vw;
        height: 61%;
        top: 23%;
        left: 29.98%;
        z-index: 175;
    }

    .page_sweeper .layer {
        position: absolute;
        width: 69.7%;
        height: 92%;
        visibility: hidden;
        /*box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.8); */
        z-index: 175;
    }

    .page_sweeper .layer.reveal {
        visibility: visible;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .reveal::-webkit-scrollbar {
        width: 0.47em;
        scroll-behavior: smooth;
    }
    
    .reveal::-webkit-scrollbar-track {
        -webkit-box-shadow: var(--grmj_profile_scrollbar-box-shadow);
        box-shadow: var(--grmj_profile_scrollbar-box-shadow);
        background: var(--grmj_profile_scrollbar-background);
    }
    
    .reveal::-webkit-scrollbar-thumb {
        background: var(--grmj_profile_scrollbar-thumb);
        border-radius: 0.35em;
        border: 0.18em solid var(--grmj_profile_scrollbar-border);
    }
    
    .reveal::-webkit-scrollbar:hover,
    .reveal::-webkit-scrollbar-thumb:hover {
        background: var(--scrollbar-hover);
        color: hsla(0, 0%, 41%, 0.99);
        width: 1.55em;
        border: 0.22em solid var(--scrollbar-hover);
        filter: var(--scrollbar-filter);
    }

    .layer { 
        padding: 0.5em;       
        text-align: center;
        z-index: 175;
    }

    .layer h2 {
        margin: 1.2em auto 0.5em auto;
        font-family: 'Finger Paint';
        position: relative;
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
        padding: 0.35em 0.7em 0 0.7em;
        position: relative;
        font-family: var(--grmj-font-family-1);
        font-size: 16px;
        color: var(--font-color);
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
        text-align: justify;
        text-justify: inter-word;
        text-indent: 25px;
        letter-spacing: 0.02em;
        line-height: 1.3;
        /*white-space: nowrap;*/
        word-spacing: 1.75px;
    } 

    .layer .open_page-para {
        padding: 0.35em 0.25em 0.35em 0.25em;
        left: 7%;
        width:85%;
        font-size: 1.55em;
        font-style: italic;
        font-weight: 900;
        color: var(--font-color-brief-x);
        text-shadow: 1px 1px 2px var(--font-color-brief-shadow);
        background:
            linear-gradient(var(--font-color-brief-bg-0), transparent),
            linear-gradient(to top left, var(--font-color-brief-bg-2), transparent),
            linear-gradient(to top right, var(--font-color-brief-bg-1), transparent),
            linear-gradient(to bottom left, var(--font-color-brief-bg-1), transparent);
        background-blend-mode: screen;  
        background-size: cover; 
        background-repeat: no-repeat;
        border-radius: var(--history-page-border-radius);
        filter: var(--filter-dropShadow-4b);
        z-index: 220;
    }
    
    .layer .brief-para {
        margin: 2.25em auto 0em auto;
        padding-top: 1.55em;
        font-size: 1.25em;
        color: var(--font-color-brief);
    }

    .layer h3 {
        margin: 1.05em auto 0.15em auto;
        font-family: 'Finger Paint';
        font-size: 1.75em;
        font-style: bold;
        color: var(--history-h3-00);
        text-align: center;
    }

    .layer.zero {
        background: var(--history-page);
        border-radius: var(--history-page-border-radius);
        z-index: 175;
    }

    .layer.one {
        background: var(--history-page);
        border-radius: var(--history-page-border-radius);
        z-index: 175;
    }

    .layer.two {
        background: var(--history-page);
        border-radius: var(--history-page-border-radius);
        z-index: 175;
    }

    .layer.three {
        background: var(--history-page);
        border-radius: var(--history-page-border-radius);
        z-index: 175;
    }

    .layer.four {
        background: var(--history-page);
        border-radius: var(--history-page-border-radius);
        z-index: 175;
    }

    .layer.five {
        background: var(--history-page);
        border-radius: var(--history-page-border-radius);
        z-index: 175;
    }

    .bullet-nav {
        margin: 4em auto 0em auto;
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 25px;
        z-index: 175;
    }

    .bullet-nav .section-btn {
        margin: 1em auto 1.15em auto;
        padding: 0;
        position: relative;
        width: 100%;
        text-align: center;
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

    .bullet-nav .bullets {
        margin: 0em auto 2.25em auto;
        padding: 0;
        position: relative;
        width: 100%;
        text-align: center;
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

    
    /* Transition Styles */
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

        @media screen and (max-width: 900px) {
            .page_sweeper {          
                margin: 0em auto 0em auto;
                position: absolute;
                width: 80vw;
                height: 61%;
                top: 23%;
                left: 23.98%;
                z-index: 175;
            }
        }
    
        @media screen and (max-width: 600px) {
            /*body {
                font-size: 12px;
            }*/

            .page_sweeper {          
                margin: 0em auto 0em auto;
                position: absolute;
                width: 84vw;
                height: 61%;
                top: 23%;
                left: 22.98%;
                z-index: 175;
            }

            .layer {
                margin-left: 1em;
                width: 390px;
            }
    
            .layer h2 {
                font-size: 1.35em;
            }
    
            .bullets li {
                margin: 0 6px;
            }
        }

`;

profileHistory_sharedStyles.footer = /*css*/ `

    .history-footer {
        margin: 1em auto 0em auto;
        position: absolute;
        display: inline-block;
        width: 100%;
        text-align: center;
        bottom: 0.3%;
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

    @media screen and (max-width: 900px) {
        .history-footer .history-para {
            font-size: 13px;
        }
    }

    @media screen and (max-width: 650px) {  
        .history-footer .history-para {
            font-size: 13px;
        }
    }


`;

export { profileHistory_sharedStyles };
