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
        cy.wait(8000)

        // cy.get('.col-12.mx-0 > .col-12 > .btn').click({force: true})
        cy.get('.edit-icon > svg').click({force: true})
        cy.get('.card-xs > [type="button"] > .col-12').click({force: true})
        cy.wait(500)
        cy.get(':nth-child(2) > .row.align-items-center > .ps-1 > .edit-icon > svg').click()
        cy.get(':nth-child(2) > .row.align-items-center > .col-md > .col-md-12').type('Everyday{enter}')
        // cy.get('.css-ackcql').click({force: true}).type('Everyday{enter}')

        cy.get('#name1').click({force: true})
        cy.get('#hour1').clear().click().type("03")
        cy.get('#minute1').clear().click().type("33")
        cy.get(':nth-child(2) > .row.align-items-center > .col > .time-field > :nth-child(3) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile')
        .click()
        // cy.get('.head > svg').click()
        cy.get(':nth-child(2) > .row.align-items-center > .col > .time-field > :nth-child(3) > .cus-picker > .head > svg')
        .click()
        cy.get('.btn-div > .btn-blue').click()


    })
})