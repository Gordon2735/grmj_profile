'use strict';

import { profileResume_sharedHTML } from '../../interfaces/interfaces.js';

const profileResume_sharedHTML = {
    shell: ``,
    resume: ``
};

profileResume_sharedHTML.shell = /*html*/ `
	<profile-resume id="profileResume" class="profile-resume"></profile-resume>
`;

profileResume_sharedHTML.resume = /*html*/ `  

  <figure id="resumeFigure" class="resume-figure" alt="Yellow Sticky Note Image Container">
    <div id="resumeFigureDiv" class="resume-figure-div" alt="Yellow Sticky Note Image Div"></div>   
      <h2 id="resumeFigureTitle" class="resume-figure-title" alt="Yellow Sticky Note Image header Title">
        &nbsp;Gordon's<br />&nbsp; &ensp;Resume
      </h2>
      <img id="resumeTeamBracket" class="resume-team-bracket" alt="Yellow Sticky Note Image"
        src="/src/components/componentTools/resources/images/team_webelistics_brackets-2.png"
      />
      <figcaption id="resumeCaption" class="resume-caption">Team Webelistics®</figcaption>    
  </figure>

  <main id="resumeMainContainer" class="resume-main-container" alt="Resume PDF Container">
    <section id="resumeSection" class="resume-section" alt="Resume PDF Section">
      <embed id="resumeEmbed" class="resume-embed" alt="Resume PDF"
        src="/src/components/componentTools/resources/pdf/GORDON__RESUME.pdf"
        type="application/pdf" width="92%" height="92%"
        title="Gordon's Resume" 
      />
    </section>
  </main>

  <section id="btnSection" class="btn-section" alt="Resume Button Section">
    <button id="resumeLandingBtn" class="resume-landing-btn btn" alt="Resume Landing Button">
        Landing      
    </button>
    <button id="resumeHistoryBtn" class="resume-history-btn btn" alt="Resume History Button">
        History
    </button>
    <button id="resumeProjectsBtn" class="resume-projects-btn btn" alt="Resume Projects Button">
        Projects
    </button>
    <button id="resumeGoalsBtn" class="resume-goals-btn btn" alt="Resume Goals Button">
        Goals      
    </button>
    <button id="resumeContactBtn" class="resume-contact-btn btn" alt="Resume Contact Gordon Button">      
        Contact
    </button>
  </section>


  <footer id="footer" class="footer" alt="Footer">
    <h3 id="footerH3" class="footer-h3" alt="Footer H3 Title">
      <small id="footerSmall" class="footer-small" alt="Footer Copyright make small tag">
          Copyright &copy; 2023 Team Webelistics® All Rights Reserved
      </small>
      <br />
      <br />
    </h3>
  </footer> 

`;

export { profileResume_sharedHTML };
