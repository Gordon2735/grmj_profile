/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */
'use strict';

import { ProfileHistoryTemplate } from './profile-history_template.js';
import { profileHistory_sharedStyles } from './profile-history_sharedStyles.js';
import { profileHistory_sharedHTML } from './profile-history_sharedHTML.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes,
import grmj_historyData from '../../@types/typesJSON.js';

// Profile History Component
export class ProfileHistory extends ProfileHistoryTemplate {
    override activateShadowDOM: boolean;
    setAttributes:
        | ((tag: any, attribute: string | object | any) => void)
        | undefined;
    appendChildren:
        | ((parent: HTMLElement | ShadowRoot | null, children: any[]) => void)
        | undefined;
    static dataset: DOMStringMap;

    constructor() {
        super();

        this.activateShadowDOM = false;
    }

    override get template() {
        return /*html*/ `

            ${profileHistory_sharedHTML.history}
            <style>${profileHistory_sharedStyles.history}</style>
            
            ${profileHistory_sharedHTML.page_sweeper}
            <style>${profileHistory_sharedStyles.page_sweeper}</style>

            ${profileHistory_sharedHTML.footer}
            <style>${profileHistory_sharedStyles.footer}</style>
       
        `;
    }

    get article(): any {
        return this.getAttribute('article');
    }

    set article(value) {
        console.info(`Old article value from getter: ${value}`);
        this.setAttribute('article', value);
        return;
    }

    static get observedAttributes() {
        return ['data-article-layer'];
    }

    override async connectedCallback() {
        super.connectedCallback();

        function setAttributes(element: HTMLElement, attributes: any) {
            for (const key in attributes) {
                element.setAttribute(key, attributes[key]);
            }
        }

        const page_sweeper: any = function (container: {
            querySelectorAll: (arg0: string) => any;
            classList: { add: (arg0: string) => void };
        }) {
            // Dispatched when the current layer changes
            var changed = new page_sweeper.Signal();

            // All layers in this instance of page_sweeper
            var layers = Array.prototype.slice.call(
                container.querySelectorAll('.layer')
            );

            // Flag if the browser is capable of handling our fancy transition
            var capable =
                'WebkitPerspective' in document.body.style ||
                'MozPerspective' in document.body.style ||
                'msPerspective' in document.body.style ||
                'OPerspective' in document.body.style ||
                'perspective' in document.body.style;

            if (capable) {
                container.classList.add('capable');
            }

            // Create dimmer elements to fade out preceding slides
            layers.forEach(function (el, _i) {
                if (!el.querySelector('.dimmer'))
                    el.innerHTML += '<div class="dimmer"></div>';
            });

            /**
             * Transitions to and reveals the target layer.
             *
             * @param target index of layer or layer DOM element
             */

            function reveal(target: number, direction: string) {
                // Make sure our listing of available layers is up to date
                layers = Array.prototype.slice.call(
                    container.querySelectorAll('.layer')
                );

                // Flag to CSS that we're ready to animate transitions
                container.classList.add('animate');

                // Flag which direction
                direction =
                    direction ||
                    (target > getIndex(undefined) ? 'right' : 'left');

                // Accept multiple types of targets
                if (typeof target === 'string') target = parseInt(target);
                if (typeof target !== 'number') target = getIndex(target);

                // Enforce index bonds
                target = Math.max(Math.min(target, layers.length), 0);

                // Only navigate if were able to locate the target
                if (
                    layers[target] &&
                    !layers[target].classList.contains('reveal')
                ) {
                    layers.forEach(function (element, _i) {
                        element.classList.remove('left', 'right');
                        element.classList.add(direction);
                        if (element.classList.contains('reveal')) {
                            element.classList.remove('reveal');
                            element.classList.add('hide');
                        } else {
                            element.classList.remove('hide');
                        }
                    });
                    layers[target].classList.add('reveal');
                    changed.dispatch(layers[target], target);
                }
            }

            /**
             * reveals the previous layer
             *
             */
            function prev() {
                var index = getIndex(undefined) - 1;
                reveal(index >= 0 ? index : layers.length + index, 'left');
            }

            /**
             * reveals the next layer
             *
             */
            function next() {
                reveal((getIndex(undefined) + 1) % layers.length, 'right');
            }

            /**
             * retrieves the index of the current slide.
             *
             */

            function getIndex(of: undefined) {
                var index = 0;

                layers.forEach(function (layer, i) {
                    if (
                        (of && of === layer) ||
                        (!of && layer.classList.contains('reveal'))
                    ) {
                        index = i;
                        return;
                    }
                });
                return index;
            }
            /**
             * Returns the total number of layers.
             *
             */
            function getTotal() {
                return layers.length;
            }

            // API
            return {
                reveal: reveal,
                prev: prev,
                next: next,
                getIndex: getIndex,
                getTotal: getTotal,
                changed: changed
            };
        };

        /**
         * Minimal utility for dispatching signals (events).
         *
         */

        page_sweeper.Signal = function () {
            this.listeners = [];
        };

        page_sweeper.Signal.prototype.add = function (callback: unknown) {
            this.listeners.push(callback);
        };

        page_sweeper.Signal.prototype.remove = function (callback: unknown) {
            var i = this.listeners.indexOf(callback);

            if (i >= 0) this.listeners.splice(i, 1);
        };

        page_sweeper.Signal.prototype.dispatch = function (
            f: any,
            _i: any,
            _p: any
        ) {
            var args = Array.prototype.splice.call(f, _i, _p, [
                ...this.listeners
            ]);
            this.listeners.forEach(function (f: any, _i: any, _p: any) {
                return f.apply(null, args);
            });
        };

        /**
         * Create a new instance of page_sweeper
         */

        var psw: any = page_sweeper(document.querySelector('.page_sweeper'));

        // Demo page JS
        var bulletsContainer = document.body.querySelector('.bullets');

        // Create one bullet per layer
        for (var i = 0, len = psw.getTotal(); i < len; i++) {
            var bullet: HTMLElement | any = document.createElement('li');
            bullet.setAttribute('data-bullet-li', `${i}`);

            setAttributes(bullet, {
                class: i === 0 ? 'glow' : '',
                index: i
            });

            bullet.onclick = function (
                this: GlobalEventHandlers,
                event: MouseEvent | any
            ) {
                psw.reveal(event.target.getAttribute('index'));
            };
            bullet.ontouchstart = function (
                this: GlobalEventHandlers,
                event: TouchEvent | any
            ) {
                psw.reveal(event.target.getAttribute('index'));
            };

            bulletsContainer?.appendChild(bullet);
        }

        // Update the bullets when the layer changes
        psw.changed.add(function (_layer: any, _index: any) {
            // Function for the highlighting of the bullets
            articleResolveDataset();

            const layerReveal: HTMLElement | null =
                document.querySelector('.reveal');
            const revealClass: string | null | undefined =
                layerReveal?.getAttribute('class');
            console.log(revealClass);
        });

        const leftButton: HTMLElement | null =
            document.getElementById('leftBtn');
        const rightButton: HTMLElement | null =
            document.getElementById('rightBtn');

        leftButton?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            psw.prev();
            event.stopPropagation();
        });
        rightButton?.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            psw.next();
            event.stopPropagation();
        });

        // keyboard navigation
        window.addEventListener(
            'keydown',
            async function (event: KeyboardEvent) {
                try {
                    if (event.defaultPrevented) {
                        return;
                    }
                    switch (event.key) {
                        case 'ArrowLeft':
                            {
                                await psw.prev();
                            }
                            break;
                        case 'ArrowRight':
                            {
                                await psw.next();
                            }
                            break;
                        default: {
                            return;
                        }
                    }
                    event.preventDefault();
                } catch (error: unknown) {
                    console.error(
                        `Error handling the 'keydown' event listener: ${await error}`
                    );
                }
            },
            true
        );

        const fetchDataURL = `/src/components/profileHistory/json/grmj_history.json`;
        let dataObject: any;

        async function getHistoryData(
            this: any,
            url: string,
            data: grmj_historyData
        ): Promise<void> {
            try {
                const fetchHistory: URL = new URL(url, import.meta.url);
                const response = await fetch(fetchHistory);
                data = await response.json();
                // Find a way to change the data from an "any" type to a "JSON" type
            } catch (error: unknown) {
                console.error(
                    `Error handling the 'fetching' of the JSON file: ${await error}`
                );
            }
            await early_yearsRenderData(data);
            await young_manRenderData(data);
            await middle_roadRenderData(data);
            await career_movesRenderData(data);
            await future_plansRenderData(data);

            async function early_yearsRenderData(
                getData: grmj_historyData
            ): Promise<grmj_historyData> {
                try {
                    // Fetch Data Object for History 'early_years' Page and Render for View
                    const sectionEarlyYears = document.getElementById(
                        'early_yearsSection'
                    ) as HTMLElement;

                    const early_yearsData = getData.early_years;
                    const teenagerData = early_yearsData.teenager;

                    sectionEarlyYears.innerHTML = /*html*/ `

                            <h3 id="army_bratH3" class="army_brat-h3">Army Brat</h3>
                            <p id="army_bratP" class="army_brat-p">${early_yearsData.army_brat}</p>
                            <h3 id="travelsH3" class="travels-h3">Family Travels</h3>
                            <p id="travelsP" class="travels-p">${early_yearsData.travels}</p>
                            <h3 id="teenagerH3" class="teenager-h3">Teenager</h3>
                            <h4 id="interestsH4" class="interests-h4"><u>Interests</u></h4>
                            <p id="interestsPara" class="interests-para">${teenagerData.interests}</p>
                            <h4 id="hobbiesH4" class="hobbies-h4"><u>Hobbies</u></h4>
                            <p id="hobbiesPara" class="hobbies-para">${teenagerData.hobbies}</p>
                            <h4 id="graduationH4" class="graduation-h4"><u>High School Graduation</u></h4>
                            <p id="graduationPara" class="graduation-para">${teenagerData.graduation}</p>

                    `;
                } catch (error: unknown) {
                    console.error(
                        `Error handling the History 'early_years' JSON data: ${await error}`
                    );
                }
                return getData;
            }
            // Fetch Data Object for History 'young_man' Page and Render for View
            async function young_manRenderData(
                getData: grmj_historyData
            ): Promise<grmj_historyData> {
                try {
                    const sectionYoungMan = document.getElementById(
                        'young_manSection'
                    ) as HTMLElement;

                    const young_manData = getData.young_man;
                    const militaryServiceData = young_manData.military;
                    const civilianData = young_manData.civilian;
                    const satelliteManData = young_manData.satellite_man;

                    sectionYoungMan.innerHTML = /*html*/ `

                            <h3 id="militaryServiceH3" class="military-service-h3">Military Service</h3>
                            <h4 id="navyH4" class="navy-h4"><u>US Navy</u></h4>
                            <p id="navyPara" class="navy-para">${militaryServiceData.navy}</p>
                            <p id="operations_specialistPara" class="operations-specialist-para">
                                ${militaryServiceData.operations_specialist}
                            </p>
                            
                            <h3 id="postMilitaryH3" class="post-military-h3">Post Military</h3>
                            <h4 id="back_to_schoolH4" class="back-to-school-h4"><u>Back to School</u></h4>
                            <p id="back_to_schoolPara" class="back-to-school-para">${civilianData.back_to_school}</p>
                            <h4 id="musicianH4" class="musician-h4"><u>Musician</u></h4>
                            <p id="musicianPara" class="musician-para">${civilianData.musician}</p>

                            <h3 id="satellite_manH3" class="satellite_man-h3">Satellite Man</h3>
                            <h4 id="electronic_techH4" class="electronic-tech-h4"><u>Electronic Technician</u></h4>
                            <p id="electronic_techPara" class="electronic-tech-para">${satelliteManData.electronics_tech}</p>
                            <h4 id="growing_knowledgeH4" class="growing_knowledge-h4"><u>Growing Knowledge</u></h4>
                            <p id="growing_knowledgePara" class="growing_knowledge-para">${satelliteManData.growing_knowledge}</p>

                    `;
                } catch (error: unknown) {
                    console.error(
                        `Error handling the History 'young_man' JSON data: ${await error}`
                    );
                }
                return getData;
            }
            async function middle_roadRenderData(
                getData: grmj_historyData
            ): Promise<grmj_historyData> {
                try {
                    // Fetch Data Object for History 'middle_road' Page and Render for View
                    const sectionMiddleRoad = document.getElementById(
                        'middle_roadSection'
                    ) as HTMLElement;

                    const middle_roadData = getData.middle_road;
                    const description = middle_roadData.description;
                    const ministryData = middle_roadData.ministry;
                    const marriageData = middle_roadData.marriage;

                    sectionMiddleRoad.innerHTML = /*html*/ `

                            <h3 id="descriptionH3" class="description-h3">Lordy, Lordy, Gordie's almost Forty</h3>
                            <p id="descriptionPara" class="description-para">${description}</p>

                            <h3 id="ministryH3" class="ministry-h3">Into the Ministry</h3>
                            <h4 id="churchH4" class="church-h4"><u>Life in the Church</u></h4> 
                            <p id="churchPara" class="church-para">${ministryData.church}</p>
                            <h4 id="leadershipH4" class="leadership-h4"><u>Leadership Positions in the Church</u></h4>
                            <p id="leadershipPara" class="leadership-para">${ministryData.leadership}</p>

                            <h3 id="marriageH3" class="marriage-h3">Marriage</h3>
                            <h4 id="wifeH4" class="wife-h4"><u>Gordon's Wife Donna(a Lady)</u></h4>
                            <p id="wifePara" class="wife-para">${marriageData.wife}</p>
                            <h4 id="childrenH4" class="children-h4"><u>Children</u></h4>
                            <p id="childrenPara" class="children-para">${marriageData.children}</p>
                            <h4 id="busy_rolesH4" class="busy-roles-h4"><u>Fulfilling Various Busy Roles</u></h4>
                            <p id="busy_rolesPara" class="busy-roles-para">${marriageData.busy_roles}</p>

                    `;
                } catch (error: unknown) {
                    console.error(
                        `Error handling the History 'middle_road' JSON data: ${await error}`
                    );
                }
                return getData;
            }
            async function career_movesRenderData(
                getData: grmj_historyData
            ): Promise<grmj_historyData> {
                try {
                    // Fetch Data Object for History 'career_moves' Page and Render for View
                    const sectionCareerMoves = document.getElementById(
                        'career_movesSection'
                    ) as HTMLElement;

                    const career_movesData = getData.career_moves;
                    const careerData = career_movesData.business_owner;

                    sectionCareerMoves.innerHTML = /*html*/ `

                            <h3 id="business_ownerH3" class="business-owner-h3">Business/Operator/Owner</h3>

                            <h4 id="c_bar_cH4" class="c-bar-c-h4"><u>C Bar C</u></h4>
                            <p id="c_bar_cPara" class="c-bar-c-para">${careerData.c_bar_c}</p>
                            <h4 id="lakeside_satelliteH4" class="lakeside_satellite-h4"><u>LakeSide Satellite/VCR/Computers</u></h4>
                            <p id="lakeside_satellitePara" class="lakeside_satellite-para">${careerData.lakeside_satellite}</p>
                            <h4 id="digiworldH4" class="digiworld-h4"><u>DigiWorld</u></h4>
                            <p id="digiworldPara" class="digiworld-para">${careerData.digiworld}</p>
                            <h4 id="az_handyworksH4" class="az_handyworks-h4"><u>A-Z HandyWorks</u></h4>
                            <p id="az_handyworksPara" class="az_handyworks-para">${careerData.az_handyworks}</p>
                            <h4 id="gordons_hvacH4" class="gordons_hvac-h4"><u>Gordon's Heating & Cooling, HVAC</u></h4>
                            <p id="gordons_hvacPara" class="gordons_hvac-para">${careerData.gordons_hvac}</p>
                            <h4 id="webelisticsH4" class="webelistics-h4"><u>Team Webelistics®️</u></h4>
                            <p id="webelisticsPara" class="webelistics-para">${careerData.webelistics}</p>

                    `;
                } catch (error: unknown) {
                    console.error(
                        `Error handling the History 'career_moves' JSON data: ${await error}`
                    );
                }
                return getData;
            }
            async function future_plansRenderData(
                getData: grmj_historyData
            ): Promise<grmj_historyData> {
                try {
                    // Fetch Data Object for History 'future_plans' Page and Render for View
                    const sectionFuturePlans = document.getElementById(
                        'future_plansSection'
                    ) as HTMLElement;

                    const future_plansData = getData.future_plans;

                    sectionFuturePlans.innerHTML = /*html*/ `

                            <h3 id="future_plansH3" class="future-plans-h3">Future Plans</h3>

                            <h4 id="current_statusH4" class="current-status-h4"><u>Current Status</u></h4>
                            <p id="current_statusPara" class="current-status-para">${future_plansData.current_status}</p>
                            <h4 id="goalsH4" class="goals-h4"><u>Goals</u></h4>
                            <p id="goalsPara" class="goals-para">${future_plansData.goals}</p>
                            <h4 id="studies_optionsH4" class="studies_options-h4"><u>Studies & Options</u></h4>
                            <p id="studies_optionsPara" class="studies_options-para">${future_plansData.studies_options}</p>
                            <h4 id="appreciationsH4" class="appreciations-h4"><u>Appreciations</u></h4>
                            <p id="appreciationsPara" class="appreciations-para">${future_plansData.appreciations}</p>

                    `;
                } catch (error: unknown) {
                    console.error(
                        `Error handling the History 'future_plans' JSON data: ${await error}`
                    );
                }
                return getData;
            }
            return;
        }
        getHistoryData(fetchDataURL, dataObject);

        const articleResolveDataset = async (): Promise<string> => {
            try {
                const articleDataset = document.getElementById(
                    'profileHistory'
                ) as HTMLElement;

                const articleDatasetMap: DOMStringMap = articleDataset.dataset;

                const layerClassPageReveal = document.querySelector(
                    '.reveal'
                ) as HTMLElement;

                const layerRevealClass = layerClassPageReveal.classList;

                switch (true) {
                    case layerRevealClass.contains('zero'): {
                        articleDatasetMap.articleLayer = 'zero';
                        this.setAttribute('article', 'brief');
                        break;
                    }
                    case layerRevealClass.contains('one'): {
                        articleDatasetMap.articleLayer = 'one';
                        this.setAttribute('article', 'early_years');
                        break;
                    }
                    case layerRevealClass.contains('two'): {
                        articleDatasetMap.articleLayer = 'two';
                        this.setAttribute('article', 'young_man');
                        break;
                    }
                    case layerRevealClass.contains('three'): {
                        articleDatasetMap.articleLayer = 'three';
                        this.setAttribute('article', 'middle_road');
                        break;
                    }
                    case layerRevealClass.contains('four'): {
                        articleDatasetMap.articleLayer = 'four';
                        this.setAttribute('article', 'career_moves');
                        break;
                    }
                    case layerRevealClass.contains('five'): {
                        articleDatasetMap.articleLayer = 'five';
                        this.setAttribute('article', 'future_plans');
                        break;
                    }
                    default: {
                        articleDatasetMap.articleLayer = 'zero';
                        this.setAttribute('article', 'brief');
                        break;
                    }
                }
                const currentDatasetValue: string =
                    articleDatasetMap.articleLayer.valueOf();
                const articleGetter: any = this.article;

                return currentDatasetValue && articleGetter;
            } catch (error: unknown) {
                console.error(
                    `Error handling the 'articleResolveDataset' function: ${await error}`
                );

                return '';
            }
        };
    }
    public attributeChangedCallback(
        _name: string[],
        _oldValue: string[],
        newValue: string[]
    ): void {
        // eslint-disable-next-line prefer-const
        let datasetValueModified = '';

        function convertDataset(value: string[], _modifier: string): void {
            try {
                navBlinkingArrows(newValue);
                switch (value.toString()) {
                    case 'zero':
                        {
                            _modifier = '0';
                        }
                        console.info(`ZERO ${_modifier}`);
                        break;
                    case 'one':
                        {
                            _modifier = '1';
                        }
                        console.info(`ONE ${_modifier}`);
                        break;
                    case 'two':
                        {
                            _modifier = '2';
                        }
                        console.info(`TWO ${_modifier}`);
                        break;
                    case 'three':
                        {
                            _modifier = '3';
                        }
                        console.info(`THREE ${_modifier}`);
                        break;
                    case 'four':
                        {
                            _modifier = '4';
                        }
                        console.info(`FOUR ${_modifier}`);
                        break;
                    case 'five':
                        {
                            _modifier = '5';
                        }
                        console.info(`FIVE ${_modifier}`);
                        break;
                    default:
                        {
                            _modifier = '0';
                        }
                        console.info(`DEFAULT ${_modifier}`);
                        break;
                }
                datasetValueModified = _modifier;

                try {
                    const liBullets: Element[] = Array.from(
                        document.getElementsByTagName('li')
                    );
                    liBullets.map((bullet: any, index: number): void => {
                        datasetValueModified === index.toString()
                            ? bullet.classList.add('glow')
                            : bullet.classList.remove('glow');
                    });
                    return;
                } catch (error: unknown) {
                    console.error(
                        `
                            Error adding or removing the class of "glow" from the li's bullet: ${error}
                        `
                    );
                }
            } catch (error: unknown) {
                console.error(
                    `Error handling the 'convertDataset' function: ${error}`
                );

                return;
            }
        }
        convertDataset(newValue, datasetValueModified);

        // Activate a blinking red right arrow in the right navigation button when layer 5 is active.
        async function navBlinkingArrows(value: string[]): Promise<void> {
            try {
                const nextArrow = document.querySelector('.btn-arrow-right');
                const five: string[] = [`five`];

                value.toString() !== five.toString()
                    ? nextArrow?.classList.remove('blink')
                    : nextArrow?.classList.add('blink');
            } catch (error: unknown) {
                console.error(
                    `
                        Apparent error with the navBlinkingArrow function: ${await error}
                    `
                );
            }
            return;
        }
    }
}
RegisterComponent('profile-history', ProfileHistory);
