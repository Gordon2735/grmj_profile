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

        const fetchDataURL =
            '/src/components/profileHistory/json/grmj_history.json';
        let dataObject: any;

        async function getHistoryData(
            this: any,
            url: string,
            data: any
        ): Promise<void> {
            try {
                const fetchHistory: URL = new URL(url, import.meta.url);
                const response = await fetch(fetchHistory);
                data = await response.json();
            } catch (error: unknown) {
                console.error(
                    `Error handling the 'fetching' of the JSON file: ${await error}`
                );
            }
            try {
                // Fetch Data Object for History 'early_years' Page and Render for View
                const earlyYearsPara = document.getElementById(
                    'early_yearsPara'
                ) as HTMLParagraphElement | null | undefined;
                const earlyYears: any = await data.early_years;
                const earlyYearsTravels: any = await earlyYears.travels;
                const earlyYearsArmyBrat: any = await earlyYears.army_brat;
                const earlyYearsTeenager: any = await earlyYears.teenager;
                const teenagerInterests: any =
                    await earlyYearsTeenager.interests;
                const teenagerHobbies: any = await earlyYearsTeenager.hobbies;
                const teenagerGraduation: any =
                    await earlyYearsTeenager.graduation;

                const theBeginningText = `The Beginning`;
                const theBeginning: HTMLHeadingElement | undefined | null =
                    document.createElement('h3');
                theBeginning.innerHTML = theBeginningText;
                theBeginning.className = 'the-beginning';
                earlyYearsPara?.appendChild(theBeginning);

                const armyBratPara: HTMLParagraphElement | null | undefined =
                    document.createElement('p');
                const armyBratText = earlyYearsArmyBrat;
                armyBratPara.innerHTML = armyBratText;
                earlyYearsPara?.appendChild(armyBratPara);

                const familyTravels = document.createElement(
                    'h3'
                ) as HTMLHeadingElement;
                const familyTravelsTitle = `Family Travels`;
                familyTravels.innerHTML = familyTravelsTitle;
                earlyYearsPara?.appendChild(familyTravels);

                const familyTravelsPara:
                    | HTMLParagraphElement
                    | null
                    | undefined = document.createElement('p');
                const familyTravelsText = `${earlyYearsTravels}`;
                familyTravelsPara.innerHTML = familyTravelsText;
                earlyYearsPara?.appendChild(familyTravelsPara);

                const teenageYears = document.createElement(
                    'h3'
                ) as HTMLHeadingElement;
                const teenageYearsTitle = `Teenage Years`;
                teenageYears.innerHTML = teenageYearsTitle;
                earlyYearsPara?.appendChild(teenageYears);

                const teenageYearsPara:
                    | HTMLParagraphElement
                    | null
                    | undefined = document.createElement('p');
                const teenageYearsText: string[] = [
                    `Interests: ${await teenagerInterests}`,
                    `<br />`,
                    `Hobbies: ${await teenagerGraduation}`,
                    `<br />`,
                    `Graduation: ${await teenagerHobbies}`
                ];

                const teenageTextJoin: string = teenageYearsText.join('\n');
                teenageYearsPara.innerHTML = teenageTextJoin;
                earlyYearsPara?.appendChild(teenageYearsPara);
            } catch (error: unknown) {
                console.error(
                    `Error handling the History 'early_years' JSON data: ${await error}`
                );
            }
            try {
                // Fetch Data Object for History 'young_man' Page and Render for View
            } catch (error: unknown) {
                console.error(
                    `Error handling the History 'young_man' JSON data: ${await error}`
                );
            }
            try {
                // Fetch Data Object for History 'middle_road' Page and Render for View
            } catch (error: unknown) {
                console.error(
                    `Error handling the History 'middle_road' JSON data: ${await error}`
                );
            }
            try {
                // Fetch Data Object for History 'career_moves' Page and Render for View
            } catch (error: unknown) {
                console.error(
                    `Error handling the History 'career_moves' JSON data: ${await error}`
                );
            }
            try {
                // Fetch Data Object for History 'future_plans' Page and Render for View
            } catch (error: unknown) {
                console.error(
                    `Error handling the History 'future_plans' JSON data: ${await error}`
                );
            }
            return await data;
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
                    `Error handling the 'convertDataset' function: ${error}`
                );

                return;
            }
        }
        convertDataset(newValue, datasetValueModified);
    }
}
RegisterComponent('profile-history', ProfileHistory);
