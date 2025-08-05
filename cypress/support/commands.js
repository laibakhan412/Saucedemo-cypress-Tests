// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { LoginPage } from '../pages/LoginPage';

// Custom command for logging into the application
Cypress.Commands.add('login', (username, password) => {
    const loginPage = new LoginPage();
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLoginButton();
});

// Custom command for verifying the current URL
Cypress.Commands.add('verifyUrl', (path) => {
    cy.url().should('include', path);
});