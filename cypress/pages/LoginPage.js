import { locators } from '../support/locators';

export class LoginPage {
    constructor() {
        this.usernameField = locators.loginPage.usernameField;
        this.passwordField = locators.loginPage.passwordField;
        this.loginButton = locators.loginPage.loginButton;
        this.errorMessage = locators.loginPage.errorMessage;
    }

    /**
     * Enters username into the username field.
     * @param {string} username - The username to enter.
     */
    enterUsername(username) {
        cy.get(this.usernameField).type(username);
    }

    /**
     * Enters password into the password field.
     * @param {string} password - The password to enter.
     */
    enterPassword(password) {
        cy.get(this.passwordField).type(password);
    }

    /*Clicks the login button.*/
    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    /**
     * Performs a login action with given credentials.
     * @param {string} username - The username to use.
     * @param {string} password - The password to use.
     */
    login(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    /**
     * Verifies the error message is visible and contains expected text.
     * @param {string} message - The expected error message text.
     */
    verifyErrorMessage(message) {
        cy.get(this.errorMessage).should('be.visible').and('contain', message);
    }
}