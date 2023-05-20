'use strict';

import { profileHistory_sharedHTML } from '../../interfaces/interfaces.js';

const profileHistory_sharedHTML = {
    shell: ``,
    history: ``,
    page_sweeper: ``,
    footer: ``
};

profileHistory_sharedHTML.shell = /*html*/ `
	<profile-history id="profileHistory" class="profile-history"></profile-history>
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
                <h2 id="open_pageH2" class="articles-h2 open_page-h2">Gordon's History Brief</h2>
                <p id="open_pagePara" class="open_page-para" data-brief="">A quick glance into the history of Gordon Mullen</p>
            </article>
            <article id="early_years" class="layer one article-early_years">
                <h2 id="early_yearsH2" class="articles-h2 early_years-h2">My Early Years</h2>
                <p id="early_yearsPara" class="early_years-para" data-early="">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi et sunt quo ab nemo, a deleniti, atque, reprehenderit provident dolor vitae iste ullam. Expedita
                    quaerat, quibusdam corrupti aspernatur libero explicabo!
                </p>
            </article>
            <article id="young_man" class="layer two article-young_man">
                <h2 id="young_manH2" class="articles-h2 young_man-h2">Young Man Years</h2>
                <p id="young_manPara" class="young_man-para" data-young_man="">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis deserunt deleniti alias, quibusdam cum fugit laudantium inventore nemo illum, asperiores
                    dolore? Veniam est, consequatur iure quibusdam minima optio obcaecati architecto!</p>
            </article>
            <article id="middle_road" class="layer three article-middle_road">
                <h2 id="middle_roadH2" class="articles-h2 middle_road-h2">Middle of the Road Years</h2>
                <p id="middle_roadPara" class="middle_road-para" data-middle_road=""></p>
            </article>
            <article id="career_moves" class="layer four article-career_moves">
                <h2 id="career_movesH2" class="articles-h2 career_moves-h2">Career Moves</h2>
                <p id="career_movesPara" class="career_moves-para" data-career_moves="">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic
                    earum modi, repellat a in culpa, vitae cumque odit!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit!</p>
            </article>
            <article id="future_plans" class="layer five article-future_plans">
                <h2 id="future_plansH2" class="articles-h2 future_plans-h2">Future Plans</h2>
                <p id="future_plansPara" class="future_plans-para"data-future_plans="">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic
                    earum modi, repellat a in culpa, vitae cumque odit!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit!
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit   Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit!
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit   Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit!
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quis dolorem reiciendis, vero minus laudantium odio similique vitae. Molestiae voluptate cum hic earum
                    modi, repellat a in culpa, vitae cumque odit
                    </p>
            </article>

            </section>
            
            <nav id="bulletNav" class="bullet-nav">
                <section id="sectionBtn" class="section-btn">
                    <button id="leftBtn" class="left-btn">&#10096; Prev</button>
                    <button id="rightBtn" class="right-btn">Next &#10097;</button>
                </section>

                <ul id="bullets" class="bullets"></ul>   
            </nav>     
        
`;

profileHistory_sharedHTML.footer = /*html*/ `
        
        <footer id="historyFooter" class="history-footer">
            <p id="footerPara" class="history-para">|| ** TW ** || ~~~~    © 2023 Team Webelistics®️. All rights reserved.    ~~~~ || ** TW ** ||</p>
        </footer>
        
`;

export { profileHistory_sharedHTML };
