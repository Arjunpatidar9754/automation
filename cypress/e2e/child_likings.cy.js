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

        cy.get('#likesInfo').click({ force: true })

        cy.get('#child-edit-favourite-sports-input-main > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
            .click()
            .type("Chess{enter}")

        cy.get('#child-edit-favourite-food-input-main > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
            .click()
            .type('greek{enter}')

        cy.get('#child-edit-favourite-music > #child-edit-favourite-music-input-main > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
            .click()
            .type('Pop{enter}')

        cy.get('#child-edit-favourite-movie > #child-edit-favourite-music-input-main > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
            .click()
            .type('Jurassic Park{enter}')

        cy.get('#child-edit-favourite-sports-close-2').click()
        cy.get('#child-edit-favourite-food-close-2').click()
        cy.get('#child-edit-favourite-music-close-1').click()
        cy.get('#child-edit-favourite-movie-close-1').click()

        cy.get('.btn-div > .btn-blue')
            .click()

        cy.url().should('include', '/child')
        cy.get('#likesInfo').click({ force: true })
        cy.wait(200)
        cy.get('.btn-blank')
            .click()
    })
})