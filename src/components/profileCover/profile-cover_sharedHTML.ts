'use strict';

import { profileCover_sharedHTML } from '../../interfaces/interfaces.js';

const profileCover_sharedHTML = {
  shell: ``,
  cover: ``,
  transition: ``,
  slide: ``,
};

profileCover_sharedHTML.shell = /*html*/ `

    <profile-cover id="profileCover" letter="page0" class="profile-cover"></profile-cover>

`;

profileCover_sharedHTML.cover = /*html*/ `

    <main id="mainCover" class="main-cover">
      <section id="sectionCover" class="section-cover">
        <h1 class="h1-cover">Gordon's Cover Letter</h1>
        <h2 class="h2-cover">the letter<span class="arrow-span">&#10169;</span></h2>
        <img id="coverImage" class="cover-image light" src="/src/components/componentTools/resources/images/blue-white-folders-light.png" alt="Gordon's Cover Image" />
        <img id="coverImageGrmj" class="cover-image-grmj" src="/src/components/componentTools/resources/images/images-temp/grmj.jpg" alt="Gordon's Cover GRMJ Image" />      
      </section>
    </main>
`;

profileCover_sharedHTML.transition = /*html*/ `

      <div id="loader" class="loader">
        <img id="stretchmanRight" class="cover-stretchman right" src="/src/components/componentTools/resources/images/stretchman/right-stretchman___running.png" alt="Stretchman Image running right" />      
        <img id="stretchmanLeft" class="cover-stretchman left" src="/src/components/componentTools/resources/images/stretchman/left-stretchman___running.png" alt="Stretchman Image running left" /> 
      </div>
      <section id="secCover0" class="layer page0 zero" data-active="false">
        <a id="anchor0" class="anc0 cover-anchors">Load Letter</a>

      </section>
      <section id="secCover1" class="layer page1 one" data-active="false">
        <h3 id="h3Cover1" class="h3-cover-1">Gordon's Cover Letter I<br>
        </h3>
        <p id="pCover1" class="p-cover-1">
        Current-Best-Practices-Driven JavaScript Software Engineering combining a loosely coupled, modular design;
        with a focus on code reusability and maintainability. Object-Oriented-Programming (OOP): using classes while
        seeking non-complexity though standardizing with Encapsulation, Abstraction, Polymorphism, and Inheritance;
        progressively favoring composition over inheritance. Using Native Web Components dynamically for the
        entirety of the UI/Frontend Development Process. Applying constraints for maintaining a structured OOP/MVC
        paradigm including the Components "state", and utilizing the ES6 module system: even within the Node.js
        Environment for consistency. Unit-Testing Front & Backend with the Testing frameworks of Jest, and
        Supertest. Always seeking to improve my programming skills and knowledge. Deep-Diving invariably into
        JavaScript/TypeScript so that if, hypothetically I were cornered, then asked to describe my coding skills
        permitting only two words, I would impulsively reply without hesitation: 'JavaScript Professional'.
        </p>
        <a id="anchor1" class="anc1 cover-anchors">Next</a>
      </section>
      <section id="secCover2" class="layer page2 two" data-active="false">
        <h3 id="h3Cover2" class="h3-cover-2">Gordon's Cover Letter II<br>
        </h3>
        <p id="pCover2" class="p-cover-2">
        Current-Best-Practices-Driven JavaScript Software Engineering combining a loosely coupled, modular design;
        with a focus on code reusability and maintainability. Object-Oriented-Programming (OOP): using classes while
        seeking non-complexity though standardizing with Encapsulation, Abstraction, Polymorphism, and Inheritance;
        progressively favoring composition over inheritance. Using Native Web Components dynamically for the
        entirety of the UI/Frontend Development Process. Applying constraints for maintaining a structured OOP/MVC
        paradigm including the Components "state", and utilizing the ES6 module system: even within the Node.js
        Environment for consistency. Unit-Testing Front & Backend with the Testing frameworks of Jest, and
        Supertest. Always seeking to improve my programming skills and knowledge. Deep-Diving invariably into
        JavaScript/TypeScript so that if, hypothetically I were cornered, then asked to describe my coding skills
        permitting only two words, I would impulsively reply without hesitation: 'JavaScript Professional'.
        </p>
        <a id="anchor2" class="anc2 cover-anchors">Next</a>
      </section>
      <section id="secCover3" class="layer page3 three" data-active="false">
        <h3 id="h3Cover3" class="h3-cover-3">Gordon's Cover Letter III<br>
        </h3>
        <p id="pCover3" class="p-cover-3">
        Current-Best-Practices-Driven JavaScript Software Engineering combining a loosely coupled, modular design;
        with a focus on code reusability and maintainability. Object-Oriented-Programming (OOP): using classes while
        seeking non-complexity though standardizing with Encapsulation, Abstraction, Polymorphism, and Inheritance;
        progressively favoring composition over inheritance. Using Native Web Components dynamically for the
        entirety of the UI/Frontend Development Process. Applying constraints for maintaining a structured OOP/MVC
        paradigm including the Components "state", and utilizing the ES6 module system: even within the Node.js
        Environment for consistency. Unit-Testing Front & Backend with the Testing frameworks of Jest, and
        Supertest. Always seeking to improve my programming skills and knowledge. Deep-Diving invariably into
        JavaScript/TypeScript so that if, hypothetically I were cornered, then asked to describe my coding skills
        permitting only two words, I would impulsively reply without hesitation: 'JavaScript Professional'.
        </p>
        <a id="anchor3" class="anc3 cover-anchors">Next</a>
      </section>
    
    `;

profileCover_sharedHTML.slide = /*html*/ `

`;

export { profileCover_sharedHTML };

// <script type="module" src="/src/components/profileCover/cover_pages.js"></script>
