'use strict';

const template = document.createElement('template');

const RenderComponent = `

<nav class="navbar">
    <div class="brand-title"></div>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            </a>
        <div class="navbar-links">
            <ul>
                <li><a href="/">HOOT Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/app_packages">Applications</a></li>
                <li><a href="/hoot_2022">Development 2022</a></li>
                <li><a href="/helps">Help</a></li>
                <li><a href="/contacts">Contact Us</a></li>
            </ul>
    </div>
</nav>
`;

class WebeNav extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
		const style = document.createElement('style');
		style.textContent = '@import "../components/webe-nav/webe-nav.css";';
		this.shadowRoot.appendChild(style);
	}
	connectedCallback() {
		console.info(
			'%c This Web Component has || * FIRED * || webe-nav.js is now connected',
			'background: #222222; color: #7FFF00'
		);
		template.innerHTML = RenderComponent;
		this.shadowRoot.appendChild(template.content.cloneNode(true));

		const webeNav = document.querySelector('webe-nav').shadowRoot;
		const clickToggle = webeNav.querySelector('.toggle-button');
		const clickNavbarLinks = webeNav.querySelector('.navbar-links');
		clickToggle.addEventListener('click', () => {
			clickNavbarLinks.classList.toggle('active');
		});
	}

	disconnectedCallback() {}
}

window.customElements.define('webe-nav', WebeNav);
