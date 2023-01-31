'use strict';

import profile_sharedHTML from '../../interfaces/interfaces.js';

// will have to create an interface for this

const profile_sharedHTML = {
    shell: ``,
    home: ``,
    dropdown: ``
};

profile_sharedHTML.shell = /*html*/ ` 
    <profile-home id="profileHome" class="profile-home"></profile-home>
`;

profile_sharedHTML.home = /*html*/ `
    
    <main id="main" class="main">
        <div id="titleOfficial" class="title-official">The Equivocal</div>  
        <h1 id="grmjProfileTitle" class="grmj-profile-title">Profile Landing Page</h1>
        <div id="titleOf" class="title-of">-of-</div>
        <br />
        <figure id="grmjPersFig" class="grmj-pers-fig"> 
        <img id="grmjPic" class="grmj-pic" src="/src/components/componentTools/resources/images/01_grmj_personal.png" alt="Gordon's personal picture"/>
        <figcaption id="grmjPersFigCap" class="grmj-pers-fig-cap" size="20">Gordon R Mullen Jr</figcaption>
        </figure>
    </main> 

   
`;

profile_sharedHTML.dropdown = /*html*/ ` 
   
      
    
`;

export { profile_sharedHTML };

// <main id="main" class="main">

// <div id="titleOfficial" class="title-official">The Official</div>

// <h1 id="grmjProfileTitle" class="grmj-profile-title">Profile & Portfolio Landing Page</h1>
// <div id="titleOf" class="title-of">-of-</div>

// <br />

// <figure id="grmjPersFig" class="grmj-pers-fig">
//     <img src="/src/components/profileHome/tools/images/01_grmj_personal.png" alt="Gordon's personal picture" id="grmjPic" class="grmj-pic" />
//     <figcaption id="grmjPersFigCap" class="grmj-pers-fig-cap" size="20">Gordon R Mullen Jr</figcaption>
// </figure>

// </main>

// <menu id="menuInfo" class="menu-info">
// <ul id="ulHome" class="ul-home">
//     <li id="liHome1" class="li-home developer"></li>
//     <li id="liHome2" class="li-home software"></li>
//     <li id="liHome3" class="li-home quote"></li>
// </ul>
// </menu>

// <details id="detailsDev" class="details details-dev">
// <summary id="summaryDev" class="summary summary-dev">Development Types</summary>
//    <p id="paraDev" class=" paragraph para-dev">
//            Software Developer || Internet Application Developer || Front & Back End Developer || Desktop Developer
//    </p>
// </details>
// <details id="detailsSoftware" class="details details-software">
// <summary id="summarySoftware" class="summary summary-software">Software Practices</summary>
//    <p id="paraSoft" class="paragraph para-software">
//            Languages: Vanilla JavaScript, Microsoft's TypeScript, Node.js, HTML5, CSS3, Native Web Components
//        <br />
//            Backend Frameworks: Express, Handlebars, MongoDB, Mongoose, MySQL, Sequelize
//        <br />
//            Desktop Frameworks: Electron, Native Web Components, JavaScript, TypeScript
//    </p>
// </details>
// <details id="detailsQuote" class="details details-quote">
// <summary id="summaryQuote" class="summary summary-quote">Personal Goals</summary>
//    <p id="paraQuote" class="paragraph para-quote">
//            Personal Goals:
//        <br />
//            Current-Best-Practices-Driven JavaScript Software Engineering combining a loosely coupled, modular design; with a focus on code reusability and maintainability. Object-Oriented-Programming (OOP): using classes while seeking non-complexity though standardizing with Encapsulation, Abstraction, Polymorphism, and Inheritance; progressively favoring composition over inheritance. Using Native Web Components dynamically for the entirety of the UI/Frontend Development Process. Applying constraints for maintaining a structured OOP/MVC paradigm including the Components "state", and utilizing the ES6 module system: even within the Node.js Environment for consistency. Unit-Testing Front & Backend with the Testing frameworks of Jest, and Supertest. Always seeking to improve my programming skills and knowledge. Deep-Diving invariably into JavaScript/TypeScript so that if, hypothetically I were cornered, then asked to describe my coding skills permitting only two words, I would impulsively reply without hesitation: 'JavaScript Professional'.
//    </p>
// </details>

// <main id="main" class="main">
// <div id="titleOfficial" class="title-official">The Official</div>
// <h1 id="grmjProfileTitle" class="grmj-profile-title">Profile Landing Page</h1>
// <div id="titleOf" class="title-of">-of-</div>
// <br />
// <h2 id="grmjProfile_subTitle" class="grmj-profile-subtitle">
//     Gordon R Mullen Jr
// </h2>
// <h3 id="grmjProfile_subTitle2" class="grmj-profile-subtitle2">
//     Software Developer || Internet Application Developer || Front & Back End Developer || Desktop Developer
// </h3>
// <h4 id="grmjProfile_subTitle3" class="grmj-profile-subtitle3">
//     Languages: Vanilla JavaScript, Microsoft's TypeScript, Node.js, HTML5, CSS3, Native Web Components
//     <br />
//     Backend Frameworks: Express, Handlebars, MongoDB, Mongoose, MySQL, Sequelize
//     <br />
//     Desktop Frameworks: Electron, Native Web Components, JavaScript, TypeScript
// </h4>
// <figure id="grmjPersFig" class="grmj-pers-fig">
//     <img src="/src/components/componentTools/resources/images/01_grmj_personal.png" alt="Gordon's personal picture" id="grmjPic" class="grmj-pic" />
//     <figcaption id="grmjPersFigCap" class="grmj-pers-fig-cap" size="20">Gordon R Mullen Jr</figcaption>
// </figure>
// </main>

// <details id="detailsDev" class="details details-dev">
//     <summary>Development Types</summary>
//     <p id="paraDev" class=" paragraph para-dev">
//         Software Developer || Internet Application Developer || Front & Back End Developer || Desktop Developer
//     </p>
// </details>
// <details id="detailsSoftware" class="details details-software">
//     <summary>Software Practices</summary>
//     <p id="paraSoft" class="paragraph para-software">
//         Languages: Vanilla JavaScript, Microsoft's TypeScript, Node.js, HTML5, CSS3, Native Web Components
//         <br />
//         Backend Frameworks: Express, Handlebars, MongoDB, Mongoose, MySQL, Sequelize
//         <br />
//         Desktop Frameworks: Electron, Native Web Components, JavaScript, TypeScript
//     </p>
// </details>
// <details id="detailsQuote" class="details details-quote">
//     <summary>Personal Goals</summary>
//     <p id="paraQuote" class="paragraph para-quote">
//         Personal Goals:
//         <br />
//         Current-Best-Practices-Driven JavaScript Software Engineering combining a loosely coupled, modular design;
//         with a focus on code reusability and maintainability. Object-Oriented-Programming (OOP): using classes while
//         seeking non-complexity though standardizing with Encapsulation, Abstraction, Polymorphism, and Inheritance;
//         progressively favoring composition over inheritance. Using Native Web Components dynamically for the
//         entirety of the UI/Frontend Development Process. Applying constraints for maintaining a structured OOP/MVC
//         paradigm including the Components "state", and utilizing the ES6 module system: even within the Node.js
//         Environment for consistency. Unit-Testing Front & Backend with the Testing frameworks of Jest, and
//         Supertest. Always seeking to improve my programming skills and knowledge. Deep-Diving invariably into
//         JavaScript/TypeScript so that if, hypothetically I were cornered, then asked to describe my coding skills
//         permitting only two words, I would impulsively reply without hesitation: 'JavaScript Professional'.
//     </p>
// </details>
// <section id="grmjProfileSection" class="grmj-profile-section">
//     <q id="grmjProfileQuote" class="grmj-profile-quote">
//         Personal Goals:
//         <br />
//         Current-Best-Practices-Driven JavaScript Software Engineering combining a loosely coupled, modular design; with a focus on code reusability and maintainability. Object-Oriented-Programming (OOP): using classes while seeking non-complexity though standardizing with Encapsulation, Abstraction, Polymorphism, and Inheritance; progressively favoring composition over inheritance. Using Native Web Components dynamically for the entirety of the UI/Frontend Development Process. Applying constraints for maintaining a structured OOP/MVC paradigm including the Components "state", and utilizing the ES6 module system: even within the Node.js Environment for consistency. Unit-Testing Front & Backend with the Testing frameworks of Jest, and Supertest. Always seeking to improve my programming skills and knowledge. Deep-Diving invariably into JavaScript/TypeScript so that if, hypothetically I were cornered, then asked to describe my coding skills permitting only two words, I would impulsively reply without hesitation: 'JavaScript Professional'.
//     </q>
// </section>
