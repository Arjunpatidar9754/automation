/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

  });

describe('Calendar Window Filter', () => {
    it('Edit Schedule and Add Schedule', () => {

        cy.visit('/')

        cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
            .type('admin@aarklearnings.com')

        cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
            .type('Hi@aark')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')



        cy.url().should('include', '/child')
        cy.wait(2000)
        cy.get(':nth-child(3) > .link > svg').click({force:true})
        cy.url().should('include', '/calendar')
        cy.wait(10000)

        cy.get('.form-control').select(0,{force: true})
        cy.get('.form-control').should('contain.text', "Day view")
        cy.wait(500)
        cy.get('.form-control').select(0,{force: true})
        cy.get('.form-control').should('contain.text', "Week view")
        cy.wait(500)
        cy.get('.form-control').select(0,{force: true})
        cy.get('.form-control').should('contain.text', "Month view")
    })
})