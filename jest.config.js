module.exports = {
  setupFilesAfterEnv: ["./tests/setup.js"],
  // setupFiles: ["jest-localstorage-mock"],
  verbose: true,
  moduleFileExtensions: ["js", "json", "vue"],
  watchman: false,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^~~/(.*)$": "<rootDir>/src/pages/$1",
    "^store/(.*)$": "<rootDir>/src/store/$1",
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    ".*\\.(vue)$": "@vue/vue3-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/fileTransformer.js",
  },
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.vue",
    "<rootDir>/src/pages/**/*.vue",
    "<rootDir>/src/layouts/**/*.vue",
    "<rootDir>/src/store/**/*.js",
  ],
};
