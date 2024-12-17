describe('My First Test', () => {
    it('should successfully log in with valid credentials', () => {
        // Visit the login page
        cy.visit('http://localhost:3000/local_login') 
        // Fill in the username and password fields
        cy.get('input[name="username"]').type('Daniel.Modi@demo_val')
        cy.get("button[type='submit']").click()
  
        cy.request('http://localhost:3000/')
      .should((response) => {
        expect(response.status).to.eq(200)
        // the server sometimes gets an extra comment posted from another machine
        // which gets returned as 1 extra object
        expect(response.body).to.have.property('length')
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
        
    })
  })
})