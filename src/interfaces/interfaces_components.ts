// Interface Definitions for Components | Interfaces | TypeScript

// Interface definition for profile-projects web component
interface ProfileProject extends HTMLElement {
    activateShadowDOM: boolean;
    root: ShadowRoot;
    connectedCallback(): void;
    attributeChangedCallback(
        _name: string,
        _oldValue: string,
        _newValue: string
    ): void;
    template: string;
    render(template: string): void;
    dataProjectPage: ProfileProjectsState | null | undefined;
    projectPage: ProfileProjectDataset | string[];
    pageDataset: ProfileProjectDataset | DOMStringMap;
    pageHistory: ProfileProjectDataset | string[];
    pageForwardHistory: ProfileProjectDataset | string[];

    // get observedAttributes(): string[];
    head: HTMLHeadElement | null | undefined;
    state: string | undefined;
    profileProjectComponent: HTMLElement;
    page_0: string;
    page_1: string;
    page_2: string;
    page_3: string;
    page_4: string;

    // Project Application's Listing
    spaceInvaders: string;
    teamWebelisticsBlog: string;
    todoApp: string;
    synth: string;
    dogType: string;

    // Project Application's Grouping Object
    projectGrouping: string[];
    projectUl: HTMLUListElement | null | undefined;
    iFrameViewer: HTMLIFrameElement;
    stateValue: ProfileProjectsState | null | undefined;
    dataValue: ProfileProjectsState | null | undefined;
}

// Interface definition for the "STATE" of profile-projects web component
interface ProfileProjectsState {
    state: string;
}

interface ProfileProjectDataset {
    pageDataset: DOMStringMap;
    pageHistory: Array<string> | string[];
    pageForwardHistory: Array<string> | string[];
    length: number;
    pagesValue: string;
    push: (arg0: string) => void;
    pop: () => string;
}

export {
    ProfileProject as default,
    ProfileProjectsState,
    ProfileProjectDataset
};
