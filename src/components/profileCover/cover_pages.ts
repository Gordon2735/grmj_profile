'use strict';

// window['lettext'];
// (window as any).lettext = (window as any).lettext || {};

// (window as any).lettext = async function(container: any): Promise<void> {
window.lettext = function(container: any) {

    // Activated when the current layer changes
    let changed: any = new this.lettext.Signal();

    // Layers in this instance of lettext
    let layers = Array.prototype.slice.call(container.querySelectorAll('.layer'));
    
    // Flag if browser is capable of handling transitions

    let capable = 'WebkitPerspective' in document.body.style ||
                  'MozPerspective' in document.body.style ||
                  'msPerspective' in document.body.style ||
                  'OPerspective' in document.body.style ||
                  'perspective' in document.body.style;
    
    if(capable) {
      container.classList.add('capable');
    }

    // Create Dimmer Elements to fade out preceding pages
    layers.forEach( function(element, _idx) {
      if(!element.querySelector('.dimmer')) element.innerHTML += '<div class="dimmer"></div>'
    })

    /** 
     * Transitions to and shows the target layer.
     * 
     * @param target index of layer or layer DOM element
     *  
     */ 

    function show(target: number, direction: string): any {

      //Make sure our listing of available layers is up to date
      layers = Array.prototype.slice.call(container.querySelectorAll('.layer'));

      //Flag to CSS that we're ready to animate the transition
      container.classList.add('animate');

      // Flag which direction we're navigating
      //! DOUBLE CHECK THE getIndex(0) **** 
      direction = direction || (target > getIndex(0) ? 'right' : 'left');

      //Accept multiple types of targets
      if(typeof target === 'string') target = parseInt(target);
      if(typeof target === 'number') target = getIndex(target);

      // Enforce index boundary
      target = Math.max(Math.min(target, layers.length), 0);

      // only Navigate if we can locate the target layer
      if(layers[target] && !layers[target].classList.contains('show')) {
        layers.forEach( function(element, _idx) {
          element.classList.remove('left', 'right');
          element.classList.add(direction);
          if(element.classList.contains('show')) {
            element.classList.remove('show');
            element.classList.add('hide');
          } else {
              element.classList.remove('hide');
          }
        });
        layers[target].classList.add('show');
        changed.dispatch(layers[target], target);
      }
    }
      //show previous layer
      function previous(): any {
        let index = getIndex(0) - 1;
        show(index >= 0 ? index : layers.length + index, 'left');
      }

      // Show Next Layer
      function next(): any {
        show((getIndex(0) + 1) % layers.length, 'right');
      }

    /**
     * Retrieves the index of the current slide.
     *
     * @param of [optional] layer DOM element which index is
     * to be returned
     */

    function getIndex(of: number) {
      let index = 0;

      layers.forEach( function(layer, idx) {
        if((of && of == layer) || (!of && layer.classList.contains('show'))) {
          index = idx;
          return;
        }
      });
      return index;
    }

    /**
     * Retrieves the total number of layers.
     */
    function getTotal(): any {
      return layers.length;
    }

    // API
    return {
      show: show,
      previous: previous,
      next: next,
      getIndex: getIndex,
      getTotal: getTotal,
      changed: changed
    };

};

  /**
  * Minimal utility for dispatching signals (events).
  */
window.lettext.Signal = function() {
  this.listeners = [];
 }

window.lettext.Signal.prototype.add = function(callback: any) {
	this.listeners.push( callback );
}

window.lettext.Signal.prototype.remove = function( callback: any ) {
	var i = this.listeners.indexOf( callback );

	if( i >= 0 ) this.listeners.splice( i, 1 );
}

window.lettext.Signal.prototype.dispatch = function() {
	var args = Array.prototype.slice.call( arguments );
	this.listeners.forEach( function( func: { apply: (arg0: null, arg1: any[]) => void; }, _idx: any ) {
		func.apply( null, args );
	} );
} 

// Create a new instance of lettext
var k = window.lettext( document.querySelector( '.let-text' ) );

// Demo page JS
var navigationContainer: HTMLElement | null = document.body.querySelector( '.navigation' );

// Create one bullet per layer
for( var i = 0, len = k.getTotal(); i < len; i++ ) {
	var navigation = document.createElement( 'li' );
	navigation.className = i === 0 ? 'active' : '';
	navigation.setAttribute( 'index', `${i}` );
	navigation.onclick = function( event: any ) { 
        k.show( event.target?.getAttribute('index') 
    )};
	navigation.ontouchstart = function( event: any ) {
        k.show( event.target?.getAttribute('index') 
    )};
	navigationContainer?.appendChild( navigation );
}

// Update the navigation when the layer changes
k.changed.add( function( _layer: any, index: number ) {
	var navigation = document.body.querySelectorAll( '.navigation li' );
	for( var i = 0, len = navigation.length; i < len; i++ ) {
		navigation[i].className = i === index ? 'active' : '';
	}
} );

document.addEventListener( 'keyup', function( event ) {
	if( event.code === 'ArrowLeft' || event.keyCode === 37 ) k.prev();
	if( event.code === 'ArrowRight' || event.keyCode === 39 ) k.next();
}, false );

