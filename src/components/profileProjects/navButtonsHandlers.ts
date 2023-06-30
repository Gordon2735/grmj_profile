/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import fs from 'fs';
import crypto from 'crypto';

// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x: number, y: number) {
    return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

// Convert polar to Cartesian coordinates
function toCartesian(r: number, theta: number) {
    return [r * Math.cos(theta), r * Math.sin(theta)];
}

const [r, theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4
const [x, y] = toCartesian(r, theta); // [x, y] == [1.0, 1,0]

console.info(
    '%c' +
        r +
        '   ' +
        theta +
        '   ' +
        x +
        '   ' +
        y +
        '   ' +
        '   Hello World!',
    'color:red; font-size:1.05em; font-weight:bold;'
);

// Compute a sha256 hash of the contents of the named file and pass the
// hash (as a string) to the specified error-first callback function.
function sha256(filename: string, callback: any): string | void {
    const input: fs.ReadStream = fs.createReadStream(`${filename}`); // The data stream.
    const hasher: crypto.Hash = crypto.createHash(`sha256`); // For computing the hash.

    input.on('readable', () => {
        // When there is data ready to read
        let chunk: any;
        while ((chunk = input.read())) {
            // Read a chunk, and if non-null,
            hasher.update(chunk); // pass it to the hasher,
        } // and keep looping until not readable
    });
    input.on('end', () => {
        // At the end of the stream,
        const hash = hasher.digest('hex'); // compute the hash,
        callback(null, hash); // and pass it to the callback.
    });
    input.on('error', callback); // On error, call callback
    return;
}

// Here's a simple command-line utility to compute the hash of a file
sha256(process.argv[1], (error: { toString: () => string }, hash: string) => {
    // Pass filename from command line.
    if (error) {
        // If we get an error
        console.error(error.toString()); // print it as an error.
    } else {
        // Otherwise,
        console.log(hash); // print the hash string.
    }
});

// const pagesHistory: string[] = [];

// const navContainer = document.getElementById('projectViewerNav') as HTMLElement;

// const getPageHistory = window.localStorage.getItem('pageHistory')
//     ? JSON.parse(window.localStorage.getItem('pageHistory') as string)
//     : null;

// const hasButtons: boolean = navContainer?.hasChildNodes();

// async function historyModifier(
//     accNewValue: string,
//     assignFunc: (assignValue: string) => Promise<HTMLElement | undefined>,
//     assignValue: string
// ): Promise<void> {
//     try {
//         if (getPageHistory.indexOf('1') === -1 && hasButtons === false) {
//             await assignFunc(assignValue);
//             pageHistory.push(accNewValue);
//         } else if (getPageHistory.indexOf('1') !== -1) {
//             await assignFunc(assignValue);
//             pageHistory.push(accNewValue);
//         } else if (getPageHistory.indexOf('0') === -1 && hasButtons === true) {
//             await assignFunc(assignValue);
//             pageHistory.push(accNewValue);
//         } else if (getPageHistory === null && hasButtons === false) {
//             pageHistory.push(accNewValue),
//                 async () => {
//                     window.localStorage.setItem(
//                         'pageHistory',
//                         JSON.stringify(pageHistory)
//                     );
//                     return await assignFunc(assignValue);
//                 };
//         }
//     } catch (error: unknown) {
//         console.error(
//             `The historyModifier Function had an ERROR:  ${await error}`
//         );
//     }
// }

// export { pageHistory as default, historyModifier };
