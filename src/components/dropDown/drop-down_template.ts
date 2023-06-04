/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'used strict';

export class DropDownTemplate extends HTMLElement {
    activateShadowDOM = false;
    root: ShadowRoot | null = this.shadowRoot;
    locationHREF: string | URL | undefined;
    checkLocation: string | undefined;
    styleSheetMod: string | null | undefined;
    landingHREF: string | undefined;
    homeStartHREF: string | undefined;
    coverLetterHREF: string | undefined;
    projectsHREF: string | undefined;
    aboutHREF: string | undefined;
    historyHREF: string | undefined;
    resumeHREF: string | undefined;
    codeExHREF: string | undefined;
    goalsHREF: string | undefined;
    contactHREF: string | undefined;
    spacexHREF: string | undefined;
    libraryHREF: string | undefined;
    dropShell: HTMLElement | undefined;

    public get template(): string {
        return this.template;
    }
    public set template(value: string) {
        this.template = value;
    }

    connectedCallback(): void {
        if (this.activateShadowDOM === true)
            this.attachShadow({ mode: 'open' });
        this.render(this.template);
    }
    render(template: string): void {
        if (this.activateShadowDOM === false) {
            this.innerHTML = template || this.template;
            return;
        } else {
            this.shadowRoot!.innerHTML = template || this.template;
            return;
        }
    }
    public dropDownStyleMod(
        locationHREF: string | undefined,
        checkLocation: string | undefined,
        landingHREF: string | undefined,
        homeStartHREF: string | undefined,
        coverLetterHREF: string | undefined,
        aboutHREF: string | undefined,
        projectsHREF: string | undefined,
        historyHREF: string | undefined,
        resumeHREF: string | undefined,
        codeExHREF: string | undefined,
        goalsHREF: string | undefined,
        contactHREF: string | undefined,
        spacexHREF: string | undefined,
        libraryHREF: string | undefined
    ): any {
        this.locationHREF = locationHREF;
        this.locationHREF = window.location.href;
        this.checkLocation = checkLocation;
        this.landingHREF = landingHREF;
        this.homeStartHREF = homeStartHREF;
        this.coverLetterHREF = coverLetterHREF;
        this.aboutHREF = aboutHREF;
        this.projectsHREF = projectsHREF;
        this.historyHREF = historyHREF;
        this.resumeHREF = resumeHREF;
        this.codeExHREF = codeExHREF;
        this.goalsHREF = goalsHREF;
        this.contactHREF = contactHREF;
        this.spacexHREF = spacexHREF;
        this.libraryHREF = libraryHREF;

        const dropShell = document.querySelector(
            '.drop-down-shell'
        ) as HTMLElement;
        this.dropShell = dropShell;

        try {
            switch (this.locationHREF) {
                case 'http://127.0.0.1:9080/landing':
                    this.dropShell!.innerHTML = `<style>${this.landingHREF}</style>`;
                    console.log(
                        `%cUsing landingHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/home':
                    this.dropShell!.innerHTML = `<style>${this.homeStartHREF}</style>`;
                    console.log(
                        `%cUsing homeHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/cover_letter':
                    this.dropShell!.innerHTML = `<style>${this.coverLetterHREF}</style>`;
                    console.log(
                        `%cUsing coverLetterHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/about':
                    this.dropShell!.innerHTML = `<style>${this.aboutHREF}</style>`;
                    console.log(
                        `%cUsing aboutHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/projects':
                    this.dropShell!.innerHTML = `<style>${this.projectsHREF}</style>`;
                    console.log(
                        `%cUsing projectsHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/history':
                    this.dropShell!.innerHTML = `<style>${this.historyHREF}</style>`;
                    console.log(
                        `%cUsing historyHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/resume':
                    this.dropShell!.innerHTML = `<style>${this.resumeHREF}</style>`;
                    console.log(
                        `%cUsing resumeHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/code_examples':
                    this.dropShell!.innerHTML = `<style>${this.codeExHREF}</style>`;
                    console.log(
                        `%cUsing codeExHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/goals':
                    this.dropShell!.innerHTML = `<style>${this.goalsHREF}</style>`;
                    console.log(
                        `%cUsing goalsHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/contact':
                    this.dropShell!.innerHTML = `<style>${this.contactHREF}</style>`;
                    console.log(
                        `%cUsing contactHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/spacex':
                    this.dropShell!.innerHTML = `<style>${this.spacexHREF}</style>`;
                    console.log(
                        `%cUsing spacexHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                case 'http://127.0.0.1:9080/library':
                    this.dropShell!.innerHTML = `<style>${this.libraryHREF}</style>`;
                    console.log(
                        `%cUsing libraryHREF for Dropdown Menu Styles`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
                default:
                    this.dropShell!.innerHTML = `<style>${this.homeStartHREF}</style>`;
                    console.log(
                        `%cUsing homeHREF for Dropdown Menu Styles FROM DEFAULT in SWITCH STATEMENT`,
                        'color: orange; font-size: 1.5rem;'
                    );
                    break;
            }
        } catch (error: unknown) {
            console.log(
                `%cThere has been an error choosing the Drop Down Style
            within the shell ternary statement: Error Code-- || ${error}
            `,
                'color: chartreuse; font-size: 0.4rem;'
            );
        }

        this.dropShell.insertAdjacentHTML(
            'afterbegin',
            `<drop-down id="dropDown" class="drop-down" operations="startup" data-dd1_2="hiding">
                    </drop-down>`
        );
        return;
    }
}
