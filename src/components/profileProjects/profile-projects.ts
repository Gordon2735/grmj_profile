/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
'use strict';

import { ProjectsTemplate } from './profile-projects_template.js';
import { profileProjects_sharedHTML } from './profile-projects_sharedHTML.js';
import { profileProjects_sharedStyles } from './profile-projects_sharedStyles.js';
import RegisterComponent, {
    setAttributes
} from '../componentTools/components_services.js'; // appendChildren
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

        const getProjectPage = async (
            projectName: string,
            page: string[],
            componentWithDataset: HTMLElement
        ): Promise<string> => {
            console.log(componentWithDataset);
            switch (projectName) {
                case spc_inv:
                    this.profileProjectComponent.setAttribute('state', page[0]);
                    componentWithDataset.dataset.projectPage = '0';
                    break;
                case tw_blog:
                    this.profileProjectComponent.setAttribute('state', page[1]);
                    componentWithDataset.dataset.projectPage = '1';
                    break;
                case todo:
                    this.profileProjectComponent.setAttribute('state', page[2]);
                    componentWithDataset.dataset.projectPage = '2';
                    break;
                case synthesizer:
                    this.profileProjectComponent.setAttribute('state', page[3]);
                    componentWithDataset.dataset.projectPage = '3';
                    break;
                case dog_type:
                    this.profileProjectComponent.setAttribute('state', page[4]);
                    componentWithDataset.dataset.projectPage = '4';
                    break;
                default:
                    this.profileProjectComponent.setAttribute('state', page[0]);
                    componentWithDataset.dataset.projectPage = '10';
                    break;
            }
            return (
                componentWithDataset.getAttribute(
                    'data-project-page'
                ) as string,
                this.profileProjectComponent.getAttribute('state') as string
            );
        };

        const renderProjectList = async (): Promise<void> => {
            projectNamesList.map((projectName: string, indexes: number) => {
                const ulGrab = document.getElementById(
                    'profileProjectsList'
                ) as HTMLUListElement;
                const li = document.createElement('li') as HTMLLIElement;
                li.textContent = projectName;
                li.setAttribute('class', 'not-active');
                ulGrab.appendChild(li);
                li.setAttribute('index', `${indexes}`);

                return;
            });
        };
        renderProjectList();

        const liListHandler = async (): Promise<void> => {
            const liList = document.querySelectorAll(
                'li'
            ) as NodeListOf<HTMLLIElement>;

            liList.forEach((li: HTMLLIElement) => {
                li.addEventListener('click', (event: MouseEvent) => {
                    const isActive = document.querySelector(
                        '.active'
                    ) as HTMLLIElement;
                    if (isActive) isActive.setAttribute('class', 'not-active');
                    const target = event.target as HTMLLIElement;

                    console.info(`Event's Target:`, target);
                    this.profileProjectComponent.setAttribute('state', 'rest');

                    li.hasAttribute('active') !== false
                        ? null
                        : target.classList.add('active'),
                        target.classList.remove('not-active');

                    getProjectPage(
                        target.innerText as string,
                        this.projectPage,
                        this.profileProjectComponent
                    );
                    return target;
                });
            });
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
    ): Element | null | undefined {
        //At components dataset attribute change I want to assign the src attribute to the iFrameViewer
        // and then render the iFrameViewer to the DOM
        const sectionB = document.getElementById('sectionB') as HTMLElement;
        if (_name === 'data-project-page') {
            switch (_newValue) {
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
            console.log(_name, _oldValue, _newValue);

            sectionB?.insertAdjacentElement('beforeend', this.iFrameViewer);
            // sectionB?.appendChild(this.iFrameViewer);
        }
        return;
    }
}
RegisterComponent('profile-projects', ProfileProjects);
