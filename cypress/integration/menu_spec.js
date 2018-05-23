describe('menu', function () {

    it('opens nav menu', function () {

        cy.visit('/')
        cy.get('.menu-bar').should('be.visible').click()
        cy.get('nav').should('be.visible')

    })

    it('checks 1st nav', function(){
        cy.get('.menu-item-home > a > span').contains('PHOTOGRAPHIES').click()
        cy.get('h1').contains('./Photographies')
    })

    it('checks 2nd nav', function(){
        cy.get('.menu-bar').should('be.visible').click()
        cy.get('.menu-item-4048 > a > span').contains('BLOG').click()
        cy.get('.page-heading--title').contains('Blog')
    })

    it('checks 3rd nav', function(){
        cy.get('.menu-bar').should('be.visible').click()
        cy.get('.menu-item-4049 > a > span').contains('CONTACT').click()
        cy.get('.vc_single_image-img').should('be.visible')
    })

    it('checks search panel', function(){
        cy.get('.menu-bar').should('be.visible').click()
        cy.get('.search-icon').click()
        cy.get('.search-field > input').should('be.visible').type('supercalifragilisticexpialidocious{enter}')
        cy.url().should('include', '/?s=supercalifragilisticexpialidocious')
        cy.get('h1').contains('0 résultats pour “')
        cy.get('.main-logo').click()
    })
    
})