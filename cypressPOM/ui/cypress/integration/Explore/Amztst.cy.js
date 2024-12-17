describe('Amz', () => {
    it('should successfully log in with valid credentials', () => {
        // Visit the login page
        cy.visit('https://amazon.ca')
        cy.xpath("//span[@id='glow-ingress-line2']").contains("Select your address")
        
        
    })
  })