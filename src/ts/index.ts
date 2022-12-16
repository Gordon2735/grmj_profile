'use strict';

async function init(): Promise<void> {
	function setAttributes(element: HTMLElement, attributes: any) {
		for (var key in attributes) {
			element.setAttribute(key, attributes[key]);
		}
	}
	function appendChildren(
		parent: HTMLElement | ShadowRoot | null,
		children: any[]
	): void {
		children.map((child: any) => {
			parent?.appendChild(child);
		});
	}

	async function waitOnDOM(): Promise<void> {
		const profile: boolean = true;
		const head: HTMLHeadElement | null = document.getElementById('head');
		const script: HTMLScriptElement = document.createElement('script');
		const scriptSidePanelShell: HTMLScriptElement =
			document.createElement('script');
		const scriptHistory: HTMLScriptElement =
			document.createElement('script');
		const scriptResume: HTMLScriptElement =
			document.createElement('script');
		const scriptProjects: HTMLScriptElement =
			document.createElement('script');
		const scriptGoals: HTMLScriptElement = document.createElement('script');
		const scriptCodeExamples: HTMLScriptElement =
			document.createElement('script');
		const scriptDropDown: HTMLScriptElement =
			document.createElement('script');
		const scriptFooter: HTMLScriptElement | null =
			document.createElement('script');

		if (profile === true) {
			console.log('HooT™️ Webelistics®️ Rendered Here!!!');

			setAttributes(script, {
				type: 'module',
				content: 'text/javascript',
				src: './src/components/profileHome/profile-shell.js',
				alt: 'Profile Main Shell Script'
			});
			head?.appendChild(script);

			setAttributes(scriptSidePanelShell, {
				type: 'module',
				content: 'text/javascript',
				src: './src/components/sidePanel/side-panel_shell.js',
				alt: 'Side Panel Shell'
			});
			setAttributes(scriptHistory, {
				type: 'module',
				content: 'text/javascript',
				src: './src/components/profileHistory/profile-history_shell.js',
				alt: 'Profile History Shell'
			});
			setAttributes(scriptResume, {
				type: 'module',
				content: 'text/javascript',
				src: './src/components/profileResume/profile-resume_shell.js',
				alt: 'Profile Resume Shell'
			});
			setAttributes(scriptProjects, {
				type: 'module',
				content: 'text/javascript',
				src: './src/components/profileProjects/profile-projects_shell.js',
				alt: 'Profile Projects Shell'
			});
			setAttributes(scriptGoals, {
				type: 'module',
				content: 'text/javascript',
				src: './src/components/profileGoals/profile-goals_shell.js',
				alt: 'Profile Goals Shell'
			});
			setAttributes(scriptCodeExamples, {
				type: 'module',
				content: 'text/javascript',
				src: './src/components/profileCodeExamples/profile-code-examples_shell.js',
				alt: 'Profile Code Examples Shell'
			});
			setAttributes(scriptDropDown, {
				type: 'module',
				content: 'text/javascript',
				src: './src/components/dropDown/drop-down_shell.js',
				alt: 'Drop Down Menu Script'
			});
			setAttributes(scriptFooter, {
				type: 'module',
				content: 'text/javascript',
				src: '/src/components/profileFooter/profile-footer.js',
				alt: 'Profile Footer Element'
			});

			const loadScripts = async (): Promise<void> => {
				appendChildren(head, [
					scriptSidePanelShell,
					scriptHistory,
					scriptResume,
					scriptProjects,
					scriptGoals,
					scriptCodeExamples,
					scriptDropDown,
					scriptFooter
				]);
				return;
			};
			loadScripts();
		} else {
			waitOnDOM();
		}
		return;
	}
	return waitOnDOM();
}
export default init;
