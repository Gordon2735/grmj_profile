'use strict';

//* :::: ||  DOM element factory function called "New Tags"  || :::: *//

class ElementObject {
	[x: string]: any;
	attributes: any;
	children: any;
	constructor(tag: any, attributes: any, children: any) {
		this.tag = tag;
		this.attributes = attributes;
		this.children = children;
	}
	element = document.createElement(this.tag);

	static setAttributes(
		element: { setAttribute: (arg0: string, arg1: any) => void },
		attributes: { [x: string]: any }
	) {
		Object.keys(attributes).map(key => {
			element.setAttribute(key, attributes[key]);
		});
		return element;
	}
}

function newSingleTag(
	tag: any,
	attributes: { [x: string]: any },
	...children: any[]
) {
	const element = document.createElement(tag);
	Object.keys(attributes).map(key => {
		element.setAttribute(key, attributes[key]);
	});
	children.map(child => {
		element.insertAdjacentHTML('afterbegin', child);
	});
	return element;
}

function newSingleNestedTag(
	tag: any,
	tag2: any,
	attributes: { [x: string]: any },
	attributes2: { [x: string]: any },
	children: any[] | null
) {
	const element = document.createElement(tag);
	const element2 = document.createElement(tag2);

	Object.keys(attributes).map(key => {
		element.setAttribute(key, attributes[key]);
	});
	Object.keys(attributes2).map(key => {
		element2.setAttribute(key, attributes2[key]);
	});

	children !== null
		? children.map((child: any) => {
				element2.insertAdjacentHTML('afterbegin', child);
		  })
		: element.appendChild(element2);

	return element;
}

function newDomTag(
	this: any,
	method: any,
	tag: any,
	attributes: { [x: string]: any },
	children: any[],
	...list: any[]
): void {
	const tagDom = new Map();
	tagDom.set('01', 'type_1');
	tagDom.set('02', 'type_2');
	tagDom.set('03', 'type_3');
	tagDom.set('04', 'type_4');
	tagDom.set('05', 'type_5');
	let domMethod = method;

	const element = document.createElement(tag);

	if (tagDom.get(domMethod) === 'type_1') {
		Object.keys(attributes).map(key => {
			element.setAttribute(key, attributes[key]);
			return element;
		});
	}
	if (tagDom.get(domMethod) === 'type_2') {
		children.map((child: any) => {
			element.appendChild(child);
			return element;
		});
	}
	if (tagDom.get(domMethod) === 'type_3') {
		Object.keys(attributes).map(key => {
			element.setAttribute(key, attributes[key]);
		});
		children.map((child: string) => {
			const li = document.createElement('li');
			const a = document.createElement('a');
			child === 'home'
				? a.setAttribute('href', `/`)
				: a.setAttribute('href', `/${child.toLowerCase()}`),
				(li.appendChild(a).innerHTML = child),
				element.appendChild(li);
			return element;
		});
	}

	if (tagDom.get(domMethod) === 'type_5') {
		Object.keys(attributes).map(key => {
			element.setAttribute(key, attributes[key]);
		});
		children.map((child: any) => {
			const li = document.createElement('li');
			li.setAttribute('class', `${list}`),
				li.appendChild(child),
				element.appendChild(li);
		});
		const tagId: any | null = document.querySelector(`#${element.id}`);

		const domElement = (type: any, content: any, tagId: any | null) => {
			const element2 = document.createElement(type);
			element2.innerHTML = content;
			this.document.getElementById(tagId).appendChild(element2);

			return {
				type,
				content,
				updateContent(newContent: any) {
					element.innerHTML = newContent;
				},
				addClass(newClass: any) {
					element.classList.add(newClass);
				},
				getClassName() {
					return element.className;
				}
			};
		};
		domElement(tag, children, tagId);
	}
	return element;
}

export default { ElementObject };
export { newDomTag, newSingleTag, newSingleNestedTag };

// const heading = createElement('h1', 'Hello World', 'app');
// const paragraph = createElement('p', 'This is a paragraph', 'app');

// paragraph.updateContent('This is a new paragraph');

// heading.addClass('large');
// heading.addClass('main');
// console.log(heading.getClassName());
