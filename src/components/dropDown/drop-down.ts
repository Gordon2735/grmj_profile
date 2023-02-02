/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { DropDownTemplate } from './drop-down_template.js';
import { dropDown_sharedHTML } from './drop-down_sharedHTML.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes,
// import historyStack from '../../controller/state/profileState.js';

export class DropDown extends DropDownTemplate {
    override noShadow = true;
    // State: any | undefined;
    // historyStack: import('d:/grmj_profile/src/interfaces/interfaces').HistoryObject;
    head: HTMLHeadElement | null;
    dd1: Element;
    dd2: Element;
    initOperations: () => Promise<void>;
    setOperations: () => Promise<void>;

    constructor(dd1: any, dd2: any) {
        super();

        this.noShadow = true;
        this.dd1 = dd1;
        this.dd2 = dd2;

        const head: HTMLHeadElement | null = document.querySelector('#head');
        this.head = head;

        async function initOperations(): Promise<void> {
            try {
                const grabComponent = document.getElementById(
                    'dropDown'
                ) as HTMLElement;
                const initializeOperations: void = grabComponent?.setAttribute(
                    'operations',
                    'home'
                );
                return initializeOperations;
            } catch (error: unknown) {
                console.error(
                    `%c There has been an ERROR while initializing the "operations" attribute.
                      ERROR: ${error}`,
                    'color: red; font-weight: bold;'
                );
                return;
            }
        }
        this.initOperations = initOperations;

        async function setOperations(): Promise<void> {
            try {
                const getComponent = document.getElementById(
                    'dropDown'
                ) as HTMLElement;
                let getCurrentOperations = window.location.href;

                switch (getCurrentOperations) {
                    case 'http://127.0.0.1:9080/':
                        getComponent.setAttribute('operations', 'home');
                        break;
                    case 'http://127.0.0.1:9080/cover_letter':
                        getComponent.setAttribute('operations', 'cover_letter');
                        break;
                    case 'http://127.0.0.1:9080/about':
                        getComponent.setAttribute('operations', 'about');
                        break;
                    case 'http://127.0.0.1:9080/projects':
                        getComponent.setAttribute('operations', 'projects');
                        break;
                    case 'http://127.0.0.1:9080/history':
                        getComponent.setAttribute('operations', 'history');
                        break;
                    case 'http://127.0.0.1:9080/resume':
                        getComponent.setAttribute('operations', 'resume');
                        break;
                    case 'http://127.0.0.1:9080/code_examples':
                        getComponent.setAttribute(
                            'operations',
                            'code_examples'
                        );
                        break;
                    case 'http://127.0.0.1:9080/goals':
                        getComponent.setAttribute('operations', 'goals');
                        break;
                    case 'http://127.0.0.1:9080/contact':
                        getComponent.setAttribute('operations', 'contact');
                        break;
                    case 'http://127.0.0.1:9080/library':
                        getComponent.setAttribute('operations', 'library');
                        break;
                    default:
                        getComponent.setAttribute('operations', 'home');
                        break;
                }
            } catch (error: unknown) {
                console.error(
                    `%c There has been an ERROR while setting the "operations" attribute.
                ERROR: ${error}`,
                    'color: red; font-weight: bold;'
                );
                return;
            }
        }
        this.setOperations = setOperations;
    }
    override get template() {
        return /*html*/ `
			${dropDown_sharedHTML.dropdown}
		`;
    }
    static get observedAttributes() {
        return ['operations', 'dd1_2'];
    }
    override connectedCallback(): void {
        super.connectedCallback();

        const thiz = this;

        async function initialRender(): Promise<void> {
            const checkOperations = document.getElementById(
                'dropDown'
            ) as HTMLElement;
            try {
                if (checkOperations.hasAttribute('startup')) {
                    return await thiz.initOperations();
                } else {
                    null;
                }
            } catch (error: unknown) {
                console.error(
                    `%c There has been an ERROR while initializing the "operations" attribute.
                ERROR: ${error}`,
                    'color: red; font-weight: bold;'
                );
                return;
            }
        }

        function DropDownMenu(
            this: any,
            o: {
                id: string;
                val: string;
                val2: string;
                data: string[];
                cb: ((newval: any) => void) | ((newval2: any) => void);
            }
        ): any {
            this.options = o;

            // for root to work I'd have to change this "window.getdd"
            (<any>window).getdd = function (elem: {
                closest: (arg0: string) => {
                    (): any;
                    new (): any;
                    parentElement: { (): any; new (): any; id: any };
                };
            }) {
                const id = elem.closest('.dropdown').parentElement.id;
                return (<any>window).dropdowns[id];
            };

            const thiz: any = this;

            this.init = function (): void {
                this.elem = document.getElementById(this.options.id);
                const grabComponent = document.body.querySelector('drop-down');
                let val: any;

                try {
                    switch (window.location.href) {
                        case 'http://127.0.0.1:9080/':
                            val = this.options.val = 'GO';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'home'
                                );
                            }, 100);
                            break;
                        case 'http://127.0.0.1:9080/cover_letter':
                            val = this.options.val = 'Cover Letter';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'cover_letter'
                                );
                            }, 100);
                            break;
                        case 'http://127.0.0.1:9080/about':
                            val = this.options.val = 'about';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'about'
                                );
                            }, 100);
                            break;
                        case 'http://127.0.0.1:9080/projects':
                            val = this.options.val = 'Projects';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'projects'
                                );
                            }, 100);
                            break;
                        case 'http://127.0.0.1:9080/history':
                            val = this.options.val = 'History';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'history'
                                );
                            }, 100);
                            break;
                        case 'http://127.0.0.1:9080/resume':
                            val = this.options.val = 'Resume';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'resume'
                                );
                            }, 100);
                            break;
                        case 'http://127.0.0.1:9080/code_examples':
                            val = this.options.val = 'Code Examples';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'code_examples'
                                );
                            }, 100);
                            break;
                        case 'http://127.0.0.1:9080/goals':
                            val = this.options.val = 'Goals';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'goals'
                                );
                            }, 100);
                            break;
                        case 'http://127.0.0.1:9080/contact':
                            val = this.options.val = 'Contact';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'contact'
                                );
                            }, 100);
                            break;
                        case 'http://127.0.0.1:9080/library':
                            val = this.options.val = 'Library';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'library'
                                );
                            }, 100);
                            break;
                        default:
                            val = this.options.val = 'Home';
                            setTimeout(() => {
                                grabComponent?.setAttribute(
                                    'operations',
                                    'home'
                                );
                            }, 100);
                            break;
                    }
                    setTimeout(() => {
                        console.log(
                            `%cRedirection has been successful to ${grabComponent?.getAttribute(
                                'operations'
                            )}`,
                            'color: green; font-size: 1rem;'
                        );
                    }, 2500);
                } catch (error: unknown) {
                    console.error(
                        `%cRedirection has failed to reroute and the following error iterated: **** ${error} ****`,
                        'color: red; font-size: 1rem;'
                    );
                }

                let HTML = /*html*/ `

                    <div id:="dropdown" class="dropdown">
                        <div class="dropdown_value">${val}</div>
                        <div class="dropdown_arrow">▾</div>
                        <div   class="dropdown_panel">
                            <div id="dd1s"  class="dropdown_items scrollbar"></div>
                        </div>
                    </div> 	

                `;

                const self: any = this;
                this.elem.innerHTML = HTML;
                let elem: any = this.elem;

                // { { !--Make parent elem inline - block--; } }
                this.elem.style.display = 'inline-block';
                this.elem.style.zIndex = 4;

                if (!(<any>window).dropdowns) (<any>window).dropdowns = {};
                (<any>window).dropdowns[this.options.id] = this;

                this.items = elem.querySelector(
                    '.dropdown_items'
                ) as HTMLDivElement;
                this.arrow = elem.querySelector(
                    '.dropdown_arrow'
                ) as HTMLDivElement;
                this.value = elem.querySelector(
                    '.dropdown_value'
                ) as HTMLDivElement;

                const data: any = this.options.data;
                HTML = '';
                data.forEach(function (elem: any) {
                    HTML += /*html*/ `
                        <div class="dropdown_item" onmousedown="var self = getdd(this); self.clicked(this)">${elem}</div>
                    `;
                });
                this.items.innerHTML = HTML;

                async function dropdownView(): Promise<void> {
                    try {
                        const getDropdown = document.getElementById(
                            'dropDown'
                        ) as HTMLElement | undefined;
                        let getDropdownState = getDropdown?.dataset.dd1_2 as
                            | string
                            | null
                            | undefined;

                        console.log(getDropdownState);

                        switch (getDropdownState) {
                            case 'viewing':
                                thiz.getDropdownState = 'hiding';
                                break;
                            case 'hiding':
                                thiz.getDropdownState = 'viewing';
                                break;
                            case 'default':
                                console.error(
                                    `%c The Switch Statement has an ERROR!`,
                                    'color: red; font-weight: 900;'
                                );
                                break;
                        }
                    } catch (error: unknown) {
                        console.error(
                            `%c The dropdownView Function was invoked and failed! ${error}`,
                            'color: red; font-weight: 900;'
                        );
                    }
                }
                this.elem.addEventListener('mousedown', function () {
                    self.hide();
                });

                this.elem.addEventListener(
                    'mousedown',
                    function (event: Event): any {
                        try {
                            event.preventDefault();
                            // console.log(thiz.elem.pointerId);

                            const grabDropdown = document.getElementById(
                                'dropDown'
                            ) as HTMLElement | null | undefined;
                            const currentStateOfDropdown = grabDropdown?.dataset
                                .dd1_2 as string;
                            const scrollbar = grabDropdown?.querySelector(
                                '.scrollbar'
                            ) as HTMLDivElement | undefined;
                            console.log(currentStateOfDropdown);

                            switch (currentStateOfDropdown) {
                                case 'hiding':
                                    scrollbar!.style.background =
                                        'var(--grmj-profile-background_3)';
                                    self.show();
                                    dropdownView();
                                    // probably can only remove the listener from the disconnectedCallback
                                    // method. connectedCallback is only called once. This is causing my switch statement
                                    // not to iterate properly?
                                    thiz.elem.removeEventListener(
                                        'mousedown',
                                        () => {
                                            event.stopPropagation();
                                        }
                                    );
                                    thiz.elem.addEventListener(
                                        'mousedown',
                                        () => {
                                            self.hide();
                                        }
                                    );
                                    thiz.elem.removeEventListener(
                                        'mousedown',
                                        () => {
                                            event.stopPropagation();
                                        }
                                    );
                                    break;
                                case 'viewing':
                                    scrollbar!.style.background =
                                        'var(--grmj-profile-background_3)';
                                    self.hide();
                                    dropdownView();
                                    thiz.elem.removeEventListener(
                                        'mousedown',
                                        () => {
                                            event.stopPropagation();
                                        }
                                    );
                                    break;
                                default:
                                    console.error(
                                        `%c The Dropdown Menu Switch Statement had an ERROR and failed!`,
                                        'color: red; font-weight: 900;'
                                    );
                                    break;
                            }
                        } catch (error: unknown) {
                            console.error(
                                `%c The Try/Catch of the Listener has an ERROR and failed! ${error}`,
                                'color: red; font-weight: 900;'
                            );
                        }
                    }
                );
            };

            this.clicked = function (elem: any) {
                let event: Event | undefined;
                event?.stopPropagation();

                this.hide();

                let newval: any = elem.innerHTML;
                this.value.innerHTML = newval;

                if (this.options.cb) {
                    this.options.cb(newval);
                }
            };

            this.show = function (): void {
                // { { !--close all dropdowns--; } }
                for (let dd in (<any>window).dropdowns)
                    (<any>window).dropdowns[dd].hide();

                this.inVisible = true;
                this.items.style.transform = 'translate(0px, 0px)';
                this.items.style.zIndex = '101';
                this.arrow.style.transform = 'rotate(180deg)';
            };

            this.hide = function (): void {
                if (!this.inVisible) return;

                this.inVisible = false;
                this.items.style.transform = 'translate(0px, -255px)';
                this.items.style.zIndex = '101';
                this.arrow.style.transform = 'rotate(0deg)';
            };
            thiz.init();
            initialRender();
            return thiz;
        }

        this.dd1 = new (DropDownMenu as any)({
            id: 'dd1',
            class: 'dd-1-2',
            val: 'Home',
            data: [
                'Home',
                'Cover Letter',
                'About',
                'Projects',
                'History',
                'Resume',
                'Goals',
                'Code Examples',
                'Contact',
                'Library'
            ],
            cb: function (_newval: any) {
                try {
                    switch (_newval) {
                        case 'Home':
                            window.location.href = '/';
                            break;
                        case 'Cover Letter':
                            window.location.href = '/cover_letter';
                            break;
                        case 'About':
                            window.location.href = '/about';
                            break;
                        case 'Projects':
                            window.location.href = '/projects';
                            break;
                        case 'History':
                            window.location.href = '/history';
                            break;
                        case 'Resume':
                            window.location.href = '/resume';
                            break;
                        case 'Goals':
                            window.location.href = '/goals';
                            break;
                        case 'Code Examples':
                            window.location.href = '/code_examples';
                            break;
                        case 'Contact':
                            window.location.href = '/contact';
                            break;
                        case 'Library':
                            window.location.href = '/library';
                            break;
                        default:
                            window.location.href = '/';
                    }
                } catch (error: unknown) {
                    console.error(
                        `%cResetting Callback Function of Drop Down list FAILED: **** ${error} ****`,
                        'color: red; font-size: 1rem;'
                    );
                }
                this.setOperations;
            }
        });

        this.dd2 = new (DropDownMenu as any)({
            id: 'dd2',
            class: 'dd-1-2',
            val2: 'Library',
            data: [
                'Web Components',
                'Web Components I',
                'Web Components II',
                'Web Components III',
                'Errors',
                'Research & Development',
                'HooT Web Components'
            ],
            cb: function (_newval2: any) {
                switch (_newval2) {
                    case 'Library':
                        window.location.href = '/Library';
                        break;
                    case 'Web Components I':
                        window.location.href = '/web_components_1';
                        break;
                    case 'Web Components II':
                        window.location.href = '/web_component_2';
                        break;
                    case 'Web Components III':
                        window.location.href = '/web_components_3';
                        break;
                    case 'Errors':
                        window.location.href = '/errors';
                        break;
                    case 'Blog':
                        window.location.href = '/blog';
                        break;
                    case 'Research & Development':
                        window.location.href = '/r_n_d';
                        break;
                    case 'HooT Web Components':
                        window.location.href = '/hoot';
                        break;
                    default:
                        window.location.href = '/';
                }
                this.setOperations;
            }
        });
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        setTimeout(() => {
            try {
                oldValue !== newValue
                    ? console.info(
                          `%c attributeChangedCallback: ${name} has new location of: ${newValue}`,
                          'color: green; font-weight: bold;'
                      )
                    : null;
            } catch (error: unknown) {
                console.error(
                    `%c attributeChangedCallback FAILED: ${name} has old location of: ${oldValue}`,
                    'color: red; font-weight: bold;'
                );
            }
        }, 500);
    }
}
RegisterComponent('drop-down', DropDown);
