const setupNodeEvents = require('./cypress/plugins/index');

export default {
  projectId: 'qcxiiw',
  chromeWebSecurity: false,
  env: {
    environment: 'takehome',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
      setupNodeEvents(on, config) {
        // implement node event listeners here
        require('cypress-fail-fast/plugin')(on, config);
      },
    baseUrl: 'https://sure-qa-challenge.vercel.app/',
    specPattern: 'cypress/e2e/3-takehome/**.spec.js',
    testIsolation: false
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotsFolder: 'cypress/screenshots/takehome',
  videosFolder: 'cypress/videos/takehome',

};
