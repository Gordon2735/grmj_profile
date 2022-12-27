/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

function RegisterComponent(
  name: string,
  constructor: CustomElementConstructor,
  extendsElement?: string | undefined
): CustomElementRegistry | void {
  extendsElement !== null
    ? customElements.define(name, constructor, { extends: extendsElement })
    : customElements.define(name, constructor);
  return;
}

function setAttributes(
  tag: HTMLElement,
  attribute: string | object | any
): void {
  Object.keys(attribute).map(function (keys: any): void {
    tag.setAttribute(keys, attribute[keys]);
    return;
  });
}

function appendChildren(
  parent: HTMLElement | ShadowRoot | null,
  children: any[]
): void {
  children.map((child: any) => {
    parent?.appendChild(child);
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

function newSingleTag(
  tag: any,
  attributes: { [x: string]: any },
  ...children: any[]
) {
  const element = document.createElement(tag);
  Object.keys(attributes).map((key) => {
    element.setAttribute(key, attributes[key]);
  });
  children.map((child) => {
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

  Object.keys(attributes).map((key) => {
    element.setAttribute(key, attributes[key]);
  });
  Object.keys(attributes2).map((key) => {
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
  const domMethod = method;

  const element = document.createElement(tag);

  if (tagDom.get(domMethod) === 'type_1') {
    Object.keys(attributes).map((key) => {
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
    Object.keys(attributes).map((key) => {
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
    Object.keys(attributes).map((key) => {
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
        },
      };
    };
    domElement(tag, children, tagId);
  }
  return element;
}

export {
  RegisterComponent as default,
  setAttributes,
  appendChildren,
  removeChildren,
  renderArray,
  newSingleTag,
  newSingleNestedTag,
  newDomTag,
};
