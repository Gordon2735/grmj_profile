interface profile_sharedHTML {
    shell: string;
    home: string;
    dropdown: string;
}
interface profile_sharedStyles {
    global: string;
    home: string;
    dropdown: string;
}
interface sidePanel_sharedStyles {
    global: string;
    panel: string;
    landing: string;
    home: string;
    letter: string;
    about: string;
    projects: string;
    history: string;
    resume: string;
    codeEx: string;
    goals: string;
    contact: string;
    spacex: string;
    library: string;
}
interface sidePanel_sharedHTML {
    shell: string;
    panel: string;
    landing: string;
    home: string;
    letter: string;
    about: string;
    projects: string;
    history: string;
    resume: string;
    codeEx: string;
    goals: string;
    contact: string;
    spacex: string;
    library: string;
    chatbox: string;
}

interface profileHistory_sharedStyles {
    shell: string;
    history: string;
    page_sweeper: string;
    footer: string;
}

interface profileHistory_sharedHTML {
    shell: string;
    history: string;
    page_sweeper: string;
    footer: string;
}

interface profileResume_sharedStyles {
    shell: string;
    resume: string;
}

interface profileResume_sharedHTML {
    shell: string;
    resume: string;
}

interface profileProjects_sharedStyles {
    shell: string;
    projects: string;
    footer: string;
    footerMod: string;
}

interface profileProjects_sharedHTML {
    shell: string;
    projects: string;
    footerWC: string;
    footer: string;
}
interface profileGoals_sharedStyles {
    shell: string;
    goals: string;
    slide: string;
}

interface profileGoals_sharedHTML {
    shell: string;
    goals: string;
    slide: string;
}

interface profileCodeEx_sharedStyles {
    shell: string;
    codeEx: string;
    slide: string;
}

interface profileCodeEx_sharedHTML {
    shell: string;
    codeEx: string;
    slide: string;
}

interface profileCover_sharedStyles {
    shell: string;
    cover: string;
    transition: string;
    slide: string;
    dropdown: string;
}

interface profileCover_sharedHTML {
    shell: string;
    cover: string;
    transition: string;
    slide: string;
}

interface menuNavbar_sharedHTML {
    shell: string;
    navbar: string;
    navHamBtn: string;
}

interface menuNavbar_sharedStyles {
    shell: string;
    navbar: string;
    navHamBtn: string;
}
interface dropDown_sharedHTML {
    shell: string;
    dropdown: string;
    dynadrop: string;
}
interface dropDown_sharedStyles {
    shell: string;
    dropdown: string;
    dynadrop: string;
    home: string;
    letter: string;
    about: string;
    landing: string;
    chatbox: string;
    projects: string;
    history: string;
    resume: string;
    codeEx: string;
    goals: string;
    contact: string;
    spacex: string;
    library: string;
}

interface themeSwitcher_sharedHTML {
    shell: string;
    switcher: string;
    switcherBtn: string;
}

interface themeSwitcher_sharedStyles {
    shell: string;
    switcher: string;
    switcherBtn: string;
    landing: string;
    home: string;
    letter: string;
    about: string;
    projects: string;
    history: string;
    resume: string;
    codeEx: string;
    goals: string;
    contact: string;
    spacex: string;
    library: string;
}

interface checkSwitch_sharedHTML {
    shell: string;
    switcher: string;
}

interface checkSwitch_sharedStyles {
    shell: string;
    switcher: string;
    home: string;
}

interface spacexPage_sharedHTML {
    shell: string;
    spacex: string;
    spacexData: string;
}

interface spacexPage_sharedStyles {
    shell: string;
    spacex: string;
    spacexData: string;
}

interface timeObject_sharedHTML {
    shell: string;
    time: string;
}

interface timeObject_sharedStyles {
    shell: string;
    time: string;
}

interface profileBlog_sharedHTML {
    shell: string;
    blog: string;
}

interface profileBlog_sharedStyles {
    shell: string;
    blog: string;
}

interface chatBox_sharedHTML {
    shell: string;
    chatBox: string;
    openai: string;
    footer: string;
}

interface chatBox_sharedStyles {
    shell: string;
    chatBox: string;
    openai: string;
    footer: string;
}

interface CompleteCreateParamsStream {
    role: string;
    content: string;
}

interface landingPage_sharedHTML {
    shell: string;
    page: string;
}

interface landingPage_sharedStyles {
    shell: string;
    page: string;
}
interface profileHdr_sharedHTML {
    shell: string;
    hdr: string;
    slide: string;
}
interface profileHdr_sharedStyles {
    shell: string;
    hdr: string;
    slide: string;
}

interface profileFooter_sharedHTML {
    footer: string;
    jumps: string;
    pageHREF: string;
}
interface profileFooter_sharedStyles {
    footer: string;
    footerMod: string;
    jumps: string;
    pageHREF: string;
    landing: string;
    home: string;
    letter: string;
    projects: string;
    blog: string;
    contact: string;
    about: string;
    resume: string;
    goals: string;
    history: string;
    codeEx: string;
}

interface HistoryObject {
    pageOpen: [string];
    push(state: unknown): void;
    pop(): void;
}

export {
    profile_sharedHTML as default,
    profile_sharedStyles,
    sidePanel_sharedStyles,
    sidePanel_sharedHTML,
    profileHistory_sharedStyles,
    profileHistory_sharedHTML,
    profileResume_sharedStyles,
    profileResume_sharedHTML,
    profileProjects_sharedStyles,
    profileProjects_sharedHTML,
    profileGoals_sharedHTML,
    profileGoals_sharedStyles,
    profileCodeEx_sharedHTML,
    profileCodeEx_sharedStyles,
    profileCover_sharedHTML,
    profileCover_sharedStyles,
    menuNavbar_sharedHTML,
    menuNavbar_sharedStyles,
    dropDown_sharedHTML,
    dropDown_sharedStyles,
    themeSwitcher_sharedHTML,
    themeSwitcher_sharedStyles,
    checkSwitch_sharedHTML,
    checkSwitch_sharedStyles,
    spacexPage_sharedHTML,
    spacexPage_sharedStyles,
    timeObject_sharedHTML,
    timeObject_sharedStyles,
    profileBlog_sharedHTML,
    profileBlog_sharedStyles,
    chatBox_sharedHTML,
    chatBox_sharedStyles,
    CompleteCreateParamsStream,
    landingPage_sharedHTML,
    landingPage_sharedStyles,
    profileHdr_sharedStyles,
    profileHdr_sharedHTML,
    profileFooter_sharedHTML,
    profileFooter_sharedStyles,
    HistoryObject
};
