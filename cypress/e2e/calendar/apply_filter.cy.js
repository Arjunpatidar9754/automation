/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

  });

describe('Apply Child Filter', () => {
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
        cy.get('.details > :nth-child(2) > .card > .col-12 > .btn').click({force: true})
        cy.get('.filter-main-drop').children().click({force: true})
        cy.wait(1000)
        cy.get(':nth-child(1) > label').click()
        cy.wait(500)
        cy.get(':nth-child(2) > label').click()
        cy.wait(500)
        cy.get(':nth-child(1) > label').click()
        cy.wait(3000)
        cy.get(':nth-child(6) > .rdp-button_reset > time > .mark > .filter-child-0')
        .should('have.class', 'filter-child-0')
        cy.get(':nth-child(6) > .rdp-button_reset > time > .mark > .filter-child-1')
        .should('have.class', 'filter-child-1')
    })
})
