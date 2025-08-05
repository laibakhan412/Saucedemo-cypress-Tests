import { locators } from '../support/locators';

export class HomePage {
    constructor() {
        this.productsTitle = locators.homePage.productsTitle;
        this.firstProductLink = locators.homePage.firstProductLink;
        this.shoppingCartLink = locators.homePage.shoppingCartLink;
    }

    /* Verifies the products title is visible.*/
    verifyProductsTitle() {
        cy.get(this.productsTitle).should('be.visible').and('contain', 'Products');
    }

    /*Clicks on the first product link in the inventory.*/
    clickFirstProduct() {
        cy.get(this.firstProductLink).click();
    }

    /* Clicks on the shopping cart link.*/
    clickShoppingCart() {
        cy.get(this.shoppingCartLink).click();
    }
}