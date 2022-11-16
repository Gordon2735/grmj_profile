'use strict';

function setAttributes(tag: any, attribute: string | object | any): void {
	Object.keys(attribute).map(function (keys: any): void {
		tag.setAttribute(keys, attribute[keys]);
	});
}

// function appendChildren(parent, children) {
// 	children.map(child => {
// 		parent.appendChild(child);
// 	});
// }

function appendChildren(parent: HTMLElement, children: any[]) {
	children.map((child: any) => {
		parent.appendChild(child);
	});
}

function removeChildren(
	parent: { removeChild: (arg0: any) => void },
	children: any[]
) {
	children.map((child: any) => {
		parent.removeChild(child);
	});
}

const renderArray = (array: any[]) => {
	array.map((item: any) => {
		return item;
	});
};

const URL = 'https://jsonplaceholder.typicode.com/users';
const URL_spacex = 'https://api.spacexdata.com/v4/launches';

// create a DOM element factory function
function newDomElement(
	element: any,
	put: { appendChild: (arg0: any) => void; append: (arg0: any) => void },
	newElement: HTMLElement,
	method: any,
	attributes = {},
	children = [],
	...items: any[]
) {
	const domElement = document.createElement(element);
	let docFrag = document.createDocumentFragment();

	const domCreate = new Map();
	domCreate.set('simple1', 'simply 1');
	domCreate.set('simple2', 'simply 2');
	domCreate.set('complex1', 'complexically 1');
	domCreate.set('complex2', 'complexically 2');
	domCreate.set('complex3', 'complexically 3');
	domCreate.set('complex4', 'complexically 4');
	let creationMethod = method;

	if (domCreate.get(creationMethod) === 'simply 1') {
		setAttributes(domElement, attributes);
		put.appendChild(domElement);
	} else if (domCreate.get(creationMethod) === 'simply 2') {
		setAttributes(domElement, attributes);
		items.map(item => {
			item !== String
				? domElement.append(item) && put.append(domElement)
				: (newElement =
						document.createTextNode(item) &&
						domElement.append(newElement)) &&
				  put.append(domElement);
		});
		put.appendChild(domElement);
	} else if (domCreate.get(creationMethod) === 'complexically 1') {
		setAttributes(domElement, attributes);
		items.map(item => {
			(newElement = document.createElement(`${newElement}`)),
				docFrag.appendChild(newElement),
				newElement.appendChild(item),
				domElement.appendChild(docFrag);
		});
	} else if (domCreate.get(creationMethod) === 'complexically 2') {
		setAttributes(domElement, attributes);
		children.map(child => {
			items.forEach(item => {
				(newElement = document.createElement(`${newElement}`)),
					docFrag.appendChild(newElement),
					newElement.appendChild(child),
					newElement.appendChild(item),
					domElement.appendChild(docFrag);
			});
			domElement.append(document.createTextNode(child));
		});
	} else if (domCreate.get(creationMethod) === 'complexically 3') {
		setAttributes(domElement, attributes);
		const ul = document.createElement('ul');
		const li = document.createElement('li');
		const a = document.createElement('a');
		items.map(item => {
			ul.appendChild(li),
				(li.appendChild(a).href = item.innerHTML = `${children}`),
				docFrag.appendChild(li);
		});
		domElement.appendChild(ul);
	} else if (domCreate.get(creationMethod) === 'complexically 4') {
		setAttributes(domElement, attributes);
		put.appendChild(domElement);

		items.map(_item => {
			children.map(_child => {});
		});
		return;
	}
	put.append(domElement);
}

// closure to use with init function
const init = () => {
	let initialized: boolean = false;

	return () => {
		if (initialized) {
			return console.warn(
				'⚠️ init function already called, not initializing'
			);
		}
		initialized = true;
		return console.info('initialized 🚀');
	};
};
const initialize = init();
initialize();

export {
	URL as default,
	setAttributes,
	appendChildren,
	removeChildren,
	renderArray,
	URL_spacex,
	newDomElement
};
