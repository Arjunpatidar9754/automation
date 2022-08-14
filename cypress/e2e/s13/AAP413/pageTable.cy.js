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
        cy.get('.show > :nth-child(3) > a').should('have.text','Free Slot Management')
        cy.get('.show > :nth-child(3) > a').click({force: true})
        cy.wait(2000)
        for(let i =1; i < 14; i++){
            cy.get(`tbody > :nth-child(${i}) > :nth-child(2)`).should('not.be.NaN')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(2)`).should('be.visible')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(3)`).should('not.be.NaN')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(3)`).should('not.have.text', '')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(4)`).should('not.have.text','0')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(4)`).should('not.be.NaN')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(4)`).should('not.have.text', '')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(4)`).should('be.visible')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(6)`).should('not.have.text','0')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(6)`).should('not.be.NaN')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(6)`).should('not.have.text', '')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(6)`).should('be.visible')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(5)`).should('be.visible')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(7)`).should('be.visible')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(8)`).should('be.visible')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(9)`).should('be.visible')
            cy.get(`tbody > :nth-child(${i}) > :nth-child(10)`).should('be.visible')
            cy.get(`:nth-child(${i}) > .text-end > .btn`).should('be.visible')
            cy.get(`:nth-child(${i}) > .text-end > .btn`).should('have.text','View/Schedule')

        }
    })
})