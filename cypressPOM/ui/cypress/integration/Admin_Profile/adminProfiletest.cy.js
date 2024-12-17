import Login from "../../PageObjects/LoginPage"

describe('Demo login POM', () => {
    it('should successfully test all features', () => {
        // Visit the login page
        
        cy.fixture('demoLogindata').then((data)=>{
            cy.visit(data.local)
            const ln=new Login();
            ln.setUserName(data.username)
            ln.clickSubmit();
            ln.verifyLogin();                   // Verify login
            

        })
        

    })
})