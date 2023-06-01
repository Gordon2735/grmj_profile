'use strict';

import { profileHistory_sharedHTML } from '../../interfaces/interfaces.js';

const profileHistory_sharedHTML = {
    shell: ``,
    history: ``,
    page_sweeper: ``,
    footer: ``
};

profileHistory_sharedHTML.shell = /*html*/ `
	<profile-history id="profileHistory" class="profile-history" article="brief" data-article-layer="zero"></profile-history>
`;

profileHistory_sharedHTML.history = /*html*/ `

    <main id="main" class="main">    
    
        <img id="oldCircles" class="old-circles" src="/src/components/componentTools/resources/images/scratchy_old_circles.webp" alt="History main picture" />       

        <header id="historyHeader" class="history-header">
            <h1 id="h1Brief" class="h1-brief">A Life's History Brief of</h1>
            <h2 id="h2Grmj" class="h2-grmj">Gordon R Mullen Jr</h2>
        </header>

        <figure id="historyFigureGd" class="history-figure-g-d">
            <img id="historyImgGd" class="history-img-g-d" src="/src/components/componentTools/resources/images/grmjDonna.jpg" alt="Gordon & his wife Donna's Picture" />
            <figcaption id="historyFigcaptionGd" class="history-figcaption-g-d">
                <h3 id="h3GordonD" class="h3-gordon-d">Gordon & Donna</h3>
            </figcaption>
        </figure>

        <figure id="historyFigureG" class="history-figure-g">
            <img id="historyImgG" class="history-img-g" src="/src/components/componentTools/resources/images/gordonPhoto.webp" alt="Gordon R Mullen Jr" />
            <figcaption id="historyFigcaptionG" class="history-figcaption-g">
                <h3 id="h3Gordon" class="h3-gordon">Gordon R Mullen Jr</h3>
            </figcaption>
        </figure>


        <figure id="historyFigureG" class="history-figure-g-suit">
            <img id="historyImgGSuit" class="history-img-g-suit" src="/src/components/componentTools/resources/images/grmjSuit.webp" alt="Gordon @ work Picture" />
            <figcaption id="historyFigcaptionGSuit" class="history-figcaption-g-suit">
                <h3 id="h3GordonSuit" class="h3-gordon-suit">Gordon @ Work</h3>
            </figcaption>
        </figure>

        <figure id="historyFigureG" class="history-figure-g-daniel">
            <img id="historyImgGDaniel" class="history-img-g-daniel" src="/src/components/componentTools/resources/images/daniel_son.jpg" alt="My son Daniel's Picture" />
            <figcaption id="historyFigcaptionGDaniel" class="history-figcaption-g-daniel">
                <h3 id="h3GordonDaniel" class="h3-gordon-daniel">My son Daniel</h3>
            </figcaption>
        </figure>

        <figure id="historyFigureG" class="history-figure-g-hannah">
            <img id="historyImgGHannah" class="history-img-g-hannah" src="/src/components/componentTools/resources/images/hannah_daughter.webp" alt="My daughter Hannah's Picture" />
            <figcaption id="historyFigcaptionGHannah" class="history-figcaption-g-hannah">
                <h3 id="h3GordonHannah" class="h3-gordon-hannah">My daughter Hannah</h3>
            </figcaption>
        </figure>
    </main>	


`;

profileHistory_sharedHTML.page_sweeper = /*html*/ `
        
        <section id="secPageSweeper" class="page_sweeper">
            <article id="open_page" class="layer zero reveal article_open-page">
                <h2 id="open_pageH2" class="articles-h2 open_page-h2">A Look into Gordon's Past</h2>
                <p id="open_pagePara" class="open_page-para" data-brief="">Birth | Parents | Siblings | Career | Marriage | Children</p>
                <figure id="briefFigure" class="brief-figure" data-brief="">
                    <img id="briefImg" class="brief-img" src="/src/components/componentTools/resources/images/mullens.webp" alt="Gordon, Donna, Hannah, & Daniel Family Picture" />
                    <figcaption id="briefFigcaption" class="brief-figcaption">
                        <h4 id="briefH4" class="brief-h4">The Mullen Family</h4>
                        <h3 id="briefH3" class="brief-h3">Daniel | Donna | Gordon | Hannah</h3>
                    </figcaption>                
                </figure>
            </article>
            <article id="early_years" class="layer one article-early_years" data-early="">
                <h2 id="early_yearsH2" class="articles-h2 early_years-h2">My Early Years</h2>
                <section id="early_yearsSection" class="early_years-section" data-early="" alias="align"></section>
            </article>
            <article id="young_man" class="layer two article-young_man">
                <h2 id="young_manH2" class="articles-h2 young_man-h2">Young Man Years</h2>
                <section id="young_manSection" class="young_man-section" data-young_man=""></section>
            </article>
            <article id="middle_road" class="layer three article-middle_road">
                <h2 id="middle_roadH2" class="articles-h2 middle_road-h2">Middle of the Road Years</h2>
                <section id="middle_roadSection" class="middle_road-section" data-middle_road=""></section>
            </article>
            <article id="career_moves" class="layer four article-career_moves">
                <h2 id="career_movesH2" class="articles-h2 career_moves-h2">Career Moves</h2>
                <section id="career_movesSection" class="career_moves-section" data-career_moves=""></section>
            </article>
            <article id="future_plans" class="layer five article-future_plans">
                <h2 id="future_plansH2" class="articles-h2 future_plans-h2">Future Plans</h2>
                <section id="future_plansSection" class="future_plans-section"data-future_plans=""></section>
            </article>

            </section>
            
            <nav id="bulletNav" class="bullet-nav">
                <section id="sectionBtn" class="section-btn">
                    <button id="leftBtn" class="left-btn"><span class="btn-arrow-left">&#10096;</span>&emsp; Prev</button>
                    <button id="rightBtn" class="right-btn">Next &emsp;<span class="btn-arrow-right">&#10097;</span></button>
                </section>

                <ul id="bullets" class="bullets"></ul>   
            </nav>     
        
`;

profileHistory_sharedHTML.footer = /*html*/ `
        
        <footer id="historyFooter" class="history-footer">
            <p id="footerPara" class="history-para">© 2023 Team Webelistics®️. All rights reserved.</p>
        </footer>
        
`;

export { profileHistory_sharedHTML };
