import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { locators } from '../support/locators';

describe('Sauce Demo Login and Product Navigation', () => {
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const productPage = new ProductPage();

    beforeEach(() => {
        // Navigate to the Sauce Demo URL before each test
        cy.visit('/'); // Base URL is configured in cypress.config.js
    });
pageYOffset
    it('should display an error message for wrong login credentials', () => {
        // Attempt a wrong login using a custom command
        cy.login('wrong_user', 'wrong_password');

        // Verify the error message using its locator
        cy.get(locators.loginPage.errorMessage).should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it('should successfully login and land on the home page', () => {
        // Login with valid credentials using a custom command
        cy.login('standard_user', 'secret_sauce');

        // Verify the user is landed on the home page by checking the URL and a specific element
        cy.verifyUrl('/inventory.html');
        cy.get(locators.homePage.productsTitle).should('be.visible').and('contain', 'Products');
    });

    it('should navigate to a product page after clicking on a product', () => {
        // First, successfully login to access the home page
        cy.login('standard_user', 'secret_sauce');
        cy.verifyUrl('/inventory.html');

        // Click on the first product link
        cy.get(locators.homePage.firstProductLink).click();

        // Verify that the browser lands on the product page
        cy.verifyUrl('/inventory-item.html?id='); // Partial URL check as ID changes
        cy.get(locators.productPage.backToProductsButton).should('be.visible').and('contain', 'Back to products');
        cy.get(locators.productPage.productName).should('be.visible'); // Check if product name is visible
    });
});