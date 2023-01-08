'use strict';

import { profileCover_sharedHTML } from '../../interfaces/interfaces.js';

const profileCover_sharedHTML = {
  shell: ``,
  cover: ``,
  slide: ``,
};

profileCover_sharedHTML.shell = /*html*/ `

    <profile-cover id="profileCover" class="profile-cover"></profile-cover>

`;

profileCover_sharedHTML.cover = /*html*/ `


    <section id="sectionCover" class="section-cover">
      <h1 class="h1-cover">Gordon's Cover Letter</h1>
      <h2 class="h2-cover">the letter<span class="arrow-span">&#10169;</span></h2>
      <img id="coverImage" class="cover-image" src="/src/components/componentTools/resources/images/images-temp/blue-white-folders.png" alt="Gordon's Cover Image" />
      <img id="coverImageGrmj" class="cover-image-grmj" src="/src/components/componentTools/resources/images/images-temp/grmj.jpg" alt="Gordon's Cover GRMJ Image" />      
    </section>

    <details id="detailsCover1" class="details details-cover1">
      <summary></summary>
      <button id="buttonCover1" class="button button-cover1 one">Next</button>
      <p id="paraCover1" class=" paragraph para-cover1">
          Software Developer || Internet Application Developer || Front & Back End Developer || Desktop Developer
      </p>
      <button id="buttonCover2" class="button button-cover2 two">Previous</button>
      <p id="paraCover2" class=" paragraph para-cover2">
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
    </details>

`;

profileCover_sharedHTML.slide = /*html*/ `

`;

export { profileCover_sharedHTML };
