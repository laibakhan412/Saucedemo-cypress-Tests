import { locators } from '../support/locators';

export class ProductPage {
    constructor() {
        this.backToProductsButton = locators.productPage.backToProductsButton;
        this.productName = locators.productPage.productName;
        this.addToCartButton = locators.productPage.addToCartButton;
    }

    /*Clicks the "Back to products" button.*/
    clickBackToProducts() {
        cy.get(this.backToProductsButton).click();
    }

    /*Verifies the product name is visible.*/
    verifyProductNameVisible() {
        cy.get(this.productName).should('be.visible');
    }

    /* Clicks the "Add to cart" button for the current product.*/
    clickAddToCart() {
        cy.get(this.addToCartButton).click();
    }
}
