/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,


  coverageDirectory: "coverage",

  // setupFilesAfterEnv: ["@testing-library/jest-dom"],
  testEnvironment: "jsdom",
};
