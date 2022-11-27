'use strict';

import { HistoryObject } from '../../interfaces/interfaces.js';

let historyStack: HistoryObject = {
	pageOpen: ['/'],
	push(state: any): void {
		this.pageOpen.push(state);
	},
	pop(): void {
		this.pageOpen.pop();
	}
};

export default historyStack;
