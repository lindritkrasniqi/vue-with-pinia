module.exports = {
  setupFilesAfterEnv: ["./tests/setup.js"],
  // setupFiles: ["jest-localstorage-mock"],
  verbose: true,
  moduleFileExtensions: ["js", "json", "vue"],
  watchman: false,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^~~/(.*)$": "<rootDir>/$1",
    // "^vue$": "vue/dist/vue.common.js",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
  },
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.vue",
    "<rootDir>/src/pages/**/*.vue",
    "<rootDir>/src/layouts/**/*.vue",
    "<rootDir>/src/store/**/*.js",
  ],
};
