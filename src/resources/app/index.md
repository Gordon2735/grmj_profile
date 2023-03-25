/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

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
        try {
            const head: HTMLHeadElement | null =
                document.getElementById('head');
            const scriptIndex: HTMLScriptElement =
                document.createElement('script');
            const scriptSidePanelShell: HTMLScriptElement =
                document.createElement('script');
            const scriptMenuNavbarShell: HTMLScriptElement =
                document.createElement('script');
            const scriptDropDown: HTMLScriptElement =
                document.createElement('script');
            const themeShellScript: HTMLScriptElement =
                document.createElement('script');
            const scriptCheckSwitch: HTMLScriptElement =
                document.createElement('script');
            const scriptFooter: HTMLScriptElement | null =
                document.createElement('script');
            console.log('HooT™️ Webelistics®️ Rendered Here!!!');
            setAttributes(scriptIndex, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/profileHome/profile-shell.js',
                alt: 'Profile Main Shell Script'
            });
            head?.appendChild(scriptIndex);
            setAttributes(scriptSidePanelShell, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/sidePanel/side-panel_shell.js',
                alt: 'Side Panel Shell'
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
            setAttributes(scriptCheckSwitch, {
                type: 'module',
                content: 'text/javascript',
                src: '/src/components/checkSwitch/check-switch_shell.js',
                alt: 'Check Switch Shell Script'
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
                    scriptMenuNavbarShell,
                    scriptDropDown,
                    scriptCheckSwitch,
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
