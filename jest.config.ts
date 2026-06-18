export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/src/tests/**/*.test.ts"],
  collectCoverageFrom: ["src/**/*.ts", "!src/tests/**"],
  coverageThreshold: {
    global: { lines: 70 }
  }
};