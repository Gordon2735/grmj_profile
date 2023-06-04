'use strict';

import { profileProjects_sharedStyles } from '../../interfaces/interfaces.js';

const profileProjects_sharedStyles = {
    shell: ``,
    projects: ``,
    footer: ``,
    footerMod: ``
};

profileProjects_sharedStyles.shell = /*css*/ `
    body {
        background-image: var(--grmj-profile-background_image_1);
    }
      
    .profile-projects-shell .drop-down-shell {
        margin: 0em 0em 0em 0em;
        position: absolute;
        right: 4em;
    }    
`;

profileProjects_sharedStyles.projects = /*css*/ `
  
    .main-wrapper {
      margin: 0.85em;
      width: 100%;  
      display: grid;
      grid-gap: 15px;
      grid-template-columns: [col1-start] 25vw  [col2-start] 25vw  [col3-start] 47.3vw [col3-end];
      grid-template-rows: [row1-start] auto [row2-start] auto [row2-end];  
      background-color: var(--grmj-profile-background);
      color: var(--grmj-font-color-9);
    }
 
    .box {
      padding: 20px;
      background-color: var(--grmj-profile-background_6);
      font-size: var(--grmj-font-size-9vw);  
      color: var(--grmj-font-color-10);
      border: 4px solid var(--grmj-font-color-15);
      border-radius: 10px;
      background-image: url('/src/components/componentTools/resources/images/water-drops-transparent-many.png')
    }  
    
    .gordon-projects {
        grid-column: col1-start / col3-start;
        grid-row: row1-start;
        height: 65vh;
        align-items: center;
        text-align: center;        
    }
    .profile-projects__title {
        font-family: var(--grmj-font-family-1);
        font-size: var(--grmj-font-size-9vw);
        font-weight: var(--grmj-font-weight-7);
        color: var(--grmj-font-color-3);
        text-shadow: var(--grmj-text-shadow-0);
        letter-spacing: var(--grmj-letter-spacing-2);
        filter: var(--grmj-filter-dropShadow-3);
    }
    .b {
        grid-column: col3-start ;
        grid-row: row1-start / row2-end;  
        text-align: center;
        align-items: center; 
    }
    .project-tools__title {
        font-family: var(--grmj-font-family-1);
        font-size: var(--grmj-font-size-9vw);
        font-weight: var(--grmj-font-weight-7);
        color: var(--grmj-font-color-3);
        text-shadow: var(--grmj-text-shadow-0);
        letter-spacing: var(--grmj-letter-spacing-2);
        filter: var(--grmj-filter-dropShadow-3);
    }
    .projects-line {
        margin: 8em auto -9em auto;
        width: 35vw;
        border: 0.01px solid var(--grmj-font-color-3);
        border-radius: 0.33em;
        filter: var(--grmj-filter-dropShadow-3);
        box-shadow: var(--grmj-profile-box-shadow-1);
    }
    
    .b .express-image {
        margin: 5em 0.45em 1.5em 0em;
        display: inline-flex;
        width: 118px;   
        filter: var(--grmj-filter-dropShadow-4);
        aspect-ratio: 345 / 211; 
    }
    
    .b .handlebars-image {
        margin: 5em 0.4em 1.5em 0em;
        display: inline-flex;
        width: 85px;   
        filter: var(--grmj-filter-dropShadow-4);
        aspect-ratio: 1 / 1;        
    }
    .b .es-lint-image {
        margin: 10em 0.45em 2em 0em;
        display: inline-flex;
        width: 68px;   
        aspect-ratio: 398 / 233;        
        filter: var(--grmj-filter-dropShadow-4);
    }
    .b .mongo-db-image {
        margin: 10em 0.45em 2em 0em;
        display: inline-flex;
        width: 75px;   
        aspect-ratio: 1 / 1;        
        filter: var(--grmj-filter-dropShadow-4);
    }
    .b .penguin-image {
        margin: 10em 0em 2em 0em;
        display: inline-flex;
        width: 45px;   
        aspect-ratio: 400 / 461;        
        filter: var(--grmj-filter-dropShadow-4);
    }
    .b .chrome-v8-image {
        margin: 10em 0.05em 1.85em 0em;
        display: inline-flex;
        width: 50px;   
        aspect-ratio: 1 / 1;        
        filter: var(--grmj-filter-dropShadow-4);
    }
    
    .b .mongoose-image {
        margin: 10em 0em 2em 0.1em;
        display: inline-flex;
        width: 55px;   
        aspect-ratio: 7 / 4;        
        filter: var(--grmj-filter-dropShadow-4);
    } 
    .b .ts-image {
         margin: -11em 0em 0em 0em;
         display: inline-flex;   
         width: 68px;
         filter: var(--grmj-filter-dropShadow-4);
         aspect-ratio: 413 / 535;
     }
     
     .b .web-big3-image {
         margin: -11em 0em 0em 0em;
         display: inline-flex;
         width: 246px;   
         filter: var(--grmj-filter-dropShadow-4);
         aspect-ratio: 160 / 61;
     }
 
     .b .node-image {
         margin: -11em 0em 0em 0em;
         display: inline-flex;
         width: 67px;   
         filter: var(--grmj-filter-dropShadow-4);
         aspect-ratio: 457 / 634;        
     }
  
    .c {
        grid-column: col1-start;
        grid-row: row2-start;
        height: 50vh;
    }
  
    .d {
        grid-column: col2-start;
        grid-row: row2-start;
        height: 50vh;
    }
 
`;

profileProjects_sharedStyles.footer = /*css*/ `
`;

profileProjects_sharedStyles.footerMod = /*css*/ `
    .footer {
        margin: 0em auto 0em auto; 
    }
`;

export { profileProjects_sharedStyles };
