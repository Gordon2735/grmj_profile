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
	HistoryObject
};
