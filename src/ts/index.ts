/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

console.log(
  `%cGORDON R MULLEN JR of HooT™️ Webelistics®️ Rendered Here!!!`,
  'color: #ff0000; font-size: 5rem;'
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
    // this.Document = new Document();
    const documents: Document | null = new Document();
    try {
      const head: HTMLHeadElement | null = documents.getElementById('head');
      const script: HTMLScriptElement = documents.createElement('script');
      const scriptSidePanelShell: HTMLScriptElement =
        documents.createElement('script');
      const scriptHistory: HTMLScriptElement =
        documents.createElement('script');
      const scriptResume: HTMLScriptElement = documents.createElement('script');
      const scriptProjects: HTMLScriptElement =
        documents.createElement('script');
      const scriptGoals: HTMLScriptElement = documents.createElement('script');
      const scriptCodeExamples: HTMLScriptElement =
        documents.createElement('script');
      const scriptDropDown: HTMLScriptElement =
        documents.createElement('script');
      const scriptFooter: HTMLScriptElement | null =
        documents.createElement('script');

      // if (head !== null) {
      console.log('HooT™️ Webelistics®️ Rendered Here!!!');

      setAttributes(script, {
        type: 'module',
        content: 'text/javascript',
        src: '/src/components/profileHome/profile-shell.ts',
        alt: 'Profile Main Shell Script',
      });
      head?.appendChild(script);

      setAttributes(scriptSidePanelShell, {
        type: 'module',
        content: 'text/javascript',
        src: '/components/sidePanel/side-panel_shell.ts',
        alt: 'Side Panel Shell',
      });
      setAttributes(scriptHistory, {
        type: 'module',
        content: 'text/javascript',
        src: '/components/profileHistory/profile-history_shell.ts',
        alt: 'Profile History Shell',
      });
      setAttributes(scriptResume, {
        type: 'module',
        content: 'text/javascript',
        src: '/components/profileResume/profile-resume_shell.ts',
        alt: 'Profile Resume Shell',
      });
      setAttributes(scriptProjects, {
        type: 'module',
        content: 'text/javascript',
        src: '/components/profileProjects/profile-projects_shell.ts',
        alt: 'Profile Projects Shell',
      });
      setAttributes(scriptGoals, {
        type: 'module',
        content: 'text/javascript',
        src: '/components/profileGoals/profile-goals_shell.ts',
        alt: 'Profile Goals Shell',
      });
      setAttributes(scriptCodeExamples, {
        type: 'module',
        content: 'text/javascript',
        src: '/components/profileCodeExamples/profile-code-examples_shell.ts',
        alt: 'Profile Code Examples Shell',
      });
      setAttributes(scriptDropDown, {
        type: 'module',
        content: 'text/javascript',
        src: '/components/dropDown/drop-down_shell.ts',
        alt: 'Drop Down Menu Script',
      });
      setAttributes(scriptFooter, {
        type: 'module',
        content: 'text/javascript',
        src: '/components/profileFooter/profile-footer.ts',
        alt: 'Profile Footer Element',
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
          scriptFooter,
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
