/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

console.log(
    `%cGORDON R MULLEN JR of HooT™️ Webelistics®️ Rendered Here!!!`,
    'color: gold; font-size: 1.5rem;'
);

async function init(): Promise<void> {
    function setAttributes(element: HTMLElement, attributes: any) {
        for (const key in attributes) {
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

    async function waitOnDOM(this: any): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        Document;
        try {
            const head: HTMLHeadElement | null =
                document.getElementById('head');
            const script: HTMLScriptElement = document.createElement('script');
            const scriptSidePanelShell: HTMLScriptElement =
                document.createElement('script');
            const scriptHistory: HTMLScriptElement =
                document.createElement('script');
            const scriptResume: HTMLScriptElement =
                document.createElement('script');
            const scriptProjects: HTMLScriptElement =
                document.createElement('script');
            const scriptGoals: HTMLScriptElement =
                document.createElement('script');
            const scriptCodeExamples: HTMLScriptElement =
                document.createElement('script');
            const scriptCoverShell: HTMLScriptElement =
                document.createElement('script');
            const scriptMenuNavbarShell: HTMLScriptElement =
                document.createElement('script');
            const scriptDropDown: HTMLScriptElement =
                document.createElement('script');
            const themeShellScript: HTMLScriptElement =
                document.createElement('script');
            const scriptFooter: HTMLScriptElement | null =
                document.createElement('script');

            // if (head !== null) {
            console.log('HooT™️ Webelistics®️ Rendered Here!!!');

            setAttributes(script, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/profileHome/profile-shell.js',
                alt: 'Profile Main Shell Script'
            });
            head?.appendChild(script);

            setAttributes(scriptSidePanelShell, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/sidePanel/side-panel_shell.js',
                alt: 'Side Panel Shell'
            });
            setAttributes(scriptHistory, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/profileHistory/profile-history_shell.js',
                alt: 'Profile History Shell'
            });
            setAttributes(scriptResume, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/profileResume/profile-resume_shell.js',
                alt: 'Profile Resume Shell'
            });
            setAttributes(scriptProjects, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/profileProjects/profile-projects_shell.js',
                alt: 'Profile Projects Shell'
            });
            setAttributes(scriptGoals, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/profileGoals/profile-goals_shell.js',
                alt: 'Profile Goals Shell'
            });
            setAttributes(scriptCodeExamples, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/profileCodeExamples/profile-code-examples_shell.js',
                alt: 'Profile Code Examples Shell'
            });
            setAttributes(scriptCoverShell, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/profileCover/profile-cover_shell.js',
                alt: 'Profile Cover Shell'
            });
            setAttributes(scriptMenuNavbarShell, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/menuNavbar/menu-navbar_shell.js',
                alt: 'Menu Navbar Shell'
            });
            setAttributes(scriptDropDown, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/dropDown/drop-down_shell.js',
                alt: 'Drop Down Menu Script'
            });
            setAttributes(themeShellScript, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/themeSwitcher/theme-switcher_shell.js',
                alt: 'Theme Shell Script'
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
                    // scriptCodeExamples,
                    scriptCoverShell,
                    scriptMenuNavbarShell,
                    scriptDropDown,
                    themeShellScript,
                    scriptFooter
                ]);
                return;
            };
            await loadScripts();
        } catch (error: unknown) {
            console.log(error);
        }
        return;
    }
    waitOnDOM();
}
document.addEventListener('DOMContentLoaded', init);
