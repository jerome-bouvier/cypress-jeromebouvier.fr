describe('go home', function () {

    it('loads homepage', function () {

        cy.visit('https://jeromebouvier.fr/')
        cy.get('.main-logo').should('be.visible')
        cy.get('.search-icon').should('be.visible')
        cy.get('.menu-bar').should('be.visible').click()
        cy.get('nav').should('be.visible')
        cy.get('h1').contains('./Photographies')
        cy.get('.footer-bottom-content').scrollIntoView()
        cy.get('.flaticon-bottom4').click()
    })
})