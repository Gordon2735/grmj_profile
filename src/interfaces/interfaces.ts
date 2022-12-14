'use strict';

export default interface profile_sharedStyles {
	global: string;
	home: string;
}

interface profile_sharedHTML {
	shell: string;
	home: string;
	panel: string;
	dropdown: string;
}

interface sidePanel_sharedStyles {
	global: string;
	panel: string;
	home: string;
	dropdown: string;
}

interface sidePanel_sharedHTML {
	shell: string;
	panel: string;
}

interface profileHistory_sharedStyles {
	shell: string;
	history: string;
}

interface profileHistory_sharedHTML {
	history: string;
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
	slide: string;
	footer: string;
	footerMod: string;
}

interface profileProjects_sharedHTML {
	shell: string;
	projects: string;
	slide: string;
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

interface dropDown_sharedHTML {
	shell: string;
	dropdown: string;
	dynadrop: string;
}
interface dropDown_sharedStyles {
	shell: string;
	dropdown: string;
	dynadrop: string;
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
}
interface profileFooter_sharedStyles {
	footer: string;
	footerMod: string;
	jumps: string;
}

interface HistoryObject {
	pageOpen: [string];
	push(state: any): void;
	pop(): void;
}

export {
	profile_sharedHTML,
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
	dropDown_sharedHTML,
	dropDown_sharedStyles,
	profileHdr_sharedStyles,
	profileHdr_sharedHTML,
	profileFooter_sharedHTML,
	profileFooter_sharedStyles,
	HistoryObject
};
