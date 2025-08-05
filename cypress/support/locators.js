export const locators = {
    loginPage: {
        usernameField: '#user-name',
        passwordField: '#password',
        loginButton: '#login-button',
        errorMessage: '[data-test="error"]',
    },
    homePage: {
        productsTitle: '.title', // The "Products" title on the inventory page
        firstProductLink: '#item_4_title_link', // Link for "Sauce Labs Backpack"
        shoppingCartLink: '.shopping_cart_link',
    },
    productPage: {
        backToProductsButton: '#back-to-products',
        productName: '.inventory_details_name', // Name of the product on its detail page
        addToCartButton: '.btn_primary.btn_inventory',
    },
};
