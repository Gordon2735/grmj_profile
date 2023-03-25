'use strict';

import { expect, test } from '@jest/globals';
import { sum } from '../ut_base/ut_sum.js';

test('adds 28 + 8 to equal 36', () => {
    expect(sum(28, 8).toBe(36));
});
