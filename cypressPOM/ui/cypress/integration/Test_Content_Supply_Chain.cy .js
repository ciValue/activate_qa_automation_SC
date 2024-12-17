import login from "../PageObjects/LoginPage"
import supplyChain from "../PageObjects/supplyChain_Page"

describe('Validate Supply Chain Page', () => {
    it('should successfully test all features', () => {
        // Visit the login page

        cy.fixture('demoLogindata').then((data) => {
            cy.visit(data.local)
            const sc = new supplyChain();
            const supplyChainReports = ["Retail Media Measurement", "E-Performance", "Supply Chain Performance"];
            const supplyChainListViewReportObjects = ["Name", "Description", "Last updated", "Retail Media Measurement",
                "E-Performance", "Supply Chain Performance"];
            const scReportMessages = ["Measure the ROAS of retail media campaigns by using closed loop methodology",
                "Assess your digital campaigns performance and impact on products sales and traffic generation",
                "Identify what is driving sales results at the category, store, and brand level"];

            sc.localLogin(data.username)
            console.log("test")
            sc.openSupplyChain(3);
            supplyChainListViewReportObjects.forEach(scReport => {
                cy.xpath(`//*[text()="${scReport}"]`)
                    .should('be.visible').scrollIntoView()
                    .then(($element) => {
                        cy.log(`${scReport} is displayed`);
                    });
            });
            cy.xpath("(//*[@data-testid='GridViewRoundedIcon'])").should('be.visible').click()
            cy.wait(2000)
            supplyChainReports.forEach(scReport => {
                cy.xpath(`//*[text()="${scReport}"]`)
                    .should('be.visible').scrollIntoView()
                    .then(($element) => {
                        cy.log(`${scReport} is displayed`);
                    });
            });
            scReportMessages.forEach(scReport => {
                cy.xpath(`//*[text()="${scReport}"]`)
                    .should('be.visible').scrollIntoView()
                    .then(($element) => {
                        cy.log(`${scReport} is displayed`);
                    });
            });
            sc.validateSupplyChainReport("Supply Chain Performance")
            sc.localLogout()
        })


    })
})