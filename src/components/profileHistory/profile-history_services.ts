'use strict';

function setAttributes(element: HTMLElement | any, attributes: any[]): void {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

function removeAttributes(element: HTMLElement | any, attributes: any[]): void {
	for (const key in attributes) {
		element.removeAttribute(key);
	}
}

function appendChildren(
	element: HTMLElement | any,
	children: string[] | object[]
): void {
	children.map((child: any) => {
		element.appendChild(child);
	});
}

function newDomTag(
	method: any,
	tag: any,
	attributes: { [x: string]: any },
	children: any[] | null | undefined,
	...list: any[] | null[]
): any {
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
		children?.map((child: any) => {
			element.appendChild(child);
			return element;
		});
	}
	if (tagDom.get(domMethod) === 'type_3') {
		Object.keys(attributes).map(key => {
			element.setAttribute(key, attributes[key]);
		});
		children?.map((child: string) => {
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
		children?.map((child: any) => {
			const li = document.createElement('li');
			li.setAttribute('class', `${list}`),
				li.appendChild(child),
				element.appendChild(li);
		});
		const tagId: any | null = document.querySelector(`#${element.id}`);
		const domElement: any | void = (
			type: string,
			content: any,
			tagId: any | null
		) => {
			const element2 = document.createElement(type);
			element2.innerHTML = content;
			let tags: any | null = document.getElementById(tagId);
			tags.appendChild(element2);

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
		return domElement(tag, children, tagId);
	}
}

export {
	removeAttributes as default,
	setAttributes,
	appendChildren,
	newDomTag
};
