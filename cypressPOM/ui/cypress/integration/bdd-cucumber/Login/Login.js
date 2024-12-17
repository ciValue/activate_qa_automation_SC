import supplyChain from "../../../PageObjects/supplyChain_Page"
import { When, Then } from "cypress-cucumber-preprocessor/steps";

const sc = new supplyChain();

Given('I navigate to automation exercise website', () => {
cy.visit('https://automationexercise.com/');
})

When('I enter incorrect login credentials', () => {
    cy.wait(3000)
cy.xpath('//a[@href="/login"]').click();
cy.contains('Login to your account').should('be.visible');
cy.xpath('//input[@data-qa="login-email"]').type('example1@test.com');
cy.xpath('//input[@name="password"]').type('foobar');
cy.xpath('//button[@data-qa="login-button"]').click();
})
Then('I should not be logged in', () => {
cy.contains( 'Your email or password is incorrect!' ).should('be.visible');
})

Given('I navigate to supply chain application', () => {

    cy.fixture('demoLogindata').then((data) => {
    cy.visit(data.local);
    })

    })
    
When('I enter  login credentials', () => {
    cy.fixture('demoLogindata').then((data) => {
    const sc = new supplyChain();

    sc.localLogin(data.username)
     
    })
    })
Then('I should  be logged in', () => {
    const sc = new supplyChain();

    sc.verifyHomePage()
    })


 When(/^I login with  (.*?)$/, (profile) => {
        cy.fixture('demoLogindata').then((data) => {
        const sc = new supplyChain();
        cy.log(" trying to login with profile : "+profile)
        sc.localLogin(data.username,profile)
         
        })
    })

 Given (/^Should be able to run on "(.*?)"$/, (devicename) => {
            cy.log(devicename);
    });

Given('the application is open', () => {
            
            cy.fixture('demoLogindata').then((data) => {
                cy.visit(data.local);
                const sc = new supplyChain();
                sc.localLogin(data.username)
                sc.verifyHomePage()
                })
            
        });   

  