/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

});

describe("Free Slot Page Visit", () => {
    it("Free Slot Page Visit", () => {

        cy.visit('/')

        cy.get(':nth-child(1) > .form-control')
            .type('admin@aarklearnings.com')

        cy.get(':nth-child(2) > .form-control')
            .type('Hi@aark')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')


        cy.url().should('include', '/admin/parents')
        cy.wait(2000)
        cy.get('.nav-content').trigger('mouseover')
        cy.wait(500)
        cy.get('[href="/admin/eaLandingPage"]').scrollIntoView()
        cy.wait(500)
        cy.contains('EA Landing Page').click({force:true})
        cy.get('[href="/admin/eaLandingPage"]').click({force:true})
        cy.get('.collapsing > li > a').click({force: true})
        cy.get('.table-responsive > :nth-child(2) > .col-12').should('have.text', 'No data found!')
        cy.get('.col-sm-auto > .btn').click({force:true})
    })
})