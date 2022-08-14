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

        cy.get('#academicInfo > svg').click({force: true})
        cy.get('.mb-1 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile').click()
        cy.get('.mb-1 > .checkbox-group > :nth-child(2) > .checkbox-wrapper > .checkbox-tile').click()
        cy.get(':nth-child(3) > .checkbox-wrapper > .checkbox-tile').click()
        cy.get(':nth-child(4) > .checkbox-wrapper > .checkbox-tile').click()
        cy.get(':nth-child(5) > .checkbox-wrapper > .checkbox-tile').click()
        cy.get(':nth-child(3) > .checkbox-wrapper > .checkbox-tile').click()
        cy.get('.col-md-12 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
        .click().type('Aga Khan Academy{enter}')
        cy.get('.col-12 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
        .click().type('ICSE{enter}')
        cy.get(':nth-child(1) > .css-b62m3t-container > .css-1s2u09g-control')
        .click().type('CBSE{enter}')

        cy.get('.percent-slider > .time-slider > #scale')
            .invoke("val", 83)
            .trigger("change")
            .click()

        cy.get('.col-md-6.mb-0 > .col-12 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile').click()
        cy.get(':nth-child(6) > .row > :nth-child(1) > .form-control').select('February')
        cy.get(':nth-child(6) > .row > :nth-child(2) > .form-control').select('2019')
        cy.get(':nth-child(7) > .row > :nth-child(1) > .form-control').select('December')
        cy.get(':nth-child(7) > .row > :nth-child(2) > .form-control').select('2019')

        cy.get('.col-md-6.mb-0 > .col-12 > .checkbox-group > :nth-child(2) > .checkbox-wrapper > .checkbox-tile').click()
        cy.get('.btn-div > .btn-blue').click()
        cy.get('#academicInfo > svg').click({force:true})
        cy.get('.btn-close').click()
        cy.get('#academicInfo > svg').click({force:true})
        cy.get('.btn-blank').click()
    })
})