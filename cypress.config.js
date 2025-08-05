// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//     e2e: {
//         setupNodeEvents(on, config) {
//             // implement node event listeners here
//         },
//         baseUrl: 'https://www.saucedemo.com', // Set the base URL for your tests
//         specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Define where your test files are located
//     },
// });

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.saucedemo.com', // Set the base URL for your tests
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Define where your test files are located
  },
});