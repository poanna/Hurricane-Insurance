const setupNodeEvents = require('./cypress/plugins/index');

export default {
  projectId: 'qcxiiw',
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    specPattern: 'cypress/e2e/**/**.spec.js',
    testIsolation: false
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  screenshotsFolder: 'cypress/screenshots/examples',
  videosFolder: 'cypress/videos/examples',
};
