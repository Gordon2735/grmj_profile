'use strict';

export default interface profile_sharedStyles {
	global: string;
	home: string;
}

interface profile_sharedHTML {
	shell: string;
	home: string;
}

interface sidePanel_sharedStyles {
	global: string;
	panel: string;
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
}

interface profileProjects_sharedHTML {
	shell: string;
	projects: string;
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
	HistoryObject
};
