'use strict';

import { expect, jest, test } from '@jest/globals';
import sum from '../ut_base/ut_sum';

// const jest: jest;
console.log(jest);

test('adds 28 + 8 to equal 36', () => {
    expect(sum(28, 8).toBe(36));
});
