describe('My First Test', () => {
    it('should successfully log in with valid credentials', () => {
        // Visit the login page
        cy.visit('http://localhost:3000/local_login')
        // cy.visit('https://demo-validation.niqactivate.com/')
        
        cy.title().should('eq','Log in | Demo Portal')
  
        // Fill in the username and password fields
        cy.get('input[name="username"]').type('Daniel.Modi@demo_val')
        cy.get('input[name="password"]').type('Welcome2NielsenIQ!')
  
        // Click the login button
        // cy.get("[class='c6d5cc3be']").click()
        
    })
  })