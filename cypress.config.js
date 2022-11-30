const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'bihkbh',
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  reporter: 'cypress-mochawesome-reporter',
  env:{
    url: 'https://www.actabl.com/' ,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/examples/*.js'
  },
})
