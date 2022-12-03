'use strict';

function init(): void {
	const body: HTMLBodyElement | null = document.querySelector('body');
	const errorDiv: HTMLElement = document.createElement('div');
	errorDiv.classList.add('error-div');

	const errorText: HTMLElement = document.createElement('p');
	errorText.classList.add('error-text');
	errorText.textContent =
		'SORRY:  Error Occurred! || Please try again later. || Contact Gordon at webelistics@gmail.com';

	errorDiv.appendChild(errorText);
	body?.appendChild(errorDiv);

	console.log(
		'%cAn Error has Occurred!',
		'color: red; font-size: 2rem; font-weight: bold;'
	);
}

export default init;
