// Interface Definitions for Components | Interfaces | TypeScript

// Interface definition for profile-projects web component
interface ProfileProject extends HTMLElement {
    activateShadowDOM: boolean;
    root: ShadowRoot;
    projectPage: number | undefined;
    connectedCallback(): void;
    get observedAttributes(): string[];
    attributeChangedCallback(
        _name: string,
        _oldValue: string,
        _newValue: string
    ): void;
    state: string | undefined;
    dataProjectPage: ProfileProjectsState | null | undefined;
    stateValue: ProfileProjectsState | null | undefined;
    dataValue: ProfileProjectsState | null | undefined;
    template: string;
    render(template: string): void;
    // Project Application's Listing
    spaceInvaders: string;
    teamWebelisticsBlog: string;
    todoApp: string;
    // Project Application's Grouping Object
    projectGrouping: HTMLElement[];
}

// Interface definition for the "STATE" of profile-projects web component
interface ProfileProjectsState {
    state: string;
    dataProjectPage: string;
    stateValue: string;
    dataValue: string;
}

export { ProfileProject as default, ProfileProjectsState };
