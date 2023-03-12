/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { ProjectsTemplate } from './profile-projects_template.js';
import { profileProjects_sharedHTML } from './profile-projects_sharedHTML.js';
import { profileProjects_sharedStyles } from './profile-projects_sharedStyles.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes,
import historyStack from '../../images/state/profileState.js';
import { HistoryObject } from '../../interfaces/interfaces.js';

export class SlideProjects extends ProjectsTemplate {
    override activateShadowDOM: boolean;
    override root: ShadowRoot | null = this.shadowRoot;
    body: HTMLBodyElement | null | any;
    State: any;
    historyStack: import('d:/grmj_profile/src/interfaces/interfaces.js').HistoryObject;
    setAttributes:
        | ((tag: HTMLElement, attribute: string | object | any) => void)
        | undefined;
    appendChildren:
        | ((parent: HTMLElement | ShadowRoot | null, children: any[]) => void)
        | undefined;

    constructor(body: HTMLBodyElement | null | undefined) {
        super();

        this.activateShadowDOM = false;

        const root = this.shadowRoot;
        this.root = root;

        this.body = body;
        this.body = document.querySelector('body');

        this.State = { pageOpen: '/projects' };
        this.historyStack = historyStack;

        window.history.pushState(this.State, 'slide', '/projects');
        this.historyStack.push(history.state);

        window.onpopstate = (event) => {
            event.state
                ? ((this.State = event.state), this.historyStack.pop())
                : this.historyStack.pop();
        };
        console.log(this.State.pageOpen);
        console.log(history.state);
        console.log(this.historyStack);
    }
    override connectedCallback() {
        super.connectedCallback();

        class Menu {
            noShadow = false;
            container: HTMLDivElement | null | undefined;
            webBig3: HTMLElement | null | undefined;
            blueVanilla: HTMLElement | null | undefined;
            vanilla: HTMLElement | null | undefined;
            isMenuShown = false;
            tsSymbol: HTMLElement | null | undefined;
            jsSymbol: HTMLElement | null | undefined;
            menuBody: HTMLBodyElement | null | undefined;
            menuContainer: HTMLDivElement | null | undefined;
            itemHTML: HTMLElement | string | undefined;
            root: ShadowRoot | undefined;
            shadowRoot: ShadowRoot | undefined;

            slide(): void {
                const container = document.querySelector(
                    '.container'
                ) as HTMLDivElement;
                this.container = container;
                this.webBig3 = document.getElementById('webBig3');
                this.blueVanilla = document.getElementById('blueVanilla');
                this.vanilla = document.getElementById('yellowVanilla');
                this.tsSymbol = document.getElementById('tsSymbol');
                this.jsSymbol = document.getElementById('jsSymbol');
                // this.root = this.shadowRoot;

                !menu.isMenuShown
                    ? ((this.container!.style.transform = 'translateX(0px)'),
                      (this.webBig3!.style.transform = 'rotate(360deg)'),
                      (this.webBig3!.style.animation = 'FadeIn 2s'),
                      (this.jsSymbol!.style.transform = 'rotate(360deg'),
                      (this.jsSymbol!.style.animation = 'FadeIn 2s'),
                      (this.tsSymbol!.style.transform = 'rotate(360deg'),
                      (this.tsSymbol!.style.animation = 'FadeIn 2s'),
                      (this.blueVanilla!.style.animation = 'FadeIn 4s'),
                      (this.vanilla!.style.animation = 'FadeIn 4s'),
                      (menu.isMenuShown = true))
                    : ((this.container!.style.transform = 'translateX(-210px'),
                      (this.webBig3!.style.transform = 'rotate(-360deg)'),
                      (this.webBig3!.style.animation = 'FadeOut 500ms'),
                      (this.jsSymbol!.style.transform = 'rotate(-360deg'),
                      (this.jsSymbol!.style.animation = 'FadeOut 500ms'),
                      (this.tsSymbol!.style.transform = 'rotate(-360deg'),
                      (this.tsSymbol!.style.animation = 'FadeOut 500ms'),
                      (this.blueVanilla!.style.animation = 'FadeOut 1s'),
                      (this.vanilla!.style.animation = 'FadeOut 1s'),
                      (menu.isMenuShown = false));
            }

            constructor() {
                const menuBody: HTMLBodyElement | null | undefined =
                    document.querySelector('body');
                const menuContainer: HTMLDivElement | null | undefined =
                    menuBody?.querySelector('.container');

                const itemHTML: HTMLElement | string | undefined = /*html*/ `					
					<div id="spaceInvadersDiv" class="item">&#127915;&nbsp;&nbsp;&nbsp;
						<a id="spaceInvadersAnchor" class="space-invaders-anchor" href="/projects/space_invaders">Space Invaders App</a>
					</div>
					<div class="item">&#128203;&nbsp;&nbsp;&nbsp;
						<a id="spaceXAnchor" class="space-X-anchor" href="/projects/spaceX">SpaceX Flight App</a>
					</div>
					<div  id:="stockDiv"  class="item">&#128230;&nbsp;&nbsp;&nbsp;
						<a id="stockAnchor" class="stock-anchor" href="/projects/stock">Stock Exchange Spread App</a>
					</div>
					<div  id:="blogDiv"  class="item">&#128211;&nbsp;&nbsp;&nbsp;
						<a id="blogAnchor" class="blog-anchor" href="/projects/blog">HooT™️ BLOG Webelistics®️</a>
					</div>
					<div class="item">&lambda;&nbsp;&nbsp;&nbsp;
						<a id="iOwn" class="i-own">What? 'I Own This' App</a>
					</div>
	
					<img id="webBig3" src="/src/components/componentsTools/resources/images/html-js-css_transparent.png"
						alt="big three languages image" class="web-big-3" />
	
					<hr id="line" class="line" />
	
					<img id="jsSymbol" src="/src/components/componentsTools/resources/images/javascript-transparent.png"
						alt="big three languages image" class="js-symbol" />
					<img id="tsSymbol" src="/src/components/componentsTools/resources/images/typescript-transparent_tall.png"
						alt="big three languages image" class="ts-symbol" />
	
					<hr id="line2" class="line2" />
					
					<h3 id="blueVanilla" class="blue-vanilla">Blue Vanilla: TypeScript, a mature flavor!</h3>
					
					<hr id="line3" class="line3" />
					
					<h3 id="yellowVanilla" class="vanilla">Vanilla: JavaScript's BEST Flavor!</h3>
					
				`;
                menuContainer?.insertAdjacentHTML('afterbegin', itemHTML);
            }
        }

        const menu: Menu = new Menu();
        const hamburgerMenu: HTMLElement | null | undefined =
            document.getElementById('hamburgerMenu');

        function connectionLog(): void {
            const conLogging: void = console.log(
                'Slide Projects Menu Panel is Rendered :::: HooT™️ Webelistics®️'
            );
            return conLogging;
        }
        hamburgerMenu?.addEventListener(
            'click',
            (event: {
                preventDefault: () => void;
                stopPropagation: () => void;
            }) => {
                event.preventDefault();
                console.log(menu.isMenuShown, menu.isMenuShown);
                !menu.isMenuShown
                    ? (menu.slide(), connectionLog(), (menu.isMenuShown = true))
                    : (menu.slide(), (menu.isMenuShown = false));

                event?.stopPropagation();
            }
        );
        document.addEventListener('click', (event) => {
            event.preventDefault();

            menu.isMenuShown
                ? (menu.slide(),
                  (menu.isMenuShown = false),
                  event.stopPropagation())
                : (event.stopPropagation(),
                  console.info(`Menu-Shown: ${menu.isMenuShown}`));
            event.stopImmediatePropagation();
        });
        //Space Invaders App
        const spaceInvaderAnchor: HTMLElement | null | undefined =
            document.getElementById('spaceInvadersAnchor');

        spaceInvaderAnchor?.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/projects/space_invaders';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // SpaceX Flight App
        const spaceXAnchor: HTMLElement | null | undefined =
            document.getElementById('spaceXAnchor');

        spaceXAnchor?.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/projects/spaceX';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // Stock Exchange Spread App
        const stockAnchor: HTMLElement | null | undefined =
            document.getElementById('stockAnchor');

        stockAnchor?.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/projects/stock';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // HooT™️ BLOG Webelistics®️
        const blogAnchor: HTMLElement | null | undefined =
            document.getElementById('blogAnchor');

        blogAnchor?.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/projects/blog';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });

        // What? 'I Own This' App
        const iOwnAnchor: HTMLElement | null | undefined =
            document.getElementById('iOwn');

        iOwnAnchor?.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/projects/iOwn';
            menu.slide(), (menu.isMenuShown = false);
            event.stopPropagation();
        });
    }
    override get template() {
        return /*html*/ `
			<style>${profileProjects_sharedStyles.slide}</style>
			${profileProjects_sharedHTML.slide}
		`;
    }
    get observedAttributes() {
        return ['window.location.href'];
    }
    public attributeChangedCallback(
        name: string,
        _oldValue: string,
        _newValue: string
    ) {
        const currentLocation: HistoryObject = this.historyStack;
        console.log(currentLocation);
        _oldValue !== _newValue
            ? console.info(`old location: ${_oldValue},
				${name} has a new location of: ${_newValue}
				which should be equal to: ${window.location} `)
            : console.info(`old location: ${_oldValue}`);
    }
}
RegisterComponent('slide-projects', SlideProjects);
