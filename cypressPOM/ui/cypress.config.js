const { defineConfig } = require("cypress");
const preprocessor = require("cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default
      const browserify = require('@cypress/browserify-preprocessor');
      const options = {
        ...browserify.defaultOptions
      };
      on('file:preprocessor', cucumber(options));
    },
    specPattern: "cypress/integration/bdd-cucumber/**/*.feature",
    execTimeout: 30000,
    requestTimeout: 30000,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    responseTimeout: 30000,
    viewportHeight: 800,
    viewportWidth: 1280,
    projectId: "yhtq6c",
    reporterOptions: {
      reportDir: 'cypress/report',
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      reportPageTitle: 'UI Automation'
    }
  },
});
