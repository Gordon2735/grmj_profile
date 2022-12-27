/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import { HistoryObject } from '../../interfaces/interfaces.js';

const historyStack: HistoryObject = {
  pageOpen: ['/'],
  push(state: any): void {
    this.pageOpen.push(state);
  },
  pop(): void {
    this.pageOpen.pop();
  },
};

export default historyStack;
