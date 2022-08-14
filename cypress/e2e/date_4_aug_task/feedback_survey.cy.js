/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

  });

describe('Child Free Slots', () => {
    it('Edit Schedule and Add Schedule', () => {

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

        cy.get('.list-unstyled > :nth-child(2) > a > svg').click({force:true})
        cy.wait(1000)
        cy.get('.foot > .btn').click({force:true})
        cy.get('label').click()
        cy.get('.foot > .btn').click({force:true})
        cy.wait(2000)
        cy.get('.col-md-12 > .btn-blue').click({force: true})
        cy.wait(500)
        cy.get(':nth-child(4) > .checkbox-tile > .checkbox-label > .img-fluid').click({force: true})
        cy.get(':nth-child(2) > .checkbox-group > .checkbox > :nth-child(3) > .checkbox-tile').click({force: true})
        cy.get(':nth-child(3) > .checkbox-group > .checkbox > :nth-child(3) > .checkbox-tile').click({force: true})
        cy.get('.form-control').type('what a fantastic platform for cypress')
        cy.get('.btn-div > .btn-blue').click({force: true})
    })
})