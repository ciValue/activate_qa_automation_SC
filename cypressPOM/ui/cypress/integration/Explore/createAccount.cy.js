const { commonPage } = require("../support/pages/common.page");
const { createAccountPage } = require("../support/pages/create-account.page");
const { faker } = require('@faker-js/faker');

describe('Create a new account', () => {
    beforeEach(() => {
        cy.visit('/customer/account/create/');
        commonPage.verifyPageTitle('Create New Customer Account');
    })

    afterEach(() => {
        cy.screenshot();
    })

    it('Create new account - valid', () => {
        
        createAccountPage.enterFirstName('Sandeep');
        createAccountPage.enterLastName('Shivnani');
        createAccountPage.enterEmail('ss1111@test.com');
        createAccountPage.enterPassword('Test@123');
        createAccountPage.enterConfirmPassword('Test@123');
        createAccountPage.clickCreateAccountButton();
        cy.contains('Thank you for registering with Main Website Store').should('be.visible');
        commonPage.verifyPageTitle('My Account');
    })
})