describe('Demo login', () => {
    it('should successfully log in with valid credentials', () => {
        // Visit the login page
        cy.visit('http://localhost:3000/local_login')
        // cy.visit('https://demo-validation.niqactivate.com/')
        // timeout: 50000
        
        cy.get("button[type='submit']").check
  
        // Fill in the username and password fields
        cy.get('#username').type('Daniel.Modi@demo_val')

        // Click the login button
        cy.get("button[type='submit']").click()
  
        //Role selections
        cy.wait(20000)
        cy.get("div[role='button']").click()                                        
        cy.get("li[aria-label='Admin Role'] div[aria-label='Admin Role']").click()  //admin profile
        cy.get("div[role='button']").click()
        cy.get("div[aria-label='Evgeni Grin']").click()                             //Evgeni grin profile
        cy.get("div[role='button']").click()
        cy.get("div[aria-label='Retailer profile - without data export']").click()  // Retailer profile
        cy.get("div[role='button']").click()
        cy.get("div[aria-label='Gregorian Calendar Profile']").click()              // Gregorian Calendar Profile
        cy.get("div[role='button']").click()
        cy.get("li[aria-label='Admin Role'] div[aria-label='Admin Role']").click()  //Select Admin profile
        cy.xpath("(//button[normalize-space()='Apply'])[1]").click()

// Homepage
            // KPIs length, popus messages
             
        cy.xpath("//span[normalize-space()='Home']").wait(5000)                         // verify landing page
        cy.xpath('//span[text()="Market Share ($)"]').trigger('mouseover').wait(2000)
        cy.xpath("//*[text()='Percentage of sales for the retailer out of the total NIQ Channel, inc all participating Retailers in the market']").wait(3000)   // verify Market Share ($) and check hover
        cy.xpath("//div[text()='Home Page']").click({force: true})
        cy.xpath('//span[text()="Market Share Unit"]').trigger('mouseover').wait(3000)  // verify Market Share ($) and check hover
        cy.xpath("//*[text()='Percentage of unit sales for the retailer out of the total NIQ Channel, inc all participating Retailers in the market']").wait(3000)   // verify Market Share ($) and check hover
        cy.xpath("//div[text()='Home Page']").click({force: true})
        cy.xpath("//div[@class='HomeCardsPanelComp__ChartsWrapperStyle-sc-r1tj2i-3 iZORex']/div").should('have.length',5)  // check length of kpi cards
        

// // Hierarchies 

        cy.xpath("(//div[@class='HomeCardsPanelComp__FiltersWrapperStyle-sc-r1tj2i-2 ljDxkG'])[1]/div").should('have.length',5).wait(5000) //check length of filters
        cy.xpath("(//span[contains(text(),'Category')])[1]").click({force: true}).wait(3000) //verify category
        cy.xpath("(//span[contains(text(),'Brand')])[1]").click({force: true}).wait(3000)   //verify Brand
        cy.xpath("(//span[contains(text(),'GEO')])[1]").click({force: true}).wait(12000)    //verify Geo
        cy.xpath("//p[normalize-space()='BOSTON - NORTH']").contains("BOSTON - NORTH").click().wait(3000)         // select geo filter Boston-North
        cy.xpath("(//h3[normalize-space()='CMxAOC'])[1]").click({force: true}).wait(3000)    //verify Comparative market   
        cy.xpath("(//h3[normalize-space()='CMxAOC'])[2]").click({force: true}).wait(2000)     //Select CMxAOC from list
        cy.xpath("(//h3[normalize-space()='Previous'])[1]").click({force: true})        //Verify compare period
        cy.xpath("//ul[@role='listbox']/li").should('have.length', 2)                              //verify length of compare period filter list
        cy.xpath("//h3[normalize-space()='Year Over Year']").click()                            //Select Year Over Year from list

    
        
    })
  })