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
import gordonHistory from './json/grmj_history.json' assert { type: 'json' };

export class ProfileHistory extends ProfileHistoryTemplate {
    override activateShadowDOM: boolean;
    // window: (Window & typeof globalThis) | undefined;

    body: HTMLElement | null | undefined;
    setAttributes:
        | ((tag: any, attribute: string | object | any) => void)
        | undefined;
    appendChildren:
        | ((parent: HTMLElement | ShadowRoot | null, children: any[]) => void)
        | undefined;
    window: (Window & typeof globalThis) | undefined;
    // page_sweeper: typeof window.module = page_sweeper | undefined;

    constructor() {
        super();

        this.activateShadowDOM = false;

        // window.page_sweeper;

        const body: HTMLElement | null | undefined =
            document.getElementById('mainBody');
        this.body = body;
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
            var bullet: HTMLLIElement = document.createElement('li');

            setAttributes(bullet, {
                class: i === 0 ? 'active' : '',
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
        psw.changed.add(function (layer: any, index: any) {
            var bullets: Element[] = Array.from(
                document.getElementsByTagName('ul')[0].children
            );
            console.log(layer, index);

            const layerReveal: HTMLElement | null =
                document.querySelector('.reveal');
            const revealClass: string | null | undefined =
                layerReveal?.getAttribute('class');
            console.log(revealClass);

            for (var i = 0, len = bullets.length; i < len; i++) {
                index = bullets[i].getAttribute('index');

                bullets[i].className = i === parseInt(index) ? 'active' : '';
                if (i === index) {
                    var bullet = bullets[i];
                    bullet.setAttribute('class', 'active');
                } else {
                    bullets[i].setAttribute('class', '');
                }
            }
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

        document.addEventListener(
            'keyup',
            function (event: KeyboardEvent) {
                if (event.location === 37) psw.prev();
                if (event.location === 39) psw.next();
                // up & down arrows for scrolling {37: left, 38: up, 39: right, 40: down}
            },
            false
        );

        const gordonEarlyYears = JSON.stringify(
            gordonHistory.early_years
        ).replace(/^\[|]$/g, '');

        const gordonBrief: HTMLElement | null | undefined =
            document.getElementById('briefPara');
        gordonBrief?.insertAdjacentHTML(
            'beforeend',
            gordonEarlyYears.toString()
        );
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
    static get observedAttributes() {
        return;
    }
    public attributeChangedCallback() {
        // _newValue: string // _oldValue: string, // name: string,
        // const currentLocation: HistoryObject = this.historyStack;
        // console.log(currentLocation);
        // _oldValue !== _newValue
        //     ? console.info(`old location: ${_oldValue},
        // 		${name} has a new location of: ${_newValue}
        // 		which should be equal to: ${currentLocation}`)
        //     : console.info(`old location: ${_oldValue}`);
    }
}
RegisterComponent('profile-history', ProfileHistory);

// document.adoptedStyleSheets = [sheet];
// import sheet from '../../Global/global_fonts.css' assert { type: 'css' };
