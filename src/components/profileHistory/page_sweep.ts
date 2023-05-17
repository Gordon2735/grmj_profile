/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-var */

// let page_sweeper: { (arg0: any): any; (arg0: any): any; Signal: any };

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
     * Transitions to and shows the target layer.
     *
     * @param target index of layer or layer DOM element
     */

    function show(target: number, direction: string) {
        // Make sure our listing of available layers is up to date
        layers = Array.prototype.slice.call(
            container.querySelectorAll('.layer')
        );

        // Flag to CSS that we're ready to animate transitions
        container.classList.add('animate');

        // Flag which direction
        direction =
            direction || (target > getIndex(undefined) ? 'right' : 'left');

        // Accept multiple types of targets
        if (typeof target === 'string') target = parseInt(target);
        if (typeof target !== 'number') target = getIndex(target);

        // Enforce index bonds
        target = Math.max(Math.min(target, layers.length), 0);

        // Only navigate if were able to locate the target
        if (layers[target] && !layers[target].classList.contains('show')) {
            layers.forEach(function (el, _i) {
                el.classList.remove('left', 'right');
                el.classList.add(direction);
                if (el.classList.contains('show')) {
                    el.classList.remove('show');
                    el.classList.add('hide');
                } else {
                    el.classList.remove('hide');
                }
            });
            layers[target].classList.add('show');
            changed.dispatch(layers[target], target);
        }
    }

    /**
     * shows the previous layer
     *
     */
    function prev() {
        var index = getIndex(undefined) - 1;
        show(index >= 0 ? index : layers.length + index, 'left');
    }

    /**
     * shows the next layer
     *
     */
    function next() {
        show((getIndex(undefined) + 1) % layers.length, 'right');
    }

    /**
     * retrieves the index of the current slide.
     *
     */

    function getIndex(of: undefined) {
        var index = 0;

        layers.forEach(function (layer, i) {
            if (
                (of && of == layer) ||
                (!of && layer.classList.contains('show'))
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
        show: show,
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

// let listeners: EventListener;
// const eventEars: EventListener = listeners;
page_sweeper.Signal.prototype.dispatch = function (f: any, _i: any, _p: any) {
    var args = Array.prototype.splice.call(f, _i, _p, [...this.listeners]);
    this.listeners.forEach(function (f: any, _i: any, _p: any) {
        return f.apply(null, args);
    });
};

/**
 * Create a new instance of page_sweeper
 */

var k = page_sweeper(document.querySelector('.page_sweeper'));

// Demo page JS
var bulletsContainer = document.body.querySelector('.bullets');

// Create one bullet per layer
for (var i = 0, len = k.getTotal(); i < len; i++) {
    var bullet = document.createElement('li');
    bullet.className = i === 0 ? 'active' : '';
    bullet.setAttribute('index', `${i}`);
    bullet.onclick = function (event) {
        const eventBullet = k.show(event.target);
        eventBullet.getAttribute('index');
    };
    bullet.ontouchstart = function (event) {
        const eventBullet = k.show(event.target);
        eventBullet.getAttribute('index');
        // k.show(event.target?.getAttribute('index'));
    };

    bulletsContainer?.appendChild(bullet);
}

// Update the bullets when the layer changes
k.changed.add(function (layer: any, index: any) {
    var bullets = document.body.querySelectorAll('.bullets li');
    console.log(layer);
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

document.addEventListener(
    'keyup',
    function (event) {
        if (event.keyCode === 37) k.prev();
        if (event.keyCode === 39) k.next();
    },
    false
);

// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use strict';

// let page_sweeper: any;

// // Page Sweeper Logic
// window.page_sweeper = function (container: {
//     querySelectorAll: (arg0: string) => any;
//     classList: { add: (arg0: string) => void };
// }): void {
//     // Dispatched when the current layer changes
//     const changed: any = new page_sweeper.Signal();

//     // All layers in this instance of page_sweeper
//     let layers: any[] = Array.prototype.slice.call(
//         container.querySelectorAll('.layer')
//     );

//     // Flag if the browser is capable of handling our fancy transition
//     const capable: boolean =
//         'WebkitPerspective' in document.body.style ||
//         'MozPerspective' in document.body.style ||
//         'msPerspective' in document.body.style ||
//         'OPerspective' in document.body.style ||
//         'perspective' in document.body.style;

//     if (capable) {
//         container.classList.add('capable');
//     }

//     // Create dimmer elements to fade out preceding slides
//     layers.forEach(function (el, _i) {
//         if (!el.querySelector('.dimmer'))
//             el.innerHTML += '<div class="dimmer"></div>';
//     });

//     /**
//      * Transitions to and shows the target layer.
//      *
//      * @param target index of layer or layer DOM element
//      */

//     function show(target: number, direction: string) {
//         // Make sure our listing of available layers is up to date
//         layers = Array.prototype.slice.call(
//             container.querySelectorAll('.layer')
//         );

//         // Flag to CSS that we're ready to animate transitions
//         container.classList.add('animate');

//         // Flag which direction
//         direction = direction || (target > getIndex(null) ? 'right' : 'left');

//         // Accept multiple types of targets
//         if (typeof target === 'string') target = parseInt(target);
//         if (typeof target !== 'number') target = getIndex(target);

//         // Enforce index bonds
//         target = Math.max(Math.min(target, layers.length), 0);

//         // Only navigate if were able to locate the target
//         if (layers[target] && !layers[target].classList.contains('show')) {
//             layers.forEach(function (el, _i) {
//                 el.classList.remove('left', 'right');
//                 el.classList.add(direction);
//                 if (el.classList.contains('show')) {
//                     el.classList.remove('show');
//                     el.classList.add('hide');
//                 } else {
//                     el.classList.remove('hide');
//                 }
//             });
//             layers[target].classList.add('show');
//             changed.dispatch(layers[target], target);
//         }
//     }

//     /**
//      * shows the previous layer
//      *
//      */
//     function prev() {
//         const index: number = getIndex(null) - 1;
//         show(index >= 0 ? index : layers.length + index, 'left');
//     }

//     /**
//      * shows the next layer
//      *
//      */
//     function next() {
//         show((getIndex(null) + 1) % layers.length, 'right');
//     }

//     /**
//      * retrieves the index of the current slide.
//      *
//      */

//     function getIndex(of: any) {
//         let index = 0;

//         layers.forEach(function (layer, i) {
//             if (
//                 (of && of == layer) ||
//                 (!of && layer.classList.contains('show'))
//             ) {
//                 index = i;
//                 return;
//             }
//         });
//         return index;
//     }
//     /**
//      * Returns the total number of layers.
//      *
//      */
//     function getTotal() {
//         return layers.length;
//     }

//     // API
//     return {
//         show: show,
//         prev: prev,
//         next: next,
//         getIndex: getIndex,
//         getTotal: getTotal,
//         changed: changed
//     };
// };

// /**
//  * Minimal utility for dispatching signals (events).
//  *
//  */

// page_sweeper.Signal = function () {
//     this.listeners = [];
// };

// page_sweeper.Signal.prototype.add = function (callback: any) {
//     this.listeners.push(callback);
// };

// page_sweeper.Signal.prototype.remove = function (callback: any) {
//     const i = this.listeners.indexOf(callback);

//     if (i >= 0) this.listeners.splice(i, 1);
// };

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// page_sweeper.Signal.prototype.dispatch = function (_f: any, _i: any[]) {
//     const args = Array.prototype.splice.call(..._f: any[]) => void, (..._i: any[]): any[], (...thisArg: any[]): () =>  any[]
//     this.listeners.forEach(function (
//         _f: { apply: (arg0: null, arg1: any[]) => void },
//         _i: any
//     ) {
//         // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         (..._f: any[]) => void
//     });
// };

// /**
//  * Create a new instance of page_sweeper
//  */

// var k = page_sweeper(document.querySelector('.page_sweeper'));

// // Demo page JS
// var bulletsContainer = document.body.querySelector('.bullets');

// // Create one bullet per layer
// for (var i = 0, len = k.getTotal(); i < len; i++) {
//     var bullet = document.createElement('li');
//     bullet.className = i === 0 ? 'active' : '';
//     bullet.setAttribute('index', i);
//     bullet.onclick = function (event) {
//         k.show(event.target.getAttribute('index'));
//     };
//     bullet.ontouchstart = function (event) {
//         k.show(event.target.getAttribute('index'));
//     };

//     bulletsContainer.appendChild(bullet);
// }

// // Update the bullets when the layer changes
// k.changed.add(function (_layer: any, index: string | null) {
//     var bullets = document.body.querySelectorAll('.bullets li');
//     for (var i = 0, len = bullets.length; i < len; i++) {
//         index = bullets[i].getAttribute('index');
//         let newNum = bullets[i].getAttribute('index');
//         let newNewNum = parseInt(newNum);
//         console.log(bullets[i], i, newNum, newNewNum);
//         console.log(index);
//         //     bullets[i].className = i === parseInt(index) ? 'active' : '';
//         //     //     if (i === index) {
//         //     //         var bullet = bullets[i];
//         //     //         bullet.setAttribute('class', 'active');
//         //     //     } else {
//         //     //         bullets[i].setAttribute('class', '');
//         //     //     }
//         // }
//         for (let bullet of bullets) {
//             i === parseInt(newNum)
//                 ? bullet.setAttribute('class', 'active')
//                 : bullet.setAttribute('class', '');
//         }
//     }
// });

// document.addEventListener(
//     'keyup',
//     function (event) {
//         if (event.keyCode === 37) k.prev();
//         if (event.keyCode === 39) k.next();
//     },
//     false
// );
