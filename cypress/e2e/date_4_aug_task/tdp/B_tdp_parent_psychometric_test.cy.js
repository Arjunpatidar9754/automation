/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

});

describe("Parent's Psychometric Test", () => {
    it("Parent's Psychometric Test", () => {

        cy.visit('/')

        cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
            .type('john@mailinator.com')

        cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
            .type('AkmUZDCH')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')



        cy.url().should('include', '/child')
        cy.wait(2000)

        cy.get('.list-unstyled > :nth-child(3) > a > svg').click({ force: true })
        cy.wait(1000)

        // checking status of parent test
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('not.have.text', 'Not Started')
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'In Progress')

        //status of start/continue button
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
            .should('not.have.text', 'Start now')
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
            .should('have.text', 'Continue')

        //continue or start test
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
            .click({ force: true })
        cy.wait(2000)

        for (let i = 0; i < 21; i++) {
            cy.wait(3000)
            cy.get(':nth-child(2) > input')
                .click({ force: true })
            cy.wait(2000)
            cy.get('.foot > .btn')
                .should('have.text', 'Save')
                .click({ force: true })
            cy.wait(5000)
            cy.get('.foot > .btn')
                .should('have.text', 'Confirm')
                .click({ force: true })
            cy.wait(2000)
        }
        cy.wait(7000)
        cy.get('.show-coin > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')

        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
            .should('not.be.visible')

        cy.get('.show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '150')
        cy.get('.show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')
    })
})