/**
 * @type {import('ts-jest/dist/types').JestConfigWithTsJest} 
 * To configure ESM support, see: https://kulshekhar.github.io/ts-jest/docs/guides/esm-support
 * 
 **/
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  }
  // setupFiles: ['<rootDir>/__tests__/setup.ts'],
};








// /** @type {import('ts-jest').JestConfigWithTsJest} */


// const config = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
// };

// export default config;