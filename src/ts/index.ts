'use strict';

async function init(): Promise<void> {
	console.log('HooT™️ Webelistics®️ Rendered Here!!!');
	console.log('HooT™️ NOW!!!');
	function setAttributes(element: HTMLElement, attributes: any) {
		for (var key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
	}

	async function waitOnDOM(): Promise<void> {
		const profile = true;
		let window: any = globalThis;
		let document: Document = window.document;
		let head: HTMLHeadElement | null = document.getElementById('head');
		if (profile === true) {
			console.log('HooT™️ Webelistics®️ Rendered Here!!!');
			// console.log(document.readyState);
			const script: HTMLScriptElement = document.createElement('script');
			setAttributes(script, {
				type: 'module',
				content: 'text/javascript',
				src: '/src/components/profileHome/profile-shell.js'
			});
			head?.append(script);

			const script2: HTMLScriptElement = document.createElement('script');
			setAttributes(script2, {
				type: 'module',
				content: 'text/javascript',
				src: '/src/components/sidePanel/side-panel_shell.js'
			});
			head?.append(script2);

			const script3: HTMLScriptElement = document.createElement('script');
			setAttributes(script3, {
				type: 'module',
				content: 'text/javascript',
				src: '/src/components/profileHistory/profile-history.js'
			});
			head?.append(script3);
		} else {
			waitOnDOM();
		}
		return;
	}
	return waitOnDOM();
}
export default init;
