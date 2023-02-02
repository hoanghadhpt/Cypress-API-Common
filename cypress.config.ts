import { defineConfig } from "cypress";
let statusCode;
let body;

export default defineConfig({
  e2e: {
    excludeSpecPattern: ["*.page.js", "utils.js", "*.ts"],
    specPattern: "cypress/e2e/**/*cy.{js,ts}",
    setupNodeEvents(on, config) {
      on("task", {
        setStatus: (val) => {
          statusCode = val;
          return statusCode;
        },
        getStatus: () => {
          return statusCode;
        },
        setBody: (val) => {
          body = val;
          return body;
        },
        getBody: () => {
          return body;
        },
      });
    },
    video: false,
    screenshotOnRunFailure: false,
  },
});
