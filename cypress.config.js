const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportDir: "cypress/results/s13",
    reportPageTitle: 'Free Slot Report',
    reportFilename: "[status]_[datetime]_[name]-report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    autoOpen: true,
    overwrite: false,
    video: false,
  },
  e2e: {
    chromeWebSecurity: false,
    // baseUrl: "http://52.5.75.246:4000/",
    baseUrl: 'http://52.5.75.246:5000/',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  // e2e: {
  //   chromeWebSecurity: false,
  //   baseUrl: "http://52.5.75.246:4000/",
  //   chromeWebSecurity: false,
  //   defaultCommandTimeout: 10000,
  //   //   reporter: "mochawesome",
  //   //  reporterOptions: {
  //   //     reportDir: "cypress/results",
  //   //     overwrite: false,
  //   //     html: true,
  //   //     json: true,
  //   //  },
  //   reporterEnabled: 'spec, mocha-junit-reporter',
  //   mochaJunitReporterReporterOptions: {
  //     mochaFile: 'cypress/results/results-[hash].xml'
  //   },
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   },
  // },
});
