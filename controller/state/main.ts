// 'use strict';

// import store from '/state/store/indexState';
// import Count from '/state/components/count';
// import List from '/state/components/list';
// import Status from '/state/components/status';

// const formElement: any = document.querySelector('.js-form');
// const inputElement: any = document.querySelector('#new-item-field');

// formElement.addEventListener(
// 	'submit',
// 	(event: { preventDefault: () => void }) => {
// 		event.preventDefault();

// 		let value: any = inputElement.value.trim();

// 		if (value.length) {
// 			store.dispatch('addItem', value);
// 			inputElement.value = '';
// 			inputElement?.focus();
// 		}
// 	}
// );

// const countInstance: any = new Count();
// const listInstance: any = new List();
// const statusInstance: any = new Status();

// countInstance.render();
// listInstance.render(),
// 	() => {
// 		console.info('List rendered');
// 	};
// statusInstance.render();
