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
        cy.wait(2000)
        cy.get('#family_main_card > :nth-child(1) > .col-auto > .d-flex > .edit-icon > svg')
        .click({force: true})
        cy.get('#G2_fam_label > .checkbox-tile').click()
        cy.get('#hb-1_label > .checkbox-tile').click()
        cy.get('#G1_fam_label > .checkbox-tile').click()
        cy.get('#hb-2_label > .checkbox-tile').click()
        cy.get('#sb-0_label_1 > .checkbox-tile').click()
        cy.get('#sb-0_label_2 > .checkbox-tile').click()
        cy.get(':nth-child(2) > .col-12 > .form-control').select(1)
        cy.get('#sb-0_label_4 > .checkbox-tile').click()
        cy.get(':nth-child(2) > .col-12 > .form-control').select(3)
        cy.get('#FP_info').select(0)
        cy.get('#MF_info').select(0)
        cy.get('#FP_info').select(1)
        cy.get('#MF_info').select(1)
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').select(0)
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').select(0)
        cy.get(':nth-child(3) > :nth-child(2) > .form-control').select(1)
        cy.get(':nth-child(4) > :nth-child(2) > .form-control').select(1)
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').clear().type('testing')
        cy.get(':nth-child(4) > :nth-child(3) > .form-control').clear().type('testing')
        cy.get(':nth-child(3) > :nth-child(4) > .form-control').clear().type('0000.00')
        cy.get(':nth-child(4) > :nth-child(4) > .form-control').clear().type('0000.00')
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').clear()
        cy.get(':nth-child(4) > :nth-child(3) > .form-control').clear()
        cy.get(':nth-child(3) > :nth-child(4) > .form-control').clear()
        cy.get(':nth-child(4) > :nth-child(4) > .form-control').clear()
        cy.get('.btn-div > .btn-blue').click()
        cy.wait(200)
        cy.get('#family_main_card > :nth-child(1) > .col-auto > .d-flex > .edit-icon > svg')
        .click({force: true})
        cy.get('.btn-blank')
        cy.wait(200)
        cy.get('#family_main_card > :nth-child(1) > .col-auto > .d-flex > .edit-icon > svg')
        .click({force: true})
        cy.get('.btn-close')
    })
})