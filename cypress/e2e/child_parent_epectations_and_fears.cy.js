/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

  });
describe('Child Profile Page', () => {
    it('Edit Profile', () => {

        cy.visit('/')

        cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
            .type('admin@aarklearnings.com')

        cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
            .type('Hi@aark')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')



        cy.url().should('include', '/child')

        cy.get('#main-parent-expect-main-edit > svg').click({force: true})

        cy.get('#parent-edit-expect-drop > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
        .type('PM{enter}')

        cy.get('#parent-edit-fear-main > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
        .type("Child's Future{enter}")

        cy.get('#parent-edit-concern-drop > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
        .type('Imbalanced life{enter}')

        cy.get('#parent-edit-parent-textarea')
        .clear()
        .type('testing')

        cy.get(':nth-child(2) > #parent-edit-expect-anchor-del > svg').click()
        cy.get('#parent-edit-fear-close-del-2').click()
        cy.get(':nth-child(4) > #parent-edit-concern-anchor-del > #parent-edit-concern-close').click()

        cy.get('.btn-div > .btn-blue').click()

        // cy.get('#main-parent-expect-main-edit > svg').click({force: true})
        // cy.wait(200)
        // cy.get('.btn-close').click()
        // cy.wait(200)

        cy.get('#main-parent-expect-main-edit > svg').click({force: true})
        cy.get('.btn-blank').click()
    })
})