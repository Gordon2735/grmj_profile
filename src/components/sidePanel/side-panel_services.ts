'use strict';

export default class Menu {
	isMenuShown: any;
	document: Document | undefined | null;
	body: HTMLBodyElement | null | undefined;
	show() {
		if (!this.isMenuShown) {
			let c: HTMLElement | null = document.getElementById('container');
			let b3: HTMLElement | null = document.getElementById('big-3');
			let b32 = document.getElementById('big-3');
			let jsym = document.getElementById('js-symbol');
			let jsym2 = document.getElementById('js-symbol');
			let v = document.getElementById('vanilla');
			(c!.style.transform = 'translateX(0px)'),
				(b3!.style.transform = 'rotate(360deg)'),
				(b32!.style.animation = 'FadeIn 2s'),
				(jsym!.style.transform = 'rotate(360deg)'),
				(jsym2!.style.animation = 'FadeIn 2s'),
				(v!.style.animation = 'FadeIn 4s');
		} else {
			let c1 = document.getElementById('container');
			let big3 = document.getElementById('big-3');
			let big32 = document.getElementById('big-3');
			let jsym22 = document.getElementById('js-symbol');
			let jsym223 = document.getElementById('js-symbol');
			let v12 = document.getElementById('vanilla');
			(c1!.style.transform = 'translateX(-210px)'),
				(big3!.style.transform = 'rotate(-360deg)'),
				(big32!.style.animation = 'FadeOut 500ms'),
				(jsym22!.style.transform = 'rotate(-360deg)'),
				(jsym223!.style.animation = 'FadeOut 500ms'),
				(v12!.style.animation = 'FadeOut 1s');
		}
		this.isMenuShown = !this.isMenuShown;
	}

	constructor() {
		this.isMenuShown = false;
		var itemHTML = /*html*/ `
            <div class="item">&#x260e;&nbsp;&nbsp;&nbsp; Item1</div>
            <div class="item">&#x2606;&nbsp;&nbsp;&nbsp; Item2</div>
            <div class="item">&#x2702;&nbsp;&nbsp;&nbsp; Item3</div>
            <img id="big-3" src="./html-js-css_transparent.png" alt="big three languages image" class="big-3">
            <hr id="line" class="line">
            <img id="js-symbol" src="./javascript-transparent.png" alt="big three languages image" class="js-symbol">
            <hr id="line2" class="line2">
            <h3 id="vanilla" class="vanilla">Vanilla is BEST!</h3>
        `;
		let cont12 = document.getElementById('container');
		cont12!.innerHTML = itemHTML;
	}
}
