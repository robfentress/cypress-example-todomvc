// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your other test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/guides/configuration#section-global
// ***********************************************************

// Import commands.js and defaults.js
// using ES2015 syntax:
// import "./commands"
// import "./defaults"

// Alternatively you can use CommonJS syntax:
require('./commands')
require('cypress-axe')
// Import the axe-watcher commands.
require('@axe-core/watcher/dist/cypressCommands')

// Flush axe-watcher results after each test.
afterEach(() => {
  cy.axeFlush()
})
