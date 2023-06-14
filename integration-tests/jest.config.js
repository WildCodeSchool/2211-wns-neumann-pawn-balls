/** @type { import(ts-jest/dist/types).InitialOptionsTsJest} */
module.exports ={
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 15 * 1000,
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts']
}