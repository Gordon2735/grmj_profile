'use strict';

import { DropDownTemplate } from './drop-down_template.js';
import { dropDown_sharedHTML } from './drop-down_sharedHTML.js';
import RegisterComponent from '../componentTools/components_services.js'; // appendChildren // setAttributes,
// import historyStack from '../../controller/state/profileState.js';

export class DropDown extends DropDownTemplate {
  override noShadow = true;
  // State: any | undefined;
  // historyStack: import('d:/grmj_profile/src/interfaces/interfaces').HistoryObject;
  head: HTMLHeadElement | null;
  dd1: any;
  dd2: any;
  appendChildren(
    _parent: HTMLElement | ShadowRoot | null,
    _attribute: string | object | any
  ): void {}
  setAttributes(_tag: HTMLElement, _attribute: string | object | any): void {}

  constructor(dd1: any, dd2: any) {
    super();

    this.noShadow = true;
    this.dd1 = dd1;
    this.dd2 = dd2;

    const head: HTMLHeadElement | null = document.querySelector('head');
    this.head = head;
  }
  override get template() {
    return /*html*/ `

			${dropDown_sharedHTML.dropdown}
		`;
  }
  override connectedCallback(): void {
    super.connectedCallback();

    console.log(
      `%cDropDown Menu is Rendered :::: HooT™️ Webelistics®️`,
      'color: orange; font-size: 0.7rem;'
    );

    function DropDownMenu(
      this: any,
      o: {
        id: string;
        val: string;
        val2: string;
        data: string[];
        cb: ((newval: any) => void) | ((newval2: any) => void);
      }
    ): any {
      this.options = o;

      // for root to work I'd have to change this "window.getdd"
      (<any>window).getdd = function (elem: {
        closest: (arg0: string) => {
          (): any;
          new (): any;
          parentElement: { (): any; new (): any; id: any };
        };
      }) {
        const id = elem.closest('.dropdown').parentElement.id;
        return (<any>window).dropdowns[id];
      };

      this.init = function (): void {
        this.elem = document.getElementById(this.options.id);

        let val: any;
        switch (window.location.href) {
          case 'http://127.0.0.1:9080/':
            val = this.options.val = 'Home';
            break;
          case 'http://127.0.0.1:9080/cover_letter':
            val = this.options.val = 'Cover Letter';
            break;
          case 'http://127.0.0.1:9080/projects':
            val = this.options.val = 'Projects';
            break;
          case 'http://127.0.0.1:9080/history':
            val = this.options.val = 'History';
            break;
          case 'http://127.0.0.1:9080/resume':
            val = this.options.val = 'Resume';
            break;
          case 'http://127.0.0.1:9080/goals':
            val = this.options.val = 'Goals';
            break;
          case 'http://127.0.0.1:9080/code_examples':
            val = this.options.val = 'Code Examples';
            break;
          case 'http://127.0.0.1:9080/contact':
            val = this.options.val = 'Contact';
            break;
          case 'http://127.0.0.1:9080/library':
            val = this.options.val = 'Library';
          case 'http://127.0.0.1:9080/projects':
            val = this.options.val = 'Projects';
            break;
          case 'http://127.0.0.1:9080/history':
            val = this.options.val = 'History';
            break;
          case 'http://127.0.0.1:9080/resume':
            val = this.options.val = 'Resume';
            break;
          case 'http://127.0.0.1:9080/goals':
            val = this.options.val = 'Goals';
            break;
          case 'http://127.0.0.1:9080/code_examples':
            val = this.options.val = 'Code Examples';
            break;
          case 'http://127.0.0.1:9080/contact':
            val = this.options.val = 'Contact';
            break;
          case 'http://127.0.0.1:9080/library':
            val = this.options.val = 'Library';
            break;
          default:
            val = this.options.val = 'Home';
        }

        let HTML = /*html*/ `
					<div id:="dropdown" class="dropdown">
						<div class="dropdown_value">${val}</div>
						<div class="dropdown_arrow">▾</div>
						<div   class="dropdown_panel">
							<div id:="dd1s"  class="dropdown_items scrollbar"></div>
						</div>
					</div> 				 
                `;

        this.elem.innerHTML = HTML;
        const elem: any = this.elem;

        // { { !--Make parent elem inline - block--; } }
        this.elem.style.display = 'inline-block';

        if (!(<any>window).dropdowns) (<any>window).dropdowns = {};
        (<any>window).dropdowns[this.options.id] = this;

        this.items = elem.querySelector('.dropdown_items') as HTMLDivElement;
        this.arrow = elem.querySelector('.dropdown_arrow') as HTMLDivElement;
        this.value = elem.querySelector('.dropdown_value') as HTMLDivElement;

        const data: any = this.options.data;
        HTML = '';
        data.forEach(function (elem: any) {
          HTML += /*html*/ `
                        <div class="dropdown_item" onmousedown="var self = getdd(this); self.clicked(this)">${elem}</div>
                    `;
        });
        this.items.innerHTML = HTML;

        const self: any = this;

        document.addEventListener('mousedown', function () {
          self.hide();
        });

        this.elem.addEventListener('mousedown', function (event: Event) {
          event.preventDefault();
          event.stopPropagation();
          if (self.inVisible) self.hide();
          else self.show();
        });
      };

      this.clicked = function (elem: { innerHTML: any }) {
        let event: Event | undefined;
        event?.stopPropagation();
        this.hide();

        const _newval: any = elem.innerHTML;
        this.value.innerHTML = _newval;

        if (this.options.cb) this.options.cb(_newval);
      };

      this.show = function (): void {
        // { { !--close all dropdowns--; } }
        for (const dd in (<any>window).dropdowns)
          (<any>window).dropdowns[dd].hide();

        this.inVisible = true;
        this.items.style.transform = 'translate(0px, 0px)';
        this.arrow.style.transform = 'rotate(180deg)';
      };

      this.hide = function (): void {
        if (!this.inVisible) return;

        this.inVisible = false;
        this.items.style.transform = 'translate(0px, -255px)';
        this.arrow.style.transform = 'rotate(0deg)';
      };

      this.init();

      return this;
    }

    this.dd1 = new (DropDownMenu as any)({
      id: 'dd1',
      val: 'Home',
      data: [
        'Home',
        'Cover Letter',
        'Projects',
        'History',
        'Resume',
        'Goals',
        'Code Examples',
        'Contact',
        'Library',
      ],
      cb: function (_newval: any) {
        switch (_newval) {
          case 'Home':
            window.location.href = '/';
            break;
          case 'Cover Letter':
            window.location.href = '/cover_letter';
            break;
          case 'Projects':
            window.location.href = '/projects';
            break;
          case 'History':
            window.location.href = '/history';
            break;
          case 'Resume':
            window.location.href = '/resume';
            break;
          case 'Goals':
            window.location.href = '/goals';
            break;
          case 'Code Examples':
            window.location.href = '/code_examples';
            break;
          case 'Contact':
            window.location.href = '/contact';
            break;
          case 'Library':
            window.location.href = '/library';
            break;
          default:
            window.location.href = '/';
        }
      },
    });
    console.log(window.location.href);

    this.dd2 = new (DropDownMenu as any)({
      id: 'dd2',
      val2: 'Library',
      data: [
        'Web Components',
        'Web Components I',
        'Web Components II',
        'Web Components III',
        'Errors',
        'Research & Development',
        'HooT Web Components',
      ],
      cb: function (_newval2: any) {
        switch (_newval2) {
          case 'Library':
            window.location.href = '/Library';
            break;
          case 'Web Components I':
            window.location.href = '/web_components_1';
            break;
          case 'Web Components II':
            window.location.href = '/web_component_2';
            break;
          case 'Web Components III':
            window.location.href = '/web_components_3';
            break;
          case 'Errors':
            window.location.href = '/errors';
            break;
          case 'Blog':
            window.location.href = '/blog';
            break;
          case 'Research & Development':
            window.location.href = '/r_n_d';
            break;
          case 'HooT Web Components':
            window.location.href = '/hoot';
            break;
          default:
            window.location.href = '/';
        }
      },
    });
  }
  static get observedAttributes() {
    return ['window.location.href'];
  }
  public attributeChangedCallback(
    name: string,
    _oldValue: string,
    _newValue: string
  ) {
    _oldValue !== _newValue
      ? console.info(`old location: ${_oldValue},
				${name} has a new location of: ${_newValue}
				which should be equal to: ${window.location} `)
      : console.info(`old location: ${_oldValue}`);
  }
}
RegisterComponent('drop-down', DropDown);
