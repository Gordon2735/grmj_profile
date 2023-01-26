/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use strict';

import { SidePanelTemplate } from './side-panel_template.js';
import { sidePanel_sharedStyles } from './side-panel_sharedStyles.js';
import { sidePanel_sharedHTML } from './side-panel_sharedHTML.js';
import ComponentRegistry from '../componentTools/components_services.js';

export class SidePanel extends SidePanelTemplate {
  override noShadow: boolean;
  override root: ShadowRoot | null = this.shadowRoot;
  body: HTMLBodyElement | null | undefined;
  document: Document | null = this.ownerDocument;
  historyAnchor: HTMLElement | null | undefined;
  resumeAnchor: HTMLElement | null | undefined;
  projectsAnchor: HTMLElement | null | undefined;
  goalsAnchor: HTMLElement | null | undefined;
  codeExAnchor: HTMLElement | null | undefined;

  constructor(body: HTMLBodyElement | null | undefined) {
    super();

    this.body = body;
    this.noShadow = true;
    this.body = document.querySelector('body');
  }
  override connectedCallback() {
    super.connectedCallback();

    class Menu {
      container: HTMLElement | null | undefined;
      big3: HTMLElement | null | undefined;
      vanilla: HTMLElement | null | undefined;
      isMenuShown: boolean;
      tsSymbol: HTMLElement | undefined | null;
      jsSymbol: HTMLElement | undefined | null;
      menuBody: HTMLBodyElement | null | undefined;
      menuContainer: HTMLElement | null | undefined;
      itemHTML: HTMLElement | string | undefined;

      slide(): void {
        this.container = document.getElementById('container');
        this.big3 = document.getElementById('big-3');
        this.vanilla = document.getElementById('vanilla');
        this.jsSymbol = document.getElementById('js-symbol');
        this.tsSymbol = document.getElementById('ts-symbol');

        !menu.isMenuShown
          ? ((this.container!.style.transform = 'translateX(0px)'),
            (this.big3!.style.transform = 'rotate(360deg)'),
            (this.big3!.style.animation = 'FadeIn 2s'),
            (this.jsSymbol!.style.transform = 'rotate(360deg)'),
            (this.jsSymbol!.style.animation = 'FadeIn 2s'),
            (this.tsSymbol!.style.transform = 'rotate(360deg)'),
            (this.tsSymbol!.style.animation = 'FadeIn 2s'),
            (this.vanilla!.style.animation = 'FadeIn 4s'),
            (this.isMenuShown = true))
          : ((this.container!.style.transform = 'translateX(-210px)'),
            (this.big3!.style.transform = 'rotate(-360deg)'),
            (this.big3!.style.animation = 'FadeOut 500ms'),
            (this.jsSymbol!.style.transform = 'rotate(-360deg)'),
            (this.jsSymbol!.style.animation = 'FadeOut 500ms'),
            (this.tsSymbol!.style.transform = 'rotate(-360deg)'),
            (this.tsSymbol!.style.animation = 'FadeOut 500ms'),
            (this.vanilla!.style.animation = 'FadeOut 1s'),
            (this.isMenuShown = false));
      }

      constructor() {
        this.isMenuShown = false;

        const menuBody: HTMLBodyElement | null | undefined =
          document.querySelector('body');
        const menuContainer: HTMLElement | null | undefined =
          menuBody?.querySelector('#container');

        const itemHTML: HTMLElement | string | undefined = /*html*/ `
                    <div id="historyDiv" class="item" >&#127915;&nbsp;&nbsp;&nbsp;<a id="historyA" class="history-a" href="/history">Gordon's History</a></div>
                    <div class="item">&#128203;&nbsp;&nbsp;&nbsp;<a id="resume" class="resume" href="/resume">Resume</a></div>
                    <div  id:="projects"  class="item">&#128230;&nbsp;&nbsp;&nbsp;<a id="projectsAnchor" class="project-anchor"
                        href="/projects">Projects</a></div>
                    <div  id:="goals"  class="item">&#128211;&nbsp;&nbsp;&nbsp;<a id="goalsAnchor" class="goals-anchor"
                        href="/goals">Gordon's Goals</a></div>
                    <div class="item">&lambda;&nbsp;&nbsp;&nbsp;<a id="codeEx" class="code-ex">Code Examples &#160 <&#160|&#160></a></div>
                    <img id="big-3" src="/src/components/componentTools/resources/images/html-js-css_transparent.png"
                        alt="big three languages image" class="big-3">
                    <hr id="line" class="line">
                    <img id="js-symbol" src="/src/components/componentTools/resources/images/javascript-transparent.png"
                        alt="big three languages image" class="js-symbol">
                    <img id="ts-symbol" src="/src/components/componentTools/resources/images/typescript-transparent_tall.png"
                        alt="big three languages image" class="ts-symbol">
                    <hr id="line2" class="line2">
                    <h3 id="vanilla" class="vanilla">Vanilla is BEST!</h3>
                `;
        menuContainer?.insertAdjacentHTML('afterbegin', itemHTML);
      }
    }

    const menu: Menu = new Menu();
    const ham: HTMLElement | null = document.getElementById('hamburger');
    function conLog(): void {
      const conLogging: void = console.log(
        'Side-Panel is Rendered :::: HooT™️ Webelistics®️ '
      );
      return conLogging;
    }

    ham?.addEventListener(
      'click',
      (event: { preventDefault: () => void; stopPropagation: () => void }) => {
        event.preventDefault();

        !menu.isMenuShown
          ? (menu.slide(), conLog(), (menu.isMenuShown = true))
          : (menu.slide(), (menu.isMenuShown = false));

        event.stopPropagation();
      }
    );
    const sliderContainer: HTMLElement | null | undefined =
      document.getElementById('container');
    sliderContainer?.addEventListener('click', (event) => {
      event.preventDefault();

      menu.isMenuShown
        ? (menu.slide(), (menu.isMenuShown = false), event.stopPropagation())
        : (event.stopPropagation(),
          console.info(`Menu-Shown: ${menu.isMenuShown}`));
      event.stopImmediatePropagation();
    });

    // History Page
    const historyAnchor: HTMLElement | null | undefined =
      document.getElementById('historyA');

    historyAnchor?.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '/history';
      menu.slide(), (menu.isMenuShown = false);
      event.stopPropagation();
    });

    // Resume Page
    const resumeAnchor: HTMLElement | null | undefined =
      document.getElementById('resume');

    resumeAnchor?.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '/resume';
      menu.slide(), (menu.isMenuShown = false);
      event.stopPropagation();
    });

    // Projects Page
    const projectsAnchor: HTMLElement | null | undefined =
      document.getElementById('projectsAnchor');

    projectsAnchor?.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '/projects';
      menu.slide(), (menu.isMenuShown = false);
      event.stopPropagation();
    });

    // Goals Page
    const goalsAnchor: HTMLElement | null | undefined =
      document.getElementById('goalsAnchor');

    goalsAnchor?.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '/goals';
      menu.slide(), (menu.isMenuShown = false);
      event.stopPropagation();
    });

    // Code Examples Page
    const codeExAnchor: HTMLElement | null | undefined =
      document.getElementById('codeEx');

    codeExAnchor?.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '/code_examples';
      menu.slide(), (menu.isMenuShown = false);
      event.stopPropagation();
    });
  }
  override get template() {
    return /*html*/ `
            <style>${sidePanel_sharedStyles.panel}</style>
            ${sidePanel_sharedHTML.panel} 
        `;
  }
  static get observedAttributes() {
    return ['window.location.href'];
  }
  public attributeChangedCallback(
    name: string,
    _oldValue: string,
    _newValue: string
  ) {
    _oldValue !== _newValue
      ? console.info(`old location: ${_oldValue},
				${name} has a new location of: ${_newValue}
				which should be equal to: ${window.location} `)
      : console.info(`old location: ${_oldValue}`);
  }
}
ComponentRegistry('side-panel', SidePanel);
