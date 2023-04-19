'use strict';

import { v4 as uuidv4, v4 } from 'uuid';

const uuidV4: string | undefined = uuidv4();
const V4 = (): string | undefined => v4();

// V4();
console.log(V4());

export { uuidV4 as default, V4 };
