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
        // cy.wait(5000)
        // cy.get('#social-presence-card-main > :nth-child(1)')
        cy.get('#social-presence-edit-info > svg').click({force: true})

        cy.get(':nth-child(1) > .form-control')
        .clear()
        .type('https://facebook.com')

        cy.get('.form-main > :nth-child(1) > :nth-child(2) > .form-control')
        .clear()
        .type('https://twitter.com/accountname/123')

        cy.get(':nth-child(3) > .form-control')
        .clear()
        .type('https://instagram.com')

        cy.get(':nth-child(4) > .form-control')
        .clear()
        .type('https://linkedin.com/')

        cy.get(':nth-child(5) > .form-control')
        .clear()
        .type('https://youtube.com/')
        
        cy.get('.add-link').click()

        cy.get('#edits0')
        .clear()
        .type('https://xyz.com')

        // cy.get(':nth-child(1) > .form-control')
        // .clear()

        cy.get(':nth-child(3) > .form-control')
        .clear()

        cy.get(':nth-child(4) > .form-control')
        .clear()

        cy.get(':nth-child(5) > .form-control')
        .clear()

        cy.get(':nth-child(1) > .row > .col-auto.ps-0 > .edit-icon > svg').click()

        cy.get('.btn-div > .btn-blue').click()
        cy.wait(2000)
        cy.get('#social-presence-edit-info > svg').click({force: true})
        cy.get('.btn-blank')
        .should('have.text','Cancel')
        .click({force: true})
        cy.wait(2000)
        cy.get('#social-presence-info-facebbok > .mb-1')
        .should('have.text','Facebook')
        cy.get('#social-presence-card-main > .content > .justify-content-center > :nth-child(2) > .col-12 > .row > .col > .mb-1')
        .should('have.text','Twitter')

    })
})