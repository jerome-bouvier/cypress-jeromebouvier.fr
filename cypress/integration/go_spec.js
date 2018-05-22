describe('go home', function () {

    it('loads homepage', function () {

        cy.visit('https://jeromebouvier.fr/')
        cy.get('.main-logo').should('be.visible')
    })
})