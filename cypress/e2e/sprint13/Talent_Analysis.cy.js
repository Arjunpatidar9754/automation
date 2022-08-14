/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

});

describe('Talent Analysis test', () => {
    it('Wheel slider test', () => {

        cy.visit('/')

        cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
            .type('joonify@mailinator.com')

        cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
            .type('enxCAEIh')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')



        cy.url().should('include', '/child')
        cy.wait(2000)

        // visit report page
        cy.get('.list-unstyled > :nth-child(3) > a > svg').click({ force: true })
        cy.wait(2000)

        //assertion to check page
        cy.url().should('include', '/report')
        cy.get('.col-md-auto > .mb-0').contains('Discover & Identify')

        //assertion for wheel slider
        cy.get('.slide-content > h2').should('have.text','Overall Summary')
        cy.get('#center > .active > .img-fluid').should('be.visible')

        // click on > arrow
        cy.get('.div-control > .col-auto > :nth-child(3) > svg').click({force: true})
        cy.get('.slide-content > h2').should('have.text',`Elizabeth’s Unique Talents`)
        cy.get('#center > .active > .img-fluid').should('be.visible')

        // click on < arrow(back)
        cy.get('.div-control > .col-auto > :nth-child(1) > svg').click({force: true})
        cy.get('.slide-content > h2').should('have.text','Overall Summary')
        cy.get('#center > .active > .img-fluid').should('be.visible')

        // click on > arrow
        cy.get('.div-control > .col-auto > :nth-child(3) > svg').dblclick({force:true})
        cy.get('.slide-content > h2').should('have.text',`Elizabeth’s Personality Traits`)
        cy.get('#center > .active > .img-fluid').should('be.visible')

        // click on > arrow
        cy.get('.div-control > .col-auto > :nth-child(3) > svg').click({force: true})
        cy.get('.slide-content > h2').should('have.text',`Elizabeth’s Interest Areas`)
        cy.get('#center > .active > .img-fluid').should('be.visible')

        // click on > arrow
        cy.get('.div-control > .col-auto > :nth-child(3) > svg').click({force: true})
        cy.get('.slide-content > h2').should('have.text',`Elizabeth’s Learning Needs`)
        cy.get('#center > .active > .img-fluid').should('be.visible')

        // click on > arrow
        cy.get('.div-control > .col-auto > :nth-child(1) > svg').dblclick({force: true})
        cy.get('.slide-content > h2').should('have.text',`Elizabeth’s Personality Traits`)
        cy.get('#center > .active > .img-fluid').should('be.visible')

        //test pi chart visibility
        cy.get('.report > :nth-child(2)').should('be.visible')
        cy.get('canvas').should('be.visible')
    })
    
})