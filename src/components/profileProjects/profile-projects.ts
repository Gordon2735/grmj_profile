/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { ProjectsTemplate } from './profile-projects_template.js';
import { profileProjects_sharedHTML } from './profile-projects_sharedHTML.js';
import { profileProjects_sharedStyles } from './profile-projects_sharedStyles.js';
import RegisterComponent, {
    setAttributes
    // appendChildren
} from '../componentTools/components_services.js';
import ProfileProject, {
    ProfileProjectsState
} from '../../interfaces/interfaces_components.js';

export default class ProfileProjects
    extends ProjectsTemplate
    implements ProfileProject
{
    override activateShadowDOM = false;
    override root = this.shadowRoot as ShadowRoot;
    head: HTMLHeadElement | null | undefined;
    state: string | undefined;
    profileProjectComponent: HTMLElement;
    projectPage: string[];
    page_0: string;
    page_1: string;
    page_2: string;
    page_3: string;
    page_4: string;
    projectGrouping: string[];
    spaceInvaders: string;
    teamWebelisticsBlog: string;
    todoApp: string;
    synth: string;
    dogType: string;
    projectUl: HTMLUListElement;
    iFrameViewer: HTMLIFrameElement;
    dataProjectPage: ProfileProjectsState | null | undefined;
    stateValue: ProfileProjectsState | null | undefined;
    dataValue: ProfileProjectsState | null | undefined;

    constructor(
        head: HTMLHeadElement | null | undefined,
        profileProjectComponent: HTMLElement,
        projectUl: HTMLUListElement | null | undefined,
        projectPage: string[],
        page_0: string,
        page_1: string,
        page_2: string,
        page_3: string,
        page_4: string,
        spaceInvaders: string,
        teamWebelisticsBlog: string,
        todoApp: string,
        synth: string,
        dogType: string,
        iFrameViewer: HTMLIFrameElement
    ) {
        super();

        this.activateShadowDOM = false;

        head = document.querySelector('head') as HTMLHeadElement;
        this.head = head;

        profileProjectComponent = document.getElementById(
            'profileProjects'
        ) as HTMLElement;
        this.profileProjectComponent = profileProjectComponent;

        projectUl = document.getElementById(
            'profileProjectsList'
        ) as HTMLUListElement;

        this.projectUl = projectUl;
        this.spaceInvaders = spaceInvaders;
        this.teamWebelisticsBlog = teamWebelisticsBlog;
        this.todoApp = todoApp;
        this.synth = synth;
        this.dogType = dogType;

        iFrameViewer = document.createElement('iframe') as HTMLIFrameElement;

        setAttributes(iFrameViewer, {
            id: 'projectViewer',
            class: 'project-viewer',
            src: '',
            alt: 'Project Viewer',
            type: 'text/html',
            allowfullscreen: 'true',
            allow: 'autoplay'
        });

        this.iFrameViewer = iFrameViewer;

        this.spaceInvaders =
            'src/components/profileProjects/resources/projectApps/space_invaders/page_0.html';
        this.teamWebelisticsBlog =
            'src/components/profileProjects/resources/projectApps/twBlog/page_1.html';
        this.todoApp =
            'src/components/profileProjects/resources/projectApps/todo/page_2.html';
        this.synth =
            'src/components/profileProjects/resources/projectApps/synth/page_3.html';
        this.dogType =
            'src/components/profileProjects/resources/projectApps/dog_type/page_4.html';

        const projectGrouping = [
            this.spaceInvaders,
            this.teamWebelisticsBlog,
            this.todoApp,
            this.synth,
            this.dogType
        ] as string[];
        this.projectGrouping = projectGrouping;

        page_0 = 'page_0' as string;
        page_1 = 'page_1' as string;
        page_2 = 'page_2' as string;
        page_3 = 'page_3' as string;
        page_4 = 'page_4' as string;

        this.page_0 = page_0;
        this.page_1 = page_1;
        this.page_2 = page_2;
        this.page_3 = page_3;
        this.page_4 = page_4;

        this.projectPage = projectPage;
        this.projectPage = [
            this.page_0,
            this.page_1,
            this.page_2,
            this.page_3,
            this.page_4
        ] as string[];
    }
    override get template(): string {
        return /*html*/ `
        
            ${profileProjects_sharedHTML.projects}
            <style>${profileProjects_sharedStyles.projects}</style>
            ${profileProjects_sharedHTML.footer}
            <style>${profileProjects_sharedStyles.footerMod}</style>
        `;
    }
    override connectedCallback(): void {
        super.connectedCallback();

        const spc_inv = 'Space-Invaders';
        const tw_blog = 'Team-Webelistics-Blog';
        const todo = 'Todo-App';
        const synthesizer = 'Synthesizer App';
        const dog_type = 'Find-Dog-Type App';

        const projectNamesList = [
            spc_inv,
            tw_blog,
            todo,
            synthesizer,
            dog_type
        ] as string[];

        const processProjectPage = async (
            projectName: string,
            page: string[],
            componentWithDataset: HTMLElement
        ): Promise<string | undefined> => {
            try {
                switch (projectName) {
                    case spc_inv:
                        this.profileProjectComponent.setAttribute(
                            'state',
                            page[0]
                        );
                        componentWithDataset.dataset.projectPage = '0';
                        break;
                    case tw_blog:
                        this.profileProjectComponent.setAttribute(
                            'state',
                            page[1]
                        );
                        componentWithDataset.dataset.projectPage = '1';
                        break;
                    case todo:
                        this.profileProjectComponent.setAttribute(
                            'state',
                            page[2]
                        );
                        componentWithDataset.dataset.projectPage = '2';
                        break;
                    case synthesizer:
                        this.profileProjectComponent.setAttribute(
                            'state',
                            page[3]
                        );
                        componentWithDataset.dataset.projectPage = '3';
                        break;
                    case dog_type:
                        this.profileProjectComponent.setAttribute(
                            'state',
                            page[4]
                        );
                        componentWithDataset.dataset.projectPage = '4';
                        break;
                    default:
                        this.profileProjectComponent.setAttribute(
                            'state',
                            page[0]
                        );
                        componentWithDataset.dataset.projectPage = '10';
                        break;
                }
                return (
                    componentWithDataset.getAttribute(
                        'data-project-page'
                    ) as string,
                    this.profileProjectComponent.getAttribute('state') as string
                );
            } catch (error: unknown) {
                console.error(
                    `There was an ERROR in the processProjectPage() 
                        ASYNCHRONOUS ARROW FUNCTION: ${await error}`
                );
            }
            return;
        };

        const renderProjectList = async (): Promise<void> => {
            try {
                projectNamesList.map((projectName: string, indexes: number) => {
                    const ulGrab = document.getElementById(
                        'profileProjectsList'
                    ) as HTMLUListElement;
                    const li = document.createElement('li') as HTMLLIElement;
                    li.textContent = projectName;
                    li.setAttribute('class', 'not-active');
                    li.setAttribute('index', `${indexes}`);
                    ulGrab.appendChild(li);

                    return;
                });
            } catch (error: unknown) {
                console.error(
                    `There was an ERROR in the renderProjectList() 
                    ASYNCHRONOUS ARROW FUNCTION: ${await error}`
                );
            }
            return;
        };
        renderProjectList();

        const liListHandler = async (): Promise<void> => {
            try {
                const liList = document.querySelectorAll(
                    'li'
                ) as NodeListOf<HTMLLIElement>;

                liList.forEach((li: HTMLLIElement) => {
                    li.addEventListener('click', (event: MouseEvent) => {
                        const isActive = document.querySelector(
                            '.active'
                        ) as HTMLLIElement;
                        if (isActive)
                            isActive.setAttribute('class', 'not-active');
                        const target = event.target as HTMLLIElement;

                        this.profileProjectComponent.setAttribute(
                            'state',
                            'rest'
                        );

                        li.hasAttribute('active') !== false
                            ? null
                            : target.classList.add('active'),
                            target.classList.remove('not-active');

                        processProjectPage(
                            target.innerText as string,
                            this.projectPage,
                            this.profileProjectComponent
                        );
                        return target;
                    });
                });
            } catch (error: unknown) {
                console.error(
                    `There was an ERROR in the liListHandler() 
                ASYNCHRONOUS ARROW FUNCTION: ${await error}`
                );
            }
        };
        liListHandler();
    }

    static get observedAttributes(): string[] {
        return ['data-project-page'];
    }
    public attributeChangedCallback(
        _name: string,
        _oldValue: string,
        _newValue: string
    ): void {
        /**
         * @description
         * At components dataset attribute change I want to assign the src attribute to the iFrameViewer
         *     and then render the iFrameViewer to the DOM
         */

        const sectionB = document.getElementById('sectionB') as
            | HTMLElement
            | undefined;

        const navContainer = document.getElementById(
            'projectViewerNav'
        ) as HTMLElement;

        async function processNavButtons(): Promise<void> {
            try {
                const grabAllNavButtons = navContainer?.querySelectorAll(
                    '.btn-viewer'
                ) as NodeListOf<HTMLButtonElement>;

                grabAllNavButtons !== null
                    ? grabAllNavButtons?.forEach(
                          (button: HTMLButtonElement) => {
                              navContainer?.contains(button) !== false
                                  ? button.remove()
                                  : console.info(
                                        `Apparently there are no buttons to remove even though 
                                        the grabAllNavButtons() QUERY was deemed NULL || CHECKING Button Query Return: ${button}`
                                    );
                              return;
                          }
                      )
                    : console.info(
                          `Apparently there are no buttons to remove || Button Query Return: ${navContainer}`,
                          `CHECK AND VERIFY THAT A Back & Forward Button WERE created`
                      ),
                    createNavButtons(),
                    assignSrcToIFrameViewer(_newValue);
                return;
            } catch (error: unknown) {
                console.error(
                    `There was an ERROR in the removeOldButtons() 
                        ASYNCHRONOUS ARROW FUNCTION: ${await error}`
                );
                return;
            }
        }

        async function createNavButtons(): Promise<void> {
            try {
                const navContainer = document.getElementById(
                    'projectViewerNav'
                ) as HTMLElement;
                // console.info(navContainer);
                const backButton = document.createElement(
                    'button'
                ) as HTMLButtonElement;
                const forwardButton = document.createElement(
                    'button'
                ) as HTMLButtonElement;
                setAttributes(backButton, {
                    id: 'backButton',
                    class: 'back-button btn-viewer',
                    type: 'button',
                    'aria-label': 'back-button',
                    'aria-pressed': 'false',
                    alt: 'back-button'
                });
                console.log(
                    `ARE THESE BUTTONS BEING RENDERED???: ${backButton}`
                );
                setAttributes(forwardButton, {
                    id: 'forwardButton',
                    class: 'forward-button btn-viewer',
                    type: 'button',
                    'aria-label': 'forward-button',
                    'aria-pressed': 'false',
                    alt: 'forward-button'
                });

                backButton.innerHTML = /* html*/ `
                    <span class="btn-arrow-back">←</span>
                `;
                backButton.setAttribute('data-btn-back', 'page_0');

                forwardButton.innerHTML = /* html*/ `
                    <span class="btn-arrow-forward">→</span>
                `;
                forwardButton.setAttribute('data-btn-forward', 'page_1');

                navContainer?.insertAdjacentElement('beforeend', forwardButton);
                navContainer?.insertAdjacentElement('afterbegin', backButton);

                console.log(`
                    ARE THESE BUTTONS BEING RENDERED???:
                    ${backButton}, ${forwardButton}
                `);

                return;
            } catch (error: unknown) {
                console.error(
                    `There was an ERROR in the createNavButtons()
                        ASYNCHRONOUS ARROW FUNCTION: ${await error}`
                );
                return;
            }
        }

        const assignSrcToIFrameViewer = async (
            value: string
        ): Promise<HTMLElement | undefined> => {
            try {
                if (_name === 'data-project-page') {
                    switch (value) {
                        case '0':
                            this.iFrameViewer.src = this.spaceInvaders;
                            break;
                        case '1':
                            this.iFrameViewer.src = this.teamWebelisticsBlog;
                            break;
                        case '2':
                            this.iFrameViewer.src = this.todoApp;
                            break;
                        case '3':
                            this.iFrameViewer.src = this.synth;
                            break;
                        case '4':
                            this.iFrameViewer.src = this.dogType;
                            break;
                        default:
                            this.iFrameViewer.src = this.spaceInvaders;
                            break;
                    }
                    sectionB?.insertAdjacentElement(
                        'beforeend',
                        this.iFrameViewer
                    );
                    return this.iFrameViewer;
                }
            } catch (error: unknown) {
                console.error(
                    `There was an ERROR assigning the SRC PATH String to the
                        iFrame Element: ${await error}`
                );
            }
            return;
        };

        const assignSrcToBackIframeViewer = async (
            value: string
        ): Promise<HTMLElement | undefined> => {
            try {
                if (_name === 'data-project-page') {
                    switch (value) {
                        case '0':
                            this.iFrameViewer.src = this.spaceInvaders;
                            break;
                        case '1':
                            this.iFrameViewer.src = this.teamWebelisticsBlog;
                            break;
                        case '2':
                            this.iFrameViewer.src = this.todoApp;
                            break;
                        case '3':
                            this.iFrameViewer.src = this.synth;
                            break;
                        case '4':
                            this.iFrameViewer.src = this.dogType;
                            break;
                        default:
                            this.iFrameViewer.src = this.spaceInvaders;
                            break;
                    }
                    sectionB?.insertAdjacentElement(
                        'beforeend',
                        this.iFrameViewer
                    );
                    return this.iFrameViewer;
                }
            } catch (error: unknown) {
                console.error(
                    `createNavButtons Function had an ERROR:  ${await error}`
                );
            }
            return;
        };
        processNavButtons();

        const buttonHandler = async (): Promise<void> => {
            try {
                const navContainer = document.getElementById(
                    'projectViewerNav'
                ) as HTMLElement;

                const grabButtons = navContainer?.querySelectorAll(
                    '.btn-viewer'
                ) as NodeListOf<HTMLButtonElement>;

                grabButtons?.forEach((button: HTMLButtonElement) => {
                    console.info(button);

                    if (navContainer?.contains(button) !== false) {
                        const grabBackNavButton = navContainer?.querySelector(
                            '.back-button'
                        ) as HTMLButtonElement;

                        const grabForwardNavButton =
                            navContainer?.querySelector(
                                '.forward-button'
                            ) as HTMLButtonElement;

                        grabBackNavButton?.addEventListener(
                            'click',
                            (event: MouseEvent) => {
                                const target =
                                    event.target as HTMLButtonElement;
                                assignSrcToBackIframeViewer(_oldValue);
                                console.info(target);
                                return;
                            }
                        );

                        grabForwardNavButton?.addEventListener(
                            'click',
                            (event: MouseEvent) => {
                                const target =
                                    event.target as HTMLButtonElement;
                                assignSrcToBackIframeViewer(_newValue);
                                console.info(target);
                                return;
                            }
                        );
                        return;
                    } else {
                        console.error('NO BUTTON FOUND');
                        return;
                    }
                });
            } catch (error: unknown) {
                console.error(
                    `There was an ERROR in the buttonHandler()
                ASYNCHRONOUS ARROW FUNCTION: ${await error}`
                );
            }
        };
        buttonHandler();
    }
}
RegisterComponent('profile-projects', ProfileProjects);

// left arrow long  &#8592;
// right arrow long &#8594;
