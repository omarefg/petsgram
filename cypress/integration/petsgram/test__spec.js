describe('Petsgram', () => {
    it('Should work', () => {
        cy.visit('/')
    })

    it('Should let the user navigate to a category and see the photos', () => {
        cy.visit('/pet/1')
        cy.get('article')
    })

    it('Should let the user navigate with the navbar to home', () => {
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('include', '/')
    })

    it('Should lead non registered users from /favs and /user to /login', () => {
        cy.visit('/favs')
        cy.get('form').should('have.length', 2)
        cy.url().should('include', '/login')
    })
})
