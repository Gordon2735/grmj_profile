// 'use strict';

// import store from '/state/store/indexState';
// import StartScripts from '/state/components/startScripts';
// import StartComponents from '/state/components/startComponents';

// const headerElement = document.querySelector('webe-header');
// const navElement = document.querySelector('webe-nav');
// const responsiveElement = document.querySelector('webe-responsive');
// const devtoolsElement = document.querySelector('webe-devtools');
// const footerElement = document.querySelector('webe-footer');

// export const currentDOM = async (): Promise<void> => {
// 	if (store.state.checkHead === true) {
// 		const checkHeader = async (): Promise<void> => {
// 			headerElement?.addEventListener('DOMContentLoaded', event => {
// 				event.preventDefault();
// 				const thiz: any = this;

// 				if (event.composedPath().includes(thiz)) {
// 					store.dispatch('headerElement', event);
// 				}
// 			});
// 			await new Promise(
// 				resolve => setTimeout(resolve, 100),
// 				() => {
// 					console.info(
// 						`%c Header Element is loaded`,
// 						'background: #222222; color: #EE82EE'
// 					);
// 				}
// 			);
// 		};
// 		checkHeader();

// 		const checkNav = async (): Promise<void> => {
// 			navElement?.addEventListener('DOMContentLoaded', event => {
// 				event.preventDefault();
// 				const thiz: any = this;

// 				if (event.composedPath().includes(thiz)) {
// 					store.dispatch('navElement', event);
// 				}
// 			});
// 			await new Promise(resolve => setTimeout(resolve, 100));
// 		};
// 		checkNav();

// 		const checkResponsive = async (): Promise<void> => {
// 			responsiveElement?.addEventListener('DOMContentLoaded', event => {
// 				event.preventDefault();
// 				const thiz: any = this;

// 				if (event.composedPath().includes(thiz)) {
// 					store.dispatch('responsiveElement', event);
// 				}
// 			});
// 			await new Promise(resolve => setTimeout(resolve, 100));
// 		};
// 		checkResponsive();

// 		const checkDevtools = async (): Promise<void> => {
// 			devtoolsElement?.addEventListener('DOMContentLoaded', event => {
// 				event.preventDefault();
// 				const thiz: any = this;

// 				if (event.composedPath().includes(thiz)) {
// 					store.dispatch('devtoolsElement', event);
// 				}
// 			});
// 			await new Promise(resolve => setTimeout(resolve, 100));
// 		};
// 		checkDevtools();

// 		const checkFooter = async (): Promise<void> => {
// 			footerElement?.addEventListener('DOMContentLoaded', event => {
// 				event.preventDefault();
// 				const thiz: any = this;

// 				if (event.composedPath().includes(thiz)) {
// 					store.dispatch('footerElement', event);
// 				} else {
// 					console.log(
// 						`store.commit did not work: ${event.composedPath()}`
// 					);
// 				}
// 			});
// 			await new Promise(resolve => setTimeout(resolve, 100));
// 		};
// 		checkFooter();
// 	}
// };
// currentDOM();

// export const checkBody = async (): Promise<void> => {
// 	if (store.state.checkBody === true) {
// 		const domBody = async () => {
// 			document.body.addEventListener('DOMContentLoaded', event => {
// 				event.preventDefault();
// 				const thiz: any = this;

// 				if (event.composedPath().includes(thiz)) {
// 					store.state.checkBody('DOMContentLoaded', event);
// 				} else {
// 					console.log(
// 						`store.commit did not work: ${event.composedPath()}`
// 					);
// 				}
// 			});
// 			await new Promise(
// 				resolve => setTimeout(resolve, 100),
// 				() => {
// 					store.state('DOMContentLoaded', true);
// 				}
// 			);
// 		};
// 		domBody();
// 	} else {
// 		await new Promise(
// 			resolve => setTimeout(resolve, 100),
// 			() => {
// 				if (store.state.checkBody === false)
// 					store.state('DOMContentLoaded', true);
// 			}
// 		);
// 	}
// };
// checkBody();

// const startScriptsInstance = new StartScripts();
// const startComponentsInstance = new StartComponents();

// startScriptsInstance.render();
// startComponentsInstance.render();
